# ResilientPay Web — Research Dashboard & Interactive Simulator

This repository contains the official web presentation, interactive protocol simulator, and research documentation interface for **ResilientPay**, an academic and engineering prototype for connectivity-resilient payments.

## Architecture

The dashboard is built with:
- **Framework**: Next.js 16 (App Router)
- **UI & Styling**: React 19, Tailwind CSS v4, IBM Plex fonts
- **Static Generation**: Completely static export / prerendered routes for instant load times and zero backend dependencies
- **Interactive Simulator**: Real-time step-by-step visualizer for all 8 protocol scenarios (Online baseline, Offline NFC, Offline BLE, Dynamic Optical QR, Air-gapped C0, Connectivity restoration, Replay defense, and Tampered payload detection)

## Features

1. **Transaction State Journey**: Interactive explorer mapping protocol states (`CREATED` → `AUTHORIZED` → `SIGNED` → `TRANSFERRED` → `RECEIVED` → `STORED` → `SYNC_PENDING` → `RECONCILED` → `SETTLED`).
2. **Multi-Modal Transport Matrix**: Detailed capabilities and benchmark metrics across NFC, BLE, QR, SMS, and HTTPS.
3. **Research Evidence & Benchmarks**: Summary results of empirical experiments (E1 to E6) covering transport latencies, canonical CBOR savings, double-spend resistance, and hash-chain audit throughput.
4. **Legal & Trust Disclaimers**: Explicit prototype boundary declarations per research requirements.

## Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run linter
npm run lint

# Build production bundle
npm run build
```

## Related Repositories

- **Core Protocol Monorepo**: [Shikhyy/ResilientPay](https://github.com/Shikhyy/ResilientPay) (Pure Rust Core SDK, Go Reconciler, Python Simulator)
- **Android Dual-App**: [Shikhyy/resilientpay-android](https://github.com/Shikhyy/resilientpay-android) (Native Android Payer Wallet & Merchant POS Terminal)
