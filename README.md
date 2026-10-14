# National Election Voting System MVP (Mock Demo)

A Next.js 14 + TypeScript + Tailwind CSS prototype for demonstrating a Nigerian political-election voting workflow using fictional mock voter profiles and NIN-like identifiers. It is not connected to NIMC, INEC, any state electoral commission, or any government service.

## Requirements
- Node.js 20 LTS recommended (Node.js 18.17+ works with this Next.js version)
- npm

## Setup
1. Extract the ZIP archive.
2. Open the extracted `voting-system-mvp` folder in a terminal or VS Code.
3. Install packages: `npm install`
4. Run the development server: `npm run dev`
5. Open http://localhost:3000
6. For a production compilation check, run `npm run build`; run `npm start` after a successful build.

## Demo NINs
All are fictional and exist only in local demo data:
- `12345678901` — Amina Yusuf; registered adult in Abuja FCT; eligible for the default ongoing presidential demo.
- `23456789012` — Chinedu Okafor; registered adult in Lagos.
- `34567890123` — Zainab Bello; under 18 on the demo election date.
- `56789012345` — Ngozi Eze; unregistered profile.
- `45678901234` — Tunde Adeyemi; registered adult in Lagos with a different constituency.
- `67890123456` — Ibrahim Musa; registered adult in Kano.
- `78901234567` — Temitope Adebayo; registered adult in Oyo.
- `89012345678` — Fatima Abdullahi; suspended registration status.

These 11-digit strings are fabricated identifiers and are not intended to be real or valid government NINs.

## Use the voter journey
1. From the dashboard, select **Start voting journey** or open an election's voter link.
2. Enter a demo NIN from the list above.
3. Review the mock profile summary and elections grouped into Ongoing, Upcoming, and Completed.
4. Select an ongoing election for which the voter is eligible.
5. Choose one candidate per position, review, and confirm submission.
6. The app records a ballot and a separate participation record. The same voter cannot participate twice in the same election in this browser profile, but can vote in other eligible elections.

## Administrator workflow
- Create elections from **New election**.
- Choose one of the seven political election types.
- Configure dates and the jurisdiction fields required for that election type.
- Add positions, fictional candidates, party labels and manifesto summaries.
- Open **Manage** to inspect profile eligibility, copy the voter link, suspend an election or return it to date-based status, view participation, and export results after closing.
- Use **Reset demo data** on the dashboard to restore the sample data in the current browser.

## Eligibility logic
A reusable `eligibility()` service checks registered status, age (18+ on election start date), and relevant geography. Presidential eligibility is nationwide for registered adults. Other election types compare the appropriate state, senatorial district, federal constituency, state constituency, LGA, or ward. Election status is enforced during both election selection and ballot submission.

## Data architecture
- `VoterProfile`: mock NIN and profile/geography data.
- `Election` / `ElectionJurisdiction`: contest settings and geographical scope.
- `PoliticalParty` and `Candidate`: fictional party/candidate presentation data.
- `Ballot`: election and candidate choices only; no NIN or voter identity attached.
- `VoterParticipation`: separate voter/election participation record used for duplicate prevention.
- `lib/store.ts`: mock seed data, browser persistence, status and eligibility services.

## Important limitations
- `localStorage` is browser-local, editable by users, not shared across devices, and not a database.
- NIN lookup is against fictional records only. No NIMC/INEC integration, real identity verification, or official voter registration lookup exists.
- Duplicate-vote prevention is a client-side demo rule and can be bypassed by manipulating browser storage or using another browser/device.
- Ballot choices are stored separately from voter participation in the data model, but this prototype is not independently audited and does not provide production-grade ballot secrecy, cryptographic integrity, authentication, or server-side enforcement.
- Candidate names, party names, logos, locations and elections are demonstration content and must not be interpreted as actual candidates, political parties, official constituencies, or official results.
- Do not use this MVP for real, official, or high-stakes elections. Real deployment would require legal authorization, electoral authority approval, secure identity verification, independent security audits, robust backend controls, auditability, accessibility testing, and coercion-resistant voting safeguards.
