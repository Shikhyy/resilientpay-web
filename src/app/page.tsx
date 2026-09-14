import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-white selection:text-black">
      <Head>
        <title>ResilientPay | Connectivity-Resilient Payment Research</title>
        <meta name="description" content="Payments designed for unreliable connectivity." />
      </Head>

      {/* 1. Header */}
      <header className="fixed w-full top-0 z-50 bg-black border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs tracking-widest uppercase">
          <div className="font-bold flex items-center gap-4">
            <span className="w-3 h-3 bg-white block"></span>
            RESPAY / RESEARCH PROTOTYPE
          </div>
          <nav className="hidden lg:flex gap-8 text-gray-400">
            <a href="#system" className="hover:text-white transition-colors">System</a>
            <a href="#demo" className="hover:text-white transition-colors">Demo</a>
            <a href="#protocol" className="hover:text-white transition-colors">Protocol</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="#docs" className="hover:text-white transition-colors">Documentation</a>
          </nav>
          <div className="hidden lg:block">
            <a href="#contact" className="hover:text-white transition-colors text-gray-400">Contact</a>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        
        {/* 2. Hero */}
        <section className="py-20 lg:py-32 grid lg:grid-cols-2 gap-16 border-b border-white/20">
          <div>
            <div className="text-xs font-bold tracking-widest text-gray-500 mb-8 uppercase">
              Connectivity-Resilient Payment Research
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 font-sans tracking-tight">
              Payments designed for unreliable connectivity.
            </h1>
            <p className="text-lg text-gray-400 mb-12 max-w-lg leading-relaxed">
              ResilientPay is a research prototype exploring how bounded offline authorization, local transaction exchange, and eventual reconciliation can preserve payment integrity when conventional connectivity is unavailable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-bold text-sm tracking-widest uppercase">
              <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors">
                Explore the System
              </button>
              <button className="px-8 py-4 border border-white/20 hover:bg-white/10 transition-colors">
                See the Live Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="border border-white/20 p-8 h-full flex flex-col justify-between bg-white/[0.02]">
              <div className="mb-12">
                <div className="text-xs tracking-widest text-gray-500 mb-4 uppercase">Signal Line</div>
                <div className="space-y-6 font-bold">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="flex-1 border-t border-dashed border-white/20"></div>
                    <div className="text-sm">INTERNET</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="flex-1 border-t border-dashed border-white/20"></div>
                    <div className="text-sm">PROXIMITY</div>
                  </div>
                  <div className="flex items-center gap-4 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="flex-1 border-t border-dashed border-white/20"></div>
                    <div className="text-sm">LOCAL STORAGE</div>
                  </div>
                  <div className="flex items-center gap-4 opacity-30">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div className="flex-1 border-t border-dashed border-white/20"></div>
                    <div className="text-sm">SYNCHRONIZATION</div>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 space-y-2 border-t border-white/20 pt-6">
                <div><span className="text-white">TRANSPORT /</span> NFC · BLE · QR · SMS · INTERNET</div>
                <div><span className="text-white">SECURITY /</span> SIGNED TRANSACTION ENVELOPES</div>
                <div><span className="text-white">SETTLEMENT /</span> EVENTUAL RECONCILIATION</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Connectivity Problem */}
        <section className="py-24 border-b border-white/20">
          <h2 className="text-3xl lg:text-5xl font-sans font-bold mb-8 max-w-3xl leading-tight">
            When communication fails, payment state still needs a reliable answer.
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mb-16 leading-relaxed">
            A payment can move through more than one communication path. ResilientPay studies how a transaction can be authenticated locally, transferred through available proximity channels, retained safely, and reconciled when connectivity returns.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between p-8 border border-white/20 bg-white/[0.01] gap-8">
            <div className="text-center w-full">
              <div className="text-xs tracking-widest text-gray-500 mb-2">STATE 1</div>
              <div className="font-bold">CONNECTED</div>
            </div>
            <div className="hidden md:block text-gray-600">→</div>
            <div className="text-center w-full">
              <div className="text-xs tracking-widest text-gray-500 mb-2">STATE 2</div>
              <div className="font-bold">LOW CONNECTIVITY</div>
            </div>
            <div className="hidden md:block text-gray-600">→</div>
            <div className="text-center w-full">
              <div className="text-xs tracking-widest text-gray-500 mb-2">STATE 3</div>
              <div className="font-bold text-white">PROXIMITY AVAILABLE</div>
            </div>
            <div className="hidden md:block text-gray-600">→</div>
            <div className="text-center w-full">
              <div className="text-xs tracking-widest text-gray-500 mb-2">STATE 4</div>
              <div className="font-bold">LOCAL STORAGE</div>
            </div>
            <div className="hidden md:block text-gray-600">→</div>
            <div className="text-center w-full">
              <div className="text-xs tracking-widest text-gray-500 mb-2">STATE 5</div>
              <div className="font-bold">RECONCILIATION</div>
            </div>
          </div>
        </section>

        {/* 4. What ResilientPay is & 6. Architecture & 7. Multi-modal */}
        <section id="system" className="py-24 border-b border-white/20">
          <h2 className="text-3xl lg:text-5xl font-sans font-bold mb-8">
            One transaction model. Multiple ways to move it.
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mb-16 leading-relaxed">
            The same logical payment object can move through internet, NFC, Bluetooth, QR, or store-and-forward SMS transport. Transport determines how information travels. It does not determine whether the payment is valid.
          </p>

          <div className="overflow-x-auto mb-16">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/20 text-xs tracking-widest text-gray-500 uppercase">
                  <th className="p-4 font-normal">Transport</th>
                  <th className="p-4 font-normal">Connectivity assumption</th>
                  <th className="p-4 font-normal">Strength</th>
                  <th className="p-4 font-normal">Constraint</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                  <td className="p-4 font-bold">Internet</td>
                  <td className="p-4 text-gray-400">full network</td>
                  <td className="p-4 text-gray-400">normal connected operation</td>
                  <td className="p-4 text-gray-500">unavailable during outage</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                  <td className="p-4 font-bold">NFC</td>
                  <td className="p-4 text-gray-400">physical proximity</td>
                  <td className="p-4 text-gray-400">short local exchange</td>
                  <td className="p-4 text-gray-500">requires supported hardware</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                  <td className="p-4 font-bold">BLE</td>
                  <td className="p-4 text-gray-400">local radio</td>
                  <td className="p-4 text-gray-400">flexible proximity transport</td>
                  <td className="p-4 text-gray-500">pairing/discovery complexity</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                  <td className="p-4 font-bold">QR</td>
                  <td className="p-4 text-gray-400">optical proximity</td>
                  <td className="p-4 text-gray-400">broad compatibility</td>
                  <td className="p-4 text-gray-500">human/device interaction constraints</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/[0.02]">
                  <td className="p-4 font-bold">SMS</td>
                  <td className="p-4 text-gray-400">telecom path</td>
                  <td className="p-4 text-gray-400">store-and-forward channel</td>
                  <td className="p-4 text-gray-500">delayed, duplicated, reordered</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-white/20 p-8 bg-white/[0.01]">
            <div className="text-xs tracking-widest text-gray-500 mb-8 uppercase">Architecture Flow</div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm font-bold text-center">
              <div className="w-full lg:w-auto p-4 border border-white/20">Payer App</div>
              <div className="text-gray-600">→</div>
              <div className="w-full lg:w-auto p-4 border border-white/20">Payment Engine</div>
              <div className="text-gray-600">→</div>
              <div className="w-full lg:w-auto p-4 border border-white/20">Transport Adapter</div>
              <div className="text-gray-600">→</div>
              <div className="w-full lg:w-auto p-4 border border-white/20">Merchant App</div>
              <div className="text-gray-600">→</div>
              <div className="w-full lg:w-auto p-4 border border-white/20">Local Ledger</div>
              <div className="text-gray-600">→</div>
              <div className="w-full lg:w-auto p-4 border border-white/20">Reconciliation API</div>
              <div className="text-gray-600">→</div>
              <div className="w-full lg:w-auto p-4 border border-white/20">Backend</div>
            </div>
          </div>
        </section>

        {/* 5. Demo */}
        <section id="demo" className="py-24 border-b border-white/20">
          <h2 className="text-xs tracking-widest text-gray-500 mb-4 uppercase">Product Demonstration</h2>
          <h3 className="text-3xl lg:text-5xl font-sans font-bold mb-8">
            See what happens when the network disappears.
          </h3>
          <p className="text-gray-400 max-w-2xl text-lg mb-16 leading-relaxed">
            Start connected. Disable the network. Complete a bounded local transaction. Restore connectivity and watch the transaction move from local storage to reconciliation.
          </p>

          <div className="border border-white/20 bg-black overflow-hidden relative">
            <div className="border-b border-white/20 bg-white/5 p-4 flex justify-between items-center">
              <div className="text-xs font-bold tracking-widest">INTERACTIVE SIMULATION</div>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
            </div>
            <div className="p-8 lg:p-12 font-mono text-sm space-y-8">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div>
                  <div className="text-gray-500 mb-1">Connectivity</div>
                  <div className="font-bold text-red-500">OFFLINE</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Transport</div>
                  <div className="font-bold">NFC</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Amount</div>
                  <div className="font-bold">₹240</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">State</div>
                  <div className="font-bold text-yellow-500">AUTHORIZED LOCALLY</div>
                </div>
              </div>

              <div className="flex justify-center items-center py-12 text-gray-400 text-xs tracking-widest">
                PAYER <span className="mx-4">─── NFC ───</span> MERCHANT <span className="mx-4">───</span> LOCAL LEDGER
              </div>

              <div className="flex justify-center">
                <button className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors uppercase font-bold text-xs tracking-widest">
                  Restore Connectivity
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Transaction State Journey */}
        <section className="py-24 border-b border-white/20">
          <div className="text-xs tracking-widest text-gray-500 mb-12 uppercase">Transaction State Journey</div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
            <span className="text-white">CREATED</span>
            <span className="text-gray-600">→</span>
            <span className="text-white">AUTHORIZED</span>
            <span className="text-gray-600">→</span>
            <span className="text-white">SIGNED</span>
            <span className="text-gray-600">→</span>
            <span className="text-white">TRANSFERRED</span>
            <span className="text-gray-600">→</span>
            <span className="text-white">RECEIVED</span>
            <span className="text-gray-600">→</span>
            <span className="text-gray-400">STORED</span>
            <span className="text-gray-600">→</span>
            <span className="text-yellow-500">SYNC_PENDING</span>
            <span className="text-gray-600">→</span>
            <span className="text-gray-600">RECONCILED</span>
          </div>
        </section>

        {/* 9. Security Section */}
        <section id="protocol" className="py-24 border-b border-white/20">
          <h2 className="text-3xl lg:text-5xl font-sans font-bold mb-8">
            Offline does not mean unverified.
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mb-16 leading-relaxed">
            The prototype uses device-bound credentials, signed transaction envelopes, counters, replay controls, local ledger integrity, and backend reconciliation checks to constrain what can be accepted during degraded connectivity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="border-t border-white/20 pt-4">
              <h3 className="font-bold mb-2">CREDENTIAL</h3>
              <p className="text-sm text-gray-400">Device-bound keys ensuring non-repudiation of payer.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <h3 className="font-bold mb-2">SIGNATURE</h3>
              <p className="text-sm text-gray-400">Ed25519 signatures over transaction envelopes.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <h3 className="font-bold mb-2">COUNTER</h3>
              <p className="text-sm text-gray-400">Protects against replay of an already-used sequence.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <h3 className="font-bold mb-2">LEDGER</h3>
              <p className="text-sm text-gray-400">Local append-only integrity for stored transactions.</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <h3 className="font-bold mb-2">RECONCILIATION</h3>
              <p className="text-sm text-gray-400">Idempotent eventual global consistency check.</p>
            </div>
          </div>
        </section>

        {/* 11. Research Section */}
        <section id="research" className="py-24">
          <h2 className="text-3xl lg:text-5xl font-sans font-bold mb-8">
            Built to be measured, attacked, and questioned.
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mb-12 leading-relaxed">
            ResilientPay is evaluated through controlled simulations and device experiments covering unreliable transport, duplicate messages, delayed synchronization, replay attempts, reconciliation conflicts, and risk-model performance.
          </p>
          <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors font-bold text-sm tracking-widest uppercase">
            Read the Protocol
          </button>
        </section>

      </main>

      {/* 15. Footer */}
      <footer className="border-t border-white/20 bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
            <div>
              <div className="text-xs tracking-widest text-gray-500 mb-4 uppercase">Architecture</div>
              <ul className="space-y-2 text-gray-400 font-bold">
                <li><a href="#" className="hover:text-white">Core SDK</a></li>
                <li><a href="#" className="hover:text-white">Transport Adapters</a></li>
                <li><a href="#" className="hover:text-white">Settlement Backend</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs tracking-widest text-gray-500 mb-4 uppercase">Protocol</div>
              <ul className="space-y-2 text-gray-400 font-bold">
                <li><a href="#" className="hover:text-white">Specification</a></li>
                <li><a href="#" className="hover:text-white">Security Model</a></li>
                <li><a href="#" className="hover:text-white">Experiments</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs tracking-widest text-gray-500 mb-4 uppercase">Resources</div>
              <ul className="space-y-2 text-gray-400 font-bold">
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Developer Guide</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs tracking-widest text-gray-500 mb-4 uppercase">Legal</div>
              <ul className="space-y-2 text-gray-400 font-bold">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Security Disclosure</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold">
            <div>© 2026 ResilientPay Research Project. Open Source under MIT.</div>
            <div className="px-3 py-1 border border-white/20 bg-white/5 uppercase tracking-widest text-white">
              RESEARCH PROTOTYPE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
