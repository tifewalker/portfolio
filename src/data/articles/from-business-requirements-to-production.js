/*
  ARTICLE: From Business Requirements to Production
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
*/

const p = (text) => ({ type: "p", text });
const h2 = (text) => ({ type: "h2", text });
const h3 = (text) => ({ type: "h3", text });
const ul = (items) => ({ type: "ul", items });
const pull = (text) => ({ type: "pull", text });
const figure = (src, alt, caption, credit, creditUrl) => ({
  type: "figure",
  src,
  alt,
  caption,
  credit,
  creditUrl,
});

const KONECT = "https://konectworksuite.com/";

const article = {
  slug: "from-business-requirements-to-production",
  title:
    "From Business Requirements to Production: What Building Real Business Systems Has Taught Me",
  excerpt:
    "The hardest part of business software is rarely the code. Six lessons on requirements, integration, AI, testing and launch from building real business systems.",
  category: "Business systems",
  date: "2026-11-05",
  author: "Boluwatife Olawuyi",

  // Search results and link previews (optional; fall back to title and excerpt)
  seoTitle: "From Business Requirements to Production | Boluwatife Olawuyi",
  shareImage: "/img/og-konect.jpg",

  // Large image shown under the title
  cover: figure(
    "/img/optimized/konect.webp",
    "KONECT Worksuite screens: sign-in, the main dashboard with contacts, leads, tickets and chats, and the instant messaging inbox",
    "KONECT Worksuite brings CRM, Help Desk, Live Chat, Campaigns, Projects, Invoicing, Workflows and Analytics into one platform.",
    "KONECT Worksuite",
    KONECT
  ),

  blocks: [
    p(
      "Turning business problems into working software requires more than writing requirements or developing features. It requires understanding how people work, identifying what needs to change, and translating those needs into systems that deliver practical value."
    ),
    p(
      "Over time, I have learned that the most difficult part of business-system delivery is rarely writing code. It is understanding the real process behind a request, making trade-offs visible, designing for failure, and ensuring that the solution continues to work after launch."
    ),
    p(
      `This article shares lessons from building and implementing business systems, including customer-service platforms, financial applications, integrations, and [KONECT Worksuite](${KONECT}), an integrated business platform covering CRM, Help Desk, Live Chat, Campaigns, Projects, Invoicing, Workflows, and Analytics.`
    ),

    // ---------------------------------------------------------------
    h2("The gap between what a business wants and what it needs"),
    p("Businesses rarely describe their problems in technical terms."),
    p(
      "A company may ask for a CRM because customer information is scattered across spreadsheets, email threads, WhatsApp, and individual team members’ devices. Another may request an approval system because requests are being processed manually and delays are affecting operations. A customer-support team may ask for a unified inbox because conversations are getting lost across WhatsApp, Instagram, email, live chat, and phone calls."
    ),
    p(
      "These requests sound straightforward, but they often describe a symptom rather than the underlying problem."
    ),
    p("The real work begins with questions such as:"),
    ul([
      "What exactly is happening today?",
      "Who is affected by the current process?",
      "Which teams, systems, and approvals are involved?",
      "What information needs to move between people and systems?",
      "What should happen when something goes wrong?",
      "What does “done” mean for the business?",
      "How will success be measured after go-live?",
    ]),
    p(
      "The quality of a software solution often depends on how well these questions are answered before development begins. A requirement that cannot be linked to a business outcome, a user action, or a measurable result is usually incomplete."
    ),

    // ---------------------------------------------------------------
    h2("Lesson 1: Understand the process before designing the solution"),
    p(
      "At Creastech Limited, I have worked with business users and technical teams to translate operational requirements into functional systems."
    ),
    p(
      "One example involved delivering a unified customer-service platform for a financial-services organisation. The organisation handled customer interactions across multiple channels, including WhatsApp, social media, live chat, and email."
    ),
    figure(
      "/img/optimized/zohocrmplus.webp",
      "Zoho CRM Plus workspace with a leads list and live channel status for email and phone",
      "A unified customer-service platform built on Zoho CRM Plus, with channels, records and departments in one workspace.",
      "Zoho CRM Plus",
      "https://www.zoho.com/crm/crmplus/"
    ),
    p(
      "The challenge was not simply connecting those channels. The system needed to support how different departments handled customer interactions, assigned ownership, escalated issues, and measured performance."
    ),
    p("The implementation brought together:"),
    ul([
      "Five communication channels",
      "Three departments using the platform",
      "Approximately 10,000 customer interactions per month",
      "Five previously separate applications or tools consolidated or replaced",
    ]),
    p("A project of this scale requires more than configuring software."),
    p(
      "You need to understand how enquiries arrive, how they should be categorised, which department should receive them, who owns the conversation, when an issue should be escalated, and what information an agent needs before responding."
    ),
    p(
      "Without that understanding, it is possible to connect every communication channel and still deliver a system that does not improve the customer experience."
    ),
    p(
      "For example, if a customer sends a message on WhatsApp about a failed transaction, the platform should not simply create a ticket. It should identify the customer, route the case to the appropriate department, preserve the conversation history, assign ownership, start an SLA timer, and make the case visible to the team responsible for resolution."
    ),
    pull(
      "Do not start by asking which software feature the business needs. Start by understanding the process the business is trying to improve."
    ),

    // ---------------------------------------------------------------
    h2("Lesson 2: Requirements must be understandable to both sides"),
    p(
      "Gathering requirements is only one part of the job. Those requirements must eventually become something an engineering team can implement, test, and maintain."
    ),
    p(
      "In my work, I have used business requirements documents, functional requirements, user stories, and acceptance criteria to communicate what a system should do."
    ),
    p(
      "A user story defines who needs a requirement and why, while acceptance criteria define the conditions under which the requirement can be considered complete. Clear, testable acceptance criteria should cover both normal use and exception scenarios."
    ),
    p("Consider a simple requirement:"),
    p(
      "“A customer-service agent should be able to transfer a conversation to another department.”"
    ),
    p("It sounds clear until the details are examined:"),
    ul([
      "Which departments can receive the conversation?",
      "Does the receiving department see the full conversation history?",
      "Can an agent transfer a conversation they do not own?",
      "What happens to the original assignment?",
      "Should the customer receive a notification?",
      "Should the transfer be recorded in the case timeline?",
      "How should the transfer appear in reporting?",
      "What happens if the receiving department is unavailable?",
      "Can the conversation be transferred back if the first department made an error?",
    ]),
    p("These details determine how the feature behaves in a real environment."),
    p("A useful way to structure acceptance criteria is:"),
    pull(
      "Given a customer conversation assigned to the Customer Support department, when an authorised agent transfers it to the Transactions department, then the case ownership changes, the full conversation history remains visible, the transfer is recorded in the case timeline, and the customer receives an appropriate notification."
    ),
    p(
      "This makes the requirement easier to build, test, and validate. User stories and acceptance criteria work best when they are specific, measurable, and testable, with clear expected outcomes."
    ),
    pull(
      "A requirement is not complete when it describes an intention. It is complete when business users and developers can agree on what should happen in specific scenarios."
    ),

    // ---------------------------------------------------------------
    h2("Lesson 3: Integration is about making systems work together"),
    p(
      "Another important part of my experience has been integrating business applications."
    ),
    p(
      "For a Nigerian microfinance bank, I worked on integrating HoduCC call-centre activity with Zoho CRM Plus. The objective was not simply to make two applications exchange data. It was to make the right information available to the right people at the right time."
    ),
    figure(
      "/img/optimized/incoming-call-crm.webp",
      "Incoming call pop-up inside the CRM showing the caller's name, number and email next to the contacts list",
      "With telephony connected to the CRM, an incoming call opens with the caller's details already in front of the agent.",
      "Zoho CRM Plus",
      "https://www.zoho.com/crm/crmplus/"
    ),
    p(
      "In a contact-centre environment, that may mean ensuring that call outcomes, customer interactions, agent notes, and case updates are available in the CRM without requiring an agent to manually copy information between systems."
    ),
    p("When designing an integration, I consider questions such as:"),
    ul([
      "What information needs to move between the applications?",
      "Which system is the source of truth for each data field?",
      "What event should trigger the exchange?",
      "Should the integration operate in real time or through scheduled synchronisation?",
      "How should failed requests be handled?",
      "What happens if the same event is received more than once?",
      "How can the integration be monitored and troubleshot?",
      "What happens if one system is temporarily unavailable?",
    ]),
    p(
      "These questions matter because an integration that works during a demonstration may behave very differently under real operating conditions."
    ),
    p(
      "Webhook-based integrations, for example, need more than a basic endpoint. Production-grade designs commonly require durable event storage, retry handling, idempotency or deduplication, error classification, dead-letter handling, monitoring, and the ability to replay failed events after the root cause has been addressed."
    ),
    p(
      "A good integration should be understandable, maintainable, and reliable enough to support the business process it was designed for."
    ),
    pull(
      "Integration is not successful because data moves between systems. It is successful because the business process works reliably when systems exchange that data."
    ),

    // ---------------------------------------------------------------
    h2(
      "Lesson 4: Building a product from scratch changes how you think about requirements"
    ),
    p(
      `My experience leading the development of [KONECT Worksuite](${KONECT}) has given me a different perspective on product development, particularly when combining traditional business applications with AI-powered capabilities.`
    ),
    p(
      "KONECT is an integrated business platform designed to bring together Customer Relationship Management, Help Desk, Live Chat, Campaigns, Projects, Invoicing, Workflows, and Analytics."
    ),
    p(
      "But one of the areas I am particularly interested in is how AI can improve the way businesses manage customer interactions."
    ),
    p(
      "I wanted KONECT to go beyond simply collecting customer enquiries in one place. The goal was to help businesses respond more intelligently, reduce repetitive support work, and make approved business information available in the moments it is needed."
    ),
    p(
      "That thinking led to the development of AI-powered customer support agents that operate across connected channels, including WhatsApp and social media."
    ),

    h3("AI needs business context, not just a language model"),
    p("An important part of this is the knowledge base."),
    p(
      "Businesses often have valuable information scattered across FAQs, product documentation, service descriptions, policies, internal guides, and other resources. Without a structured way to make that information accessible to support teams and AI agents, answering enquiries consistently becomes difficult."
    ),
    p(
      "KONECT’s knowledge-base approach allows organisations to configure business information that AI agents can use when responding to customer enquiries."
    ),
    p(
      "For example, when a customer asks about a company’s services, delivery policy, product features, or support process, the AI agent can use the organisation’s configured knowledge to generate a relevant response rather than relying entirely on generic answers."
    ),
    p(
      "This matters because an AI support agent should understand the business it represents. A customer asking about a delivery policy, service offering, or product feature should receive information that is specific to that organisation, not a generic response that could apply to any business."
    ),
    p(
      "The knowledge base therefore becomes more than documentation. It becomes an operational layer that connects business knowledge to customer conversations."
    ),

    h3("AI must fit into the wider system"),
    p(
      "I also had to think carefully about how AI capabilities fit into the wider application."
    ),
    p(
      "Customer conversations, support workflows, integrations, permissions, and business information need to work together rather than exist as disconnected features."
    ),
    p(
      "For example, when a customer sends a message through WhatsApp or social media, the system needs to determine:"
    ),
    ul([
      "Which customer or conversation the message belongs to",
      "Whether the enquiry can be handled automatically",
      "What approved knowledge is relevant to the request",
      "When the AI agent should respond",
      "When the conversation should be handed over to a human agent",
      "Which department or agent should receive the case",
      "What information the human agent needs to continue the conversation",
    ]),
    p(
      "An AI agent cannot operate effectively in isolation. It needs access to the right context, clear boundaries, and a reliable path to human support."
    ),
    p(
      "The objective is not to remove people from customer support. It is to remove repetitive work from people so they can focus on complex, sensitive, or high-value conversations."
    ),

    h3("Building the AI layer in production"),
    p(
      "I worked on the backend, deployed AI models on AWS, and developed the agent workflows that power the customer-facing experience."
    ),
    p(
      "The AI agent is now running in production and handling real customer interactions through connected channels."
    ),
    p(
      "Building this in production taught me that introducing AI into business software is not simply about connecting a language model to an application."
    ),
    p(
      "The real challenge is making AI useful within actual business processes: giving it access to relevant organisational knowledge, defining what it can and cannot do, integrating it with existing systems, and ensuring that customers can reach a human when needed."
    ),
    p(
      "An AI feature may work well in a demonstration, but production introduces different realities:"
    ),
    ul([
      "Customers may ask unclear or incomplete questions",
      "Business information may change",
      "The AI may need to hand over to a human agent",
      "Integrations may fail or return unexpected data",
      "Conversations may involve sensitive customer information",
      "The business may need to update policies or service information",
      "Teams need visibility into what the AI handled and what it escalated",
    ]),
    p(
      "This is why AI capabilities must be designed with observability, control, and maintainability in mind."
    ),

    h3("The same thinking applies across the platform"),
    p("That same product-thinking approach applies to the rest of KONECT."),
    p(
      "Designing the CRM module means considering customer records, ownership, permissions, activity history, and data relationships. Connecting it with the Help Desk introduces further questions about shared customer information, conversation history, access control, and case ownership."
    ),
    p(
      "For example, a customer record should not exist separately from the conversations, tickets, campaigns, projects, invoices, and activities related to that customer. The platform needs a coherent data model so users can understand the full relationship, not just isolated records."
    ),
    p(
      "I also designed a visual workflow builder to make automation more accessible to non-technical users. This required thinking about how business users express their processes and how the application translates those decisions into executable workflows."
    ),
    p(
      "A workflow builder cannot simply offer triggers and actions. It must also handle conditions, approvals, timeouts, permissions, error states, testing, and maintainability. A workflow that works in a demonstration but fails silently in production can create operational risk."
    ),

    h3("What building KONECT taught me"),
    p(
      "Building KONECT has taught me that product development involves continuous decisions about usability, architecture, business rules, AI capabilities, integrations, and maintainability."
    ),
    p(
      "The most valuable AI features are not necessarily the most impressive ones. They are the ones that fit naturally into the way a business already works."
    ),
    p("A good AI-powered support system should:"),
    ul([
      "Use approved business knowledge",
      "Understand the context of the customer conversation",
      "Operate within defined boundaries",
      "Escalate appropriately to human agents",
      "Preserve conversation history",
      "Integrate with existing workflows and systems",
      "Provide visibility into performance and failures",
      "Improve over time through feedback and iteration",
    ]),
    pull(
      "Building AI into business software is not about adding a chatbot. It is about designing an intelligent layer that understands the business, supports real workflows, and helps people deliver better outcomes."
    ),
    p(
      `You can see the platform at [konectworksuite.com](${KONECT}).`
    ),

    // ---------------------------------------------------------------
    h2("Lesson 5: Testing is where assumptions meet reality"),
    p(
      "A feature can appear complete from a development perspective and still fail to meet business expectations."
    ),
    p(
      "This is why I consider testing and user acceptance testing essential parts of product delivery."
    ),
    p(
      "At Creastech, I authored a 115-case UAT/QA test plan. The purpose of structured testing is not simply to confirm that buttons work. It is to validate whether the system behaves as expected across different scenarios."
    ),
    p("For a customer-service application, testing may include:"),
    ul([
      "Conversation assignment",
      "Departmental routing",
      "Agent permissions",
      "Case escalation",
      "SLA timers",
      "Notification behaviour",
      "Reporting accuracy",
      "Cross-channel context",
      "Edge cases such as duplicate messages or unavailable departments",
    ]),
    p("For a financial application, it may include:"),
    ul([
      "Transaction states",
      "Approval rules",
      "Data accuracy",
      "Authorisation and access control",
      "Reconciliation",
      "Exception scenarios",
      "Audit trails",
      "Failure and recovery behaviour",
    ]),
    p(
      "A good test case should connect back to a requirement. If a requirement cannot be tested, it may not be sufficiently defined. Requirements traceability, linking requirements to the tests that verify them, helps teams confirm that the delivered system matches the agreed business need."
    ),
    p(
      "UAT should be written in business language and reflect real user scenarios, including the starting condition, the action taken, and the expected business outcome."
    ),
    pull(
      "Testing does not merely prove that software works. It reveals whether the team correctly understood the business problem."
    ),

    // ---------------------------------------------------------------
    h2("Lesson 6: Launch is not the finish line"),
    p(
      "Deployment is an important milestone, but it is not the final measure of a successful system."
    ),
    p(
      "Users need to understand how to operate the application. Support teams need documentation. Production issues need investigation. Business processes may change, requiring adjustments to workflows, permissions, integrations, or reporting."
    ),
    p("A successful implementation should consider:"),
    ul([
      "User training and onboarding",
      "Administrator documentation",
      "Support and escalation procedures",
      "System monitoring",
      "Error logging and alerting",
      "Backup and recovery processes",
      "Data-quality checks",
      "Change management",
      "Continuous improvement",
    ]),
    p(
      "A system should not only work when it is launched. It should be supportable and adaptable as the organisation grows."
    ),
    p(
      "The definition of done should include more than working code. It should also account for testing, documentation, training material, and the operational activities required for a feature to be safely released."
    ),
    pull(
      "Software is not delivered when it is deployed. It is delivered when people can use it confidently, support it reliably, and adapt it as the business changes."
    ),

    // ---------------------------------------------------------------
    h2("What I take into every project"),
    p(
      `Across my work on customer-service platforms, financial applications, integrations, and [KONECT Worksuite](${KONECT}), one principle has remained consistent:`
    ),
    pull(
      "Good software engineering starts with understanding the problem, not choosing the technology."
    ),
    p("A well-designed solution requires:"),
    ul([
      "A clear understanding of business processes",
      "Properly defined requirements and acceptance criteria",
      "Thoughtful technical and architectural decisions",
      "Effective collaboration between business and technical teams",
      "Reliable integrations",
      "Structured testing",
      "Strong documentation and support processes",
      "Continuous improvement after launch",
    ]),
    p(
      "Whether I am working on a CRM implementation, designing an API integration, or building a product from scratch, I keep the same question in mind:"
    ),
    pull("Does this solution actually make the business process better?"),
    p(
      "Because ultimately, the purpose of business software is not to add another application to an organisation. It is to help people work more effectively, make better decisions, and solve problems that matter."
    ),
  ],
};

export default article;
