# CoopReady AI

Friendly, bilingual cooperative-education preparation frontend for Thai university students. It ships in explicitly labeled Demo Mode and does not claim real AI, authoritative academic answers, microphone capture, or resume parsing without a backend.

## Requirements and setup

Node.js 20.9+ and npm. Copy `.env.example` to `.env.local` when connecting FastAPI.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production checks: `npm run lint` and `npm run build`.

## Routes

`/` workspace home · `/faq` academic chat · `/resume` resume intake/results · `/interview` demo voice flow · `/interview/results` demo coaching · `/history` privacy-first history.

## Integration

The typed boundary is in `src/lib/api.ts`; shared contracts are in `src/lib/types.ts`. See `docs/API_CONTRACT.md` and `docs/FRONTEND_HANDOFF.md`. Keep `NEXT_PUBLIC_DEMO_MODE=true` until approved sources and services are deployed.

## Privacy and factual safety

No raw resume, transcript, or private conversation is stored by this frontend. FAQ intentionally shows a no-verified-answer state until an approved faculty/CO301 source is integrated. The intent dataset must never provide authoritative content.
