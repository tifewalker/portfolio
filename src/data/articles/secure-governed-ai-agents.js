/*
  ARTICLE: Designing Secure and Governed AI Agents
  One file per article. Everything for this article lives here:
  its details at the top, its content in the `blocks` list below.

  Block helpers:
    p(text)              paragraph. Links: [label](https://...) or [label](/path)
    h2(text)             section heading (also builds the contents list)
    h3(text)             sub heading
    ul([...])            ruled list. Items are strings, or li("Lead", "text")
    ol([...])            numbered list. Same item rules as ul
    pull(text)           large highlighted statement
    figure(src, alt, caption, credit, creditUrl)
                         image with caption and source credit

  Diagrams live in public/img/articles/governed-ai/ as SVG files.
*/

const p = (text) => ({ type: "p", text });
const h2 = (text) => ({ type: "h2", text });
const h3 = (text) => ({ type: "h3", text });
const ul = (items) => ({ type: "ul", items });
const ol = (items) => ({ type: "ol", items });
const pull = (text) => ({ type: "pull", text });
const li = (lead, text) => ({ lead, text });
const figure = (src, alt, caption, credit, creditUrl) => ({
  type: "figure",
  src,
  alt,
  caption,
  credit,
  creditUrl,
});

const KONECT = "https://konectworksuite.com/";
const IMG = "/img/articles/governed-ai";

const NIST_RMF = "https://www.nist.gov/itl/ai-risk-management-framework";
const OWASP_CHEAT =
  "https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html";
const OWASP_LLM01 = "https://genai.owasp.org/llmrisk/llm01-prompt-injection/";

const article = {
  slug: "secure-governed-ai-agents-omnichannel-support",
  title:
    "Designing Secure and Governed AI Agents for Omnichannel Customer Support",
  excerpt:
    "How knowledge grounding, data protection, policy enforcement and human oversight shape reliable AI-powered customer support systems.",
  category: "AI systems",
  date: "2026-11-23",
  author: "Boluwatife Olawuyi",

  // Search results and link previews (optional; fall back to title and excerpt)
  seoTitle: "Designing Secure, Governed AI Support Agents | Boluwatife Olawuyi",
  seoDescription:
    "AI support agents need more than a model. How grounding, backend-enforced permissions, tenant isolation and human oversight make them safe for business.",
  shareImage: "/img/og-governed-ai.jpg",

  // Large image shown under the title
  cover: figure(
    `${IMG}/governed-ai-architecture.svg`,
    "Governed AI agent architecture: WhatsApp, Instagram, web chat, email and social channels feed a backend, which passes requests to AI orchestration connected to knowledge, a policy engine and human review, all inside a tenant boundary with audit and cost monitoring",
    "A governed AI agent sits inside the business system: channels feed one backend, the model is orchestrated alongside approved knowledge, a policy engine and human review, and everything is audited."
  ),

  blocks: [
    p(
      "Artificial intelligence is changing how businesses interact with customers. From answering enquiries to handling repetitive support requests, AI-powered agents are becoming part of modern customer-service operations."
    ),
    p(
      "However, introducing AI into a business support system involves more than connecting a language model to a chat interface."
    ),
    p(
      "A customer support agent operates within a business environment. It interacts with customer information, company policies, internal knowledge, communication channels and, in some cases, operational workflows. An incorrect response, an unauthorised action, or the exposure of sensitive information can create consequences beyond a poor customer experience."
    ),
    p("This raises an important engineering question:"),
    pull(
      "How do we build AI agents that are not only intelligent, but also secure, governed and accountable?"
    ),
    p(
      "The answer is to design AI as part of a controlled business system, rather than treating it as an isolated chatbot."
    ),
    p(
      `In this article, I explore the architectural considerations behind governed AI agents for omnichannel customer support, using the development of [KONECT Worksuite](${KONECT}) as a practical reference.`
    ),

    // ---------------------------------------------------------------
    h2("Why traditional AI chatbots are not enough"),
    p("A conventional chatbot is often designed around a simple interaction:"),
    ol([
      "A user submits a question.",
      "The application sends the question to an AI model.",
      "The model generates a response.",
      "The chatbot displays the response.",
    ]),
    p(
      "This approach can be useful for general conversations, but business support environments introduce additional requirements."
    ),
    p(
      "A customer may ask about an order, refund, service agreement, or ongoing complaint. Answering correctly may require access to approved company information, relevant customer context, and specific operational policies."
    ),
    p(
      "A general-purpose model cannot automatically be trusted to know these things. It may generate plausible but inaccurate answers, misunderstand company policies, or respond without the necessary business context."
    ),
    p(
      "A production-oriented AI agent therefore needs more than a model. It needs an architecture that determines:"
    ),
    ul([
      "What information the agent can access.",
      "Which knowledge sources it should trust.",
      "What questions it is permitted to answer.",
      "Which actions it can perform.",
      "When human intervention is required.",
      "How interactions and AI usage are monitored.",
    ]),
    p("These requirements form the foundation of governed AI."),

    // ---------------------------------------------------------------
    h2("Designing the omnichannel AI architecture"),
    p(
      "Customer conversations rarely happen in one place. Businesses increasingly communicate through WhatsApp, Instagram, Facebook, website chat, email, and other digital channels."
    ),
    p(
      "An AI agent should support these channels without creating a separate intelligence system for every communication platform."
    ),
    p("A practical architecture separates channel communication from AI processing."),
    figure(
      `${IMG}/ai-request-flow.svg`,
      "Request flow in five steps: customer on any channel, backend for authentication and context, AI orchestration, retrieval of approved knowledge, and a policy check. Approved requests return a grounded reply with sources on the same channel; others escalate to a human agent with full context",
      "The request lifecycle: a message moves from the channel through the backend and orchestration, is grounded and checked, then returns as a reply or escalates to a person."
    ),
    p("Each component has a specific responsibility:"),
    ul([
      li(
        "Channel integration",
        "Receives incoming messages from connected communication channels and delivers responses through the appropriate channel."
      ),
      li(
        "Backend processing",
        "Handles authentication, conversation context, business rules, and communication between application components."
      ),
      li(
        "AI orchestration",
        "Coordinates the model, relevant context, knowledge retrieval, and permitted operations."
      ),
      li(
        "Knowledge retrieval",
        "Finds relevant information from approved business knowledge sources."
      ),
      li(
        "Policy enforcement",
        "Determines whether a request is within the agent’s permitted responsibilities and whether additional approval is necessary."
      ),
      li(
        "Response and escalation",
        "Returns an appropriate response or routes the conversation to a human support representative."
      ),
    ]),
    p(
      "This separation matters because the AI model should not independently control every part of the business application. The backend remains responsible for enforcing application rules and permissions."
    ),
    p(
      "In KONECT Worksuite, this approach supports an AI-powered customer-support experience connected to WhatsApp and social communication channels. The objective is to make intelligence available across customer touchpoints while maintaining a consistent business context."
    ),

    // ---------------------------------------------------------------
    h2("Knowledge grounding: giving AI the right information"),
    p(
      "One of the biggest challenges in business AI is ensuring that generated responses are based on information the organisation actually trusts."
    ),
    p(
      "A language model may have extensive general knowledge, but it does not automatically understand a company’s products, service agreements, internal procedures, or current policies."
    ),
    p(
      "This is where knowledge grounding becomes important. Rather than relying entirely on the model’s pre-existing knowledge, an AI agent can retrieve relevant information from approved knowledge sources before generating a response."
    ),
    figure(
      `${IMG}/knowledge-grounding.svg`,
      "Knowledge grounding: a customer question is used to retrieve relevant passages from approved sources only (policies, FAQs, website, conversation history and integrations), which become context for a cited answer referencing the refund policy and FAQ",
      "Grounding: retrieve from approved sources first, then answer with citations the customer and support team can check."
    ),
    p("These sources may include:"),
    ul([
      "Company documents and manuals.",
      "Frequently asked questions.",
      "Published website content.",
      "Product and service information.",
      "Approved support articles.",
      "Relevant conversation history.",
      "Connected business information and integrations.",
    ]),
    p(
      "The process generally involves receiving a question, identifying relevant information, retrieving the appropriate context, and providing that context to the AI model. The model then uses the retrieved information to formulate a response."
    ),
    h3("Why citations matter"),
    p(
      "Knowledge grounding becomes more useful when the system can identify the sources behind its answers."
    ),
    p(
      "For example, if a customer asks about a company’s refund policy, the agent should rely on the relevant approved policy rather than generate an answer based on assumptions."
    ),
    p(
      "Providing source references or citations makes it easier for users and support teams to understand where an answer originated. It also creates a clearer path for reviewing inaccurate responses and improving the underlying knowledge base."
    ),
    p(
      "In KONECT, the AI knowledge approach is designed around connecting business information sources and supporting responses with source references. The principle is straightforward:"
    ),
    pull("AI should help interpret business knowledge, not invent business policy."),
    p(
      `Retrieval improves relevance, but it does not remove the need for validation. [OWASP](${OWASP_CHEAT}) specifically recommends assessing retrieved context, groundedness, and question–answer relevance, while enforcing output and permission checks in application code.`
    ),

    // ---------------------------------------------------------------
    h2("AI governance: defining what an agent is allowed to do"),
    p("An intelligent system is not necessarily a well-governed system."),
    p(
      "A customer support agent may be capable of generating responses, but that does not mean it should have unrestricted authority to make decisions or perform business operations."
    ),
    p(
      "Governance begins by defining the agent’s responsibilities and limitations. For example, an organisation may permit an AI agent to:"
    ),
    ul([
      "Answer questions about approved products and services.",
      "Explain published company policies.",
      "Provide information from an approved knowledge base.",
      "Assist with common support enquiries.",
      "Collect relevant information before escalating a request.",
    ]),
    p(
      "However, the organisation may require human intervention before the agent can:"
    ),
    ul([
      "Approve a refund.",
      "Make an exception to a company policy.",
      "Change sensitive customer information.",
      "Commit the business to a financial or contractual decision.",
      "Resolve a complaint requiring managerial judgement.",
    ]),
    p(
      "The important distinction is between providing information and exercising business authority."
    ),
    pull(
      "An AI agent can assist with a decision without necessarily being authorised to make that decision."
    ),
    h3("Policy enforcement should not depend on prompts alone"),
    p(
      "A common mistake in AI development is attempting to enforce every business restriction through instructions sent to the language model."
    ),
    p(
      "System instructions are useful, but they should not be the only security or governance mechanism. Critical permissions must be enforced by the application backend."
    ),
    p(
      "For example, if an AI agent is not authorised to issue a refund, the backend should reject an unauthorised refund operation even if the model attempts to initiate one. This creates a separation between what the model can suggest and what the application will actually permit."
    ),
    figure(
      `${IMG}/permission-boundary.svg`,
      "Permission boundary: on the model side, the AI model proposes an untrusted tool call such as issue_refund(order, amount). It crosses a trust boundary into a backend policy engine that checks role, scope and limits. Allowed calls execute and are logged; denied calls are rejected or escalated for approval",
      "The model proposes; the backend disposes. Every tool call crosses a trust boundary and is checked against role, scope and limits before anything runs."
    ),
    ol([
      "The AI model proposes an action.",
      "The policy and permission engine validates the request.",
      "If approved, the action is executed and logged.",
      "If denied, the request is rejected, the limitation is explained, or the conversation is escalated.",
    ]),
    p(
      `[OWASP recommends](${OWASP_CHEAT}) keeping untrusted content separate from trusted instructions, validating proposed tool arguments, enforcing caller permissions outside the model, and granting each tool only the minimum data and operations required.`
    ),
    p(
      "Governance should therefore exist at both the AI orchestration layer and the application level."
    ),

    // ---------------------------------------------------------------
    h2("Data safety and access control"),
    p(
      "AI systems often process information that businesses have a responsibility to protect."
    ),
    p(
      "Customer conversations may contain names, contact details, transaction references, complaints, and other sensitive business information. Connecting this information to an AI model introduces important security considerations. A responsible architecture should address several areas."
    ),
    figure(
      `${IMG}/tenant-isolation.svg`,
      "Tenant isolation: Company A’s knowledge base, customer records and conversations feed a scoped AI agent for tenant A, which draws credentials from a server-side secrets vault. A wall separates it from Company B’s data, and any cross-tenant retrieval is blocked",
      "Each organisation’s data stays behind its own boundary. The agent receives only scoped, necessary context, and credentials never leave the server."
    ),
    h3("Access boundaries"),
    p(
      "The AI agent should only receive information that is relevant and authorised for the current interaction."
    ),
    p(
      "For a multi-organisation platform, this means maintaining clear separation between each organisation’s data. One company’s knowledge base, customer records, and conversation history must never become available to another company’s AI agent."
    ),
    p(
      "This requires tenant-aware data access, server-side permission checks, and properly scoped retrieval operations."
    ),
    h3("Data minimisation"),
    p("Not every customer interaction requires the full customer record."),
    p(
      "The system should retrieve only the information needed to complete the task. Reducing unnecessary data exposure limits the amount of information processed by the AI system and reduces the potential impact of an error."
    ),
    h3("Secure integrations"),
    p(
      "Connected applications and external services should be accessed through controlled backend integrations."
    ),
    p(
      "API credentials, service keys, and other sensitive configuration values should remain on the server rather than being exposed to browser clients or included in model-generated instructions."
    ),
    p(
      "Requests to update business records should also pass through application validation and permission checks."
    ),
    h3("Protecting against prompt injection"),
    p(
      "AI agents may encounter instructions hidden inside customer messages, uploaded documents, websites, or other retrieved content. Some of these instructions may attempt to override the agent’s rules or make it disclose information it should not access."
    ),
    p(
      "Retrieved content should therefore be treated as information to evaluate, not as a source of authority over the system."
    ),
    p(
      "The application should maintain trusted instructions separately and enforce permissions outside the model. This is particularly important when agents can retrieve external content or interact with business systems."
    ),
    p(
      `[OWASP classifies prompt injection](${OWASP_LLM01}) as a leading LLM risk and notes that retrieval-augmented generation and fine-tuning do not fully eliminate it. Its recommended controls include strict context adherence, sensitive-content handling, source citations, restricted tool privileges, and human approval for high-risk actions.`
    ),

    // ---------------------------------------------------------------
    h2("Human oversight and escalation"),
    p("Automation should not eliminate human responsibility."),
    p(
      "There are situations where an AI agent should recognise its limitations and transfer the interaction to a person. For example:"
    ),
    ul([
      "The customer explicitly requests a human representative.",
      "The available knowledge does not adequately answer the question.",
      "The customer is disputing a previous decision.",
      "The request involves an exception to company policy.",
      "The interaction requires approval or managerial judgement.",
      "The agent cannot confidently establish the correct next step.",
    ]),
    figure(
      `${IMG}/human-in-the-loop.svg`,
      "Human-in-the-loop flow: a customer request reaches the AI agent, which passes through a risk check. Low-risk requests get an automatic grounded, logged response. High-risk requests go to an approval queue with context and a recommendation, where an authorised person approves, edits or rejects, and the decision returns to the agent with full history",
      "Automation pauses where it should: high-risk requests wait in an approval queue for an authorised person, with the full conversation attached."
    ),
    pull(
      "Escalation is not necessarily a failure of automation. It is part of responsible automation."
    ),
    p(
      "A well-designed support system should preserve conversation context when transferring an interaction so that the human representative does not have to start from the beginning. This allows the support team to understand what the customer asked, what the AI agent attempted, and why the conversation was escalated."
    ),
    p(
      "Human approval is also important for actions that carry operational or financial consequences."
    ),
    p(
      "The AI agent can prepare information or recommend an action, while the authorised employee retains control over the final decision. Microsoft’s agent guidance similarly identifies human-in-the-loop gates for high-impact, irreversible, or sensitive actions, including writes, deletions, payments, production changes, and external sends."
    ),

    // ---------------------------------------------------------------
    h2("Auditability and operational control"),
    p("A business should be able to understand how its AI system is operating."),
    p(
      "Without visibility, it becomes difficult to investigate incorrect responses, identify recurring problems, or understand the cost of automation."
    ),
    figure(
      `${IMG}/ai-operations-dashboard.svg`,
      "Illustrative AI support operations dashboard with tiles for escalations, pending approvals, knowledge gaps, AI usage and cost versus budget, a chart of conversations resolved by AI versus escalated, and an approval and audit log",
      "An illustrative operations view: escalations, approvals, knowledge gaps, usage and cost in one place, so governance can be measured rather than assumed."
    ),
    p("Operational monitoring should consider:"),
    ul([
      li(
        "Interaction history",
        "Maintaining appropriate records of customer interactions and AI-assisted responses."
      ),
      li(
        "Escalation activity",
        "Understanding when and why conversations are transferred to human representatives."
      ),
      li(
        "Approval records",
        "Tracking actions that require human authorisation and their outcomes."
      ),
      li(
        "Knowledge quality",
        "Identifying outdated, incomplete, or conflicting information that affects response quality."
      ),
      li(
        "AI usage and cost",
        "Monitoring model usage and associated operational expenditure."
      ),
      li(
        "System performance",
        "Observing failures, response times, and integration reliability."
      ),
    ]),
    p(
      "Auditability is not simply about keeping logs. It is about creating enough operational visibility for businesses to review system behaviour, investigate problems, and improve the service."
    ),
    p(
      "For a growing business, cost control is particularly important. AI usage can increase as customer conversations grow, so monitoring consumption and applying appropriate limits should be part of the system’s operational design."
    ),
    p(
      `[NIST’s AI Risk Management Framework](${NIST_RMF}) emphasises documented human oversight, defined responsibilities, and traceable risk information across the AI lifecycle.`
    ),

    // ---------------------------------------------------------------
    h2("Applying these principles in KONECT Worksuite"),
    p(
      `These architectural considerations informed the development of AI-powered customer-support capabilities within [KONECT Worksuite](${KONECT}).`
    ),
    p(
      "KONECT is designed as a unified business platform that brings customer relationship management, help-desk operations, communication channels, workflows, and analytics into one environment. Rather than treating AI as a standalone chatbot, the goal is to make it part of the wider customer-support workflow."
    ),
    ul([
      li(
        "Channels",
        "The AI capabilities are connected to WhatsApp and social communication channels, allowing businesses to support customer interactions across multiple touchpoints."
      ),
      li(
        "Knowledge",
        "Business information from documents, FAQs, websites, conversations, and integrations is used as context when generating responses, with source references making answers more traceable."
      ),
      li(
        "Oversight",
        "Human escalation and approval are part of the approach, particularly where an interaction requires human judgement or an action should not be completed autonomously."
      ),
      li(
        "Operations",
        "The wider architecture considers operational visibility and AI usage costs, recognising that a useful AI feature must remain manageable as business activity increases."
      ),
    ]),
    p(
      "Importantly, not every module in KONECT is intended to have unrestricted AI capabilities. AI functionality is applied within defined areas of the platform rather than assumed to be appropriate for every business operation."
    ),
    p("The development of KONECT has reinforced an important engineering lesson:"),
    pull(
      "Building an AI agent is not just about connecting a model to an application. It involves designing the surrounding systems that determine what the agent knows, what it can do, and when it must defer to a human."
    ),

    // ---------------------------------------------------------------
    h2("The future of business AI is governed automation"),
    p(
      "As AI agents become more capable, businesses will increasingly expect them to do more than respond to questions. They will be expected to understand business context, retrieve information, coordinate workflows, and assist with operational tasks."
    ),
    p("However, greater capability must come with greater control."),
    p(
      "The organisations that benefit most from AI will not necessarily be those that automate the largest number of tasks. They will be those that understand where automation creates value, where human judgement remains necessary, and how to protect the information and processes entrusted to their systems."
    ),
    p(
      "For developers and software architects, this means treating governance, security, permissions, auditability, and human oversight as architectural requirements from the beginning."
    ),
    pull(
      "AI should not operate outside the boundaries of the business. It should operate within them."
    ),

    // ---------------------------------------------------------------
    h2("Conclusion"),
    p(
      "Designing secure and governed AI agents requires a combination of intelligent orchestration, reliable knowledge retrieval, application-level security, clearly defined policies, and human oversight. These elements turn AI from a conversational feature into a more dependable part of a business system."
    ),
    p(
      "The real engineering challenge is not simply making AI answer more questions. It is making sure that the answers are grounded, the information is protected, the actions are authorised, and the business remains accountable."
    ),
    p(
      "That is the direction in which practical enterprise AI should move: from automation without boundaries to intelligent systems built around trust, control, and responsibility."
    ),
    p(
      `[KONECT Worksuite](${KONECT}) is an AI-powered business and customer-support platform developed to bring customer management, omnichannel support, and business operations into a unified environment.`
    ),

    // ---------------------------------------------------------------
    h2("References"),
    ul([
      li(
        "NIST",
        `[Artificial Intelligence Risk Management Framework (AI RMF 1.0)](${NIST_RMF}): human oversight, governance roles, documentation, and lifecycle risk management.`
      ),
      li(
        "OWASP",
        `[LLM Prompt Injection Prevention Cheat Sheet](${OWASP_CHEAT}): trust boundaries, tool permission enforcement, and least-privilege access.`
      ),
      li(
        "OWASP GenAI Security Project",
        `[LLM01:2025 Prompt Injection](${OWASP_LLM01}): retrieval limits, output validation, source citations, and human approval for privileged operations.`
      ),
      li(
        "Microsoft Azure",
        "AI agent shared responsibility model: human-in-the-loop gates for sensitive and irreversible actions."
      ),
      li(
        "Microsoft Azure Cloud Adoption Framework",
        "Architecture and governance for AI agents: risk-based governance and mandatory agent boundaries."
      ),
    ]),
  ],
};

export default article;
