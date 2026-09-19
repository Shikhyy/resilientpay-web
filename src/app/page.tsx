"use client";

import React, { useState } from "react";
import InteractiveDemo from "../components/InteractiveDemo";

// ─── Section 8: Transaction State Journey ────────────────────────────────────
const TX_STATES: {
  state: string;
  rustState: string;
  description: string;
}[] = [
  {
    state: "CREATED",
    rustState: "TxState::Created",
    description:
      "Transaction object is instantiated with amount, merchant ID, timestamp, and a new nonce. No cryptographic commitment yet.",
  },
  {
    state: "AUTHORIZED",
    rustState: "TxState::Authorized",
    description:
      "Offline credential checked: value is within bounded budget, counter is strictly greater than prior counter, and expiry has not elapsed.",
  },
  {
    state: "SIGNED",
    rustState: "TxState::Signed",
    description:
      "Ed25519 signature produced over the canonical CBOR envelope (prefix + 13-element array). Seed zeroized immediately after signing.",
  },
  {
    state: "TRANSFERRED",
    rustState: "TxState::Transferred",
    description:
      "Signed envelope transmitted to merchant device via active transport (Internet, NFC, BLE, QR, or SMS store-and-forward).",
  },
  {
    state: "RECEIVED",
    rustState: "TxState::Received",
    description:
      "Merchant device acknowledges receipt of envelope bytes. Structural validation (length, CBOR structure) performed immediately.",
  },
  {
    state: "STORED",
    rustState: "TxState::Stored",
    description:
      "Envelope written to tamper-evident local ledger as a hash-chain link. Device remains capable of eventual batch submission.",
  },
  {
    state: "SYNC_PENDING",
    rustState: "TxState::SyncPending",
    description:
      "Connectivity has returned. Envelope is queued for backend submission. Monotonic counter prevents replay during this window.",
  },
  {
    state: "RECONCILED",
    rustState: "TxState::Reconciled",
    description:
      "Backend performed 8-step idempotent ingestion: signature verified, counter uniqueness confirmed, duplicate detected or accepted, audit record written.",
  },
];

function TransactionStateJourney() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="font-mono text-xs">
      <div className="flex flex-wrap gap-0 mb-0" role="tablist" aria-label="Transaction state journey">
        {TX_STATES.map((s, i) => (
          <React.Fragment key={s.state}>
            <button
              role="tab"
              aria-selected={activeIdx === i}
              aria-controls={`txstate-panel-${i}`}
              id={`txstate-tab-${i}`}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              className={`px-4 py-3 border border-[#A8AAA3] text-left transition-colors ${
                activeIdx === i
                  ? "bg-[#202522] text-[#F1EEE7] border-[#202522]"
                  : "bg-[#E4E0D7] text-[#202522] hover:bg-[#D8D4CB]"
              } ${i > 0 ? "-ml-px" : ""} mb-0`}
              aria-label={`Transaction state: ${s.state}`}
            >
              <div className="text-[10px] text-[#5E6763] mb-0.5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-bold tracking-wider">{s.state}</div>
            </button>
            {i < TX_STATES.length - 1 && (
              <div className="flex items-center px-1 text-[#5E6763] self-center text-base select-none">
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {activeIdx !== null && (
        <div
          id={`txstate-panel-${activeIdx}`}
          role="tabpanel"
          aria-labelledby={`txstate-tab-${activeIdx}`}
          className="border border-[#A8AAA3] border-t-0 bg-[#E4E0D7] p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex-1">
              <div className="text-[10px] text-[#5E6763] mb-1 uppercase tracking-widest">
                State Name
              </div>
              <div className="text-xl font-bold text-[#146B68] mb-4">
                {TX_STATES[activeIdx].state}
              </div>
              <div className="text-[10px] text-[#5E6763] mb-1 uppercase tracking-widest">
                Rust Domain State
              </div>
              <code className="text-xs text-[#202522] bg-[#D0CCC3] px-2 py-1 block mb-4">
                {TX_STATES[activeIdx].rustState}
              </code>
              <div className="text-[10px] text-[#5E6763] mb-1 uppercase tracking-widest">
                Description
              </div>
              <p className="text-[#202522] font-sans text-sm leading-relaxed">
                {TX_STATES[activeIdx].description}
              </p>
            </div>
            <div className="text-[10px] text-[#5E6763] sm:text-right">
              <div className="mb-1 uppercase tracking-widest">Step</div>
              <div className="text-3xl font-bold text-[#202522]">
                {activeIdx + 1} / {TX_STATES.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeIdx === null && (
        <p className="text-[#5E6763] font-sans text-xs mt-4">
          Click any state to expand its definition.
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1EEE7] text-[#202522] font-sans selection:bg-[#146B68] selection:text-[#F1EEE7]">
      {/* 1. Header */}
      <header className="fixed w-full top-0 z-50 bg-[#F1EEE7] border-b border-[#A8AAA3]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs tracking-wider uppercase font-mono">
          <div className="font-bold flex items-center gap-3">
            <span className="w-3 h-3 bg-[#146B68] block" aria-hidden="true"></span>
            <span className="text-[#202522]">RESPAY / RESEARCH PROTOTYPE</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[#5E6763] font-medium" aria-label="Primary navigation">
            <a href="#system" className="hover:text-[#202522] transition-colors">
              System
            </a>
            <a href="#demo" className="hover:text-[#202522] transition-colors">
              Demo
            </a>
            <a href="#protocol" className="hover:text-[#202522] transition-colors">
              Protocol
            </a>
            <a href="#research" className="hover:text-[#202522] transition-colors">
              Research
            </a>
            <a href="#docs" className="hover:text-[#202522] transition-colors">
              Documentation
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="text-[#5E6763] hover:text-[#202522] font-semibold transition-colors"
            >
              Contact
            </a>
            <a
              href="https://github.com/Shikhyy/ResilientPay"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#202522] bg-[#202522] text-[#F1EEE7] hover:bg-transparent hover:text-[#202522] transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#202522] border border-[#A8AAA3] hover:bg-[#E4E0D7]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden bg-[#E4E0D7] border-b border-[#A8AAA3] px-6 py-4 space-y-3 font-mono text-xs uppercase"
          >
            <a
              href="#system"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#202522] hover:text-[#146B68]"
            >
              System
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#202522] hover:text-[#146B68]"
            >
              Demo
            </a>
            <a
              href="#protocol"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#202522] hover:text-[#146B68]"
            >
              Protocol
            </a>
            <a
              href="#research"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#202522] hover:text-[#146B68]"
            >
              Research
            </a>
            <a
              href="#docs"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#202522] hover:text-[#146B68]"
            >
              Documentation
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#202522] hover:text-[#146B68]"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        {/* 2. Hero */}
        <section
          className="py-16 lg:py-24 grid lg:grid-cols-12 gap-12 border-b border-[#A8AAA3] items-center"
          aria-label="Hero"
        >
          <div className="lg:col-span-7">
            <div className="text-xs font-bold font-mono tracking-widest text-[#5E6763] mb-6 uppercase">
              CONNECTIVITY-RESILIENT PAYMENT RESEARCH
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight text-[#202522]">
              Payments designed for unreliable connectivity.
            </h1>
            <p className="text-base sm:text-lg text-[#5E6763] mb-10 max-w-xl leading-relaxed">
              ResilientPay is a research prototype exploring bounded offline authorization,
              multi-modal transaction transfer, and eventual reconciliation across degraded
              network conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-mono font-bold text-xs tracking-wider uppercase">
              <a
                href="#system"
                className="px-6 py-4 bg-[#202522] text-[#F1EEE7] hover:bg-[#146B68] transition-colors text-center"
              >
                EXPLORE THE SYSTEM
              </a>
              <a
                href="#demo"
                className="px-6 py-4 border border-[#202522] text-[#202522] hover:bg-[#E4E0D7] transition-colors text-center"
              >
                SEE THE LIVE DEMO
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6 lg:p-8 flex flex-col justify-between">
              <div className="mb-8">
                <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-6 uppercase">
                  Signal Line State
                </div>
                <div className="space-y-5 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#146B68] block" aria-hidden="true" />
                    <span className="font-bold text-[#202522]">INTERNET</span>
                    <span className="flex-1 border-t border-dashed border-[#A8AAA3]" />
                    <span className="text-[11px] text-[#146B68] font-bold">ONLINE (C3)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#385C71] block" aria-hidden="true" />
                    <span className="font-bold text-[#202522]">PROXIMITY</span>
                    <span className="flex-1 border-t border-dashed border-[#A8AAA3]" />
                    <span className="text-[11px] text-[#385C71] font-bold">NFC / BLE (C1)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#C75A24] block" aria-hidden="true" />
                    <span className="font-bold text-[#202522]">LOCAL STORAGE</span>
                    <span className="flex-1 border-t border-dashed border-[#A8AAA3]" />
                    <span className="text-[11px] text-[#C75A24] font-bold">ATTESTED QUEUE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#202522] block" aria-hidden="true" />
                    <span className="font-bold text-[#202522]">SYNCHRONIZATION</span>
                    <span className="flex-1 border-t border-dashed border-[#A8AAA3]" />
                    <span className="text-[11px] text-[#5E6763] font-bold">EVENTUAL INGEST</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-[#5E6763] space-y-2 border-t border-[#A8AAA3] pt-6">
                <div>
                  <strong className="text-[#202522]">TRANSPORT /</strong> NFC · BLE · QR · SMS · INTERNET
                </div>
                <div>
                  <strong className="text-[#202522]">SECURITY /</strong> SIGNED TRANSACTION ENVELOPES
                </div>
                <div>
                  <strong className="text-[#202522]">SETTLEMENT /</strong> EVENTUAL RECONCILIATION
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Connectivity Problem */}
        <section id="problem" className="py-20 border-b border-[#A8AAA3]" aria-label="Connectivity problem">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              03 / Connectivity Problem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              When the network disappears, the transaction still has to make sense.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              ResilientPay studies how transaction integrity can be preserved as communication options
              degrade. Each degradation level corresponds to a defined connectivity mode with different
              transport capabilities and protocol constraints.
            </p>
          </div>

          {/* Horizontal stepped degradation diagram */}
          <div className="overflow-x-auto">
            <div className="min-w-[720px]">
              {/* Steps row */}
              <div className="grid grid-cols-5 relative">
                {[
                  {
                    code: "C3",
                    label: "CONNECTED",
                    color: "#146B68",
                    desc: "Full internet path to backend reconciliation gateway. Real-time TLS submission.",
                    transport: "HTTPS / TLS",
                  },
                  {
                    code: "C2",
                    label: "LOW CONNECTIVITY",
                    color: "#385C71",
                    desc: "Degraded link with high packet loss or throttled bandwidth. Store-and-forward mode activates.",
                    transport: "STORE & FORWARD",
                  },
                  {
                    code: "C1",
                    label: "PROXIMITY AVAILABLE",
                    color: "#C75A24",
                    desc: "No cloud path. Signed envelope exchanged directly over local device interfaces.",
                    transport: "NFC / BLE / QR",
                  },
                  {
                    code: "C0",
                    label: "LOCAL STORAGE",
                    color: "#7A5530",
                    desc: "Both devices isolated. Receipts queued in tamper-evident hash-chained local ledger.",
                    transport: "SYNC_PENDING",
                  },
                  {
                    code: "SYNC",
                    label: "RECONCILIATION",
                    color: "#146B68",
                    desc: "Connectivity returns. Envelopes submitted, signatures verified, counters checked, settled.",
                    transport: "SETTLED",
                  },
                ].map((step, i) => (
                  <div key={step.code} className="relative">
                    {/* Connector arrow between steps */}
                    {i < 4 && (
                      <div
                        className="absolute top-8 -right-4 z-10 text-[#A8AAA3] text-lg font-bold select-none"
                        aria-hidden="true"
                      >
                        →
                      </div>
                    )}
                    <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5 mx-1 flex flex-col h-full">
                      <div
                        className="font-mono text-xs font-bold mb-1"
                        style={{ color: step.color }}
                      >
                        {step.code}
                      </div>
                      <div className="font-bold text-sm text-[#202522] mb-2 font-sans leading-tight">
                        {step.label}
                      </div>
                      <p className="text-[#5E6763] font-sans text-xs leading-relaxed flex-1">
                        {step.desc}
                      </p>
                      <div
                        className="mt-4 pt-3 border-t border-[#A8AAA3]/40 font-mono text-xs font-bold"
                        style={{ color: step.color }}
                      >
                        {step.transport}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. What ResilientPay is — numbered vertical index */}
        <section id="system" className="py-20 border-b border-[#A8AAA3]" aria-label="System description">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              04 / What ResilientPay Is
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              A transport-independent payment architecture for bounded offline operation and
              store-and-forward recovery.
            </h2>
          </div>

          <div className="border-t border-[#A8AAA3]">
            {[
              {
                n: "01",
                title: "Payer Device",
                body: "Android application consuming Core SDK via UniFFI. Holds a device-bound Ed25519 signing key protected by Keystore AES-256 wrapping. Produces signed transaction envelopes. Enforces offline credential budget before signing.",
              },
              {
                n: "02",
                title: "Merchant Device",
                body: "Receives signed envelopes through available transport. Performs structural validation on receipt. Writes to hash-chained local ledger. Acts as store-and-forward relay when connectivity is absent.",
              },
              {
                n: "03",
                title: "Transaction Protocol",
                body: "A canonical 13-element CBOR array with domain-separation prefix. Signed with Ed25519. Carries: payer ID, merchant ID, amount (uint64 paise), counter, timestamp, nonce, currency, offline flag, credential ID, signature, version, expiry, and hash of prior ledger entry.",
              },
              {
                n: "04",
                title: "Local Ledger",
                body: "Tamper-evident hash-chained sequence of transaction envelopes stored on device. Each entry references the SHA-256 hash of its predecessor. Provides auditability without backend connectivity.",
              },
              {
                n: "05",
                title: "Reconciliation Service",
                body: "Go + PostgreSQL backend implementing the normative 8-step ingestion protocol. Enforces UNIQUE(credential_id, counter) at the database layer. Detects duplicate submissions idempotently (HTTP 200 on exact match). Rejects replays and altered amounts.",
              },
              {
                n: "06",
                title: "Risk Engine",
                body: "Advisory-only ML gate (ADR-010). May flag a transaction as high-risk but cannot approve or override cryptographic authorization. The final accept/reject decision is deterministic and governed only by the protocol state machine.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="border-b border-[#A8AAA3] py-6 grid grid-cols-12 gap-6 items-start"
              >
                <div className="col-span-1 font-mono text-xs font-bold text-[#5E6763]">
                  {item.n}
                </div>
                <div className="col-span-11 sm:col-span-3 font-bold text-sm text-[#202522] font-sans">
                  {item.title}
                </div>
                <p className="col-span-12 sm:col-span-8 text-sm text-[#5E6763] font-sans leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Live Product Demonstration */}
        <section id="demo" className="py-20 border-b border-[#A8AAA3]" aria-label="Interactive demonstration">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              05 / SEE THE SYSTEM UNDER FAILURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              See what happens when the network disappears.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              Start connected. Disable the network. Complete a bounded local transaction. Restore
              connectivity and watch the transaction move from local storage to reconciliation.
            </p>
          </div>

          <InteractiveDemo />
        </section>

        {/* 6. System Architecture Diagram */}
        <section id="architecture" className="py-20 border-b border-[#A8AAA3]" aria-label="System architecture">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              06 / System Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              One transaction model. Multiple ways to move it.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              Transport determines how information travels. It does not determine whether the payment is
              valid. All authorization logic lives in the protocol layer.
            </p>
          </div>

          {/* Architecture SVG/CSS flow diagram */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px] relative">
              {/* Main pipeline */}
              <div className="flex items-center gap-0 mb-6">
                {[
                  { label: "Payer App", sub: "Kotlin / UniFFI", color: "#146B68" },
                  { label: "Payment Engine", sub: "Core SDK (Rust)", color: "#202522" },
                  { label: "Transport Adapter", sub: "NFC·BLE·QR·SMS·INET", color: "#385C71" },
                  { label: "Merchant App", sub: "Kotlin / UniFFI", color: "#202522" },
                  { label: "Local Ledger", sub: "Hash-chain SQLite", color: "#C75A24" },
                  { label: "Reconciliation API", sub: "Go HTTP", color: "#202522" },
                  { label: "Authoritative Backend", sub: "Go + PostgreSQL", color: "#146B68" },
                ].map((node, i, arr) => (
                  <React.Fragment key={node.label}>
                    <div className="flex flex-col items-center">
                      <div
                        className="border-2 px-3 py-3 text-center font-mono text-xs font-bold bg-[#E4E0D7] min-w-[100px]"
                        style={{ borderColor: node.color, color: node.color }}
                      >
                        <div>{node.label}</div>
                        <div
                          className="text-[10px] mt-1 font-normal"
                          style={{ color: "#5E6763" }}
                        >
                          {node.sub}
                        </div>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className="flex items-center flex-1 text-[#A8AAA3] text-lg select-none px-1"
                        aria-hidden="true"
                      >
                        <div className="flex-1 border-t-2 border-dashed border-[#A8AAA3]" />
                        <span className="ml-1">▶</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Side rails */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[
                  {
                    rail: "CRYPTO",
                    color: "#146B68",
                    desc: "Ed25519 signing (Dalek). AES-256 key wrapping. Canonical CBOR serialization. Domain-separated envelope prefix.",
                  },
                  {
                    rail: "RISK",
                    color: "#C75A24",
                    desc: "Advisory-only ML gate. Offline budget enforcement. Value and counter bound checks. Cannot override cryptographic authorization.",
                  },
                  {
                    rail: "AUDIT",
                    color: "#385C71",
                    desc: "Hash-chain local ledger. Signed receipt at each hop. Immutable backend audit log after reconciliation.",
                  },
                  {
                    rail: "OBSERVABILITY",
                    color: "#202522",
                    desc: "Structured protocol events. Transport hop tracing. Reconciliation outcome metrics. Research experiment data export.",
                  },
                ].map((rail) => (
                  <div
                    key={rail.rail}
                    className="border border-[#A8AAA3] bg-[#E4E0D7] p-4 font-mono text-xs"
                  >
                    <div
                      className="font-bold mb-2 text-[11px] tracking-widest"
                      style={{ color: rail.color }}
                    >
                      ↕ {rail.rail}
                    </div>
                    <p className="text-[#5E6763] font-sans text-xs leading-relaxed">{rail.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Transport Matrix */}
        <section id="protocol" className="py-20 border-b border-[#A8AAA3]" aria-label="Transport matrix">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              07 / Multi-Modal Transport
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Five transport channels. One protocol object.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              The payment envelope is transport-agnostic. Any channel that can move bytes can carry a
              signed transaction. Transport choice affects latency and reliability, never authorization validity.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table
              className="w-full border-collapse font-mono text-xs"
              aria-label="Transport capability matrix"
            >
              <thead>
                <tr className="border-b-2 border-[#202522]">
                  <th className="text-left py-3 pr-6 font-bold text-[#202522] uppercase tracking-wider">
                    Transport
                  </th>
                  <th className="text-left py-3 pr-6 font-bold text-[#202522] uppercase tracking-wider">
                    Connectivity Assumption
                  </th>
                  <th className="text-left py-3 pr-6 font-bold text-[#202522] uppercase tracking-wider">
                    Strength
                  </th>
                  <th className="text-left py-3 font-bold text-[#202522] uppercase tracking-wider">
                    Constraint
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    transport: "Internet",
                    connectivity: "Full network path to backend",
                    strength: "Direct real-time settlement submission",
                    constraint: "Unavailable during network outage or censorship",
                    color: "#146B68",
                  },
                  {
                    transport: "NFC",
                    connectivity: "Physical device proximity (≤4 cm)",
                    strength: "Low-latency local exchange via ISO-DEP",
                    constraint: "Requires NFC-capable hardware; physical contact",
                    color: "#385C71",
                  },
                  {
                    transport: "BLE",
                    connectivity: "Local radio range (≤10 m typical)",
                    strength: "Flexible proximity transport via GATT",
                    constraint: "Pairing, discovery, and range complexity",
                    color: "#385C71",
                  },
                  {
                    transport: "QR",
                    connectivity: "Optical line-of-sight between devices",
                    strength: "Broad device compatibility; no radio required",
                    constraint: "Human or device must scan; payload size limited",
                    color: "#C75A24",
                  },
                  {
                    transport: "SMS",
                    connectivity: "Telecom cellular path (not internet)",
                    strength:
                      "Telecom-assisted recovery transport; delivers when data is absent",
                    constraint:
                      "Delayed, duplicated, or reordered delivery; not a real-time settlement channel",
                    color: "#7A5530",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.transport}
                    className={`border-b border-[#A8AAA3] ${i % 2 === 0 ? "bg-[#E4E0D7]" : "bg-[#F1EEE7]"}`}
                  >
                    <td className="py-4 pr-6">
                      <span className="font-bold" style={{ color: row.color }}>
                        {row.transport}
                      </span>
                    </td>
                    <td className="py-4 pr-6 text-[#5E6763] font-sans">{row.connectivity}</td>
                    <td className="py-4 pr-6 text-[#202522] font-sans">{row.strength}</td>
                    <td className="py-4 text-[#5E6763] font-sans">{row.constraint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs font-mono text-[#5E6763]">
            Note: SMS is a telecom-assisted recovery transport, not an offline payment channel. The
            backend deduplication layer handles delayed or duplicated SMS delivery idempotently.
          </p>
        </section>

        {/* 8. Transaction State Journey */}
        <section id="state-journey" className="py-20 border-b border-[#A8AAA3]" aria-label="Transaction state journey">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              08 / Transaction State Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Eight states. One authoritative outcome.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              Each state is a defined position in the formal state machine. A transaction may only
              advance forward. RECONCILED is the only terminal success state and requires backend
              confirmation — it is never assumed from a local write alone.
            </p>
          </div>

          <TransactionStateJourney />
        </section>

        {/* 9. Security Model */}
        <section id="security" className="py-20 border-b border-[#A8AAA3]" aria-label="Security model">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              09 / Security Model
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Offline does not mean unverified.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              Five defense layers constrain what can be accepted during degraded connectivity. No
              single layer is sufficient alone; all five must hold for a transaction to be
              reconciled. No secrets, keys, or internal security material are exposed here.
            </p>
          </div>

          <div className="space-y-0 border-t border-[#A8AAA3]">
            {[
              {
                n: "01",
                layer: "CREDENTIAL",
                title: "Bounded Offline Authorization Policy",
                body: "Device-bound offline token carries a maximum value cap and a maximum counter ceiling. A transaction that exceeds either bound is rejected before signing occurs. Budget is enforced locally without any server call.",
              },
              {
                n: "02",
                layer: "SIGNATURE",
                title: "Ed25519 Hardware-Backed Envelope Signing",
                body: "Every transaction envelope is signed with an Ed25519 private key that never leaves the device keystore. Android Keystore AES-256 wrapping protects the seed at rest. Seed memory is zeroized immediately after the signing operation completes.",
              },
              {
                n: "03",
                layer: "COUNTER",
                title: "Strictly Monotonic Replay Prevention",
                body: "Each offline credential carries a counter that must strictly increase with every transaction. A submitted envelope with a counter ≤ the last accepted counter for that credential is rejected unconditionally. Timestamps are never the sole replay defense.",
              },
              {
                n: "04",
                layer: "LEDGER",
                title: "Hash-Chain Local Audit Evidence",
                body: "Every envelope written to the device ledger is linked by the SHA-256 hash of the previous entry. This creates a tamper-evident chain that can be submitted for audit even if backend connectivity is permanently unavailable.",
              },
              {
                n: "05",
                layer: "RECONCILIATION",
                title: "Backend Deduplication with UNIQUE Constraint",
                body: "The PostgreSQL schema enforces UNIQUE(credential_id, counter). An exact duplicate submission returns HTTP 200 idempotently. A conflicting submission (same credential+counter, different envelope) is rejected as a double-spend attempt and recorded in the audit log.",
              },
            ].map((layer) => (
              <div
                key={layer.n}
                className="border-b border-[#A8AAA3] py-6 grid grid-cols-12 gap-6 items-start"
              >
                <div className="col-span-1 font-mono text-xs font-bold text-[#5E6763]">
                  {layer.n}
                </div>
                <div className="col-span-11 sm:col-span-2">
                  <div className="font-mono text-xs font-bold text-[#146B68] tracking-widest mb-1">
                    {layer.layer}
                  </div>
                  <div className="font-bold text-sm text-[#202522] font-sans">{layer.title}</div>
                </div>
                <p className="col-span-12 sm:col-span-9 text-sm text-[#5E6763] font-sans leading-relaxed">
                  {layer.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Reconciliation Sequence */}
        <section id="reconciliation" className="py-20 border-b border-[#A8AAA3]" aria-label="Reconciliation sequence">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              10 / Reconciliation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Eight steps. One idempotent outcome.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              When connectivity returns, queued envelopes are submitted through the normative
              reconciliation flow. Every step is designed to handle re-submission safely.
            </p>
          </div>

          {/* Step flow */}
          <div className="overflow-x-auto mb-8">
            <div className="min-w-[720px] flex items-stretch gap-0">
              {[
                {
                  step: "LOCAL EVENT",
                  desc: "Signed envelope exits local ledger queue",
                  color: "#5E6763",
                },
                { step: "BATCH", desc: "Envelopes grouped for submission", color: "#385C71" },
                {
                  step: "VERIFY",
                  desc: "Ed25519 signature verified by backend",
                  color: "#202522",
                },
                {
                  step: "IDEMPOTENCY",
                  desc: "Check UNIQUE(credential_id, counter)",
                  color: "#146B68",
                },
                {
                  step: "CONFLICT CHECK",
                  desc: "Detect altered envelope for same counter",
                  color: "#C75A24",
                },
                {
                  step: "ACCEPT / REJECT / PENDING",
                  desc: "Outcome written to immutable audit log",
                  color: "#202522",
                },
                {
                  step: "AUDIT",
                  desc: "Record sealed; cannot be altered",
                  color: "#146B68",
                },
              ].map((s, i, arr) => (
                <React.Fragment key={s.step}>
                  <div className="flex-1 border border-[#A8AAA3] bg-[#E4E0D7] p-4 font-mono text-xs">
                    <div
                      className="font-bold text-[11px] tracking-wider mb-2"
                      style={{ color: s.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-bold text-[#202522] mb-2 text-[11px] leading-tight">
                      {s.step}
                    </div>
                    <p className="text-[#5E6763] font-sans text-[11px] leading-relaxed">{s.desc}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      className="flex items-center px-1 text-[#A8AAA3] text-base select-none self-center"
                      aria-hidden="true"
                    >
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Duplicate handling note */}
          <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6 font-mono text-xs">
            <div className="font-bold text-[#146B68] mb-2 tracking-wider uppercase">
              Duplicate Submission Handling
            </div>
            <p className="text-[#5E6763] font-sans text-sm leading-relaxed mb-3">
              When a device submits an envelope that has already been accepted (exact match on
              credential_id + counter + envelope bytes), the backend returns{" "}
              <code className="bg-[#D0CCC3] px-1">HTTP 200 OK</code> with the original outcome.
              This allows unreliable store-and-forward channels (including SMS) to re-submit without
              creating duplicate settlements.
            </p>
            <p className="text-[#5E6763] font-sans text-sm leading-relaxed">
              A submission with the same credential_id and counter but different envelope bytes is
              treated as a double-spend attempt and rejected with{" "}
              <code className="bg-[#D0CCC3] px-1">HTTP 409 Conflict</code>. The event is
              immutably recorded in the audit log regardless of outcome.
            </p>
          </div>
        </section>

        {/* 11. Research Evidence */}
        <section id="research" className="py-20 border-b border-[#A8AAA3]" aria-label="Research evidence">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              11 / Research Evidence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Built to be measured, attacked, and questioned.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              Results below are drawn from deterministic Python simulator runs (
              <code className="text-xs bg-[#E4E0D7] px-1">run_experiments.py</code>, PRNG-seeded).
              Numbers are real simulator outputs, not projections. Protocol version: 1.
              Seeds 1–10 per scenario.
            </p>
          </div>

          <div className="space-y-6">
            {/* E1: Transport Performance */}
            <div className="border border-[#A8AAA3] bg-[#E4E0D7]">
              <div className="border-b border-[#A8AAA3] px-6 py-4 flex items-center gap-4 font-mono">
                <span className="text-[#146B68] font-bold text-xs tracking-widest">E1</span>
                <span className="font-bold text-[#202522] text-sm">Transport Performance</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#A8AAA3]">
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Question
                  </div>
                  <p className="text-sm text-[#202522] font-sans leading-relaxed">
                    What fraction of transactions reach reconciliation under full-internet, degraded,
                    and proximity-only conditions?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Method
                  </div>
                  <p className="text-sm text-[#202522] font-sans leading-relaxed">
                    Deterministic simulator scenarios: <code className="text-xs">happy_path_internet_v1</code>,{" "}
                    <code className="text-xs">partial_loss_internet_v1</code>,{" "}
                    <code className="text-xs">nfc_partial_loss_v1</code>. 10 seeds × 20 transactions each.
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Result
                  </div>
                  <ul className="text-sm text-[#202522] font-sans space-y-1 leading-relaxed">
                    <li>
                      <strong>Full internet:</strong>{" "}
                      <span className="text-[#146B68] font-mono font-bold">20/20 (100%)</span> across all seeds
                    </li>
                    <li>
                      <strong>Partial loss internet:</strong>{" "}
                      <span className="text-[#C75A24] font-mono font-bold">avg 63%</span> reconciled (range 45–80%)
                    </li>
                    <li>
                      <strong>NFC partial loss:</strong>{" "}
                      <span className="text-[#385C71] font-mono font-bold">avg 80%</span> reconciled (range 65–90%)
                    </li>
                  </ul>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Limitation
                  </div>
                  <p className="text-sm text-[#5E6763] font-sans leading-relaxed">
                    Simulator models packet loss as independent Bernoulli drops. Real-world loss is
                    bursty and correlated. End-to-end latency not yet measured on physical hardware.
                  </p>
                </div>
              </div>
            </div>

            {/* E3: Reconciliation Robustness */}
            <div className="border border-[#A8AAA3] bg-[#E4E0D7]">
              <div className="border-b border-[#A8AAA3] px-6 py-4 flex items-center gap-4 font-mono">
                <span className="text-[#146B68] font-bold text-xs tracking-widest">E3</span>
                <span className="font-bold text-[#202522] text-sm">Reconciliation Robustness</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#A8AAA3]">
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Question
                  </div>
                  <p className="text-sm text-[#202522] font-sans leading-relaxed">
                    Does the reconciliation engine correctly accept exactly one copy of a transaction
                    when the same envelope is delivered multiple times?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Method
                  </div>
                  <p className="text-sm text-[#202522] font-sans leading-relaxed">
                    Scenario <code className="text-xs">duplicate_delivery_v1</code>: 10 transactions each
                    delivered twice. 10 seeds. Simulator checks final reconciled count and rejected count.
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Result
                  </div>
                  <p className="text-sm text-[#202522] font-sans leading-relaxed">
                    <span className="text-[#146B68] font-mono font-bold">10/10 reconciled, 0 rejected</span>{" "}
                    across all 10 seeds (10 duplicate deliveries each). The second delivery of each envelope
                    is accepted idempotently — no double-settlement.
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Limitation
                  </div>
                  <p className="text-sm text-[#5E6763] font-sans leading-relaxed">
                    Simulator idempotency is protocol-level. Database-level UNIQUE constraint behavior
                    under concurrent submission storms has not been load-tested at production throughput.
                  </p>
                </div>
              </div>
            </div>

            {/* E4: Double-Spend Rejection */}
            <div className="border border-[#A8AAA3] bg-[#E4E0D7]">
              <div className="border-b border-[#A8AAA3] px-6 py-4 flex items-center gap-4 font-mono">
                <span className="text-[#146B68] font-bold text-xs tracking-widest">E4</span>
                <span className="font-bold text-[#202522] text-sm">Double-Spend &amp; Offline Budget</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#A8AAA3]">
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Question
                  </div>
                  <p className="text-sm text-[#202522] font-sans leading-relaxed">
                    Does the bounded offline policy reject transactions that exceed the credential
                    authorization budget even at high volume?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Method
                  </div>
                  <p className="text-sm text-[#202522] font-sans leading-relaxed">
                    Scenario <code className="text-xs">high_volume_baseline_v1</code>: 1000 transactions per
                    run against a bounded credential. 10 seeds. Excess beyond budget must be rejected.
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Result
                  </div>
                  <p className="text-sm text-[#202522] font-sans leading-relaxed">
                    <span className="text-[#146B68] font-mono font-bold">avg 115 reconciled / 885 rejected</span>{" "}
                    per run (range: 108–121 accepted). Reconciled count reflects the offline budget ceiling.
                    Rejections are deterministic and expected — they confirm the budget is enforced.
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="text-[10px] font-mono font-bold text-[#5E6763] uppercase tracking-widest mb-2">
                    Limitation
                  </div>
                  <p className="text-sm text-[#5E6763] font-sans leading-relaxed">
                    Simulator budget parameters are fixed per scenario and do not model dynamic
                    credential renewal flows. Risk model advisory output is not yet connected to budget
                    adjustment in this experiment set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Deployment Boundary */}
        <section id="deployment-boundary" className="py-20 border-b border-[#A8AAA3]" aria-label="Deployment boundary">
          <div className="border-2 border-[#C75A24] bg-[#E4E0D7] p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="font-mono text-xs font-bold text-[#C75A24] tracking-widest uppercase whitespace-nowrap mt-1">
                ⚠ RESEARCH PROTOTYPE
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#202522] mb-4 leading-tight">
                  This is a research artefact, not a regulated payment product.
                </h2>
                <p className="text-base text-[#5E6763] font-sans leading-relaxed mb-4">
                  ResilientPay does not itself claim authorization to operate a regulated payment
                  system, process live UPI transactions, move real customer funds, or act as a payment
                  service provider under any jurisdiction&apos;s financial regulation.
                </p>
                <p className="text-base text-[#5E6763] font-sans leading-relaxed mb-4">
                  The prototype is intended to demonstrate and measure a connectivity-resilient payment
                  protocol under controlled conditions. All transactions in the demo environment are
                  simulated. No real funds are moved.
                </p>
                <p className="text-sm text-[#5E6763] font-mono">
                  Protocol Version: 1 · Research prototype · Apache-2.0 / MIT Dual License
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Documentation Index */}
        <section id="docs" className="py-20 border-b border-[#A8AAA3]" aria-label="Documentation">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              13 / Documentation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Rigorous specifications govern every byte.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              No behavior is silently invented. All boundaries, serialization rules, state transitions,
              and trust assumptions are documented in normative specifications and ADRs.
            </p>
          </div>

          <div className="border-t border-[#A8AAA3]">
            {[
              {
                category: "Architecture",
                docs: [
                  { title: "ADR-001: Dual-Device Android Architecture", href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/09-architecture-decisions/ADR-001-kotlin-android.md" },
                  { title: "ADR-002: Pure Rust Core via UniFFI", href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/09-architecture-decisions/ADR-002-rust-crypto.md" },
                  { title: "ADR-003: Go Backend Reconciliation Engine", href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/09-architecture-decisions/ADR-003-go-backend.md" },
                  { title: "ADR-012: Android Keystore-Wrapped Signer", href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/09-architecture-decisions/ADR-012-android-rust-crypto-ffi-boundary.md" },
                ],
              },
              {
                category: "Protocol",
                docs: [
                  {
                    title: "PAYMENT_PROTOCOL.md — End-to-end payment envelope",
                    href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/05-protocol/PAYMENT_PROTOCOL.md",
                  },
                  {
                    title: "TRANSACTION_STATE_MACHINE.md — Formal states",
                    href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/05-protocol/TRANSACTION_STATE_MACHINE.md",
                  },
                  {
                    title: "ADR-008: Canonical CBOR Serialization",
                    href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/09-architecture-decisions/ADR-008-cbor-canonical-serialization.md",
                  },
                ],
              },
              {
                category: "Security",
                docs: [
                  {
                    title: "SECURITY_SPEC.md — Threat model and trust boundaries",
                    href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/03-security/SECURITY_SPEC.md",
                  },
                  {
                    title: "OFFLINE_CREDENTIAL_SPEC.md — Device-bound tokens",
                    href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/03-security/OFFLINE_CREDENTIAL_SPEC.md",
                  },
                ],
              },
              {
                category: "Experiments",
                docs: [
                  {
                    title: "RECONCILIATION_SPEC.md — 8-step ingestion flow",
                    href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/05-protocol/RECONCILIATION_SPEC.md",
                  },
                  {
                    title: "ADR-010: ML Advisory-Only Gate",
                    href: "https://github.com/Shikhyy/ResilientPay/blob/main/docs/09-architecture-decisions/ADR-010-ml-advisory-only.md",
                  },
                  {
                    title: "simulator/run_experiments.py — Deterministic scenario runner",
                    href: "https://github.com/Shikhyy/ResilientPay/tree/main/simulator",
                  },
                ],
              },
              {
                category: "API",
                docs: [
                  {
                    title: "openapi.yaml — Reconciliation API specification",
                    href: "https://github.com/Shikhyy/ResilientPay",
                  },
                ],
              },
              {
                category: "Developer Guide",
                docs: [
                  {
                    title: "README.md — Repository overview and setup",
                    href: "https://github.com/Shikhyy/ResilientPay",
                  },
                ],
              },
            ].map((section) => (
              <div
                key={section.category}
                className="border-b border-[#A8AAA3] py-5 grid grid-cols-12 gap-6 items-start"
              >
                <div className="col-span-12 sm:col-span-2 font-mono text-xs font-bold text-[#146B68] uppercase tracking-widest">
                  {section.category}
                </div>
                <ul className="col-span-12 sm:col-span-10 space-y-2">
                  {section.docs.map((doc) => (
                    <li key={doc.title}>
                      <a
                        href={doc.href}
                        className="text-sm text-[#202522] font-sans hover:text-[#146B68] transition-colors underline underline-offset-2"
                        target={doc.href.startsWith("http") ? "_blank" : undefined}
                        rel={doc.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section
          id="contact"
          className="py-20 text-center"
          aria-label="Contact and repository"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#202522] max-w-2xl mx-auto leading-tight">
            A payment should remain understandable even when the network does not.
          </h2>
          <p className="text-base sm:text-lg text-[#5E6763] max-w-xl mx-auto mb-10 leading-relaxed">
            Review the source code, inspect test vectors, explore experimental results, and evaluate
            the security boundaries.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 font-mono font-bold text-xs tracking-wider uppercase">
            <a
              href="https://github.com/Shikhyy/ResilientPay"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#146B68] text-[#F1EEE7] hover:bg-[#202522] transition-colors"
            >
              READ THE PROTOCOL ON GITHUB
            </a>
          </div>
        </section>
      </main>

      {/* 14 / 15. Footer with legal */}
      <footer
        className="border-t border-[#A8AAA3] bg-[#E4E0D7] py-12 text-xs font-mono text-[#5E6763]"
        aria-label="Footer"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="font-bold text-[#202522] mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#146B68] block" aria-hidden="true" />
                RESPAY / RESEARCH PROTOTYPE
              </div>
              <p className="leading-relaxed text-[#5E6763]">
                Connectivity-Resilient Payment Protocol &amp; Architecture.
                <br />
                Protocol Version 1 · Apache-2.0 / MIT Dual License.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div className="font-bold text-[#202522] mb-2 uppercase tracking-wider">
                Navigation
              </div>
              <ul className="space-y-1">
                {[
                  ["System", "#system"],
                  ["Demo", "#demo"],
                  ["Protocol", "#protocol"],
                  ["Research", "#research"],
                  ["Documentation", "#docs"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-[#202522] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="font-bold text-[#202522] mb-2 uppercase tracking-wider">
                Legal &amp; Trust
              </div>
              <ul className="space-y-1">
                <li>
                  <a href="/legal" className="hover:text-[#202522] transition-colors">
                    Prototype Disclaimer
                  </a>
                </li>
                <li>
                  <a href="/legal#terms" className="hover:text-[#202522] transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/legal#privacy" className="hover:text-[#202522] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/legal#security" className="hover:text-[#202522] transition-colors">
                    Security Disclosure
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Shikhyy/ResilientPay/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#202522] transition-colors"
                  >
                    Contact / Issues
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#A8AAA3] pt-6 flex flex-col sm:flex-row justify-between gap-2">
            <div>Research Prototype. Not live UPI or production settlement.</div>
            <div>
              <a
                href="https://github.com/Shikhyy/ResilientPay"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#202522] transition-colors"
              >
                github.com/Shikhyy/ResilientPay
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
