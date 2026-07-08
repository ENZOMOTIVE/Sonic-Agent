# Sonic Agent

> Sonic Agent is an AI-assisted workflow project that connects model-powered behavior with application or protocol tooling.

## The Story

Sonic Agent starts with a simple goal: make model-driven behavior useful around wallets, tokens, contracts, or blockchain workflows. Its shape tells the same story: the service layer and the AI-assisted workflow live close enough together that a maintainer can see the project as a whole before diving into individual folders.

## What It Includes

- A service layer for APIs, realtime behavior, bot logic, or server-side workflows.
- AI-assisted behavior through model providers, bot flows, or agent-oriented tooling.

## How It Is Put Together

| Path | Role |
| --- | --- |
| `.gitattributes` | project file or folder |
| `.gitignore` | ignored local, dependency, and build files |
| `Allora` | project file or folder |
| `SonicBlazeTestnet` | project file or folder |
| `SonicBo.png` | project file or folder |
| `index.ts` | TypeScript source |
| `package-lock.json` | locked dependency versions |
| `package.json` | Node package scripts and dependencies |
| `tsconfig.base.json` | TypeScript compiler settings |
| `tsconfig.json` | TypeScript compiler settings |

## Local Development

```bash
git clone https://github.com/ENZOMOTIVE/Sonic-Agent.git
cd Sonic-Agent
```

```bash
npm install
```

## Command Surface

| Area | Commands |
| --- | --- |
| `package.json` | `test` |

## Configuration

- Document API ports, database URLs, third-party credentials, and service endpoints in `.env.example` before deployment.
- Keep wallet private keys, RPC URLs, mnemonics, and contract secrets outside version control.
- Keep model provider keys such as OpenAI or AI SDK credentials in local environment files only.

## Quality Checks

- From the repository root, run `npm test`.

## Where To Take It Next

- Document the main API routes, bot events, or service responsibilities with example inputs and outputs.
- Describe the model provider, prompt boundaries, and evaluation approach for the AI-assisted parts.
- Keep setup commands current whenever dependencies, scripts, or deployment targets change.
- Record important product decisions here so the repository keeps its story as the code evolves.

## Project Metadata

| Field | Details |
| --- | --- |
| Repository | `ENZOMOTIVE/Sonic-Agent` |
| Categories | `Agentic AI`, `Protocol` |
| Primary stack | Express, Node.js, TypeScript |


## License

No license file is currently committed. Add one before distributing this project publicly.
