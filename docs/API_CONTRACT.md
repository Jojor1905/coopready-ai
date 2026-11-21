# Proposed FastAPI contract

These are proposals, not live endpoints. The frontend uses its demo fixtures until `NEXT_PUBLIC_DEMO_MODE=false`.

- `POST /v1/faq/query` body `{question}` → `{text, verified, citations:[{title,url,date}]}`. Only return `verified:true` when backed by an approved faculty/CO301 source.
- `POST /v1/resume/analyze` multipart `resume`, `company`, `role` → matching result with evidence and provenance.
- `GET /v1/companies?q=` → company search candidates with source URLs.
- `POST /v1/interviews` body `{language,count,difficulty,company,role}` → `{id}`; separate endpoints should handle question turns, STT, TTS, and feedback.

Never return fit scores or claim unverified company/role data as fact.
