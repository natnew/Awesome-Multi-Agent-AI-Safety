# Awesome Multi-Agent AI Safety

> A curated, technically rigorous list of research, infrastructure, testbeds, and tools for securing systems of interacting AI agents.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![License: CC0](https://img.shields.io/badge/license-CC0%201.0-lightgrey.svg)](./LICENSE)

AI agents are increasingly deployed alongside other agents, built and operated by different actors over shared infrastructure. Interacting agent populations introduce risks that no single-agent safeguard addresses: collusion and covert communication, attack propagation between agents, cascading failures, emergent collective capabilities, and trust failures between agents that have no reliable way to identify or commit to one another.

This repository is a map of the multi-agent AI safety stack. It is designed for practitioners, researchers, security teams, platform engineers, and governance leaders building or evaluating systems of AI agents that interact.

Single-agent agentic safety — prompt-injection defence, guardrails, sandboxing, and benchmarks for individual agents — is deliberately out of scope; see [Related repositories](#related-repositories) for lists that cover it.

As of July 20, 2026, the curated sections below contain 48 entries aligned to the repository taxonomy.

## Contents

- [Foundations and framing](#foundations-and-framing)
- [Threat models and attacks](#threat-models-and-attacks)
- [Agent identity, trust, and interaction infrastructure](#agent-identity-trust-and-interaction-infrastructure)
- [Oversight and control of agent populations](#oversight-and-control-of-agent-populations)
- [Multi-agent environments and simulation testbeds](#multi-agent-environments-and-simulation-testbeds)
- [Multi-agent frameworks and orchestration](#multi-agent-frameworks-and-orchestration)
- [Communities, organisations, and ongoing work](#communities-organisations-and-ongoing-work)
- [Contributing](#contributing)
- [License](#license)

---

## Foundations and framing

High-level resources that define the multi-agent safety problem space and its research agenda.

- **[Open Challenges in Multi-Agent Security](https://arxiv.org/abs/2505.02077)** - Field-defining survey of securing networks of decentralised agents, taxonomising threats from secret collusion to swarm attacks and setting a unified research agenda. *Survey / field agenda*
- **[Multi-Agent Risks from Advanced AI](https://arxiv.org/abs/2502.14143)** - Cooperative AI Foundation report mapping miscoordination, conflict, and collusion failure modes alongside seven cross-cutting risk factors. *Report / risk taxonomy*
- **[Open Problems in Cooperative AI](https://arxiv.org/abs/2012.08630)** - Foundational agenda for building AI systems that cooperate safely with other machines and humans. *Paper / foundational*
- **[Distributional AGI Safety](https://arxiv.org/abs/2512.16856)** - Google DeepMind work on general capability emerging from coordinated networks of specialised agents, and the safeguards that hypothesis demands. *Paper / collective capability*
- **[Virtual Agent Economies](https://arxiv.org/abs/2509.10147)** - Framework for analysing and governing emergent economies of transacting AI agents, including systemic-risk concerns. *Paper / agent economies*

---

## Threat models and attacks

Resources that map how interacting agent systems fail or are exploited: inter-agent attack vectors, collusion, and structural vulnerabilities.

- **[OWASP Multi-Agentic System Threat Modeling Guide](https://genai.owasp.org/resource/multi-agentic-system-threat-modeling-guide-v1-0/)** - Applies OWASP's agentic threat taxonomy to real-world multi-agent systems through MAESTRO-based worked examples. *Threat modelling / practitioner guide*
- **[Extending the OWASP Multi-Agentic System Threat Modeling Guide](https://arxiv.org/abs/2508.09815)** - Research-driven extensions to the OWASP guide informed by multi-agent security findings. *Paper / threat modelling*
- **[MAESTRO](https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro)** - Cloud Security Alliance seven-layer threat-modelling framework built specifically for agentic and multi-agent AI systems. *Threat modelling / framework*
- **[Architecture Matters for Multi-Agent Security](https://arxiv.org/abs/2604.23459)** - Analysis of how multi-agent system architecture and topology choices shape security properties and attack surfaces. *Paper / architecture*
- **[From Safety Risk to Design Principle: Peer-Preservation in Multi-Agent LLM Systems](https://arxiv.org/abs/2604.08465)** - Analyses peer-preservation as an emergent tendency for agents to deceive, interfere with shutdown, fake alignment, or protect peer models, and identifies architecture-level risk vectors and identity-anonymisation mitigations. *Paper / emergent misalignment*
- **[Secret Collusion among AI Agents](https://arxiv.org/abs/2402.07510)** - Evaluations and safeguards for steganographic collusion between generative agents. *Paper / covert communication*
- **[Prompt Infection](https://arxiv.org/abs/2410.07283)** - LLM-to-LLM prompt injection that propagates between agents in multi-agent systems, with a tagging defence. *Paper / attack propagation*
- **[Agents of Chaos](https://arxiv.org/abs/2602.20021)** - Large red-teaming study of deployed autonomous agents documenting identity spoofing, compliance with non-owners, and destructive system-level actions. *Paper / red teaming*

---

## Agent identity, trust, and interaction infrastructure

Resources on the primitives that trustworthy agent-to-agent interaction depends on: identity, authentication, delegation, provenance, and reputation.

- **[A2A Protocol](https://a2a-protocol.org/latest/)** - Linux Foundation open standard for secure communication and task delegation between agents from different vendors. *Protocol / interoperability*
- **[Threat Modeling the A2A Protocol](https://cloudsecurityalliance.org/blog/2025/04/30/threat-modeling-google-s-a2a-protocol-with-the-maestro-framework)** - Cloud Security Alliance analysis of agent-to-agent protocol risks using the MAESTRO framework. *Threat model / protocol security*
- **[IDs for AI Systems](https://arxiv.org/abs/2406.12137)** - Proposal for instance-level identifiers that support accountability, certification checks, and incident attribution. *Paper / identity*
- **[Infrastructure for AI Agents](https://arxiv.org/abs/2501.10114)** - Technical systems and protocols for attributing agent actions, shaping interactions, and detecting harmful behaviour. *Paper / infrastructure*
- **[Authenticated Delegation and Authorized AI Agents](https://arxiv.org/abs/2501.09674)** - OAuth and OpenID Connect extensions for scoped delegation to agents with clear chains of accountability. *Paper / authentication*
- **[AIP: Agent Identity Protocol](https://arxiv.org/abs/2603.24775)** - Introduces invocation-bound capability tokens for verifiable identity, attenuated authorisation, provenance, and auditable multi-hop delegation across MCP, A2A, and HTTP. *Paper / verifiable delegation*
- **[Scaling Trust](https://aria.org.uk/opportunity-spaces/trust-everything-everywhere/scaling-trust/)** - ARIA programme building open tooling and foundational research for secure coordination between agents in adversarial settings. *Research programme / coordination*
- **[Can Trustless Agents Be Trusted?](https://arxiv.org/abs/2606.26028)** - Empirical study of ERC-8004 identity and reputation registries showing weak evidence links, inactive registrations, low-cost reputation manipulation, and coordinated Sybil activity. *Paper / trust infrastructure*

---

## Oversight and control of agent populations

Methods for detecting, attributing, and intervening on unsafe behaviour across deployed agents, designed to stay robust when agents actively evade them.

- **[AI Control: Improving Safety Despite Intentional Subversion](https://arxiv.org/abs/2312.06942)** - Control protocols that stay safe even when capable models actively try to subvert oversight. *Paper / control*
- **[ControlArena](https://github.com/UKGovernmentBEIS/control-arena)** - UK AISI library for designing and running AI control experiments that test protocols against subversion. *Open-source / control evaluations*
- **[SHADE-Arena](https://www.anthropic.com/research/shade-arena-sabotage-monitoring)** - Evaluation environment measuring whether agents can pursue hidden sabotage goals while evading an AI monitor. *Evaluation / sabotage and monitoring*
- **[Multi-Agent AI Control: Distributed Attacks Hamper Per-Instance Monitors](https://arxiv.org/abs/2607.07368)** - Introduces FakeLab for evaluating coordinated attacks distributed across multiple agent instances and the limits of per-instance monitoring. *Paper / distributed control*
- **[Norm Enforcement for AI Agents](https://yaowenye.com/norm-enforcement)** - Studies enforcement mechanisms for competitive language-model agents and reliability-aware escalating penalties for repeated norm violations. *Paper / norm enforcement*
- **[When Agents Go Rogue](https://arxiv.org/abs/2607.06807)** - Introduces AcMAS for detecting semantically stealthy malicious behaviour from agents' internal reasoning states and guiding restoration of compromised agents. *Paper / malicious-agent detection*
- **[A Sober Look at Agentic Misalignment in Automated Workflows](https://arxiv.org/abs/2605.24197)** - Formally models agentic misalignment as optimisation of implicit proxy utilities and introduces Agentic Evidence Attribution for identifying and correcting failures during multi-agent collaboration. *Paper / evidence-based alignment*

---

## Multi-agent environments and simulation testbeds

Reproducible environments for studying how populations of agents behave, cooperate, and fail at scale.

- **[Concordia](https://github.com/google-deepmind/concordia)** - Google DeepMind library for generative agent-based models simulating agent interactions in grounded social and digital environments. *Environment / generative ABM*
- **[Melting Pot](https://github.com/google-deepmind/meltingpot)** - Test-scenario suite measuring how multi-agent populations generalise to novel social situations and unfamiliar co-players. *Environment / multi-agent RL*
- **[OASIS](https://github.com/camel-ai/oasis)** - Open social-media simulator supporting up to one million LLM-driven agents for studying population-scale dynamics. *Simulator / population scale*
- **[GovSim](https://arxiv.org/abs/2404.16698)** - Shared-resource simulation showing when societies of LLM agents achieve or fail at sustainable cooperation. *Environment / cooperation*
- **[Human Values Matter: Investigating How Misalignment Shapes Collective Behaviors in LLM Agent Communities](https://arxiv.org/abs/2604.05339)** - Introduces CIVA, a controlled social-science-grounded environment for testing how value misspecification affects agent communities, including catastrophic collapse, deception, and emergent power-seeking. *Environment / collective value alignment*
- **[Increasing Intelligence in AI Agents Can Worsen Collective Outcomes](https://arxiv.org/abs/2603.12129)** - Study of AI-agent populations showing how diversity, reinforcement learning, tribe formation, and resource scarcity shape overload risks under constrained capacity. *Paper / collective failure*
- **[Evaluating Collective Behaviour of Hundreds of LLM Agents](https://arxiv.org/abs/2602.16662)** - Framework evaluating model-generated strategies across hundreds of agents in social dilemmas to study cultural selection and harmful collective equilibria. *Paper / population evaluation*
- **[Institutional Red-Teaming](https://arxiv.org/abs/2607.07695)** - Benchmark methodology for testing how deployment rules causally shape collective safety outcomes across multi-agent AI populations. *Paper / deployment evaluation*
- **[A Unified Framework for the Evaluation of LLM Agentic Capabilities](https://github.com/whfeLingYu/A-Unified-Framework-for-the-Evaluation-of-LLM-Agentic-Capabilities)** - Sandboxed evaluation framework standardising agent benchmarks through shared instruction, tool, environment, and agent-blueprint interfaces, including multi-agent benchmarks and failure attribution. *Framework / evaluation*
- **[Generative Agents](https://arxiv.org/abs/2304.03442)** - Foundational simulation of a believable agent society with memory, planning, and reflection. *Paper / agent societies*
- **[Generative Agent Simulations of 1,000 People](https://arxiv.org/abs/2411.10109)** - Stanford architecture simulating the attitudes and behaviours of 1,052 real individuals from qualitative interviews, a foundation for human-grounded simulation. *Paper / human-grounded simulation*
- **[SocioVerse](https://arxiv.org/abs/2504.10157)** - World model for social simulation aligning LLM agent populations with a pool of ten million real-world user profiles. *Simulator / population realism*

---

## Multi-agent frameworks and orchestration

Frameworks for building multi-agent systems with bounded, observable collaboration patterns.

- **[AutoGen](https://github.com/microsoft/autogen)** - Conversational multi-agent framework for bounded collaboration patterns. *Framework / multi-agent*
- **[AG2](https://github.com/ag2ai/ag2)** - Successor ecosystem for AutoGen-style collaborative agents and workflows. *Framework / multi-agent*
- **[LangGraph](https://github.com/langchain-ai/langgraph)** - Stateful graph-based orchestration for multi-step and multi-agent workflows. *Framework / state machines*
- **[CAMEL](https://arxiv.org/abs/2303.17760)** - Early role-playing framework for studying coordination and emergent behaviour between communicating agents. *Paper / coordination*
- **[SearchOS-V1](https://arxiv.org/abs/2607.15257)** - Multi-agent information-seeking framework that externalises search progress into shared evidence graphs, coverage maps, frontier tasks, and failure memory for more inspectable collaboration. *Paper / shared state*

---

## Communities, organisations, and ongoing work

Groups, labs, organisations, and ecosystems doing relevant work.

- **[Cooperative AI Foundation](https://www.cooperativeai.com/)** - Charity funding and coordinating research on safe cooperation between AI systems and with humans. *Research funder / cooperation*
- **[Redwood Research](https://www.redwoodresearch.org/)** - Nonprofit focused on AI control, threat assessment, and mitigations for intentionally misaligned systems. *Research organisation / control*
- **[UK AI Security Institute](https://www.aisi.gov.uk/)** - UK government institute for testing, measurement, and safeguards research, including AI control evaluations. *Government lab / safety science*

---

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

Suggested improvements include:

- adding high-quality missing resources
- improving category structure
- tightening descriptions
- removing duplicates
- updating stale links
- improving editorial consistency

---

## Related repositories

- **[Awesome LLM Security](https://github.com/corca-ai/awesome-llm-security)** - Broader resources on LLM application security, including single-agent defence.
- **[Awesome MCP Security](https://github.com/Puliczek/awesome-mcp-security)** - Curated resources on Model Context Protocol security.

---

## License

This work is licensed under [CC0 1.0](./LICENSE), unless stated otherwise.
