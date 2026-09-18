import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans antialiased selection:bg-[#E5E0D8]">
      <header className="border-b border-[#1A1A1A] bg-[#FDFBF7] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs font-bold tracking-widest uppercase hover:underline"
          >
            ← RESPAY / RESEARCH PROTOTYPE
          </Link>
          <span className="font-mono text-xs text-[#737373]">LEGAL & TRUST</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border border-[#1A1A1A] bg-[#FFFFFF] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="border-b border-[#1A1A1A] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-semibold">
              Research Prototype Notice
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mt-2">
              Legal, Regulatory & Security Disclaimer
            </h1>
            <p className="font-mono text-xs text-[#737373] mt-2">
              Document Authority: Research Specification · Last Updated: 2026-09-18
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-lg font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
              1. Prototype Scope & Non-Production Nature
            </h2>
            <p className="text-sm text-[#404040] leading-relaxed">
              ResilientPay is an experimental academic and engineering research prototype developed to study
              transaction integrity across degraded and severed network environments. <strong>It is NOT a licensed
              banking application, payment aggregator, or Unified Payments Interface (UPI) participant.</strong>
            </p>
            <p className="text-sm text-[#404040] leading-relaxed">
              Under no circumstances should ResilientPay software, cryptographic protocols, or hardware key
              management interfaces be construed as an authorization to move real financial funds, handle customer
              deposits, or operate live payment clearance without regulatory sandbox approval and authorized
              participant agreements.
            </p>
          </section>

          <section className="space-y-4 border-t border-[#E5E0D8] pt-6">
            <h2 className="text-lg font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
              2. Synthetic Currency & Virtual Value
            </h2>
            <p className="text-sm text-[#404040] leading-relaxed">
              All references to currency, balances, and values (including paise or rupees) within the Android
              applications, core Rust SDK, Go reconciliation engine, simulation framework, and web demonstration
              refer exclusively to synthetic, virtual test tokens. No sovereign currency or bank balances are
              ever debited or credited.
            </p>
          </section>

          <section className="space-y-4 border-t border-[#E5E0D8] pt-6">
            <h2 className="text-lg font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
              3. Cryptographic and Device Security
            </h2>
            <p className="text-sm text-[#404040] leading-relaxed">
              The cryptographic profile employs standard RFC 8032 Ed25519 digital signatures and hardware-backed
              key isolation patterns (AndroidKeyStore AES-256-GCM seed wrapping). However, physical side-channel
              resistance, StrongBox tamper-resistance, and hardware isolation guarantees are bounded by the research
              evaluation environment.
            </p>
          </section>

          <section className="space-y-4 border-t border-[#E5E0D8] pt-6">
            <h2 className="text-lg font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
              4. Responsible Security Disclosure
            </h2>
            <p className="text-sm text-[#404040] leading-relaxed">
              If you identify an architectural weakness, replay vector, side-channel leakage, or cryptographic defect
              within the protocol implementation, please report it directly through our research vulnerability
              reporting process:
            </p>
            <div className="bg-[#F5F5F4] border border-[#1A1A1A] p-4 font-mono text-xs">
              <code>Security Contact: security-research@resilientpay.internal</code>
            </div>
          </section>

          <div className="border-t border-[#1A1A1A] pt-6 flex justify-between items-center text-xs font-mono">
            <span className="text-[#737373]">© 2026 ResilientPay Research Group</span>
            <Link href="/" className="font-bold underline hover:text-[#0D9488]">
              Return to System Architecture →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
