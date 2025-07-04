import blockchainimg1 from "../assets/blockchain_img1.jpg";
import blockchainimg2 from "../assets/blockchainimg4.jfif";
import bannerblockchain from "../assets/blockchainbannerimg1.jfif";
import Automation from "../assets/Automation.jpg"

import cyberimg1 from "../assets/cyberimg.jpg";
import cyberimg2 from "../assets/Toolweuseimg.jpg";

import devopsimg1 from "../assets/devops-1.jpg";
import devopsimg2 from "../assets/devops-2.jpg";
// import bannercybersecurity from "../assets/cybersecurity_banner.jpg";

export const BlockchainPageContent = {
  banner: {
    image: bannerblockchain,
    heading: "Blockchain Development",
    breadcrumb: ["HOME", "DEVELOPMENT", "CLOUD DEVELOPMENT"],
  },

  introduction: {
    title: "Blockchain – Expert Strategy, Seamless Solutions",
    content: `Blockchain is a revolutionary distributed ledger technology that maintains a continuously growing list of records, called blocks, linked and secured using cryptography. Each block contains a hash of the previous block, a timestamp, and transaction data—creating an immutable chain. This ledger, duplicated across a decentralized network, ensures transparency and security without intermediaries. Rasta InfoTech empowers businesses with scalable blockchain solutions that redefine how data and digital assets are managed. Whether integrating blockchain into existing systems or building a decentralized platform from scratch, our expert team is here to support you.`,
  },

  blockchainTypes: [
    {
      icon: "★",
      title: "Public Blockchain",
      description:
        "Open to everyone, fully decentralized networks where anyone can participate, view transactions, and contribute to consensus. Examples include Bitcoin and Ethereum. These networks offer maximum transparency but may have scalability limitations.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "💡",
      title: "Private Blockchain",
      description:
        "Restricted networks controlled by specific organizations. Only authorized participants can access and validate transactions. These offer greater control and privacy but sacrifice some decentralization benefits.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "⚙️",
      title: "Hybrid Blockchain",
      description:
        "Combines elements of both public and private blockchains. Organizations can control access to specific data while keeping other information public, offering flexibility for various use cases.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: blockchainimg1,
    heading: "Why Choose Blockchain with Rasta InfoTech?",
    description:
      "Choosing Rasta InfoTech for your blockchain development means collaborating with a technology partner committed to delivering innovation, integrity, and impact. We understand that blockchain isn't just a tech trend—it's a revolution in how businesses operate. Our team excels in creating systems that eliminate intermediaries, reduce fraud, and foster trust through decentralization. With our experience in developing secure and scalable blockchain solutions, we ensure seamless integration with your enterprise architecture. From enhancing transaction transparency to enforcing data immutability, we help you unlock the full potential of blockchain technology in a way that aligns with your long-term digital goals.",
  },

  technologies: {
    image: blockchainimg2,
    heading: "Technologies We Use",
    description:
      "To deliver cutting-edge blockchain solutions, Rasta InfoTech leverages a variety of platforms and tools tailored to meet client needs. We work with industry-leading technologies such as Ethereum, Binance Smart Chain, Hyperledger Fabric, and Polygon to design systems that are both flexible and future-ready. Using Solidity for smart contract programming and tools like IPFS for decentralized file storage, we create comprehensive solutions that handle everything from data transparency to transaction speed and scalability. Our tech stack ensures that your blockchain application is not only innovative but also secure, performant, and fully aligned with your business goals.",
  },

  services: [
    {
      title: "Smart Contract Development",
      description:
        "Secure and self-executing contracts on Ethereum, Solana, or Binance Smart Chain.",
    },
    {
      title: "App Development",
      description:
        "Scalable, responsive decentralized applications tailored for industries like finance, gaming, and supply chain.",
    },
    {
      title: "Private Blockchain",
      description:
        "Enterprise-grade blockchain networks with access control using Hyperledger Fabric or Quorum.",
    },
    {
      title: "NFT Platforms",
      description:
        "Complete NFT marketplaces with minting, trading, wallet integration, and auction features.",
    },
    {
      title: "Custom Token Development",
      description:
        "Creation of utility, governance, and security tokens with compliance and listing support.",
    },
    {
      title: "Blockchain Integration",
      description:
        "Connect blockchain backends with existing web or mobile apps using Web3 and REST APIs.",
    },
  ],
};

export const CybersecurityPageContent = {
  banner: {
    image: bannerblockchain,
    heading: "Cybersecurity Solutions",
    breadcrumb: ["HOME", "SECURITY", "CYBERSECURITY"],
  },

  introduction: {
    title: "Cybersecurity – Safeguarding the Digital Frontier",
    content: `Cybersecurity is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It encompasses a wide range of technologies, processes, and practices designed to protect digital assets from unauthorized access, damage, or theft. As cyber threats evolve in complexity and scale, cybersecurity has become a critical component of personal safety, business continuity, and national security. Our solutions empower individuals and organizations to stay resilient against digital threats through proactive defense strategies and cutting-edge technologies.`,
  },

  cybersecurityTypes: [
    {
      icon: "🛡️",
      title: "Malware Protection",
      description:
        "Defends against malicious software such as viruses, worms, trojans, and ransomware that can compromise system integrity and data security.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "📧",
      title: "Phishing Defense",
      description:
        "Identifies and blocks fraudulent communications designed to trick users into revealing sensitive information like passwords and financial data.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🔐",
      title: "Encryption & Data Privacy",
      description:
        "Secures data through encryption techniques, ensuring that only authorized parties can access or interpret sensitive information.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: cyberimg1,
    heading: "Why Choose Cybersecurity with Rasta InfoTech?",
    description:
      "At Rasta InfoTech, we understand that cybersecurity is more than just a technical necessity—it's a strategic imperative. Our team of experts designs and implements robust security frameworks that protect your digital assets from evolving threats. From securing enterprise networks to educating users on best practices, we offer comprehensive solutions tailored to your unique needs. With a focus on proactive defense, regulatory compliance, and scalable protection, we help you build a secure digital environment that fosters trust and resilience.",
  },

  technologies: {
    image: cyberimg2,
    heading: "Technologies We Use",
    description:
      "We utilize a wide array of cybersecurity technologies to deliver effective protection. Our stack includes firewalls, antivirus software, intrusion detection systems (IDS), security information and event management (SIEM), and advanced encryption protocols. We also integrate multi-factor authentication (MFA), virtual private networks (VPNs), and endpoint protection tools to ensure comprehensive coverage. By leveraging AI and machine learning, we enhance threat detection and automate response mechanisms, keeping your systems secure and agile.",
  },

  services: [
    {
      title: "Network Security",
      description:
        "Protects internal and external networks from unauthorized access and attacks using firewalls, IDS/IPS, and secure configurations.",
    },
    {
      title: "Endpoint Protection",
      description:
        "Secures devices like laptops, smartphones, and servers against malware and unauthorized access.",
    },
    {
      title: "Security Audits",
      description:
        "Comprehensive assessments to identify vulnerabilities and ensure compliance with industry standards.",
    },
    {
      title: "Incident Response",
      description:
        "Rapid detection, containment, and recovery from security breaches and cyberattacks.",
    },
    {
      title: "Data Encryption",
      description:
        "Implements strong encryption protocols to protect sensitive data in transit and at rest.",
    },
    {
      title: "Cybersecurity Training",
      description:
        "Educates employees and users on best practices to recognize and prevent cyber threats.",
    },
  ],
};

export const DevOpsAutomationPageContent = {
  banner: {
    image: bannerblockchain,
    heading: "DevOps Automation Services",
    breadcrumb: ["HOME", "SERVICES", "DEVOPS AUTOMATION"],
  },

  introduction: {
    title: "DevOps Automation – Accelerating Delivery, Enhancing Quality",
    content: `DevOps Automation Services are designed to streamline software development and IT operations by automating the processes of building, testing, releasing, and monitoring applications. With the increasing demand for faster delivery cycles, high availability, and improved collaboration, DevOps has emerged as a transformative methodology that bridges the gap between development and operations teams. At the core of DevOps is automation — the key to eliminating manual tasks, reducing errors, and enabling continuous integration and continuous deployment (CI/CD). Our DevOps Automation solutions empower organizations to deliver high-quality software quickly and reliably by leveraging modern tools, agile practices, and a culture of shared responsibility.`,
  },

  devopsCapabilities: [
    {
      icon: "⚙️",
      title: "CI/CD Pipeline Implementation",
      description:
        "Automate the build, test, and deployment lifecycle with end-to-end CI/CD pipelines that enhance development speed and reduce human intervention.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "📦",
      title: "Infrastructure as Code (IaC)",
      description:
        "Provision, manage, and configure infrastructure using code-based tools like Terraform, Ansible, and CloudFormation to ensure consistency and scalability.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "📊",
      title: "Monitoring & Observability",
      description:
        "Gain deep visibility into application and system performance through automated monitoring, alerting, and logging using tools like Prometheus, Grafana, and ELK Stack.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1,
    heading: "Why Choose DevOps Automation with Rasta InfoTech?",
    description:
      "At Rasta InfoTech, we go beyond conventional IT delivery by embedding automation at the heart of your DevOps journey. We recognize that speed, reliability, and agility are not just desirable—they are essential to modern business success. Our DevOps Automation Services are tailored to meet your specific business and technical goals, ensuring seamless collaboration across teams and faster time-to-market for your applications. Whether you're transforming legacy systems or building new cloud-native platforms, our certified DevOps engineers bring expertise in automation tooling, container orchestration, cloud infrastructure, and pipeline management to ensure operational excellence.",
  },

  technologies: {
    image: devopsimg2,
    heading: "Tools & Technologies We Use",
    description:
      "At Rasta InfoTech, we leverage a comprehensive DevOps tech stack to automate every aspect of your SDLC. Our toolchain includes Jenkins, GitLab CI, CircleCI, and GitHub Actions for CI/CD; Docker and Kubernetes for container orchestration; Terraform, Ansible, and Pulumi for Infrastructure as Code; and monitoring solutions like Datadog, Prometheus, and New Relic for observability. By integrating these tools with collaboration platforms like Slack and JIRA, we create transparent, traceable, and automated workflows that drive business value.",
  },

  services: [
    {
      title: "Continuous Integration & Delivery",
      description:
        "Build robust CI/CD pipelines that automate testing, integration, and deployment tasks to speed up delivery cycles and reduce release risks.",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "Automate infrastructure provisioning and configuration through IaC frameworks, enabling repeatable environments across development, staging, and production.",
    },
    {
      title: "Configuration Management",
      description:
        "Use tools like Chef, Puppet, or Ansible to automate system configurations, enforce consistency, and eliminate configuration drift.",
    },

    {
      title: "Cloud Automation",
      description:
        "Automate deployment and scaling in cloud platforms such as AWS, Azure, and GCP using serverless architectures and managed services.",
    },
    {
      title: "DevSecOps Integration",
      description:
        "Embed security into every stage of your DevOps process with automated vulnerability scanning, compliance checks, and access controls.",
    },
    {
      title: "Monitoring & Incident Management",
      description:
        "Implement proactive monitoring and alerting to identify issues before they impact users. Integrate incident response workflows for rapid resolution.",
    },
    {
      title: "Release Management & Rollbacks",
      description:
        "Enable reliable software releases with blue-green, canary deployments and automated rollback strategies in case of failure.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize your systems for speed, cost, and reliability by identifying bottlenecks through load testing, APM tools, and custom metrics.",
    },
  ],

  benefits: {
    heading: "Business Benefits of DevOps Automation",
    points: [
      "Faster time-to-market for applications and features",
      "Reduced human error through automated testing and deployments",
      "Improved code quality and reduced bugs with continuous feedback",
      "Lower infrastructure costs via efficient resource utilization",
      "Enhanced team collaboration between developers, testers, and operations",
      "Higher customer satisfaction with faster and more reliable releases",
      "Scalable, repeatable, and version-controlled infrastructure",
      "Greater compliance and auditability with automated policies",
    ],
  },

  closing: {
    heading: "Transform Your IT Operations with DevOps Automation",
    content:
      "In today’s dynamic digital environment, manual processes and siloed teams hinder innovation and agility. DevOps Automation Services from Rasta InfoTech provide the blueprint for building resilient, efficient, and scalable systems. Whether you're starting your DevOps journey or looking to enhance existing pipelines, our automation-first approach enables faster delivery, higher quality, and more robust infrastructure management. Partner with us to transform your IT operations, embrace continuous delivery, and unlock the full potential of your engineering teams.",
  },
};

export const DigitalMarketingPageContent = {
  banner: {
    image: bannerblockchain,
    heading: "Digital Marketing Services",
    breadcrumb: ["HOME", "SERVICES", "DIGITAL MARKETING"],
  },

  introduction: {
    title: "Digital Marketing – Elevate Your Brand Online",
    content: `Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and websites to connect with current and prospective customers. In today's digital age, having a robust online presence is crucial for success. Digital marketing strategies help businesses reach a larger audience, engage with customers, and drive conversions. At Rasta InfoTech, we offer comprehensive digital marketing services that are tailored to your unique business needs. Our goal is to help you elevate your brand, increase visibility, and achieve measurable results.`,
  },

  marketingCapabilities: [
    {
      icon: "🔍",
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website's visibility on search engines like Google and Bing through on-page and off-page SEO techniques. Our SEO experts optimize your content, keywords, meta tags, and backlinks to drive organic traffic and enhance your search engine rankings.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Leverage social media platforms like Facebook, Instagram, Twitter, and LinkedIn to engage with your audience, build brand awareness, and drive traffic to your website. Our social media strategies include content creation, community management, and paid advertising campaigns.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description:
        "Create targeted email campaigns that nurture leads, promote products, and drive conversions. Our email marketing services include list segmentation, personalized content, A/B testing, and performance analytics to maximize your ROI.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1,
    heading: "Why Choose Digital Marketing with Rasta InfoTech?",
    description:
      "At Rasta InfoTech, we understand that digital marketing is not just about driving traffic—it's about creating meaningful connections with your audience. Our team of experienced marketers combines creativity, data-driven strategies, and cutting-edge technology to deliver results that matter. We take the time to understand your business goals, target audience, and competitive landscape to create customized marketing plans that drive growth. Whether you're looking to increase brand awareness, generate leads, or boost sales, our digital marketing services are designed to help you achieve your objectives.",
  },

  technologies: {
    image: devopsimg2,
    heading: "Tools & Technologies We Use",
    description:
      "At Rasta InfoTech, we leverage a wide range of digital marketing tools and technologies to optimize your campaigns and measure success. Our tech stack includes Google Analytics for performance tracking, SEMrush for SEO analysis, Hootsuite for social media management, Mailchimp for email marketing, and WordPress for content management. By integrating these tools with CRM systems like HubSpot and Salesforce, we create seamless workflows that enhance efficiency and drive results.",
  },

  services: [
    {
      title: "SEO Services",
      description:
        "Optimize your website for search engines to improve visibility, drive organic traffic, and increase rankings. Our SEO services include keyword research, on-page optimization, link building, and technical SEO.",
    },
    {
      title: "Social Media Management",
      description:
        "Manage your social media presence across platforms like Facebook, Instagram, Twitter, and LinkedIn. Our services include content creation, community engagement, and paid advertising campaigns.",
    },
    {
      title: "Email Marketing Campaigns",
      description:
        "Create and execute targeted email campaigns that nurture leads, promote products, and drive conversions. Our services include list segmentation, personalized content, A/B testing, and performance analytics.",
    },
    {
      title: "Content Creation",
      description:
        "Develop and distribute valuable content that attracts and retains your target audience. Our content creation services include blog writing, video production, infographics, and eBooks.",
    },
    {
      title: "PPC Advertising",
      description:
        "Drive immediate traffic to your website through paid search advertising on platforms like Google Ads and Bing Ads. Our PPC services include keyword targeting, ad copy optimization, and performance monitoring.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track and measure the performance of your digital marketing campaigns using tools like Google Analytics and SEMrush. Our services include data analysis, reporting, and actionable insights to optimize your strategies.",
    },
    {
      title: "Website Design & Development",
      description:
        "Create a visually appealing and user-friendly website that drives engagement and conversions. Our web design and development services include responsive design, UX/UI optimization, and content management.",
    },
    {
      title: "Online Reputation Management",
      description:
        "Monitor and manage your online reputation to build trust and credibility with your audience. Our services include review management, social listening, and brand monitoring.",
    },
  ],

  benefits: {
    heading: "Business Benefits of Digital Marketing",
    points: [
      "Increased online visibility and brand awareness",
      "Higher website traffic and lead generation",
      "Improved search engine rankings and organic traffic",
      "Enhanced customer engagement and loyalty",
      "Greater ROI through targeted marketing campaigns",
      "Data-driven insights and performance tracking",
      "Scalable and cost-effective marketing solutions",
      "Competitive advantage in the digital landscape",
    ],
  },

  closing: {
    heading: "Transform Your Business with Digital Marketing",
    content:
      "In today's digital age, having a strong online presence is essential for business success. Digital Marketing Services from Rasta InfoTech provide the expertise and tools you need to elevate your brand, engage with your audience, and drive conversions. Whether you're looking to optimize your website for search engines, create compelling content, or launch targeted advertising campaigns, our team is here to help. Partner with us to transform your business, embrace digital innovation, and achieve measurable results.",
  },
};

export const GovernanceRiskCompliancePageContent = {
  banner: {
    image: bannerblockchain,
    heading: "Governance, Risk & Compliance Services",
    breadcrumb: ["HOME", "SERVICES", "GOVERNANCE, RISK & COMPLIANCE"],
  },

  introduction: {
    title: "Governance, Risk & Compliance – Ensuring Integrity and Security",
    content: `Governance, Risk & Compliance (GRC) encompasses the strategies, processes, and tools used to manage and mitigate risks, ensure regulatory compliance, and uphold corporate governance standards. In today's complex business environment, effective GRC practices are essential for maintaining operational integrity, protecting assets, and achieving long-term success. At Rasta InfoTech, we offer comprehensive GRC services that help organizations navigate regulatory landscapes, identify and address risks, and implement robust governance frameworks. Our goal is to empower businesses with the insights and tools needed to make informed decisions, enhance security, and foster a culture of compliance.`,
  },

  grcCapabilities: [
    {
      icon: "🔒",
      title: "Risk Management",
      description:
        "Identify, assess, and mitigate risks that could impact your organization's operations, reputation, and financial performance. Our risk management services include risk assessments, risk mitigation strategies, and continuous monitoring to ensure proactive risk management.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "📜",
      title: "Compliance Management",
      description:
        "Ensure adherence to regulatory requirements and industry standards through comprehensive compliance management. Our services include compliance audits, policy development, training programs, and ongoing monitoring to maintain compliance and avoid penalties.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🏛️",
      title: "Corporate Governance",
      description:
        "Implement effective governance frameworks that promote transparency, accountability, and ethical behavior. Our corporate governance services include board advisory, governance assessments, policy development, and stakeholder engagement to uphold governance standards.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1,
    heading: "Why Choose Governance, Risk & Compliance with Rasta InfoTech?",
    description:
      "At Rasta InfoTech, we understand that effective GRC practices are critical to achieving business success and maintaining stakeholder trust. Our team of experts brings deep knowledge and experience in risk management, compliance, and corporate governance. We work closely with our clients to develop customized GRC solutions that align with their unique needs and objectives. Whether you're navigating regulatory changes, managing risks, or enhancing governance frameworks, our GRC services provide the insights and tools needed to make informed decisions and drive sustainable growth.",
  },

  technologies: {
    image: devopsimg2,
    heading: "Tools & Technologies We Use",
    description:
      "At Rasta InfoTech, we leverage a wide range of GRC tools and technologies to optimize your risk management, compliance, and governance processes. Our tech stack includes risk assessment software, compliance management platforms, governance frameworks, and data analytics tools. By integrating these technologies with your existing systems, we create seamless workflows that enhance efficiency, ensure compliance, and drive business value.",
  },

  services: [
    {
      title: "Risk Assessments",
      description:
        "Conduct thorough risk assessments to identify potential threats and vulnerabilities. Our services include risk analysis, risk prioritization, and risk mitigation strategies to ensure proactive risk management.",
    },
    {
      title: "Compliance Audits",
      description:
        "Perform comprehensive compliance audits to ensure adherence to regulatory requirements and industry standards. Our services include policy reviews, gap analysis, and corrective action plans to maintain compliance.",
    },
    {
      title: "Governance Frameworks",
      description:
        "Develop and implement effective governance frameworks that promote transparency, accountability, and ethical behavior. Our services include board advisory, governance assessments, policy development, and stakeholder engagement.",
    },
    {
      title: "Policy Development",
      description:
        "Create and implement policies that align with regulatory requirements and industry best practices. Our services include policy drafting, policy reviews, and policy training to ensure compliance and governance.",
    },
    {
      title: "Training Programs",
      description:
        "Develop and deliver training programs that educate employees on risk management, compliance, and governance practices. Our services include training materials, workshops, and e-learning modules to enhance knowledge and skills.",
    },
    {
      title: "Continuous Monitoring",
      description:
        "Implement continuous monitoring solutions to track and manage risks, compliance, and governance processes. Our services include real-time monitoring, data analytics, and reporting to ensure proactive management.",
    },
    {
      title: "Stakeholder Engagement",
      description:
        "Engage with stakeholders to promote transparency, accountability, and ethical behavior. Our services include stakeholder analysis, communication strategies, and engagement plans to build trust and maintain governance standards.",
    },
    {
      title: "Regulatory Change Management",
      description:
        "Navigate regulatory changes and ensure compliance with new requirements. Our services include regulatory analysis, impact assessments, and implementation plans to manage regulatory changes effectively.",
    },
  ],

  benefits: {
    heading: "Business Benefits of Governance, Risk & Compliance",
    points: [
      "Enhanced risk management and mitigation",
      "Improved regulatory compliance and reduced penalties",
      "Strengthened corporate governance and stakeholder trust",
      "Proactive identification and management of risks",
      "Increased operational efficiency and effectiveness",
      "Greater transparency and accountability",
      "Enhanced decision-making and strategic planning",
      "Sustainable growth and long-term success",
    ],
  },

  closing: {
    heading: "Transform Your Business with Governance, Risk & Compliance",
    content:
      "In today's complex business environment, effective governance, risk management, and compliance practices are essential for maintaining operational integrity, protecting assets, and achieving long-term success. Governance, Risk & Compliance Services from Rasta InfoTech provide the expertise and tools you need to navigate regulatory landscapes, identify and address risks, and implement robust governance frameworks. Whether you're looking to enhance risk management, ensure compliance, or strengthen governance, our team is here to help. Partner with us to transform your business, embrace proactive management, and achieve sustainable growth.",
  },
};

export const MicrosoftCOEPageContent = {
  banner: {
    image: bannerblockchain,
    heading: "Microsoft Center of Excellence (COE)",
    breadcrumb: ["HOME", "SERVICES", "MICROSOFT COE"],
  },

  introduction: {
    title: "Microsoft COE – Driving Innovation and Excellence",
    content:
      "The Microsoft Center of Excellence (COE) is dedicated to leveraging Microsoft's suite of tools and technologies to drive innovation, enhance productivity, and achieve operational excellence. As businesses increasingly adopt digital transformation strategies, the need for specialized expertise in Microsoft solutions becomes paramount. At Rasta InfoTech, our Microsoft COE provides comprehensive services that encompass consulting, implementation, customization, and support for Microsoft products such as Azure, Office 365, Dynamics 365, and Power Platform. Our goal is to empower organizations with the capabilities to maximize their investment in Microsoft technologies and achieve sustainable growth.",
  },

  coeCapabilities: [
    {
      icon: "☁️",
      title: "Azure Cloud Services",
      description:
        "Harness the power of Microsoft Azure to build, deploy, and manage applications in the cloud. Our Azure services include cloud migration, infrastructure management, security, and compliance to ensure seamless and secure cloud operations.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },

    {
      icon: "💼",
      title: "Dynamics 365 & CRM",
      description:
        "Optimize customer relationship management with Dynamics 365. Our services include implementation, customization, integration, and support for Dynamics 365 modules such as Sales, Customer Service, Marketing, and Finance.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🔧",
      title: "Power Platform & Automation",
      description:
        "Automate business processes and workflows with Power Platform tools like Power Apps, Power Automate, and Power Virtual Agents. Our services include app development, workflow automation, and chatbot creation to enhance efficiency and productivity.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1,
    heading: "Why Choose Microsoft COE with Rasta InfoTech?",
    description:
      "At Rasta InfoTech, we understand that leveraging Microsoft technologies requires specialized expertise and a strategic approach. Our Microsoft COE team consists of certified professionals with deep knowledge and experience in Microsoft solutions. We work closely with our clients to develop customized strategies that align with their business goals and drive innovation. Whether you're looking to migrate to the cloud, optimize data analytics, enhance collaboration, or automate processes, our Microsoft COE services provide the insights and tools needed to achieve excellence.",
  },

  technologies: {
    image: devopsimg2,
    heading: "Tools & Technologies We Use",
    description:
      "At Rasta InfoTech, we leverage a comprehensive suite of Microsoft tools and technologies to deliver effective solutions. Our tech stack includes Azure for cloud services, Power BI for data analytics, Office 365 for collaboration, Dynamics 365 for CRM, and Power Platform for automation. By integrating these tools with your existing systems, we create seamless workflows that enhance efficiency, ensure compliance, and drive business value.",
  },

  services: [
    {
      title: "Azure Cloud Migration",
      description:
        "Migrate your applications and infrastructure to Microsoft Azure for enhanced scalability, security, and performance. Our services include cloud assessment, migration planning, execution, and post-migration support.",
    },
    {
      title: "Power BI Implementation",
      description:
        "Implement Power BI to transform data into actionable insights. Our services include data modeling, visualization, reporting, and integration with various data sources to drive informed decision-making.",
    },
    {
      title: "Office 365 Setup & Support",
      description:
        "Set up and support Office 365 tools like SharePoint, Teams, Exchange, and OneDrive to enhance collaboration and productivity. Our services include migration, customization, and ongoing support.",
    },
    {
      title: "Dynamics 365 Customization",
      description:
        "Customize Dynamics 365 modules such as Sales, Customer Service, Marketing, and Finance to optimize customer relationship management. Our services include implementation, integration, and support.",
    },
    {
      title: "Power Platform Development",
      description:
        "Develop and automate business processes with Power Platform tools like Power Apps, Power Automate, and Power Virtual Agents. Our services include app development, workflow automation, and chatbot creation.",
    },
    {
      title: "Security & Compliance",
      description:
        "Ensure the security and compliance of your Microsoft solutions with our comprehensive security services. Our services include security assessments, policy development, and ongoing monitoring.",
    },
    {
      title: "Training & Support",
      description:
        "Provide training and support to help your team effectively use Microsoft tools and technologies. Our services include training materials, workshops, and ongoing support.",
    },
    {
      title: "Integration Services",
      description:
        "Integrate Microsoft solutions with your existing systems to create seamless workflows and enhance efficiency. Our services include integration planning, execution, and support.",
    },
  ],

  benefits: {
    heading: "Business Benefits of Microsoft COE",
    points: [
      "Enhanced scalability and performance with Azure cloud services",
      "Improved decision-making with Power BI analytics",
      "Increased collaboration and productivity with Office 365",
      "Optimized customer relationship management with Dynamics 365",
      "Automated business processes with Power Platform",
      "Greater security and compliance with comprehensive security services",
      "Customized solutions tailored to your business needs",
      "Ongoing support and training to maximize your investment",
    ],
  },

  closing: {
    heading: "Transform Your Business with Microsoft COE",
    content:
      "In today's digital age, leveraging Microsoft technologies is essential for driving innovation, enhancing productivity, and achieving operational excellence. Microsoft COE Services from Rasta InfoTech provide the expertise and tools you need to maximize your investment in Microsoft solutions. Whether you're looking to migrate to the cloud, optimize data analytics, enhance collaboration, or automate processes, our team is here to help. Partner with us to transform your business, embrace digital innovation, and achieve sustainable growth.",
  },
};

export const AgileITOpsPageContent = {
  banner: {
    image: bannerblockchain, // replace with your actual banner image import
    heading: "Agile IT Operations",
    breadcrumb: ["HOME", "SERVICES", "AGILE IT OPERATIONS"],
  },

  introduction: {
    title: "Agile IT Ops – Adaptive, Scalable, and Efficient",
    content: `Agile IT Operations is a transformative approach that bridges the traditional divide between IT operations and agile software development. In today’s fast-paced digital landscape, where organizations are expected to innovate rapidly while maintaining high levels of reliability, Agile IT Ops offers a solution that promotes adaptability, speed, and stability. By applying agile principles to IT service management, businesses can streamline workflows, break down departmental silos, and respond to changes with greater agility.

    At Rasta InfoTech, we recognize that IT operations are no longer just about maintenance—they’re about delivering business value continuously and efficiently. Agile IT Ops involves collaborative cross-functional teams, continuous integration and delivery (CI/CD), infrastructure automation, real-time monitoring, and data-driven decision-making. With our extensive experience in DevOps, ITSM, and agile frameworks, we enable enterprises to transform their operations into intelligent, automated, and scalable systems. Whether you're modernizing legacy infrastructure, automating deployments, or enhancing service resilience, our Agile IT Ops solutions help you operate smarter and faster.`,
  },

  opsModels: [
    {
      icon: "🚀",
      title: "Continuous Delivery Ops",
      description:
        "Agile IT Ops integrates Continuous Delivery (CD) into everyday workflows, allowing teams to build, test, and release software more frequently and reliably. This model supports the rapid deployment of updates, patches, and features, all while maintaining high standards of quality and security. With CI/CD pipelines, code changes are automatically tested and deployed, reducing human error and enhancing consistency across environments.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🔍",
      title: "Monitoring & Observability",
      description:
        "Observability is a cornerstone of Agile IT Ops. Through real-time monitoring and telemetry, teams gain deep visibility into system health, user behavior, and application performance. Tools like Prometheus, Grafana, and ELK Stack help identify performance bottlenecks, detect anomalies, and prevent outages. This proactive monitoring approach ensures that IT can respond quickly to issues, often before end users are affected.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🤝",
      title: "Collaborative IT Ops",
      description:
        "Agile IT Ops thrives on cross-functional collaboration. Traditional hand-offs between development, QA, and operations are replaced by unified teams that share goals, responsibilities, and feedback loops. This collaborative model promotes transparency, accelerates delivery cycles, and ensures operational considerations are integrated from the start of the development lifecycle. Tools like Jira, Slack, and Confluence further enhance team coordination.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1, // replace with your actual image import
    heading: "Why Choose Agile IT Ops with Rasta InfoTech?",
    description: `Rasta InfoTech is your trusted partner in building resilient, scalable, and forward-looking IT operations. Our Agile IT Ops services are designed to evolve with your business needs. We understand that modern IT isn't just about fixing problems—it's about preventing them, anticipating future needs, and enabling business innovation. 

    By combining agile methodologies with operational excellence, we ensure that your organization can quickly respond to market demands without compromising performance or stability. Our team brings hands-on expertise in automating infrastructure, setting up monitoring systems, integrating CI/CD pipelines, and fostering a DevOps culture. We don’t just deliver tools—we drive cultural change and process improvement that lasts.

    Whether you're starting from scratch or looking to enhance your existing operations, Rasta InfoTech crafts custom Agile IT Ops roadmaps tailored to your business goals. Our services go beyond technology—they’re about transforming mindsets, reducing time-to-market, increasing system reliability, and improving customer satisfaction.`,
  },

  technologies: {
    image: devopsimg2, // replace with your actual image import
    heading: "Technologies We Use",
    description: `We implement Agile IT Ops using a blend of modern, robust, and scalable technologies. Our stack includes CI/CD platforms like Jenkins, GitHub Actions, GitLab CI, and Azure DevOps for automated code integration and deployment. For infrastructure as code (IaC), we use Terraform, Ansible, and AWS CloudFormation, allowing for consistent and repeatable environment provisioning.

    To monitor and analyze system performance, we leverage tools such as Prometheus, Grafana, Datadog, New Relic, and Splunk. These platforms provide real-time insights into infrastructure health, application behavior, and user experience. We also integrate collaboration tools like Jira for agile project tracking, Slack for real-time communication, and Confluence for documentation to enhance team productivity.

    In container orchestration, we deploy Kubernetes and Docker to manage microservices-based applications efficiently. Our expertise also spans cloud platforms like AWS, Azure, and Google Cloud, enabling hybrid or multi-cloud operational strategies. With this powerful toolset, we ensure your IT operations are not only agile but also secure, scalable, and future-ready.`,
  },

  services: [
    {
      title: "CI/CD Pipeline Setup",
      description:
        "We architect and implement robust continuous integration and delivery pipelines to automate testing, building, and deploying code, ensuring faster time-to-market and reduced manual effort.",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "Using tools like Terraform and Ansible, we provision and manage infrastructure through code, enabling version control, repeatability, and cost optimization across environments.",
    },
    {
      title: "Monitoring & Alerting",
      description:
        "We set up real-time monitoring and alert systems using tools like Prometheus, Grafana, and Datadog to ensure high availability and quick incident resolution.",
    },
    {
      title: "DevOps & Agile Coaching",
      description:
        "We provide hands-on training, workshops, and consulting to help your teams adopt agile principles, streamline workflows, and build a DevOps culture.",
    },
    {
      title: "Containerization & Orchestration",
      description:
        "We deploy, manage, and scale applications using Docker and Kubernetes, enabling better resource utilization and microservices architecture adoption.",
    },
    {
      title: "Automated Incident Response",
      description:
        "We implement automated incident management systems integrated with PagerDuty or Opsgenie to reduce response time, eliminate manual escalation, and improve reliability.",
    },
  ],
};

export const XAAPPageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual imported image
    heading: "Platforms & Protocols – XAAP",
    breadcrumb: ["HOME", "SERVICES", "PLATFORMS & PROTOCOLS – XAAP"],
  },

  introduction: {
    title: "XAAP – Cross-Platform Innovation with Protocol Intelligence",
    content: `XAAP (eXtensible Application Access Platform) represents a next-generation framework for building interoperable platforms and intelligent protocol-driven ecosystems. In today’s connected world, enterprises must integrate a wide range of services, tools, APIs, and devices across various domains and environments. XAAP enables seamless communication between diverse systems—whether cloud-native, on-premise, or edge-based—by offering a unified platform driven by protocol intelligence, modular design, and security-first architecture.

    At Rasta InfoTech, we empower organizations to build scalable, flexible, and robust systems using the XAAP methodology. Whether you're aiming to streamline cross-platform communication, accelerate application delivery, or ensure compliance with industry-specific protocols, our XAAP-based solutions create a cohesive, interoperable environment that connects data, processes, and platforms into a single intelligent workflow. It’s the future of digital infrastructure, built on principles of abstraction, agility, and extensibility.`,
  },

  xaapModels: [
    {
      icon: "🌐",
      title: "Cross-Platform Integration",
      description:
        "XAAP provides a seamless layer of abstraction for integrating apps and services across mobile, web, desktop, IoT, and cloud environments. It ensures that business logic remains consistent, no matter the platform or device, while reducing the friction caused by incompatible systems.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🔐",
      title: "Protocol-Centric Architecture",
      description:
        "Our XAAP solutions follow a protocol-first approach. We build systems that are compliant with key communication protocols such as MQTT, HTTP/2, gRPC, WebSockets, and REST, making data exchange more efficient, structured, and real-time across microservices and distributed components.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "⚙️",
      title: "Modular Microservices",
      description:
        "With XAAP, we adopt a service-oriented architecture that promotes modularity and reusability. Each service functions independently but communicates within a secure and standardized protocol ecosystem—resulting in faster development, easier scaling, and isolated maintenance.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1, // Replace with actual image import
    heading: "Why Choose XAAP with Rasta InfoTech?",
    description: `Rasta InfoTech is a trusted name when it comes to building enterprise-grade platforms with protocol intelligence at the core. Our XAAP-based solutions are not just about connecting systems—they’re about orchestrating meaningful workflows, enforcing industry standards, and delivering measurable ROI. We bring deep technical knowledge of modern platforms, APIs, and communication protocols and apply them in a way that simplifies complexity for your business.

    With XAAP, we reduce data silos, increase automation, and enable organizations to quickly build, test, and launch applications across heterogeneous environments. Whether it's integrating financial systems via FIX protocol, enabling healthcare interoperability with HL7/FHIR, or creating IoT networks with MQTT, we tailor XAAP to match your domain needs. Our commitment goes beyond delivery—we also guide your teams in adopting platform-centric thinking, improving system resilience, and ensuring long-term maintainability.`,
  },

  technologies: {
    image: devopsimg2, // Replace with actual image import
    heading: "Technologies & Protocols We Use",
    description: `To develop XAAP solutions, we utilize a carefully curated set of technologies and standards. Our toolkit spans popular communication protocols like REST, GraphQL, MQTT, gRPC, WebSockets, CoAP, and SOAP, depending on performance, latency, and security needs. For building the platform layer, we employ microservices frameworks like Spring Boot, Node.js, .NET Core, and Django REST Framework. 

    On the integration front, we use API gateways like Kong, Apigee, and AWS API Gateway to manage services, authenticate access, and route data securely. We also support real-time data pipelines using Kafka, RabbitMQ, and Apache Pulsar for event-driven architectures. For interoperability, our solutions comply with domain-specific standards—such as ISO 20022 in finance, FHIR in healthcare, OPC-UA in industrial automation, and OAuth2/OpenID for secure user authorization.

    Whether on-premises or in the cloud, our XAAP architectures are containerized using Docker and orchestrated with Kubernetes, allowing for maximum portability and scaling. Paired with monitoring tools like ELK, Prometheus, and Datadog, we ensure every platform is observable, secure, and performant.`,
  },

  services: [
    {
      title: "Protocol-Driven Application Design",
      description:
        "We build applications around well-defined, domain-specific protocols, ensuring structured data flow and secure communication across services.",
    },
    {
      title: "Custom API & Platform Engineering",
      description:
        "Development of custom APIs, SDKs, and developer portals with integrated access control, versioning, and monitoring features.",
    },
    {
      title: "Event-Driven Architecture Setup",
      description:
        "Build reactive and scalable platforms using message brokers like Kafka or RabbitMQ to support real-time, asynchronous communication.",
    },
    {
      title: "Multi-Platform Synchronization",
      description:
        "Enable consistent data and user experience across mobile, web, desktop, and embedded systems through platform abstraction and centralized orchestration.",
    },
    {
      title: "Security & Compliance Layering",
      description:
        "We implement robust authentication, encryption, and protocol-level security using JWT, OAuth2, TLS, and data protection best practices.",
    },
    {
      title: "Protocol Transformation & Interoperability",
      description:
        "Transform data between disparate protocols (e.g., XML to JSON, HL7 to FHIR) to ensure smooth communication between systems and third-party integrations.",
    },
  ],
};

export const CloudPageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual imported image
    heading: "Cloud Services",
    breadcrumb: ["HOME", "SERVICES", "CLOUD SERVICES"],
  },

  introduction: {
    title:
      "Cloud Solutions for Scalable, Secure & Agile Digital Transformation",
    content: `Cloud services are the foundation of modern digital innovation. By migrating to the cloud, businesses gain access to scalable infrastructure, on-demand computing power, and advanced data management capabilities—all while reducing operational costs and improving service uptime. Whether you're looking to migrate legacy systems, build cloud-native applications, or enable hybrid infrastructure, cloud computing offers the flexibility and speed required for digital growth.

    At Rasta InfoTech, we provide comprehensive cloud services that accelerate your digital transformation journey. Our certified cloud experts design, deploy, and manage solutions on platforms like Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and others. We specialize in cloud migration, application modernization, DevOps automation, and managed cloud services—ensuring that your business remains agile, competitive, and ready for scale. With Rasta InfoTech as your cloud consulting partner, you gain not just infrastructure, but a strategic edge in the digital economy.`,
  },

  cloudModels: [
    {
      icon: "☁️",
      title: "Public Cloud Services",
      description:
        "Public cloud platforms like AWS, Azure, and Google Cloud offer instant scalability, high availability, and flexible pricing models. With global data centers and advanced automation tools, public cloud solutions are ideal for businesses seeking fast innovation, reduced hardware dependency, and enterprise-grade security without the need for physical infrastructure.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🏢",
      title: "Private Cloud Deployment",
      description:
        "Private cloud solutions deliver dedicated infrastructure for enhanced control, compliance, and customization. Hosted either on-premises or in a third-party data center, private cloud is ideal for organizations in finance, healthcare, or government that require strict data governance and privacy while still benefiting from cloud agility.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🔗",
      title: "Hybrid & Multi-Cloud Architecture",
      description:
        "Hybrid and multi-cloud strategies combine the flexibility of public cloud with the control of private infrastructure. Businesses can optimize cost, improve disaster recovery, and ensure business continuity by distributing workloads across different cloud providers. Rasta InfoTech designs resilient architectures that enable seamless cloud orchestration and real-time integration.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1,
    heading: "Why Rasta InfoTech for Cloud Services?",
    description: `Rasta InfoTech is a leading cloud solutions provider with deep expertise in cloud strategy, infrastructure automation, and application development. We offer customized cloud consulting services tailored to your business goals—whether you're launching a new SaaS product, migrating enterprise systems, or modernizing legacy applications. Our team of certified cloud architects ensures smooth deployment, high performance, and security compliance across your cloud ecosystem.

    What sets us apart is our commitment to business outcomes. We align cloud adoption with your operational KPIs—reducing IT overhead, enhancing customer experiences, and accelerating time-to-market. Our DevOps and CI/CD practices ensure rapid delivery and minimal downtime, while our robust monitoring and security protocols safeguard your data and applications. 

    We also provide ongoing managed cloud services to monitor, patch, scale, and optimize your cloud environment 24/7. With a proven track record across industries such as fintech, healthcare, retail, and logistics, Rasta InfoTech helps businesses of all sizes unlock the full potential of cloud technology.`,
  },

  technologies: {
    image: devopsimg2,
    heading: "Cloud Platforms & Technologies We Use",
    description: `We utilize a best-in-class technology stack across all major cloud platforms. Our cloud implementation services cover AWS (EC2, S3, Lambda, RDS), Azure (App Services, Functions, Azure SQL), and GCP (App Engine, Cloud Storage, BigQuery). We use Infrastructure as Code (IaC) tools like Terraform, AWS CloudFormation, and Ansible to automate cloud provisioning and configuration.

    For container orchestration and deployment, we use Docker and Kubernetes (EKS, AKS, GKE) to ensure scalability and high availability. CI/CD automation is implemented using GitLab CI, Jenkins, GitHub Actions, and Azure DevOps for continuous integration and delivery. We enable secure, scalable, and agile cloud-native app development using microservices architecture and serverless functions.

    To monitor and optimize your cloud operations, we use Prometheus, Grafana, ELK Stack, AWS CloudWatch, Azure Monitor, and Datadog. Our cloud security services integrate IAM, role-based access control (RBAC), firewalls, WAF, encryption, and compliance auditing to meet industry standards like GDPR, HIPAA, and ISO 27001.`,
  },

  services: [
    {
      title: "Cloud Migration & Assessment",
      description:
        "We perform in-depth cloud readiness assessments and execute secure, low-downtime migrations from on-premises or legacy systems to the cloud. Our team ensures business continuity throughout the transition process.",
    },
    {
      title: "Cloud-Native Application Development",
      description:
        "Build cloud-native apps that are scalable, resilient, and cost-efficient. Using serverless architecture and microservices, we help you innovate faster and reduce technical debt.",
    },
    {
      title: "Infrastructure as Code (IaC) & Automation",
      description:
        "Achieve predictable, error-free deployments through infrastructure automation using Terraform, Pulumi, and AWS CloudFormation. Our IaC solutions accelerate environment provisioning and ensure consistency.",
    },
    {
      title: "DevOps & Continuous Delivery",
      description:
        "We design and implement CI/CD pipelines that automate code builds, tests, deployments, and rollbacks, enabling rapid and reliable software delivery across staging and production environments.",
    },
    {
      title: "Cloud Security & Compliance",
      description:
        "Protect your cloud assets with advanced security frameworks, encryption, zero-trust policies, IAM, and regulatory compliance enforcement to meet HIPAA, GDPR, SOC 2, and PCI DSS standards.",
    },
    {
      title: "Managed Cloud Services & Optimization",
      description:
        "Our 24/7 managed services cover monitoring, alerting, cost control, performance tuning, scaling, patching, and backups—ensuring that your cloud infrastructure remains fast, secure, and efficient.",
    },
  ],
};

export const AzureServicesPageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual Azure banner image
    heading: "Microsoft Azure Cloud Services",
    breadcrumb: ["HOME", "SERVICES", "AZURE CLOUD"],
  },

  introduction: {
    title: "Microsoft Azure – Build, Scale, and Transform with the Cloud",
    content: `Microsoft Azure is a leading cloud computing platform that empowers organizations to build, deploy, and manage applications through Microsoft-managed data centers. Azure offers a comprehensive suite of cloud services, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) solutions. At Rasta InfoTech, we provide expert Azure cloud services designed to help businesses achieve scalability, flexibility, and innovation. From seamless cloud migration to robust infrastructure management and advanced analytics, our Azure solutions are tailored to meet the evolving needs of your enterprise. Embrace the power of the cloud with Azure to accelerate your digital transformation journey.`,
  },

  azureModels: [
    {
      icon: "☁️",
      title: "Azure Cloud Migration",
      description:
        "Seamlessly move your workloads to Azure with minimal downtime and risk. Our team assesses your current infrastructure, creates a migration roadmap, and ensures a smooth transition to the Azure environment with performance, security, and cost-efficiency in mind.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🛡️",
      title: "Azure Security & Compliance",
      description:
        "Protect your cloud environment with Azure’s built-in security tools and our custom compliance solutions. We implement identity access management, encryption, threat protection, and policy compliance aligned with industry standards like ISO, HIPAA, and GDPR.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "📊",
      title: "Azure Data & Analytics",
      description:
        "Unlock business insights with Azure's powerful data services. We help you store, process, and analyze large datasets using Azure Synapse, Data Factory, Power BI, and Machine Learning to enable data-driven decision-making.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1, // Replace with Azure-specific image
    heading: "Why Choose Azure Services with Rasta InfoTech?",
    description:
      "Rasta InfoTech is your trusted partner in deploying and managing Azure cloud solutions that drive innovation and efficiency. Our certified Azure professionals provide strategic guidance, architectural planning, and hands-on implementation tailored to your business objectives. We combine deep technical expertise with a customer-centric approach to ensure secure, scalable, and high-performance cloud environments. Whether you are starting your cloud journey or looking to optimize your existing Azure setup, we deliver end-to-end solutions that align with your digital goals.",
  },

  technologies: {
    image: devopsimg2, // Replace with Azure tools image
    heading: "Azure Tools & Services We Utilize",
    description:
      "Our Azure services harness a broad spectrum of tools and technologies within the Microsoft ecosystem. We work with Azure DevOps for CI/CD, Azure Resource Manager for infrastructure management, Azure Monitor and Log Analytics for monitoring, and Azure Active Directory for identity services. We also integrate third-party tools like Terraform, GitHub Actions, and Ansible for enhanced automation and orchestration. These tools empower us to deliver high-availability, scalable, and secure cloud environments tailored to your needs.",
  },

  services: [
    {
      title: "Azure Cloud Assessment",
      description:
        "Evaluate your current IT landscape to identify opportunities for cloud transformation. Our assessment includes cost analysis, workload readiness, and architectural recommendations tailored for Azure.",
    },
    {
      title: "Infrastructure as a Service (IaaS)",
      description:
        "Provision and manage virtual machines, storage, and networking resources on Azure. We help build scalable infrastructure environments with high availability and security.",
    },
    {
      title: "Platform as a Service (PaaS)",
      description:
        "Deploy and manage applications without worrying about underlying infrastructure. Our team leverages Azure App Services, Azure Kubernetes Service (AKS), and databases like Azure SQL and Cosmos DB.",
    },
    {
      title: "Azure DevOps Integration",
      description:
        "Automate your software delivery pipeline using Azure DevOps. We implement CI/CD, source control, release pipelines, and infrastructure automation to accelerate deployment cycles.",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Ensure business continuity with Azure Backup and Site Recovery. We design disaster recovery strategies to protect your critical workloads and data from disruptions.",
    },
    {
      title: "Azure Identity & Access Management",
      description:
        "Secure your environment with Azure Active Directory, Multi-Factor Authentication, and Role-Based Access Control (RBAC) to manage user access and identity protection.",
    },
    {
      title: "Monitoring & Optimization",
      description:
        "Continuously monitor and optimize your Azure resources using Azure Monitor, Application Insights, and Cost Management to improve performance and reduce expenses.",
    },
    {
      title: "Hybrid Cloud Solutions",
      description:
        "Integrate your on-premises systems with Azure to create a hybrid cloud environment. We use Azure Arc, ExpressRoute, and VPN Gateway for seamless hybrid operations.",
    },
  ],

  benefits: {
    heading: "Business Benefits of Azure Cloud",
    points: [
      "Flexible, scalable cloud infrastructure tailored to business needs",
      "Reduced operational costs with pay-as-you-go pricing",
      "Global data center reach and high availability",
      "Enhanced security and regulatory compliance",
      "Faster time-to-market with DevOps and automation tools",
      "Improved business continuity with reliable backup and disaster recovery",
      "Advanced analytics and AI capabilities",
      "Support for hybrid and multi-cloud environments",
    ],
  },

  closing: {
    heading: "Accelerate Your Cloud Journey with Azure",
    content:
      "Harness the full potential of Microsoft Azure with Rasta InfoTech’s expert cloud services. Whether you’re migrating your workloads, building cloud-native applications, or enhancing your existing Azure environment, we provide the tools, strategies, and support to help you succeed. Our team ensures secure, scalable, and cost-efficient cloud solutions that align with your business goals. Partner with us to embrace the future of digital infrastructure and transform your business through the power of Azure.",
  },
};

export const ApplicationServicesPageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual banner image import
    heading: "Application Services",
    breadcrumb: ["HOME", "SERVICES", "APPLICATION SERVICES"],
  },

  introduction: {
    title: "End-to-End Application Services for Digital-First Enterprises",
    content: `In today’s competitive and rapidly evolving digital landscape, applications are at the core of business innovation and user engagement. Whether it’s a customer-facing mobile app, an enterprise-grade web portal, or a mission-critical backend system, applications must be fast, secure, scalable, and user-friendly. At Rasta InfoTech, we offer comprehensive application services that cover the entire lifecycle—from ideation and design to development, deployment, and ongoing maintenance.

    Our application services are engineered to accelerate your digital transformation journey. We combine modern software development methodologies like Agile and DevOps with cutting-edge technologies including microservices, APIs, cloud-native infrastructure, and AI-driven automation. Whether you’re building a new application, re-engineering legacy systems, or integrating third-party solutions, we ensure quality, performance, and business alignment. With Rasta InfoTech, your applications become powerful enablers of growth, productivity, and innovation.`,
  },

  appTypes: [
    {
      icon: "📱",
      title: "Mobile Application Development",
      description:
        "We design and develop high-performance mobile apps for Android and iOS platforms using native (Swift, Kotlin) and cross-platform (Flutter, React Native) technologies. Our mobile solutions are intuitive, fast, and built to deliver excellent user experiences across all devices and screen sizes.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "💻",
      title: "Web Application Development",
      description:
        "From customer portals to internal business tools, we build responsive, secure, and scalable web applications using technologies like React, Angular, Node.js, .NET, and Laravel. Our web apps are optimized for performance, SEO, accessibility, and cross-browser compatibility.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🏢",
      title: "Enterprise Application Services",
      description:
        "We engineer robust enterprise-grade software tailored to your organization’s needs—ERP systems, CRM platforms, supply chain solutions, and HRMS tools. Our enterprise apps integrate with your core systems and support high availability, complex workflows, and large-scale data processing.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: cyberimg1, // Replace with your actual image
    heading: "Why Choose Rasta InfoTech for Application Services?",
    description: `Rasta InfoTech is more than just an application development company—we are your strategic technology partner. With a team of experienced designers, developers, architects, and QA engineers, we take a holistic approach to application delivery. Every solution we build is aligned with your business objectives, user expectations, and industry standards.

    We follow a user-centric design process to ensure intuitive UI/UX. Our agile delivery model enables iterative development, faster releases, and real-time feedback. We adopt cloud-native and microservice-based architectures to ensure scalability and fault tolerance. Whether it’s modernizing legacy systems or creating greenfield apps, we use secure coding practices, performance optimization, and continuous testing to deliver high-quality software.

    Our post-deployment services ensure ongoing performance tuning, feature enhancements, security updates, and technical support. Rasta InfoTech delivers reliable, future-ready applications that help businesses improve operations, deliver better customer experiences, and gain a competitive edge in the digital age.`,
  },

  technologies: {
    image: cyberimg2,
    heading: "Technologies & Frameworks We Work With",
    description: `Our application development services are powered by a wide range of technologies to suit diverse business needs and performance goals. For front-end development, we use React.js, Angular, Vue.js, and Next.js to create fast, interactive, and responsive UIs. On the backend, we specialize in Node.js, Express, .NET Core, Java Spring Boot, and Django for building powerful business logic and integrations.

    For mobile development, we work with Swift, Kotlin, React Native, and Flutter. We leverage REST and GraphQL APIs for seamless communication and third-party integration. Our databases include MySQL, PostgreSQL, MongoDB, and Firebase. For scalable deployments, we rely on Docker, Kubernetes, and cloud platforms like AWS, Azure, and GCP. We integrate DevOps pipelines for CI/CD using tools such as Jenkins, GitHub Actions, and GitLab CI.

    Security is built into every stage with authentication protocols (OAuth2, JWT), secure data storage, and input validation. Our QA processes include unit testing, integration testing, performance testing, and automated regression testing using Jest, Mocha, Selenium, and Cypress. We deliver robust, modern applications across industries including healthcare, finance, retail, logistics, and education.`,
  },

  services: [
    {
      title: "Custom Application Development",
      description:
        "We design and build tailored applications that solve unique business challenges and deliver real value. From MVPs to full-scale enterprise platforms, we handle every stage of development with agility and precision.",
    },
    {
      title: "Legacy Application Modernization",
      description:
        "We re-engineer outdated applications using modern frameworks, architectures, and UI/UX design to enhance functionality, performance, and maintainability without disrupting core operations.",
    },
    {
      title: "Mobile App Design & Development",
      description:
        "Develop fast, responsive, and engaging mobile apps for Android and iOS using native and hybrid technologies. We ensure smooth performance, offline access, and cross-device compatibility.",
    },
    {
      title: "Application Integration Services",
      description:
        "We connect your applications with CRMs, ERPs, databases, payment gateways, and third-party APIs to ensure seamless data exchange and unified business processes.",
    },
    {
      title: "Application Testing & QA",
      description:
        "Comprehensive manual and automated testing services that ensure your applications are bug-free, secure, and performant under all conditions. We provide unit, system, regression, and load testing.",
    },
    {
      title: "Application Maintenance & Support",
      description:
        "24/7 monitoring, troubleshooting, bug fixing, performance tuning, and version upgrades to ensure your applications remain updated, secure, and aligned with user needs.",
    },
  ],
};

export const CognitivePageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual image import
    heading: "Cognitive Services",
    breadcrumb: ["HOME", "SERVICES", "COGNITIVE SERVICES"],
  },

  introduction: {
    title: "Cognitive Services – Driving Intelligent Automation with AI & ML",
    content: `Cognitive services are transforming how businesses interact with customers, analyze data, and make decisions. By integrating artificial intelligence (AI), machine learning (ML), and natural language processing (NLP), organizations can create smarter applications that mimic human intelligence—enabling real-time personalization, automation, and predictive capabilities. 

    At Rasta InfoTech, we deliver advanced cognitive solutions that help you leverage unstructured and structured data to drive innovation and operational excellence. Our services range from intelligent chatbots and recommendation engines to computer vision and sentiment analysis. Whether you're in retail, healthcare, finance, or logistics, we tailor AI solutions that align with your digital transformation goals. With our cognitive services, your business can become more proactive, data-driven, and customer-centric.`,
  },

  cognitiveSolutions: [
    {
      icon: "🧠",
      title: "Natural Language Processing (NLP)",
      description:
        "Our NLP solutions help applications understand, interpret, and generate human language. From chatbots and voice assistants to sentiment analysis and text summarization, NLP enables deeper insights into user intent and behavior. We use state-of-the-art models like BERT, GPT, and spaCy to create context-aware systems.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "👁️‍🗨️",
      title: "Computer Vision & Image Recognition",
      description:
        "Using AI-powered computer vision, we build applications that interpret visual data from images, videos, or live streams. Our services include facial recognition, object detection, OCR, and quality inspection systems—ideal for healthcare imaging, security, retail analytics, and smart manufacturing.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "📈",
      title: "Predictive Analytics & Machine Learning",
      description:
        "We build intelligent models that use historical data to forecast trends, customer behavior, maintenance cycles, and more. From sales forecasting and fraud detection to recommendation systems and churn prediction, our ML solutions empower smarter business decisions.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1,
    heading: "Why Choose Rasta InfoTech for Cognitive Services?",
    description: `At Rasta InfoTech, we combine deep industry knowledge with cutting-edge AI expertise to help businesses unlock the full potential of cognitive technologies. We don't just deploy pre-trained models—we customize intelligent solutions based on your specific use case, data landscape, and performance goals.

    Our team includes AI/ML engineers, data scientists, and NLP specialists who follow MLOps best practices to build scalable, secure, and explainable AI systems. We integrate cognitive capabilities into your existing workflows, CRM systems, cloud infrastructure, or customer-facing platforms—enhancing automation, efficiency, and insight generation.

    From ideation to deployment and monitoring, our approach ensures ethical AI usage, bias mitigation, and governance compliance. Whether you want to automate support with AI chatbots, identify anomalies in financial data, or classify medical images, we are your end-to-end cognitive technology partner.`,
  },

  technologies: {
    image: devopsimg2,
    heading: "Technologies & Frameworks We Use",
    description: `We use a combination of open-source libraries and enterprise-grade platforms to develop robust cognitive applications. For natural language processing, we work with Hugging Face Transformers, spaCy, NLTK, and OpenAI APIs. Our machine learning models are built using TensorFlow, PyTorch, and Scikit-learn.

    In computer vision, we leverage OpenCV, YOLO, and Google Vision AI, and for voice-enabled applications, we use Dialogflow, Amazon Lex, and Microsoft Azure Speech. We deploy models using Docker and Kubernetes and integrate pipelines through MLFlow, Airflow, and SageMaker for efficient training, versioning, and monitoring.

    For data pipelines and analytics, we use Apache Spark, Kafka, and Google BigQuery. Our AI deployments follow secure DevOps and MLOps processes with continuous integration, A/B testing, and real-time model retraining. With Rasta InfoTech, your cognitive systems will be scalable, accurate, and seamlessly embedded into your existing digital environment.`,
  },

  services: [
    {
      title: "AI Strategy & Consulting",
      description:
        "We help organizations define a tailored AI roadmap, assess readiness, and identify high-impact use cases aligned with their business goals.",
    },
    {
      title: "Chatbot & Virtual Assistant Development",
      description:
        "Design and deploy intelligent, conversational agents powered by NLP to automate customer support, onboarding, FAQs, and internal service desks.",
    },
    {
      title: "Computer Vision Applications",
      description:
        "Create smart vision systems for facial recognition, surveillance, OCR, quality control, inventory tracking, and healthcare diagnostics.",
    },
    {
      title: "Predictive Analytics & Forecasting",
      description:
        "Use historical data and real-time signals to predict customer behavior, optimize inventory, reduce churn, and prevent system failures.",
    },
    {
      title: "Speech Recognition & Voice AI",
      description:
        "Implement voice-to-text, speech analytics, and voice-driven interfaces for IVRs, virtual assistants, transcription tools, and accessibility.",
    },
    {
      title: "Model Training, Deployment & MLOps",
      description:
        "Build, train, and deploy machine learning models using modern MLOps frameworks that support continuous integration, monitoring, and retraining.",
    },
  ],
};

export const AIPageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual image import
    heading: "Artificial Intelligence (AI) Services",
    breadcrumb: ["HOME", "SERVICES", "ARTIFICIAL INTELLIGENCE"],
  },

  introduction: {
    title: "Transforming Businesses Through Intelligent AI Solutions",
    content: `Artificial Intelligence (AI) is revolutionizing industries by empowering businesses with intelligent automation, data-driven insights, and human-like decision-making. From predictive analytics and recommendation engines to intelligent chatbots and computer vision, AI is unlocking new levels of efficiency, personalization, and innovation.

    At Rasta InfoTech, we deliver scalable and custom AI solutions that help businesses evolve into smarter, data-first organizations. Our AI services are designed to automate repetitive tasks, enhance customer experiences, and uncover insights from complex datasets. Whether you're just starting your AI journey or looking to scale existing capabilities, our team of AI engineers, data scientists, and strategists work with you to build, train, and deploy reliable and ethical AI models. With us, your business stays ahead in an AI-first world.`,
  },

  aiCapabilities: [
    {
      icon: "🧠",
      title: "Machine Learning (ML)",
      description:
        "We build intelligent systems that learn from historical and real-time data to make accurate predictions and recommendations. Our ML solutions include classification, clustering, regression, anomaly detection, and optimization algorithms tailored to your business goals.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🗣️",
      title: "Natural Language Processing (NLP)",
      description:
        "Leverage NLP to understand, analyze, and respond to human language. From text classification and entity recognition to sentiment analysis and language translation, we integrate powerful language models like BERT, GPT, and custom LLMs into your applications.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description:
        "Our computer vision services include object detection, facial recognition, OCR, visual inspection, and image classification. Ideal for industries like healthcare, manufacturing, surveillance, and retail analytics.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: cyberimg1, // Replace with actual image import
    heading: "Why Rasta InfoTech for AI Development?",
    description: `At Rasta InfoTech, we help you go beyond AI experimentation and deliver real business value. Our end-to-end AI service model—spanning strategy, data preparation, model development, deployment, and ongoing optimization—ensures that your investment translates into scalable, sustainable results.

    We bring deep expertise in supervised and unsupervised learning, deep learning, reinforcement learning, and generative AI. Our team works closely with your business and data teams to develop models that align with your KPIs and ethical standards. We focus on delivering AI systems that are explainable, auditable, and compliant with privacy regulations.

    Whether you’re looking to build an AI-powered chatbot, optimize your supply chain, detect fraud in financial transactions, or automate healthcare diagnostics, Rasta InfoTech ensures secure, high-performance AI integration across your tech stack.`,
  },

  technologies: {
    image: cyberimg2, // Replace with actual image import
    heading: "Technologies & Platforms We Work With",
    description: `Our AI solutions are powered by the industry’s most trusted tools and platforms. For machine learning and deep learning, we use TensorFlow, PyTorch, Keras, Scikit-learn, and Hugging Face Transformers. Our data processing pipeline includes Apache Spark, Pandas, Kafka, and Airflow.

    For NLP and large language models (LLMs), we use OpenAI, Cohere, Google PaLM, and custom fine-tuned transformer models. We deploy AI solutions on AWS SageMaker, Azure Machine Learning, Google Vertex AI, and custom Kubernetes clusters with MLFlow and Docker.

    For computer vision, we rely on OpenCV, YOLOv5, Detectron2, and Google Vision AI. Our DevOps team ensures AI model deployment, monitoring, and governance through MLOps best practices, including CI/CD for ML, model versioning, and explainability. Security, fairness, and ethical AI are baked into every model lifecycle we deliver.`,
  },

  services: [
    {
      title: "AI Consulting & Strategy",
      description:
        "We help businesses assess their AI readiness, identify impactful use cases, and create a roadmap that aligns with long-term objectives and ROI expectations.",
    },
    {
      title: "Custom ML Model Development",
      description:
        "Build, train, and validate machine learning models for classification, regression, recommendation, and time-series forecasting based on your specific data.",
    },
    {
      title: "AI-Powered Chatbots & Virtual Assistants",
      description:
        "Create intelligent conversational interfaces powered by NLP that automate support, sales, and customer interaction with contextual understanding and real-time response.",
    },
    {
      title: "Computer Vision Solutions",
      description:
        "Deploy smart visual systems for tasks such as image recognition, barcode scanning, automated defect detection, and facial authentication.",
    },
    {
      title: "Generative AI Integration",
      description:
        "Use advanced LLMs to automate content generation, summarization, Q&A, code completion, and AI-driven personalization in apps and websites.",
    },
    {
      title: "AI Model Deployment & MLOps",
      description:
        "Deploy AI models in production using best practices for monitoring, retraining, version control, and performance tuning. We ensure operational AI through robust MLOps workflows.",
    },
  ],
};

export const EnterpriseAutomationPageContent = {
  banner: {
    image: Automation, // Replace with actual imported banner image
    heading: "Enterprise Automation Services",
    breadcrumb: ["HOME", "SERVICES", "ENTERPRISE AUTOMATION"],
  },

  introduction: {
    title: "Streamlining Business Operations with Enterprise Automation",
    content: `Enterprise automation is transforming the way businesses operate by eliminating manual processes, reducing human error, and accelerating workflow execution. By integrating technologies like robotic process automation (RPA), intelligent workflows, APIs, and low-code platforms, enterprises can significantly improve efficiency, agility, and scalability.

    At Rasta InfoTech, we specialize in delivering customized enterprise automation solutions that empower your organization to streamline complex operations, optimize resource allocation, and enable data-driven decision-making. Whether you want to automate finance functions, HR workflows, customer support, or supply chain processes, our automation experts help you design and implement end-to-end intelligent automation strategies. Let us help you evolve into a smart enterprise, where every process is optimized, connected, and measurable.`,
  },

  automationPillars: [
    {
      icon: "🤖",
      title: "Robotic Process Automation (RPA)",
      description:
        "We automate repetitive, rule-based tasks using leading RPA platforms like UiPath, Automation Anywhere, and Power Automate. RPA bots handle data entry, invoice processing, email parsing, and system updates with speed and accuracy—freeing your team to focus on strategic work.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🔄",
      title: "Business Process Automation (BPA)",
      description:
        "Our BPA services help organizations optimize entire business workflows through integrations, APIs, and orchestration engines. From approval processes to customer onboarding and order management, we streamline and automate complex workflows for improved efficiency.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "⚡",
      title: "Intelligent Automation (AI + RPA)",
      description:
        "By combining artificial intelligence with RPA, we enable cognitive automation that can handle unstructured data, make decisions, and learn over time. From reading scanned documents to analyzing customer sentiment, our intelligent bots bring smart automation to life.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: cyberimg1,
    heading: "Why Choose Rasta InfoTech for Enterprise Automation?",
    description: `At Rasta InfoTech, we go beyond automating individual tasks—we help you reimagine your workflows from the ground up. With our enterprise automation services, we unlock hidden efficiencies, improve compliance, and boost productivity across departments. Our team of automation architects, RPA developers, and business analysts work together to identify automation opportunities, reduce manual dependencies, and integrate your systems into a unified, intelligent ecosystem.

    We focus on scalable, secure, and business-aligned automation strategies that deliver measurable ROI. Whether you're looking to reduce operational costs, speed up customer response, or gain real-time visibility into processes, we partner with you through every stage—from discovery and implementation to optimization and governance.`,
  },

  technologies: {
    image: cyberimg2,
    heading: "Platforms & Tools We Use",
    description: `Our automation solutions are built on robust, enterprise-grade technologies. For robotic process automation, we use UiPath, Automation Anywhere, Blue Prism, and Microsoft Power Automate. Our workflow orchestration is powered by platforms like Camunda, Appian, Kissflow, and ServiceNow.

    We leverage APIs, webhooks, and integration tools like Zapier, Workato, and MuleSoft to connect enterprise systems. For intelligent automation, we use AI services from AWS, Azure Cognitive Services, Google Cloud AI, and OpenAI. 

    For monitoring and governance, we use centralized dashboards, analytics tools, and custom reporting systems to track bot performance and ensure compliance. All our solutions support enterprise-grade security, scalability, and integration with your existing ERP, CRM, and legacy systems.`,
  },

  services: [
    {
      title: "Automation Assessment & Strategy",
      description:
        "We evaluate your current workflows and identify high-impact automation opportunities to build a customized enterprise automation roadmap aligned with business objectives.",
    },
    {
      title: "RPA Implementation & Bot Development",
      description:
        "Design, develop, and deploy attended and unattended bots that automate repetitive tasks using tools like UiPath and Automation Anywhere.",
    },
    {
      title: "Workflow Orchestration & Integration",
      description:
        "Streamline complex, multi-step workflows by connecting enterprise systems and automating handoffs using BPMN engines and integration platforms.",
    },
    {
      title: "Document Processing Automation",
      description:
        "Automate data extraction from scanned documents, PDFs, and emails using AI-powered OCR and NLP—ideal for finance, HR, legal, and logistics departments.",
    },
    {
      title: "Monitoring, Analytics & Optimization",
      description:
        "Implement real-time dashboards, performance reports, and audit logs to ensure visibility into every process and identify areas for continuous improvement.",
    },
    {
      title: "Citizen Development & Low-Code Automation",
      description:
        "Enable business users to automate their own workflows using low-code/no-code platforms like Power Automate, Zoho Creator, and OutSystems under IT governance.",
    },
  ],
};

export const InfrastructureServicesPageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual image import
    heading: "Infrastructure Services",
    breadcrumb: ["HOME", "SERVICES", "INFRASTRUCTURE"],
  },

  introduction: {
    title: "Modern, Scalable & Secure IT Infrastructure Services",
    content: `In today's digital-first world, your IT infrastructure forms the backbone of business continuity, agility, and performance. From cloud platforms and data centers to network architecture and endpoint security, a robust and scalable infrastructure is essential for operational success.

    Rasta InfoTech delivers modern infrastructure services that empower businesses to scale seamlessly, reduce costs, ensure uptime, and secure their assets. Whether you're migrating workloads to the cloud, modernizing legacy infrastructure, or building hybrid environments, we design and manage IT ecosystems that are future-ready, agile, and secure. Our infrastructure experts partner with your team to ensure your foundational systems support innovation, growth, and resilience.`,
  },

  infrastructurePillars: [
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description:
        "We help organizations move to and scale on the cloud with services across AWS, Azure, and Google Cloud. Our solutions include cloud-native architecture, infrastructure provisioning, container orchestration, and hybrid cloud integration to support diverse workloads.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🛠️",
      title: "On-Premise & Hybrid Solutions",
      description:
        "We modernize on-premise data centers and integrate them with public cloud to create secure, compliant, hybrid infrastructure environments that meet your specific business needs.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🧱",
      title: "Network & Security Architecture",
      description:
        "Design and implement scalable, secure network topologies including firewalls, VPNs, zero trust, SD-WAN, and network segmentation. We ensure secure connectivity and access across your enterprise ecosystem.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: cyberimg1, // Replace with your actual image
    heading: "Why Choose Rasta InfoTech for Infrastructure Services?",
    description: `Rasta InfoTech stands at the intersection of infrastructure modernization and digital transformation. We design, implement, and manage reliable IT foundations that deliver maximum uptime, agility, and business continuity. With a deep understanding of enterprise IT challenges, we offer tailored infrastructure services that reduce operational costs, mitigate risks, and optimize performance.

    From startup cloud builds to enterprise-grade hybrid deployments, we focus on scalability, automation, observability, and compliance. Our approach blends ITIL-based practices, DevOps principles, and cloud-native tools to ensure your infrastructure is not only stable—but also dynamic, intelligent, and aligned with your business roadmap. We monitor, support, and continuously optimize your infrastructure for peak performance.`,
  },

  technologies: {
    image: cyberimg2, // Replace with your actual image
    heading: "Technologies & Platforms We Support",
    description: `We work with top-tier platforms and tools across infrastructure layers. For cloud computing, we support AWS, Microsoft Azure, Google Cloud Platform, and Oracle Cloud. Infrastructure as Code (IaC) is implemented using Terraform, Ansible, and Pulumi. Container platforms include Kubernetes, Docker, and OpenShift.

    For virtualization and on-prem infrastructure, we use VMware, Hyper-V, and Nutanix. Our network and security stack includes Cisco, Fortinet, Palo Alto, Juniper, and SonicWall. Monitoring and observability tools include Prometheus, Grafana, ELK Stack, Datadog, and SolarWinds. We ensure integration with your DevOps pipelines, CMDBs, and automation platforms to create cohesive, manageable IT environments.`,
  },

  services: [
    {
      title: "Cloud Infrastructure Setup & Migration",
      description:
        "We plan, execute, and manage cloud migrations, cloud-native builds, and infrastructure deployments on AWS, Azure, or GCP with minimal disruption.",
    },
    {
      title: "Data Center Modernization",
      description:
        "Transform your legacy data center into a software-defined, cost-efficient, and secure environment using hyperconverged infrastructure and virtualization.",
    },
    {
      title: "Network Design & Implementation",
      description:
        "Architect, secure, and optimize your internal and external networks for high availability, performance, and scalability across locations and users.",
    },
    {
      title: "Infrastructure Monitoring & Support",
      description:
        "24/7 monitoring, alerting, incident management, and infrastructure health checks using automated tools and our NOC specialists.",
    },
    {
      title: "Security Hardening & Compliance",
      description:
        "Implement layered security, identity access management (IAM), endpoint protection, and encryption policies that meet industry compliance standards.",
    },
    {
      title: "Automation & Infrastructure as Code",
      description:
        "Automate provisioning, updates, and scaling of infrastructure using IaC tools like Terraform, Ansible, and pipelines integrated into CI/CD workflows.",
    },
  ],
};

export const ProductEngineeringPageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual image import
    heading: "Product Engineering Services",
    breadcrumb: ["HOME", "SERVICES", "PRODUCT ENGINEERING"],
  },

  introduction: {
    title:
      "Innovative Product Engineering Services to Accelerate Your Digital Vision",
    content: `In today’s digital economy, rapid innovation, scalability, and user-centric design are key to successful product development. Product engineering is more than just building software—it's a strategic process that blends technology, design, and agility to bring ideas to life faster and more efficiently.

    At Rasta InfoTech, we provide end-to-end product engineering services that help startups and enterprises transform concepts into market-ready solutions. From product ideation and architecture to development, testing, and post-launch support, we deliver full-lifecycle engineering services built on agile methodologies. Our experienced teams combine modern technologies, automation, and cross-functional collaboration to accelerate time-to-market, reduce development costs, and ensure product-market fit.`,
  },

  engineeringPillars: [
    {
      icon: "🧩",
      title: "End-to-End Product Development",
      description:
        "From concept to launch, we handle the complete lifecycle of your product. Our process includes discovery, UI/UX, architecture, agile development, QA automation, DevOps, and go-to-market support for both MVPs and enterprise-grade platforms.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "⚙️",
      title: "Platform Modernization",
      description:
        "We help modernize your legacy systems and transform them into scalable, cloud-native, API-driven platforms. Whether it's re-architecting monolithic apps or refactoring codebases, we ensure maintainability, performance, and seamless integration.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "📲",
      title: "User-Centered Design & Experience",
      description:
        "Our UI/UX experts design intuitive, responsive, and accessible interfaces that enhance user engagement and conversion. We conduct wireframing, prototyping, and usability testing to align every interaction with your brand vision.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: cyberimg2, // Replace with actual image
    heading: "Why Choose Rasta InfoTech for Product Engineering?",
    description: `Rasta InfoTech is a trusted partner for digital product innovation. With a deep understanding of business strategy and emerging technologies, we help clients deliver future-ready products that scale. Our engineering process is guided by lean principles, agile execution, and quality-first thinking.

    We work in collaborative product pods composed of developers, designers, QA testers, DevOps engineers, and project managers. Our delivery model adapts to your business goals—whether you’re launching an MVP, entering new markets, or scaling an existing platform. We also bring a product mindset to every engagement, ensuring you get a solution that is not only technically sound but also resonates with end users and adapts to change quickly.`,
  },

  technologies: {
    image: cyberimg1,
    heading: "Technologies & Tools We Work With",
    description: `We use a modern and diverse technology stack to power high-performance digital products. For frontend development, we use React, Next.js, Angular, and Vue.js. Our backend technologies include Node.js, .NET Core, Java Spring Boot, Python (Django, FastAPI), and Golang.

    We use RESTful and GraphQL APIs, containerization with Docker, and orchestration via Kubernetes. For databases, we leverage PostgreSQL, MongoDB, MySQL, Redis, and Firebase. Our DevOps practices are powered by CI/CD tools such as Jenkins, GitHub Actions, GitLab CI, and Azure DevOps.

    Testing and QA automation are implemented using tools like Selenium, Cypress, Jest, Postman, and Playwright. Cloud platforms supported include AWS, Azure, and Google Cloud. Our flexible architecture and reusable components help accelerate development cycles and ensure product scalability.`,
  },

  services: [
    {
      title: "Product Ideation & MVP Development",
      description:
        "We collaborate with you to refine your idea, build product roadmaps, and deliver MVPs that validate key assumptions and user needs with rapid iteration cycles.",
    },
    {
      title: "Custom Software Product Engineering",
      description:
        "Design and develop tailored software products—from SaaS platforms and marketplaces to enterprise portals and mobile apps—optimized for performance and user experience.",
    },
    {
      title: "Cloud-Native Architecture & DevOps",
      description:
        "Build scalable, resilient cloud-native applications with microservices architecture, containerization, infrastructure automation, and continuous delivery pipelines.",
    },
    {
      title: "Mobile Application Development",
      description:
        "Develop cross-platform or native mobile applications using React Native, Flutter, or Kotlin/Swift—designed for performance, UX, and seamless backend integration.",
    },
    {
      title: "API Development & Third-Party Integrations",
      description:
        "Build secure, scalable REST or GraphQL APIs and integrate with third-party services, CRMs, ERPs, payment gateways, and messaging platforms for extensible functionality.",
    },
    {
      title: "QA Engineering & Test Automation",
      description:
        "Ensure product stability with end-to-end testing solutions including unit, integration, regression, and performance testing—automated for CI/CD environments.",
    },
  ],
};

export const SalesforcePageContent = {
  banner: {
    image: bannerblockchain, // Replace with actual image
    heading: "Salesforce Consulting and Services COE",
    breadcrumb: ["HOME", "SERVICES", "SALESFORCE CONSULTING"],
  },

  introduction: {
    title:
      "Salesforce Consulting Services That Drive Connected Customer Experiences",
    content: `Salesforce is the world’s leading CRM platform, empowering organizations to streamline sales, marketing, service, and operations with intelligent automation and a 360-degree view of customers. But to unlock its full potential, you need a strategic partner who understands both the technology and your business goals.

    At Rasta InfoTech, our Salesforce Center of Excellence (COE) delivers tailored consulting, implementation, customization, and managed services that help organizations get the most out of Salesforce. Whether you're starting a CRM journey, optimizing an existing org, or expanding with industry clouds, our certified Salesforce experts help you transform customer experiences, automate workflows, and maximize ROI. From startups to large enterprises, we deliver scalable Salesforce solutions aligned to your digital strategy.`,
  },

  salesforceCapabilities: [
    {
      icon: "💼",
      title: "Sales & Service Cloud Implementation",
      description:
        "We configure and customize Salesforce Sales Cloud and Service Cloud to streamline lead management, sales automation, case handling, and omnichannel support. Improve deal closure rates and customer satisfaction with a unified platform.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "⚙️",
      title: "Custom Development with Apex & LWC",
      description:
        "Extend Salesforce capabilities with custom apps and components using Apex, Lightning Web Components (LWC), and Visualforce. We build scalable, secure, and performance-optimized customizations that fit your exact business logic.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🔗",
      title: "Integration & Data Migration",
      description:
        "Seamlessly connect Salesforce with ERP, marketing, and external apps using REST/SOAP APIs, MuleSoft, or middleware tools. We also ensure clean, accurate, and secure data migration from legacy systems to Salesforce.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1, // Replace with your actual image
    heading: "Why Rasta InfoTech for Salesforce COE Services?",
    description: `With a dedicated Salesforce Center of Excellence, Rasta InfoTech combines strategic insight with deep platform expertise to deliver Salesforce solutions that transform your business. Our consultants, developers, and architects follow agile methodologies, Salesforce best practices, and industry-aligned templates to deliver faster, smarter, and more sustainable outcomes.

    We bring experience across multiple Salesforce clouds—Sales, Service, Marketing, Experience (Community), Field Service, and more. Whether it’s CPQ implementation, Einstein AI insights, workflow automation, or mobile app development, we ensure end-to-end value from your investment. Partnering with us means gaining a trusted advisor who can scale with you across releases, org changes, and innovation cycles.`,
  },

  technologies: {
    image: devopsimg2,
    heading: "Salesforce Ecosystem Expertise",
    description: `Our Salesforce COE is proficient across a wide array of Salesforce products and supporting technologies. We deliver solutions using:

- Salesforce Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud (Communities), and Commerce Cloud
- Apex, Lightning Web Components (LWC), Visualforce, and SOQL for custom development
- Salesforce Flow, Process Builder, and Approval Processes for automation
- MuleSoft, Dell Boomi, Zapier, and REST/SOAP APIs for integration
- Salesforce Shield, Field-Level Security, and Role Hierarchies for security and compliance
- Einstein Analytics and Tableau CRM for AI-driven business intelligence

We also provide DevOps with Salesforce DX, Git, Jenkins, and automated testing using Provar or Selenium. Our services ensure your CRM solution is powerful, maintainable, and future-ready.`,
  },

  services: [
    {
      title: "Salesforce Consulting & Strategy",
      description:
        "Assess your business needs and build a roadmap for Salesforce adoption, optimization, and digital transformation across departments.",
    },
    {
      title: "Custom Development & AppExchange Solutions",
      description:
        "Build custom apps on the Salesforce platform, including AppExchange products, internal tools, or mobile apps using LWC and Apex.",
    },
    {
      title: "Implementation & Configuration",
      description:
        "Implement Salesforce Sales, Service, or Experience Cloud with out-of-the-box features, data models, workflows, security rules, and role hierarchies.",
    },
    {
      title: "Data Migration & Integration",
      description:
        "Plan and execute secure data migrations from spreadsheets, CRMs, or ERPs. Integrate Salesforce with platforms like SAP, Oracle, HubSpot, or Microsoft Dynamics.",
    },
    {
      title: "Managed Services & Admin Support",
      description:
        "Ongoing Salesforce support, administration, user training, and enhancements. SLA-based services for bug fixes, minor releases, and user management.",
    },
    {
      title: "Salesforce DevOps & Release Management",
      description:
        "Automate development pipelines, deployments, and org synchronization with Salesforce DX, Git, CI/CD workflows, and sandbox management best practices.",
    },
  ],
};

export const AwsServicesPageContent = {
  banner: {
    image: bannerblockchain, // Replace with your actual banner image
    heading: "AWS Cloud Services",
    breadcrumb: ["HOME", "SERVICES", "AWS CLOUD SERVICES"],
  },

  introduction: {
    title: "Scalable, Secure, and Future-Ready AWS Cloud Solutions",
    content: `Amazon Web Services (AWS) is the most comprehensive and widely adopted cloud platform, trusted by millions of businesses to power their infrastructure, scale applications, and drive innovation. From startups to global enterprises, AWS provides reliable, secure, and scalable cloud services that transform IT ecosystems and accelerate digital growth.

    At Rasta InfoTech, we offer end-to-end AWS Cloud Services that help organizations modernize infrastructure, reduce operational costs, and enhance agility. Whether you're migrating to AWS, building cloud-native applications, or optimizing workloads, our certified AWS architects and DevOps engineers ensure a smooth and secure cloud journey. We combine technical expertise with industry best practices to deliver high-performance, resilient, and cost-effective AWS solutions tailored to your business goals.`,
  },

  awsCapabilities: [
    {
      icon: "☁️",
      title: "Cloud Migration & Modernization",
      description:
        "We assess your current IT environment and execute seamless migrations to AWS using proven frameworks. From lift-and-shift to re-platforming and refactoring, we modernize legacy systems to achieve better performance and lower costs on AWS.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🧱",
      title: "Cloud-Native Development",
      description:
        "Build and deploy cloud-native applications using serverless architecture, microservices, and containers on AWS. We use services like Lambda, ECS, EKS, and API Gateway to create scalable, event-driven solutions with faster release cycles.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "🔒",
      title: "Security, Compliance & Governance",
      description:
        "Secure your AWS workloads with IAM, encryption, security groups, VPC configurations, and AWS WAF. We also implement compliance frameworks (HIPAA, GDPR, ISO) and monitor using AWS Security Hub and GuardDuty.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1,
    heading: "Why Choose Rasta InfoTech for AWS Cloud Services?",
    description: `At Rasta InfoTech, we are an advanced AWS service provider with certified cloud architects, DevOps specialists, and security engineers. We’ve helped organizations across industries accelerate their cloud transformation journey using AWS’s robust ecosystem. Our approach combines deep domain knowledge, agile delivery, and cost optimization strategies to ensure tangible business outcomes.

    Whether you're starting with a single workload or transforming your entire IT estate, we bring automation, scalability, and reliability to your cloud initiatives. We prioritize operational excellence, security-first design, and continuous innovation through AWS native tools and best practices. Partner with us to unlock the full value of AWS for your digital evolution.`,
  },

  technologies: {
    image: devopsimg2,
    heading: "AWS Tools, Platforms & Services We Use",
    description:
      "We work across the AWS ecosystem to design, deploy, and manage scalable cloud infrastructures and applications. Our expertise includes compute and storage services like EC2, Lambda, EBS, S3, and Glacier; containerization and orchestration using ECS, EKS, Fargate, Docker, and Kubernetes; and database management with RDS (MySQL, PostgreSQL, Oracle), DynamoDB, Redshift, and Aurora. We also handle networking components such as VPC, Route 53, API Gateway, Load Balancers, and CloudFront. Our DevOps and automation capabilities span CloudFormation, CodePipeline, CodeDeploy, CloudWatch, and Terraform. For security, we implement IAM, Cognito, KMS, Shield, GuardDuty, and Security Hub. In analytics and AI/ML, we utilize Athena, QuickSight, SageMaker, and Comprehend. We also focus on monitoring and cost optimization through AWS Budgets, Trusted Advisor, CloudTrail, and CloudWatch. Our team ensures robust cloud architecture with scalability, automation, high availability, and compliance at its core.",
  },

  services: [
    {
      title: "AWS Cloud Consulting",
      description:
        "Define your AWS cloud strategy, assess readiness, and build a roadmap to achieve cloud adoption and transformation aligned with business goals.",
    },
    {
      title: "Infrastructure Design & Deployment",
      description:
        "Architect and deploy secure, scalable, and cost-efficient cloud infrastructure using AWS best practices and automation tools like CloudFormation and Terraform.",
    },
    {
      title: "Application Modernization & DevOps",
      description:
        "Refactor and containerize applications, implement CI/CD pipelines, and accelerate deployment through AWS DevOps tools and serverless infrastructure.",
    },
    {
      title: "AWS Migration Services",
      description:
        "Plan and execute smooth migration from on-prem or other clouds to AWS using the AWS Migration Acceleration Program (MAP) and our certified specialists.",
    },
    {
      title: "Security, Backup & Disaster Recovery",
      description:
        "Implement security-first architecture, data encryption, secure access policies, backup automation, and DR strategies to protect your cloud workloads.",
    },
    {
      title: "Ongoing Optimization & Support",
      description:
        "Monitor, manage, and optimize AWS workloads for cost, performance, and reliability with 24/7 support, FinOps insights, and proactive remediation.",
    },
  ],
};

export const TanzuServicesPageContent = {
  banner: {
    image: bannerblockchain, // Replace with your actual image
    heading: "VMware Tanzu Services",
    breadcrumb: ["HOME", "SERVICES", "VMWARE TANZU"],
  },

  introduction: {
    title: "Modernize Applications & Infrastructure with VMware Tanzu Services",
    content: `VMware Tanzu is a modern application platform that empowers enterprises to build, run, and manage cloud-native applications across Kubernetes environments. Tanzu accelerates application delivery, automates operations, and fosters DevOps collaboration—making it a core technology for modern digital transformation.

    At Rasta InfoTech, we offer expert VMware Tanzu services to help organizations embrace Kubernetes, containerization, and microservices at scale. Whether you are just starting your cloud-native journey or looking to optimize your Kubernetes operations, our Tanzu-certified engineers guide you through application modernization, platform engineering, and lifecycle management. We help enterprises deliver software faster, with consistency, reliability, and full observability across environments.`,
  },

  tanzuCapabilities: [
    {
      icon: "🐳",
      title: "Containerization & Kubernetes Enablement",
      description:
        "We help containerize legacy and monolithic applications, prepare them for Kubernetes, and deploy them on Tanzu Kubernetes Grid (TKG) with best practices for scalability, observability, and security.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      iconBg: "bg-blue-200",
    },
    {
      icon: "🚀",
      title: "Application Modernization with Spring",
      description:
        "Leverage the Spring ecosystem supported by Tanzu Application Service (TAS) to rebuild, refactor, or re-platform applications. Our Spring Boot experts accelerate modernization using reusable patterns and cloud-native principles.",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-gray-800",
      iconBg: "bg-indigo-200",
    },
    {
      icon: "⚙️",
      title: "DevSecOps Automation & CI/CD Pipelines",
      description:
        "Enable GitOps and DevSecOps by implementing automated CI/CD pipelines using Tanzu Build Service, TAP (Tanzu Application Platform), and integrations with Jenkins, GitLab, or GitHub Actions.",
      bgColor: "bg-gradient-to-br from-sky-50 to-sky-100",
      textColor: "text-gray-800",
      iconBg: "bg-sky-200",
    },
  ],

  whyChooseUs: {
    image: devopsimg1,
    heading: "Why Choose Rasta InfoTech for Tanzu Services?",
    description: `Rasta InfoTech combines deep expertise in cloud-native technologies, DevOps practices, and VMware Tanzu platforms to help businesses modernize efficiently and securely. Our VMware-certified professionals deliver customized Tanzu solutions for development, deployment, and platform automation. We emphasize standardization, developer productivity, and operational resilience.

    From Day 0 design to Day 2 operations and continuous optimization, we ensure your Tanzu deployment aligns with business goals. Our service catalog includes Tanzu Kubernetes Grid, Tanzu Mission Control, Tanzu Observability, and Tanzu Application Platform. Partner with us to future-proof your digital strategy through modern applications, faster delivery, and platform consistency.`,
  },

  technologies: {
    image: devopsimg2,
    heading: "Tanzu Products & Tools We Use",
    description: `Our VMware Tanzu services are delivered using a range of enterprise-grade tools and platforms:

- Tanzu Kubernetes Grid (TKG) Set up and operate Kubernetes clusters across vSphere, public cloud, and edge.
- Tanzu Application Platform (TAP): A modular platform for secure supply chain management, CI/CD automation, and inner-loop development.
- Tanzu Build Service: Automate container builds using Cloud Native Buildpacks and streamline DevOps workflows.
- Tanzu Mission Control (TMC): Centralized Kubernetes lifecycle management across multiple clusters and teams.
- Tanzu Observability (Wavefront): Real-time metrics, logs, and tracing for cloud-native apps and platform monitoring.
- Spring Boot & Spring Cloud: Rapid microservices development supported by Tanzu’s full Spring ecosystem.
- Harbor & Carvel: Manage container images and Kubernetes configuration using secure, open-source tools integrated with Tanzu.

We also integrate Tanzu with Git, Jenkins, GitLab, Istio, Fluentd, and third-party security scanners to build scalable and secure modern platforms.`,
  },

  services: [
    {
      title: "Tanzu Readiness Assessment",
      description:
        "Evaluate your infrastructure, applications, and DevOps maturity to identify the best-fit Tanzu components and build a modernization roadmap.",
    },
    {
      title: "Kubernetes Setup & Cluster Management",
      description:
        "Deploy secure, production-grade Kubernetes clusters using Tanzu Kubernetes Grid (TKG) and manage them with Tanzu Mission Control (TMC).",
    },
    {
      title: "Application Containerization & Refactoring",
      description:
        "Containerize legacy applications using Docker and refactor them into microservices compatible with Kubernetes and Spring Boot.",
    },
    {
      title: "CI/CD Pipeline Implementation with TAP",
      description:
        "Automate application delivery using Tanzu Application Platform, Build Service, and DevSecOps pipelines with policy enforcement and secure supply chains.",
    },
    {
      title: "Monitoring & Observability with Wavefront",
      description:
        "Gain end-to-end visibility into Kubernetes clusters and apps using Tanzu Observability for proactive alerting, insights, and SLA tracking.",
    },
    {
      title: "Managed Tanzu Platform Services",
      description:
        "We provide 24/7 platform management, updates, scaling, and support for Tanzu environments across hybrid and multi-cloud setups.",
    },
  ],
};
