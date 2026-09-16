"use client";

import React, { useState } from "react";
import InteractiveDemo from "../components/InteractiveDemo";

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

          <nav className="hidden lg:flex items-center gap-8 text-[#5E6763] font-medium">
            <a href="#problem" className="hover:text-[#202522] transition-colors">
              Problem
            </a>
            <a href="#system" className="hover:text-[#202522] transition-colors">
              System
            </a>
            <a href="#demo" className="hover:text-[#202522] transition-colors">
              Demo
            </a>
            <a href="#protocol" className="hover:text-[#202522] transition-colors">
              Protocol
            </a>
            <a href="#security" className="hover:text-[#202522] transition-colors">
              Security
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
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          <div className="lg:hidden bg-[#E4E0D7] border-b border-[#A8AAA3] px-6 py-4 space-y-3 font-mono text-xs uppercase">
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#202522] hover:text-[#146B68]"
            >
              Problem
            </a>
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
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#202522] hover:text-[#146B68]"
            >
              Security
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
          </div>
        )}
      </header>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        {/* 2. Hero */}
        <section className="py-16 lg:py-24 grid lg:grid-cols-12 gap-12 border-b border-[#A8AAA3] items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-bold font-mono tracking-widest text-[#5E6763] mb-6 uppercase">
              CONNECTIVITY-RESILIENT PAYMENT RESEARCH
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight text-[#202522]">
              Payments designed for unreliable connectivity.
            </h1>
            <p className="text-base sm:text-lg text-[#5E6763] mb-10 max-w-xl leading-relaxed">
              ResilientPay is a research prototype exploring how bounded offline authorization,
              local transaction exchange, and eventual reconciliation can preserve payment integrity
              when conventional connectivity is unavailable.
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
                    <span className="w-2.5 h-2.5 bg-[#146B68] block" />
                    <span className="font-bold text-[#202522]">INTERNET</span>
                    <span className="flex-1 border-t border-dashed border-[#A8AAA3]" />
                    <span className="text-[11px] text-[#146B68] font-bold">ONLINE (C3)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#385C71] block" />
                    <span className="font-bold text-[#202522]">PROXIMITY</span>
                    <span className="flex-1 border-t border-dashed border-[#A8AAA3]" />
                    <span className="text-[11px] text-[#385C71] font-bold">NFC / BLE (C1)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#C75A24] block" />
                    <span className="font-bold text-[#202522]">LOCAL STORAGE</span>
                    <span className="flex-1 border-t border-dashed border-[#A8AAA3]" />
                    <span className="text-[11px] text-[#C75A24] font-bold">ATTESTED QUEUE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#202522] block" />
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
        <section id="problem" className="py-20 border-b border-[#A8AAA3]">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              The Connectivity Breakdown
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              When communication fails, payment state still needs a reliable answer.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              A payment can move through more than one communication path. ResilientPay studies how a
              transaction can be authenticated locally, transferred through available proximity channels,
              retained safely, and reconciled when connectivity returns.
            </p>
          </div>

          {/* Degradation Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs">
            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5 flex flex-col justify-between">
              <div>
                <div className="text-[#146B68] font-bold mb-1">STATE C3</div>
                <div className="font-bold text-sm text-[#202522] mb-2 font-sans">Full Internet</div>
                <p className="text-[#5E6763] font-sans text-xs leading-relaxed">
                  Real-time direct submission to backend reconciliation gateway.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#A8AAA3]/40 text-[#146B68] font-bold">
                HTTPS / TLS
              </div>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5 flex flex-col justify-between">
              <div>
                <div className="text-[#385C71] font-bold mb-1">STATE C2</div>
                <div className="font-bold text-sm text-[#202522] mb-2 font-sans">Degraded Link</div>
                <p className="text-[#5E6763] font-sans text-xs leading-relaxed">
                  High packet loss or limited bandwidth; automatic payload compression.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#A8AAA3]/40 text-[#385C71] font-bold">
                STORE & FORWARD
              </div>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5 flex flex-col justify-between">
              <div>
                <div className="text-[#C75A24] font-bold mb-1">STATE C1</div>
                <div className="font-bold text-sm text-[#202522] mb-2 font-sans">Proximity Only</div>
                <p className="text-[#5E6763] font-sans text-xs leading-relaxed">
                  Zero cloud network; transaction exchanged directly over local device interfaces.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#A8AAA3]/40 text-[#C75A24] font-bold">
                NFC / BLE / QR
              </div>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5 flex flex-col justify-between">
              <div>
                <div className="text-[#5E6763] font-bold mb-1">STATE C0</div>
                <div className="font-bold text-sm text-[#202522] mb-2 font-sans">Full Air-Gap</div>
                <p className="text-[#5E6763] font-sans text-xs leading-relaxed">
                  Both devices isolated; signed receipts safely queued in tamper-evident storage.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#A8AAA3]/40 text-[#5E6763] font-bold">
                SYNC_PENDING
              </div>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5 flex flex-col justify-between">
              <div>
                <div className="text-[#146B68] font-bold mb-1">INGESTION</div>
                <div className="font-bold text-sm text-[#202522] mb-2 font-sans">Reconciliation</div>
                <p className="text-[#5E6763] font-sans text-xs leading-relaxed">
                  Connectivity returns; envelopes verified, duplicate counters rejected, settled.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#A8AAA3]/40 text-[#146B68] font-bold">
                SETTLED
              </div>
            </div>
          </div>
        </section>

        {/* 4. System Architecture */}
        <section id="system" className="py-20 border-b border-[#A8AAA3]">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              System Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              One transaction model. Multiple ways to move it.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              The same logical payment object can move through internet, NFC, Bluetooth, QR, or
              store-and-forward SMS transport. Transport determines how information travels. It does not
              determine whether the payment is valid.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="text-sm font-bold text-[#202522] font-sans mb-2">Core SDK (Rust)</div>
              <p className="text-[#5E6763] font-sans mb-4 leading-relaxed">
                Deterministic security core. Owns canonical CBOR serialization, Ed25519 signature
                verification, offline state machine, and ledger validation. Zero UI or network dependencies.
              </p>
              <ul className="space-y-1 text-[#202522] border-t border-[#A8AAA3]/40 pt-3">
                <li>• 106-byte canonical CBOR</li>
                <li>• UniFFI FFI boundary</li>
                <li>• Zero-copy Dalek Ed25519</li>
              </ul>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="text-sm font-bold text-[#202522] font-sans mb-2">Client Apps (Android)</div>
              <p className="text-[#5E6763] font-sans mb-4 leading-relaxed">
                Kotlin Jetpack Compose applications for Payer and Merchant roles. Consumes Core SDK via
                UniFFI. HardwareKeyManager uses Keystore AES-256 wrapping to protect Ed25519 seeds.
              </p>
              <ul className="space-y-1 text-[#202522] border-t border-[#A8AAA3]/40 pt-3">
                <li>• StrongBox / TEE backing</li>
                <li>• NFC ISO-DEP & BLE GATT</li>
                <li>• Transient seed zeroization</li>
              </ul>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="text-sm font-bold text-[#202522] font-sans mb-2">Reconciliation (Go + Postgres)</div>
              <p className="text-[#5E6763] font-sans mb-4 leading-relaxed">
                High-throughput backend service implementing the normative 8-step ingestion protocol.
                Enforces monotonic counter uniqueness, detects double-spends, and advances to settlement.
              </p>
              <ul className="space-y-1 text-[#202522] border-t border-[#A8AAA3]/40 pt-3">
                <li>• 8-Step idempotent ingestion</li>
                <li>• Strict uint64 minor units</li>
                <li>• Adversarial replay rejection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Live Product Demonstration */}
        <section id="demo" className="py-20 border-b border-[#A8AAA3]">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              Interactive Research Demonstration
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

        {/* 6. Security Model */}
        <section id="security" className="py-20 border-b border-[#A8AAA3]">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              Security & Invariants
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Offline does not mean unverified.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              The prototype uses device-bound credentials, signed transaction envelopes, counters, replay
              controls, local ledger integrity, and backend reconciliation checks to constrain what can be
              accepted during degraded connectivity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5">
              <div className="text-[#146B68] font-bold mb-2">INVARIANT 01</div>
              <h3 className="text-sm font-bold text-[#202522] font-sans mb-2">
                Hardware Key Isolation
              </h3>
              <p className="text-[#5E6763] font-sans leading-relaxed">
                Private signing keys never cross JNI boundaries. Keystore AES keys encrypt seeds at rest;
                memory is zeroized immediately post-signing.
              </p>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5">
              <div className="text-[#146B68] font-bold mb-2">INVARIANT 02</div>
              <h3 className="text-sm font-bold text-[#202522] font-sans mb-2">
                RFC 8032 Canonical CBOR
              </h3>
              <p className="text-[#5E6763] font-sans leading-relaxed">
                Canonical 13-element CBOR array signed with prefix{" "}
                <code>resilientpay:payment-envelope:v1:</code>. Bit-for-bit identical cross-language.
              </p>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5">
              <div className="text-[#146B68] font-bold mb-2">INVARIANT 03</div>
              <h3 className="text-sm font-bold text-[#202522] font-sans mb-2">
                Monotonic Replay Defense
              </h3>
              <p className="text-[#5E6763] font-sans leading-relaxed">
                Timestamps alone are never trusted for replay defense. Monotonically advancing counters
                and server-side uniqueness bounds prevent replay attacks.
              </p>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-5">
              <div className="text-[#146B68] font-bold mb-2">INVARIANT 04</div>
              <h3 className="text-sm font-bold text-[#202522] font-sans mb-2">
                Exact Integer Accounting
              </h3>
              <p className="text-[#5E6763] font-sans leading-relaxed">
                Floating point is strictly prohibited. Monetary amounts are fixed 64-bit unsigned
                integers representing minor currency units (paise).
              </p>
            </div>
          </div>
        </section>

        {/* 7. Research Evidence */}
        <section id="research" className="py-20 border-b border-[#A8AAA3]">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              Research & Empirical Evidence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Built to be measured, attacked, and questioned.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              ResilientPay is evaluated through controlled simulations and device experiments covering
              unreliable transport, duplicate messages, delayed synchronization, replay attempts,
              reconciliation conflicts, and risk-model performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-center">
            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="text-3xl lg:text-4xl font-bold text-[#146B68] mb-1">123</div>
              <div className="text-xs font-bold text-[#202522] uppercase tracking-wider">SDK Unit Tests</div>
              <div className="text-[11px] text-[#5E6763] mt-1">100% Pass Rate (Rust)</div>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="text-3xl lg:text-4xl font-bold text-[#385C71] mb-1">10 / 10</div>
              <div className="text-xs font-bold text-[#202522] uppercase tracking-wider">Frozen Vectors</div>
              <div className="text-[11px] text-[#5E6763] mt-1">Cross-Language Verified</div>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="text-3xl lg:text-4xl font-bold text-[#202522] mb-1">34</div>
              <div className="text-xs font-bold text-[#202522] uppercase tracking-wider">Sim Scenarios</div>
              <div className="text-[11px] text-[#5E6763] mt-1">Deterministic PRNG</div>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="text-3xl lg:text-4xl font-bold text-[#146B68] mb-1">8-Step</div>
              <div className="text-xs font-bold text-[#202522] uppercase tracking-wider">Ingestion Flow</div>
              <div className="text-[11px] text-[#5E6763] mt-1">Idempotent Backend</div>
            </div>
          </div>
        </section>

        {/* 8. Protocol & Documentation */}
        <section id="docs" className="py-20 border-b border-[#A8AAA3]">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#5E6763] mb-4 uppercase">
              Specifications & ADRs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-[#202522]">
              Rigorous specifications govern every byte.
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] leading-relaxed">
              No behavior is silently invented. All boundaries, serialization rules, state transitions,
              and trust assumptions are documented in peer-reviewed ADRs and protocol specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="font-bold text-sm text-[#202522] font-sans mb-3">
                Core Architectural Decision Records (ADRs)
              </div>
              <ul className="space-y-2 text-[#5E6763]">
                <li>
                  <span className="text-[#146B68] font-bold">ADR-001:</span> Dual-Device Android Architecture
                </li>
                <li>
                  <span className="text-[#146B68] font-bold">ADR-002:</span> Pure Rust Core via UniFFI
                </li>
                <li>
                  <span className="text-[#146B68] font-bold">ADR-003:</span> Go Backend Reconciliation Engine
                </li>
                <li>
                  <span className="text-[#146B68] font-bold">ADR-008:</span> Canonical CBOR Serialization
                </li>
                <li>
                  <span className="text-[#146B68] font-bold">ADR-010:</span> Machine Learning Advisory-Only Gate
                </li>
                <li>
                  <span className="text-[#146B68] font-bold">ADR-012:</span> Android Keystore-Wrapped Signer
                </li>
              </ul>
            </div>

            <div className="border border-[#A8AAA3] bg-[#E4E0D7] p-6">
              <div className="font-bold text-sm text-[#202522] font-sans mb-3">
                Normative Protocol Specifications
              </div>
              <ul className="space-y-2 text-[#5E6763]">
                <li>
                  <span className="text-[#385C71] font-bold">PAYMENT_PROTOCOL.md:</span> End-to-end payment envelope
                </li>
                <li>
                  <span className="text-[#385C71] font-bold">RECONCILIATION_SPEC.md:</span> 8-Step ingestion flow
                </li>
                <li>
                  <span className="text-[#385C71] font-bold">OFFLINE_CREDENTIAL_SPEC.md:</span> Device bound tokens
                </li>
                <li>
                  <span className="text-[#385C71] font-bold">TRANSACTION_STATE_MACHINE.md:</span> Formal states
                </li>
                <li>
                  <span className="text-[#385C71] font-bold">SECURITY_SPEC.md:</span> Threat & trust boundaries
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. Closing Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#202522] max-w-2xl mx-auto leading-tight">
            A payment should remain understandable even when the network does not.
          </h2>
          <p className="text-base sm:text-lg text-[#5E6763] max-w-xl mx-auto mb-10 leading-relaxed">
            Review the source code, inspect test vectors, explore experimental results, and evaluate the
            security boundaries.
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

      {/* 10. Footer */}
      <footer className="border-t border-[#A8AAA3] bg-[#E4E0D7] py-12 text-xs font-mono text-[#5E6763]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <div className="font-bold text-[#202522] mb-1">
              RESPAY / RESEARCH PROTOTYPE
            </div>
            <div>
              Connectivity-Resilient Payment Protocol & Architecture.
            </div>
          </div>
          <div className="text-right sm:text-right space-y-1">
            <div>Research Prototype. Not live UPI or production settlement.</div>
            <div>Apache-2.0 / MIT Dual License.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
