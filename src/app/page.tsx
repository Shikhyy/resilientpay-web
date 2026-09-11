import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white font-sans">
      <Head>
        <title>ResilientPay | Connectivity-Resilient Payments</title>
        <meta name="description" content="Research-grade connectivity-resilient payment protocol." />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            ResilientPay
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            v1.0 Protocol Draft Available
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
            ResilientPay
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Research-grade connectivity-resilient payment protocol. 
            Transact securely anywhere, anytime—even entirely offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              Read the Whitepaper
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/10">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Core Protocol Features</h2>
            <p className="text-gray-400 max-w-2xl text-lg">Designed for environments with degraded or non-existent connectivity, ensuring continuous economic exchange.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Offline Budgets</h3>
              <p className="text-gray-400 leading-relaxed">
                Securely provision and manage funds locally. Devices can spend up to their authorized limits without contacting a centralized ledger.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">NFC, BLE, & QR Transports</h3>
              <p className="text-gray-400 leading-relaxed">
                Pluggable transport layer supporting multiple peer-to-peer transmission mediums to execute transactions anywhere.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cryptographic Invariants</h3>
              <p className="text-gray-400 leading-relaxed">
                Hardware-backed signatures and succinct proofs guarantee double-spending prevention and eventual settlement consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">System Architecture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">A modular, three-tier architecture optimized for adversarial offline environments.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Tier 1 */}
            <div className="flex-1 w-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 relative">
              <div className="text-sm font-bold text-indigo-400 mb-4 tracking-widest uppercase">Layer 1</div>
              <h3 className="text-2xl font-bold mb-2">Transport Adapters</h3>
              <p className="text-gray-400 mb-6">Proximity-based communication protocols handling raw byte exchange over NFC, BLE, and dynamic QR frames.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">NFC ISO-DEP</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">BLE GATT</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">Fountain QR</span>
              </div>
            </div>

            <div className="hidden md:flex text-white/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Tier 2 */}
            <div className="flex-1 w-full p-8 rounded-3xl bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/20 relative shadow-[0_0_50px_-20px_rgba(99,102,241,0.2)]">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-indigo-500 rounded-full blur-md opacity-50"></div>
              <div className="text-sm font-bold text-indigo-400 mb-4 tracking-widest uppercase">Layer 2</div>
              <h3 className="text-2xl font-bold mb-2">Core SDK</h3>
              <p className="text-gray-400 mb-6">State machine managing the offline ledger, budget reconciliation, and hardware secure element signing.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">Rust Core</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">WASM</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">Secure Enclave</span>
              </div>
            </div>

            <div className="hidden md:flex text-white/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Tier 3 */}
            <div className="flex-1 w-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 relative">
              <div className="text-sm font-bold text-indigo-400 mb-4 tracking-widest uppercase">Layer 3</div>
              <h3 className="text-2xl font-bold mb-2">Settlement Backend</h3>
              <p className="text-gray-400 mb-6">Global asynchronous reconciliation engine validating cryptograms and ensuring eventual ledger consistency.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">Go Services</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">PostgreSQL</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">Zero-Knowledge Proofs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/50 text-center text-gray-500 text-sm">
        <p>© 2026 ResilientPay Protocol. Open Source under MIT.</p>
      </footer>
    </div>
  );
}
