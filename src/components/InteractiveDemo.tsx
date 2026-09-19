"use client";

import React, { useState, useEffect } from "react";

interface Scenario {
  id: number;
  name: string;
  category: "online" | "proximity" | "offline" | "attack";
  connectivity: "C3 (Online)" | "C2 (Degraded)" | "C1 (Proximity)" | "C0 (Offline)";
  transport: "Internet" | "NFC" | "BLE" | "QR" | "SMS";
  amount: string;
  counter: number;
  description: string;
  steps: {
    stage: string;
    actor: "Payer" | "Transport" | "Merchant" | "Reconciler";
    status: "ok" | "warn" | "fail" | "pending";
    detail: string;
    state: string;
  }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    name: "Scenario 1: Full Connectivity",
    category: "online",
    connectivity: "C3 (Online)",
    transport: "Internet",
    amount: "₹150.00 (15,000 paise)",
    counter: 12,
    description: "Ideal online submission path through high-bandwidth internet.",
    steps: [
      {
        stage: "Payment Initiation",
        actor: "Payer",
        status: "ok",
        detail: "Payer authorizes ₹150.00. Device increments monotonic counter to 12.",
        state: "INITIATED",
      },
      {
        stage: "Canonical Envelope Signing",
        actor: "Payer",
        status: "ok",
        detail: "Deterministic CBOR envelope serialized (106 bytes). Ed25519 signature generated.",
        state: "SIGNED",
      },
      {
        stage: "Direct Transport Transfer",
        actor: "Transport",
        status: "ok",
        detail: "Transmitted directly via TLS/HTTPS to backend gateway.",
        state: "TRANSFERRED",
      },
      {
        stage: "Reconciliation & Settlement",
        actor: "Reconciler",
        status: "ok",
        detail: "Signature verified against registered public key. Counter 12 marked as active.",
        state: "RECONCILED",
      },
    ],
  },
  {
    id: 2,
    name: "Scenario 2: Offline NFC Tap",
    category: "proximity",
    connectivity: "C1 (Proximity)",
    transport: "NFC",
    amount: "₹45.00 (4,500 paise)",
    counter: 13,
    description: "Internet is unavailable. Devices exchange transaction envelope via Near-Field Communication.",
    steps: [
      {
        stage: "Offline Tap Initiated",
        actor: "Payer",
        status: "ok",
        detail: "No cell tower/Wi-Fi detected (C1). Payer taps against merchant NFC terminal.",
        state: "INITIATED",
      },
      {
        stage: "Hardware-Wrapped Signing",
        actor: "Payer",
        status: "ok",
        detail: "Hardware KeyManager decrypts transient seed, signs canonical CBOR, zeroizes seed.",
        state: "SIGNED",
      },
      {
        stage: "ISO-DEP Frame Exchange",
        actor: "Transport",
        status: "ok",
        detail: "106-byte CBOR envelope + 64-byte signature exchanged across NFC inductive link.",
        state: "TRANSFERRED",
      },
      {
        stage: "Local Merchant Verification",
        actor: "Merchant",
        status: "ok",
        detail: "Terminal verifies Ed25519 signature locally using cached offline credential.",
        state: "LOCALLY_VERIFIED",
      },
      {
        stage: "Local Storage Queued",
        actor: "Merchant",
        status: "pending",
        detail: "Merchant records transaction in local secure SQLite ledger; queued for future sync.",
        state: "SYNC_PENDING",
      },
    ],
  },
  {
    id: 3,
    name: "Scenario 3: Offline BLE Proximity",
    category: "proximity",
    connectivity: "C1 (Proximity)",
    transport: "BLE",
    amount: "₹210.00 (21,000 paise)",
    counter: 14,
    description: "NFC unavailable or out of range. Transaction transferred via Bluetooth Low Energy GATT.",
    steps: [
      {
        stage: "BLE Discovery",
        actor: "Payer",
        status: "ok",
        detail: "Merchant device advertises ResilientPay GATT Service UUID. Devices pair securely.",
        state: "INITIATED",
      },
      {
        stage: "Transaction Signing",
        actor: "Payer",
        status: "ok",
        detail: "Envelope signed locally with Ed25519; budget validated against offline ceiling.",
        state: "SIGNED",
      },
      {
        stage: "GATT Characteristic Transfer",
        actor: "Transport",
        status: "ok",
        detail: "Signed envelope chunked across BLE MTU (244 bytes) to merchant characteristic.",
        state: "TRANSFERRED",
      },
      {
        stage: "Merchant Verification & Queue",
        actor: "Merchant",
        status: "ok",
        detail: "Payload reassembled and signature verified. Accepted conditionally pending cloud sync.",
        state: "LOCALLY_VERIFIED",
      },
    ],
  },
  {
    id: 4,
    name: "Scenario 4: Offline Optical QR",
    category: "proximity",
    connectivity: "C1 (Proximity)",
    transport: "QR",
    amount: "₹80.00 (8,000 paise)",
    counter: 15,
    description: "Zero radio connectivity. Transaction encoded as high-density dynamic QR code and scanned.",
    steps: [
      {
        stage: "Optical Presentation",
        actor: "Payer",
        status: "ok",
        detail: "Payer screen renders compact QR code containing binary CBOR envelope + signature.",
        state: "INITIATED",
      },
      {
        stage: "Camera Capture & Decode",
        actor: "Merchant",
        status: "ok",
        detail: "Merchant terminal camera scans and parses binary payload without network.",
        state: "TRANSFERRED",
      },
      {
        stage: "Cryptographic Validation",
        actor: "Merchant",
        status: "ok",
        detail: "Merchant Dalek FFI engine verifies Ed25519 signature and offline counter validity.",
        state: "LOCALLY_VERIFIED",
      },
      {
        stage: "Offline Receipt",
        actor: "Merchant",
        status: "pending",
        detail: "Payment accepted offline. Merchant provides goods with cryptographic receipt.",
        state: "SYNC_PENDING",
      },
    ],
  },
  {
    id: 5,
    name: "Scenario 5: Complete Disconnection (C0)",
    category: "offline",
    connectivity: "C0 (Offline)",
    transport: "NFC",
    amount: "₹120.00 (12,000 paise)",
    counter: 16,
    description: "Both parties are completely isolated from internet. Transaction preserved in local ledgers.",
    steps: [
      {
        stage: "Air-Gapped Exchange",
        actor: "Payer",
        status: "ok",
        detail: "Payment exchanged locally in deep basement/rural region with 0 cellular signal.",
        state: "LOCALLY_VERIFIED",
      },
      {
        stage: "Local Storage Ingestion",
        actor: "Merchant",
        status: "warn",
        detail: "Ledger transaction saved locally. Offline retry worker configured with exponential backoff.",
        state: "SYNC_PENDING",
      },
      {
        stage: "Connection Health Check",
        actor: "Transport",
        status: "fail",
        detail: "Heartbeat ping to gateway fails. State remains strictly SYNC_PENDING without data loss.",
        state: "SYNC_PENDING",
      },
    ],
  },
  {
    id: 6,
    name: "Scenario 6: Connectivity Restoration",
    category: "offline",
    connectivity: "C3 (Online)",
    transport: "Internet",
    amount: "₹120.00 (12,000 paise)",
    counter: 16,
    description: "Merchant device reconnects to Wi-Fi. Offline queue automatically drains to backend reconciler.",
    steps: [
      {
        stage: "Network Transition Event",
        actor: "Merchant",
        status: "ok",
        detail: "Android ConnectivityManager signals NET_CAPABILITY_INTERNET available.",
        state: "SYNC_PENDING",
      },
      {
        stage: "Batch Reconciliation Dispatch",
        actor: "Merchant",
        status: "ok",
        detail: "Local queue drains accumulated envelopes to /v1/reconcile HTTP endpoint.",
        state: "TRANSFERRED",
      },
      {
        stage: "8-Step Ingestion Flow",
        actor: "Reconciler",
        status: "ok",
        detail: "Server verifies signatures, validates monotonically advancing counter 16, checks budget.",
        state: "RECONCILED",
      },
      {
        stage: "Final Settlement",
        actor: "Reconciler",
        status: "ok",
        detail: "Batch settlement worker moves state from RECONCILED to SETTLED terminal state.",
        state: "SETTLED",
      },
    ],
  },
  {
    id: 7,
    name: "Scenario 7: Replay Attack Defense",
    category: "attack",
    connectivity: "C3 (Online)",
    transport: "Internet",
    amount: "₹150.00 (15,000 paise)",
    counter: 12,
    description: "Malicious adversary intercepts and replays counter #12 with different transaction ID.",
    steps: [
      {
        stage: "Adversary Interception",
        actor: "Transport",
        status: "warn",
        detail: "Attacker intercepts counter #12 envelope and attempts duplicate submission.",
        state: "INITIATED",
      },
      {
        stage: "Server Ingestion Check",
        actor: "Reconciler",
        status: "ok",
        detail: "Database queries existing transactions for (credential_id, counter=12).",
        state: "TRANSFERRED",
      },
      {
        stage: "Duplicate Counter Conflict",
        actor: "Reconciler",
        status: "fail",
        detail: "Counter 12 was already reconciled for different tx_id. Double-spend detected!",
        state: "CONFLICT",
      },
      {
        stage: "Adversarial Isolation",
        actor: "Reconciler",
        status: "ok",
        detail: "Transaction marked as CONFLICT; credential flagged for forensic security review.",
        state: "CONFLICT",
      },
    ],
  },
  {
    id: 8,
    name: "Scenario 8: Tampered Amount Defense",
    category: "attack",
    connectivity: "C1 (Proximity)",
    transport: "NFC",
    amount: "₹99,999.00 (Tampered)",
    counter: 17,
    description: "Adversary alters the payload amount byte in transit after cryptographic envelope signing.",
    steps: [
      {
        stage: "Envelope Signing",
        actor: "Payer",
        status: "ok",
        detail: "Legitimate payer signed ₹50.00 (5,000 paise).",
        state: "SIGNED",
      },
      {
        stage: "Man-in-the-Middle Alteration",
        actor: "Transport",
        status: "warn",
        detail: "Malicious intermediary alters CBOR index 5 (amount) to 9,999,900 paise.",
        state: "TRANSFERRED",
      },
      {
        stage: "Signature Verification",
        actor: "Merchant",
        status: "fail",
        detail: "RFC 8032 Ed25519 verification fails immediately. Signature does not match hash.",
        state: "REJECTED",
      },
      {
        stage: "Immediate Terminal Abort",
        actor: "Merchant",
        status: "ok",
        detail: "Transaction rejected locally with ValidationError. Zero state corrupted.",
        state: "REJECTED",
      },
    ],
  },
];

export default function InteractiveDemo() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const scenario = SCENARIOS.find((s) => s.id === selectedId) || SCENARIOS[0];

  const handleSelectScenario = (id: number) => {
    setSelectedId(id);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentStepIndex((prev) => {
        if (prev < scenario.steps.length - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return prev;
        }
      });
    }, 1400);

    return () => clearTimeout(timer);
  }, [isPlaying, scenario.steps.length]);

  const activeStep = scenario.steps[currentStepIndex];

  return (
    <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6 lg:p-8 font-mono text-[#202522]">
      {/* Simulation Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#A8AAA3] gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#146B68] bg-[#146B68]/10 px-2 py-1">
            Research Simulation Engine
          </span>
          <h3 className="text-xl font-bold font-sans mt-2 text-[#202522]">
            Deterministic Protocol Lifecycle Simulator
          </h3>
        </div>
        <div className="text-xs text-[#5E6763]">
          Vectors: <span className="text-[#202522] font-semibold">RFC 8032 / CBOR v1</span> · Seed:{" "}
          <span className="text-[#202522] font-semibold">42</span>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {SCENARIOS.map((sc) => {
          const isSelected = sc.id === selectedId;
          const badgeColor =
            sc.category === "online"
              ? "bg-[#146B68] text-[#F1EEE7]"
              : sc.category === "proximity"
              ? "bg-[#385C71] text-[#F1EEE7]"
              : sc.category === "offline"
              ? "bg-[#C75A24] text-[#F1EEE7]"
              : "bg-[#A53B32] text-[#F1EEE7]";

          return (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(sc.id)}
              className={`px-3 py-2 text-xs font-medium border text-left transition-colors flex items-center gap-2 ${
                isSelected
                  ? "bg-[#202522] text-[#F1EEE7] border-[#202522]"
                  : "bg-[#F1EEE7] text-[#202522] border-[#A8AAA3] hover:border-[#202522]"
              }`}
            >
              <span className={`text-[10px] px-1.5 py-0.5 font-bold ${badgeColor}`}>
                {sc.id}
              </span>
              <span className="font-sans font-medium">{sc.name.split(":")[1]}</span>
            </button>
          );
        })}
      </div>

      {/* Scenario Metadata Bar */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F1EEE7] border border-[#A8AAA3] text-xs">
        <div>
          <span className="text-[#5E6763] uppercase block text-[10px]">Connectivity</span>
          <span className="font-bold text-[#202522]">{scenario.connectivity}</span>
        </div>
        <div>
          <span className="text-[#5E6763] uppercase block text-[10px]">Transport</span>
          <span className="font-bold text-[#146B68]">{scenario.transport}</span>
        </div>
        <div>
          <span className="text-[#5E6763] uppercase block text-[10px]">Amount / Counter</span>
          <span className="font-bold text-[#202522]">
            {scenario.amount} (Ctr: #{scenario.counter})
          </span>
        </div>
        <div>
          <span className="text-[#5E6763] uppercase block text-[10px]">Terminal State</span>
          <span
            className={`font-bold ${
              scenario.steps[scenario.steps.length - 1].status === "fail"
                ? "text-[#A53B32]"
                : "text-[#146B68]"
            }`}
          >
            {scenario.steps[scenario.steps.length - 1].state}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm font-sans text-[#5E6763] leading-relaxed">
        {scenario.description}
      </p>

      {/* Interactive Step Visualizer */}
      <div className="mt-8 border border-[#A8AAA3] bg-[#F1EEE7] p-6">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#A8AAA3]/50">
          <div className="text-xs uppercase tracking-wider text-[#5E6763] font-bold">
            Execution Pipeline: Step {currentStepIndex + 1} of {scenario.steps.length}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentStepIndex === 0}
              className="px-3 py-1 text-xs border border-[#A8AAA3] bg-[#E4E0D7] disabled:opacity-40 hover:bg-[#202522] hover:text-[#F1EEE7] transition-colors"
            >
              Prev
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1 text-xs border border-[#A8AAA3] bg-[#146B68] text-[#F1EEE7] hover:bg-[#146B68]/90 transition-colors font-bold"
            >
              {isPlaying ? "Pause" : "Play Run"}
            </button>
            <button
              onClick={() =>
                setCurrentStepIndex((prev) => Math.min(scenario.steps.length - 1, prev + 1))
              }
              disabled={currentStepIndex === scenario.steps.length - 1}
              className="px-3 py-1 text-xs border border-[#A8AAA3] bg-[#E4E0D7] disabled:opacity-40 hover:bg-[#202522] hover:text-[#F1EEE7] transition-colors"
            >
              Next
            </button>
            <button
              onClick={() => {
                setCurrentStepIndex(0);
                setIsPlaying(false);
              }}
              className="px-2 py-1 text-xs text-[#5E6763] hover:text-[#202522]"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Pipeline Step Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {scenario.steps.map((st, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isPassed = idx < currentStepIndex;
            return (
              <div
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStepIndex(idx);
                }}
                className={`cursor-pointer border p-2 text-xs transition-all ${
                  isCurrent
                    ? "border-[#202522] bg-[#202522] text-[#F1EEE7]"
                    : isPassed
                    ? "border-[#146B68] bg-[#146B68]/10 text-[#202522]"
                    : "border-[#A8AAA3] bg-transparent text-[#5E6763] opacity-60"
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider">
                  {idx + 1}. {st.actor}
                </div>
                <div className="font-sans font-medium truncate mt-1">{st.stage}</div>
              </div>
            );
          })}
        </div>

        {/* Current Step Audit Box */}
        <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 block ${
                  activeStep.status === "ok"
                    ? "bg-[#146B68]"
                    : activeStep.status === "warn"
                    ? "bg-[#C75A24]"
                    : activeStep.status === "fail"
                    ? "bg-[#A53B32]"
                    : "bg-[#385C71]"
                }`}
              />
              <span className="font-bold text-sm text-[#202522] uppercase tracking-wide">
                {activeStep.stage} ({activeStep.actor})
              </span>
            </div>
            <span
              className={`text-xs px-2 py-0.5 font-bold uppercase ${
                activeStep.status === "ok"
                  ? "bg-[#146B68]/15 text-[#146B68]"
                  : activeStep.status === "fail"
                  ? "bg-[#A53B32]/15 text-[#A53B32]"
                  : "bg-[#C75A24]/15 text-[#C75A24]"
              }`}
            >
              State: {activeStep.state}
            </span>
          </div>

          <p className="text-sm font-sans text-[#202522] leading-relaxed">
            {activeStep.detail}
          </p>

          <div className="mt-4 pt-3 border-t border-[#A8AAA3]/40 flex flex-wrap items-center justify-between text-xs text-[#5E6763]">
            <span>
              Invariant Check:{" "}
              <strong className="text-[#202522]">
                {activeStep.status === "fail"
                  ? "ATTACK_CONTAINED_DETERMINISTICALLY"
                  : "PRESERVED_ATTESTED"}
              </strong>
            </span>
            <span>
              Domain Sep:{" "}
              <code className="text-[#385C71]">resilientpay:payment-envelope:v1:</code>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
