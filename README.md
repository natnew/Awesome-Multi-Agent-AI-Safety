# Awesome AI Safety for Agentic Systems

> A curated, technically rigorous list of tools, frameworks, papers, benchmarks, patterns, and resources for building, evaluating, and securing agentic AI systems in real-world environments.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![License: CC0](https://img.shields.io/badge/license-CC0%201.0-lightgrey.svg)](./LICENSE)

Agentic systems introduce new classes of risk beyond conventional LLM applications: prompt injection, indirect prompt injection, tool misuse, memory poisoning, unsafe delegation, hidden state corruption, weak approval workflows, and unreliable autonomy under real-world conditions.

This repository is a production-oriented map of the AI safety stack for agentic systems. It is designed for practitioners, researchers, security teams, platform engineers, governance leaders, and anyone building or evaluating AI systems that reason, plan, act, and use tools.

As of March 20, 2026, the curated sections below contain 121 entries aligned to the repository taxonomy.

## What this list is for

This list focuses on the practical safety, reliability, and governance challenges introduced by agentic AI systems, including:

- systems that use tools, APIs, filesystems, browsers, code execution, or external services
- multi-agent systems with delegation, routing, planning, critique, or memory
- production AI workflows that require approval gates, auditability, and operational safeguards
- evaluation and red teaming for autonomous or semi-autonomous behaviours
- design patterns for secure, observable, governable AI execution

## Editorial principles

This is not a generic list of AI tools.

Entries are included because they are relevant to the safe design, evaluation, monitoring, control, or governance of agentic systems. Preference is given to resources that are technically credible, well-documented, practically useful, and meaningfully distinct.

We aim to optimise for:

- depth over hype
- operational relevance over novelty
- clarity over category sprawl
- curation over indiscriminate accumulation

## How to use this list

You can use this repository in several ways:

- **Builders** can find tools, patterns, and frameworks for securing agentic systems
- **Researchers** can discover papers, benchmarks, and open problems
- **Security teams** can locate threat models, red-team methods, and defensive controls
- **Governance and assurance teams** can identify oversight, approval, and audit patterns
- **Learners** can follow a structured path through the field

## Contents

- [Foundations and framing](#foundations-and-framing)
- [Threat models and attack surfaces](#threat-models-and-attack-surfaces)
- [Prompt injection and context manipulation](#prompt-injection-and-context-manipulation)
- [Tool use, permissions, and execution boundaries](#tool-use-permissions-and-execution-boundaries)
- [Memory safety and context integrity](#memory-safety-and-context-integrity)
- [Guardrails and policy enforcement](#guardrails-and-policy-enforcement)
- [Evaluations, red teaming, and stress testing](#evaluations-red-teaming-and-stress-testing)
- [Observability, tracing, and forensics](#observability-tracing-and-forensics)
- [Human oversight, approvals, and governance](#human-oversight-approvals-and-governance)
- [Benchmarks, datasets, and test suites](#benchmarks-datasets-and-test-suites)
- [Reference architectures and engineering patterns](#reference-architectures-and-engineering-patterns)
- [Papers, essays, and research programmes](#papers-essays-and-research-programmes)
- [Courses, guides, and learning resources](#courses-guides-and-learning-resources)
- [Communities, organisations, and ongoing work](#communities-organisations-and-ongoing-work)
- [Contributing](#contributing)
- [Inclusion criteria](#inclusion-criteria)
- [License](#license)

---

## Foundations and framing

High-level resources that define the problem space, core concepts, and emerging safety model for agentic systems.

- **[NIST AI RMF 1.0](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10)** - Foundational risk-management framework for governing, measuring, and managing AI systems. *Framework / governance*
- **[NIST Generative AI Profile (AI 600-1)](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)** - Companion profile for applying the AI RMF to generative AI systems. *Framework / generative AI*
- **[NIST AI RMF Playbook](https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook)** - Operational guidance for turning AI RMF principles into concrete engineering and governance actions. *Playbook / implementation*
- **[NIST AI Resource Center](https://airc.nist.gov/)** - NIST hub for AI RMF operationalisation, TEVV resources, and supporting materials. *Reference / implementation*
- **[OpenAI Preparedness Framework](https://openai.com/index/updating-our-preparedness-framework/)** - OpenAI's current framework for assessing and mitigating severe frontier-model risks. *Lab policy / risk management*
- **[OpenAI Model Spec](https://openai.com/index/sharing-the-latest-model-spec/)** - Public specification for desired model behaviour, chain of command, and safety trade-offs. *Model behaviour / alignment*
- **[Anthropic Responsible Scaling Policy](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy)** - Public governance framework tying stronger safeguards to stronger model capabilities. *Lab policy / catastrophic risk*
- **[Anthropic Frontier Safety Roadmap](https://www.anthropic.com/responsible-scaling-policy/roadmap)** - Public roadmap for future security, safeguards, alignment, and policy work. *Roadmap / preparedness*

---

## Threat models and attack surfaces

Resources that map how agentic systems fail or are exploited in practice.

- **[OWASP GenAI Security Project](https://genai.owasp.org/)** - Broad security programme covering LLM and agentic application risks, controls, and community resources. *Security / taxonomy*
- **[OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)** - Baseline risk taxonomy for LLM systems that still applies to many agentic stacks. *Threat model / foundational*
- **[OWASP Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)** - Agent-specific risk catalogue focused on delegation, tools, autonomy, and hidden state. *Threat model / agentic*
- **[OWASP Agentic Security Initiative](https://genai.owasp.org/initiatives/agentic-security-initiative/)** - OWASP initiative focused on practical methods for securing agent-based systems. *Community / threat research*
- **[MITRE ATLAS](https://atlas.mitre.org/)** - Adversary knowledge base for attacks against AI systems and AI-enabled operations. *Adversary framework / defence mapping*
- **[NIST CAISI](https://www.nist.gov/caisi)** - NIST's Center for AI Standards and Innovation, relevant for evaluation and standards coordination. *Standards / measurement*
- **[Google Secure AI Framework (SAIF)](https://saif.google/)** - Security framework for secure-by-design AI systems across deployment and operational boundaries. *Security framework / design*
- **[Amazon Bedrock Prompt Injection Security](https://docs.aws.amazon.com/en_us/bedrock/latest/userguide/prompt-injection.html)** - AWS guidance on the shared-responsibility model and prompt-injection threat surface for agentic applications. *Threat model / cloud guidance*

---

## Prompt injection and context manipulation

Resources focused on attacks that exploit model instructions, retrieved content, tool-facing prompts, and indirect prompt channels.

- **[Prompt Shields in Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection)** - Microsoft service for detecting adversarial user prompts and malicious document content before model execution. *Detection / managed service*
- **[Lakera PINT Benchmark](https://www.lakera.ai/blog/lakera-pint-benchmark)** - Benchmark for evaluating prompt-injection detection systems on realistic attack and false-positive cases. *Benchmark / prompt injection*
- **[Rebuff](https://github.com/protectai/rebuff)** - Early open-source prompt-injection defence reference with canary-token and retrieval-based detection ideas. *Open-source / reference implementation*
- **[Prompt Guard](https://huggingface.co/meta-llama/Prompt-Guard-86M)** - Meta model for classifying prompt-injection and jailbreak content. *Classifier / prompt defence*
- **[WAInjectBench](https://github.com/Norrrrrrr-lyn/WAInjectBench)** - Benchmark for prompt-injection detection in web agents across text and image attack channels. *Benchmark / web agents*
- **[Guardrails Detect Prompt Injection](https://github.com/guardrails-ai/detect_prompt_injection)** - Guardrails validator for screening suspected injection attempts in user input. *Validator / runtime defence*
- **[Spotlighting for Indirect Prompt Injection Defence](https://www.microsoft.com/en-us/research/publication/defending-against-indirect-prompt-injection-attacks-with-spotlighting/)** - Microsoft Research paper on provenance signalling to reduce indirect prompt-injection success. *Research / defensive pattern*
- **[Assessing Prompt Injection Risks in 200+ Custom GPTs](https://arxiv.org/abs/2311.11538)** - Empirical study of prompt extraction and file leakage against user-customised GPTs. *Paper / empirical security*

---

## Tool use, permissions, and execution boundaries

Resources for controlling what agentic systems can do, when they can do it, and under what conditions.

- **[Model Context Protocol Intro](https://modelcontextprotocol.io/docs/getting-started/intro)** - Intro to MCP as the standard interface for tool, prompt, and resource exposure. *Protocol / ecosystem*
- **[Model Context Protocol Specification](https://modelcontextprotocol.io/specification/2025-06-18)** - Formal protocol specification for interoperable model-to-tool and model-to-resource integration. *Specification / compatibility*
- **[MCP Authorization Specification](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)** - Authorization model for securing MCP server access and delegated tool use. *Authorization / protocol security*
- **[Open Policy Agent](https://www.openpolicyagent.org/)** - General-purpose policy engine useful for explicit allow/deny checks around agent actions. *Policy engine / enforcement*
- **[Cedar Policy](https://www.cedarpolicy.com/)** - Policy language for fine-grained, auditable authorisation decisions in tool-rich systems. *Policy language / permissions*
- **[Arcade](https://www.arcade.dev/)** - Tool and MCP access platform focused on authorised tool use and lifecycle governance. *Tool governance / commercial*
- **[E2B](https://e2b.dev/)** - Sandboxed cloud runtime for code-executing agents. *Sandbox / execution isolation*
- **[Daytona](https://www.daytona.io/)** - Sandbox and environment platform for isolated, reproducible agent execution. *Sandbox / developer infrastructure*
- **[TWZRD Agent Intel](https://intel.twzrd.xyz)** - On-chain trust scoring and identity verification for AI agent wallets on Solana. Preflight checks and x402 trust receipts for verifying counterparty agents before authorizing tool calls or micropayments. *Counterparty verification / agent identity*

---

## Memory safety and context integrity

Resources focused on the safety of persistent state, retrieved memory, and mutable system context.

- **[Letta](https://github.com/letta-ai/letta)** - Stateful agent framework centred on explicit memory blocks and long-lived agent state. *Memory system / stateful agents*
- **[Mem0](https://github.com/mem0ai/mem0)** - Memory layer for extracting, storing, and retrieving long-term conversational facts. *Memory layer / personalization*
- **[LangMem](https://github.com/langchain-ai/langmem)** - Toolkit for memory extraction, consolidation, and long-term adaptation. *Memory tooling / open-source*
- **[Zep](https://github.com/getzep/zep)** - Memory store and retrieval layer for production conversational and agent systems. *Memory service / production*
- **[Graphiti](https://github.com/getzep/graphiti)** - Temporal knowledge-graph architecture for agent memory with provenance and historical querying. *Knowledge graph / memory integrity*
- **[MemGPT](https://arxiv.org/abs/2310.08560)** - Paper on structured memory management for long-horizon agents. *Paper / memory architecture*
- **[PoisonedRAG](https://github.com/sleeepeer/PoisonedRAG)** - Research repo for knowledge-corruption attacks against RAG pipelines. *Security research / memory poisoning*
- **[MM-PoisonRAG](https://github.com/HyeonjeongHa/MM-PoisonRAG)** - Multimodal RAG poisoning work showing how text and image stores can corrupt downstream behaviour. *Security research / multimodal memory*

---

## Guardrails and policy enforcement

Resources for defining and enforcing behavioural constraints in agentic systems.

- **[NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)** - Open framework for safety, topical, and execution guardrails around LLM applications and agents. *Open-source / runtime control*
- **[Guardrails AI](https://github.com/guardrails-ai/guardrails)** - Validation framework for constraining inputs, outputs, and structured agent responses. *Open-source / validation*
- **[Guardrails Hub](https://hub.guardrailsai.com/)** - Registry of reusable validators, checks, and guardrail components. *Validator ecosystem / reusable rules*
- **[Llama Guard](https://github.com/meta-llama/PurpleLlama/tree/main/Llama-Guard)** - Meta's safety classifier for filtering unsafe prompt and response content. *Classifier / content safety*
- **[ShieldGemma](https://ai.google.dev/responsible/docs/safeguards/shieldgemma)** - Google's open safety classifiers for text and image safety evaluation. *Open model / safeguards*
- **[Amazon Bedrock Guardrails](https://docs.aws.amazon.com/en_us/bedrock/latest/userguide/guardrails.html)** - Managed guardrail layer for harmful content, denied topics, sensitive data, and prompt attacks. *Managed guardrails / cloud platform*
- **[Amazon Bedrock Automated Reasoning Checks](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-automated-reasoning-checks.html)** - Formal-policy validation for auditable response checking against structured rules. *Policy validation / formal methods*
- **[LLM Guard](https://github.com/protectai/llm-guard)** - Open-source sanitisation and detection toolkit for prompt, output, and content risks. *Open-source / defensive controls*

---

## Evaluations, red teaming, and stress testing

Resources for testing agentic systems under failure, manipulation, and adversarial pressure.

- **[Promptfoo](https://github.com/promptfoo/promptfoo)** - Evaluation and red-teaming framework for prompts, agents, and RAG systems. *Open-source / red teaming*
- **[PyRIT](https://github.com/Azure/PyRIT)** - Python toolkit for automated AI red teaming and adversarial safety evaluation. *Open-source / red teaming*
- **[Counterfit](https://github.com/Azure/counterfit)** - Security automation tool for assessing AI model vulnerability and attack surface. *Open-source / adversarial testing*
- **[garak](https://github.com/NVIDIA/garak)** - LLM vulnerability scanner focused on jailbreaks, prompt attacks, leakage, and unsafe behaviours. *Open-source / scanner*
- **[Giskard](https://github.com/Giskard-AI/giskard)** - Testing platform for model quality, hallucination, and safety checks. *Open-source / testing*
- **[Inspect](https://inspect.aisi.org.uk/)** - UK AISI evaluation framework for structured, reproducible testing of models and agents. *Open-source / evaluation harness*
- **[OpenAI Evals](https://github.com/openai/evals)** - OpenAI's framework for building and running custom model evaluations. *Open-source / eval framework*
- **[DeepEval](https://github.com/confident-ai/deepeval)** - LLM evaluation framework for quality, safety, and regression testing in CI. *Open-source / CI-friendly*

---

## Observability, tracing, and forensics

Resources for making agentic systems inspectable before, during, and after execution.

- **[Langfuse](https://github.com/langfuse/langfuse)** - Open-source observability, evals, and prompt-management platform for LLM systems. *Open-source / production*
- **[LangSmith](https://www.langchain.com/langsmith)** - Tracing, evaluation, and debugging platform for agent workflows. *Tracing / commercial*
- **[Braintrust](https://braintrust.dev/)** - Evaluation and observability platform for measuring model and agent quality. *Evals / production*
- **[Arize Phoenix](https://github.com/Arize-ai/phoenix)** - Open-source observability for tracing, evals, and troubleshooting LLM pipelines. *Open-source / observability*
- **[W&B Weave](https://wandb.ai/site/weave/)** - Tracking and evaluation toolkit for prompts, model calls, and agent traces. *Tracing / experiments*
- **[Helicone](https://github.com/Helicone/helicone)** - Proxy and analytics layer for monitoring LLM traffic, latency, and cost. *Gateway / observability*
- **[OpenLLMetry](https://github.com/traceloop/openllmetry)** - OpenTelemetry instrumentation for LLM and agent spans. *Tracing / open standards*
- **[OpenTelemetry](https://opentelemetry.io/)** - Vendor-neutral telemetry standard for traces, metrics, and logs in agent infrastructure. *Standard / observability*

---

## Human oversight, approvals, and governance

Resources that place meaningful human review and organisational accountability around agentic systems.

- **[AISIC](https://www.nist.gov/artificial-intelligence/artificial-intelligence-safety-institute-consortium-aisic)** - NIST consortium coordinating AI safety measurement, testing, and guidance across stakeholders. *Consortium / governance*
- **[AISIC Working Groups](https://www.nist.gov/artificial-intelligence/artificial-intelligence-safety-institute-consortium-aisic/aisic-working)** - Working groups on risk management, testing, provenance, and related safety topics. *Working groups / coordination*
- **[International Network of AI Safety Institutes](https://www.commerce.gov/news/fact-sheets/2024/11/fact-sheet-us-department-commerce-us-department-state-launch-international)** - International coordination effort on testing, risk assessments, and safety science. *International coordination / assurance*
- **[AI Verify Foundation](https://aiverifyfoundation.sg/)** - Singapore-based initiative for practical AI assurance tooling and ecosystem development. *Assurance / governance*
- **[OECD AI Principles](https://oecd.ai/en/ai-principles)** - International principles for trustworthy AI governance and accountability. *Governance principles / international*
- **[ISO/IEC 42001](https://www.iso.org/standard/42001)** - International AI management-system standard for organisational governance and controls. *Standard / management system*
- **[Anthropic ISO 42001 Certification](https://www.anthropic.com/news/anthropic-achieves-iso-42001-certification-for-responsible-ai)** - Example of third-party governance assurance applied to frontier AI development. *Assurance / case study*
- **[OpenAI Safety in Building Agents](https://platform.openai.com/docs/guides/agent-builder-safety)** - Practical guide to approvals, guardrails, structured outputs, and trace grading in agent workflows. *Operational guidance / approvals*

---

## Benchmarks, datasets, and test suites

Resources for measuring the safety, reliability, and robustness of agentic systems.

- **[GAIA](https://gaiabenchmark.com/)** - General assistant benchmark focused on real-world, tool-using, multi-step tasks. *Benchmark / general agents*
- **[AgentBench](https://github.com/THUDM/AgentBench)** - Multi-environment benchmark for LLM agents acting in OS, web, database, and other settings. *Benchmark / multi-environment*
- **[WebArena](https://github.com/web-arena-x/webarena)** - Benchmark for autonomous web agents in realistic browser tasks. *Benchmark / web agents*
- **[VisualWebArena](https://github.com/web-arena-x/visualwebarena)** - Multimodal extension of WebArena for visually grounded web interaction. *Benchmark / multimodal web agents*
- **[WorkArena](https://github.com/ServiceNow/WorkArena)** - Enterprise workflow benchmark built on ServiceNow tasks. *Benchmark / enterprise agents*
- **[BrowserGym](https://github.com/ServiceNow/BrowserGym)** - Browser-agent environment and evaluation toolkit for web interaction tasks. *Environment / browser control*
- **[OSWorld](https://os-world.github.io/)** - Benchmark for agents operating in full desktop environments. *Benchmark / computer use*
- **[SWE-bench](https://github.com/SWE-bench/SWE-bench)** - Real-world software engineering benchmark based on GitHub issues and tests. *Benchmark / coding agents*
- **[AgentHarm](https://huggingface.co/datasets/ai-safety-institute/AgentHarm)** - Safety benchmark focused on harmful and misuse-prone agent behaviour. *Safety benchmark / harmful autonomy*
- **[Tau-bench](https://github.com/sierra-research/tau-bench)** - Customer-service and operational benchmark for practical tool-using agents. *Benchmark / enterprise realism*
- **[ToolSandbox](https://github.com/apple/ToolSandbox)** - Benchmark and environment for evaluating tool-using LLM agents. *Benchmark / tool use*
- **[AssistantBench](https://assistantbench.github.io/)** - Benchmark for long, realistic, time-consuming web tasks. *Benchmark / realistic tasks*
- **[Mind2Web](https://github.com/OSU-NLP-Group/Mind2Web)** - Dataset and benchmark for generalist web navigation and action planning. *Dataset / web agents*
- **[WebLINX](https://github.com/McGill-NLP/weblinx)** - Large benchmark of real user web interactions for training and evaluating agents. *Dataset / web interaction*
- **[ToolTalk](https://github.com/microsoft/ToolTalk)** - Benchmark for conversational tool-use correctness across multi-turn settings. *Benchmark / tool calling*
- **[CRMArena](https://github.com/SalesforceAIResearch/CRMArena)** - Benchmark for realistic CRM workflows and business-task agents. *Benchmark / business agents*
- **[ToolBench](https://github.com/OpenBMB/ToolBench)** - Large-scale tool-learning dataset and evaluation platform for real-world APIs. *Dataset / tool learning*

---

## Reference architectures and engineering patterns

Patterns and example designs for building safe, production-grade agentic systems.

- **[OpenAI Agents SDK (Python)](https://github.com/openai/openai-agents-python)** - Lightweight production SDK with tools, handoffs, guardrails, and tracing. *Framework / orchestration*
- **[OpenAI Agents SDK (JS)](https://github.com/openai/openai-agents-js)** - TypeScript SDK for tool-using, handoff-capable, traceable agent systems. *Framework / orchestration*
- **[LangGraph](https://github.com/langchain-ai/langgraph)** - Stateful graph-based orchestration for multi-step and multi-agent workflows. *Framework / state machines*
- **[Semantic Kernel](https://github.com/microsoft/semantic-kernel)** - Microsoft orchestration SDK with planning, processes, memory, and enterprise patterns. *Framework / enterprise*
- **[PydanticAI](https://github.com/pydantic/pydantic-ai)** - Agent framework built around typed contracts, validation, and explicit tool boundaries. *Framework / typed interfaces*
- **[Google ADK](https://google.github.io/adk-docs/)** - Agent Development Kit for building modular, deployable agents with tool integrations. *Framework / platform*
- **[AutoGen](https://github.com/microsoft/autogen)** - Conversational multi-agent framework for bounded collaboration patterns. *Framework / multi-agent*
- **[AG2](https://github.com/ag2ai/ag2)** - Successor ecosystem for AutoGen-style collaborative agents and workflows. *Framework / multi-agent*
- **[LiteLLM](https://github.com/BerriAI/litellm)** - Model gateway layer useful for standardising policy, routing, logging, and spend control. *Gateway / control plane*
- **[OpenHands](https://github.com/OpenHands/OpenHands)** - Open software-agent platform useful for studying coding-agent execution and control patterns. *Framework / coding agents*

---

## Papers, essays, and research programmes

Important technical and conceptual work shaping the field.

- **[ReAct](https://arxiv.org/abs/2210.03629)** - Reasoning-plus-acting pattern that shaped modern tool-using agents. *Foundational paper / agent loops*
- **[Toolformer](https://arxiv.org/abs/2302.04761)** - Early work on self-supervised tool use for language models. *Foundational paper / tool learning*
- **[CAMEL](https://arxiv.org/abs/2303.17760)** - Role-playing multi-agent framework and benchmark paper. *Multi-agent / coordination*
- **[Reflexion](https://arxiv.org/abs/2303.11366)** - Verbal self-feedback method for iterative improvement and recovery. *Reflection / adaptation*
- **[Self-Refine](https://arxiv.org/abs/2303.17651)** - Self-critique and revision method for stronger outputs without extra training. *Iteration / self-improvement*
- **[Generative Agents](https://arxiv.org/abs/2304.03442)** - Memory, planning, and reflection architecture for believable long-running agents. *Memory / simulation*
- **[Tree of Thoughts](https://arxiv.org/abs/2305.10601)** - Search-based reasoning approach for branching deliberation. *Reasoning / search*
- **[Plan-and-Solve Prompting](https://arxiv.org/abs/2305.04091)** - Explicit planning pattern for more reliable multi-step execution. *Planning / prompting*
- **[Voyager](https://arxiv.org/abs/2305.16291)** - Lifelong embodied agent with skill library accumulation. *Embodied agents / continual learning*
- **[ToolLLM](https://arxiv.org/abs/2307.16789)** - Large-scale open work on training agents to use thousands of real APIs. *Tool use / open training data*

---

## Courses, guides, and learning resources

High-quality educational resources for understanding and applying AI safety in agentic contexts.

- **[Anthropic: Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)** - Clear engineering guide to practical agent patterns, decomposition, and tool use. *Guide / engineering*
- **[OpenAI Cookbook](https://cookbook.openai.com/)** - Official examples and recipes for building and evaluating agentic applications. *Examples / official cookbook*
- **[OpenAI Agents SDK Quickstart](https://openai.github.io/openai-agents-python/quickstart/)** - Hands-on introduction to building multi-agent workflows with traces and tools. *Quickstart / official docs*
- **[Google ADK Docs](https://google.github.io/adk-docs/)** - Official documentation for ADK concepts, tools, deployment, and MCP integration. *Docs / framework*
- **[Microsoft AI Red Teaming 101](https://learn.microsoft.com/en-us/security/ai-red-team/training)** - Practical training series on attacking and defending generative AI systems. *Training / red teaming*
- **[NeMo Guardrails Docs](https://docs.nvidia.com/nemo-guardrails/index.html)** - Official documentation and tutorials for deploying safety and topical guardrails. *Docs / guardrails*

---

## Communities, organisations, and ongoing work

Groups, labs, organisations, and ecosystems doing relevant work.

- **[Apollo Research](https://www.apolloresearch.ai/)** - Research group focused on deceptive behaviour, scheming, and evaluation of frontier AI systems. *Research organisation / evaluations*
- **[METR](https://metr.org/)** - Nonprofit focused on agent capability measurement, threat research, and public reporting. *Research organisation / evaluations*
- **[UK AI Security Institute](https://www.aisi.gov.uk/)** - UK government institute for testing, measurement, and safeguards research; renamed from the AI Safety Institute on February 14, 2025. *Government lab / safety science*
- **[MLCommons AILuminate](https://mlcommons.org/ailuminate/)** - Safety benchmarking effort for general-purpose AI systems. *Benchmark ecosystem / standards*
- **[Frontier Model Forum](https://frontiermodelforum.org/)** - Industry forum for frontier-model safety, governance, and standards work. *Industry coordination / governance*
- **[AISI Alignment Project](https://alignmentproject.aisi.gov.uk/)** - Funding programme for alignment research led by the UK AI Security Institute. *Research programme / funding*

---

## Entry format

To keep the list readable and consistent, use the following format for entries:

- **[Name](link)** - One-sentence description. *Optional metadata: open-source/commercial, maturity, best-for tag.*

### Example

- **[Langfuse](https://github.com/langfuse/langfuse)** - Observability and tracing platform for LLM and agent workflows, useful for debugging, evaluation, and auditability. *Open-source / production-oriented*
- **[OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)** - Security risk taxonomy for LLM systems that provides a useful baseline for agentic threat modelling. *Foundational / security*
- **[Inspect](https://inspect.aisi.org.uk/)** - Evaluation framework for structured testing of model and agent behaviour. *Evaluation / research-to-practice*

---

## Inclusion criteria

An entry should usually satisfy several of the following:

- directly relevant to the safety, evaluation, control, or governance of agentic systems
- technically credible
- documented sufficiently to be usable
- actively maintained or historically important
- meaningfully distinct from other entries
- useful for practitioners, not only marketers

We may exclude entries that are:

- thinly documented
- redundant
- overly promotional
- vague in scope
- not materially relevant to agentic systems

---

## Contribution philosophy

Contributions are welcome, but curation matters.

Please prefer quality over quantity. A smaller number of well-chosen entries with clear descriptions is more valuable than an inflated list.

When contributing, please aim to include:

- the resource name
- the link
- a concise and accurate description
- the most appropriate section
- a brief note on why it matters

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full contribution process.

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

## Roadmap

Planned improvements for this repository may include:

- resource tags for `open-source`, `enterprise`, `research`, `benchmark`, and `experimental`
- essential-reading markers for standout resources
- architecture diagrams for safe agent design patterns
- a companion taxonomy for agentic threat models
- a separate section for incident response and post-deployment assurance

---

## Related repositories

- **Awesome Agentic Engineering** - A companion list focused on building reliable, observable, production-grade agentic systems.
- **Awesome LLM Security** - Broader resources on LLM application security.
- **Awesome AI Evals** - Resources focused specifically on evaluation systems and benchmarks.

> Add real links here once the companion repos or related references exist.

---

## License

This work is licensed under [CC0 1.0](./LICENSE), unless stated otherwise.

---

## Maintainer

Curated by **[Your Name / GitHub Handle]**.

This repository aims to be a technically serious, practically useful map of AI safety for agentic systems. Thoughtful contributions, corrections, and improvements are welcome.
