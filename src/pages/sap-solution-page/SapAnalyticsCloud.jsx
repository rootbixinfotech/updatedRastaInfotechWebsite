import React from "react";

const features = [
  {
    title: "Data Integration",
    description:
      "Integrate data from multiple sources—on-premise and cloud-based—including SAP, HANA, Salesforce, Oracle, and Excel, all in one place.",
  },
  {
    title: "Data Visualization",
    description:
      "Create interactive dashboards, charts, and reports with a variety of visualization options for clear and impactful insights.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage machine learning and predictive modeling to forecast trends, uncover patterns, and enable proactive decision-making.",
  },
  {
    title: "Collaboration",
    description:
      "Collaborate in real time using built-in chat, comments, and shared dashboards—perfect for remote and cross-functional teams.",
  },
  {
    title: "Mobile Accessibility",
    description:
      "Access data anytime, anywhere from smartphones and tablets with responsive and mobile-ready dashboards.",
  },
  {
    title: "Governance and Security",
    description:
      "Ensure data privacy and control with enterprise-grade governance, encryption, and role-based access management.",
  },
];

const SapAnalyticsCloud = () => {
  return (
    <div className="bg-gray-50 py-24 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            SAP Analytics Cloud (SAC)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SAP Analytics Cloud is a unified cloud analytics platform for data
            modeling, forecasting, reporting, collaboration, and planning—all
            powered by AI and designed to empower data-driven decisions.
          </p>
        </div>

        {/* What is SAC */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is SAP Analytics Cloud?
          </h2>
          <p className="text-gray-700">
            SAP Analytics Cloud (SAC) is a cloud-based analytics platform that
            enables organizations to gain real-time insights into their data,
            collaborate effectively, and make smarter decisions. It supports a
            full range of analytics—from data visualization and predictive
            analytics to planning and reporting.
          </p>
          <p className="text-gray-700">
            SAC provides scalability, intuitive interfaces, and deep integration
            across SAP and non-SAP environments, making it ideal for businesses
            seeking agility, automation, and collaboration in their analytics
            journey.
          </p>
        </section>

        {/* Core Capabilities */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Key Capabilities of SAC
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Data Modeling:</strong> Create logical data relationships
              and models to organize and improve analysis.
            </li>
            <li>
              <strong>Extraction:</strong> Pull data from flat files and
              databases using secure connectors for centralized analysis.
            </li>
            <li>
              <strong>Predictive Analytics:</strong> Use historical data,
              machine learning, and NLP to create custom prediction models.
            </li>
            <li>
              <strong>Real-Time Integration:</strong> Get up-to-the-minute data
              from integrated systems to enable immediate, informed action.
            </li>
            <li>
              <strong>Analytic Application Building:</strong> Build custom
              applications for tailored, real-time data insights.
            </li>
            <li>
              <strong>Planning:</strong> Design and analyze budgets and
              financial plans with tools for financial, sales, and workforce
              planning.
            </li>
            <li>
              <strong>Self-Service Visualization Templates:</strong> Quickly
              create interactive reports using prebuilt, customizable templates.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Benefits of SAP Analytics Cloud
          </h2>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Easy Data Integration:</strong> Connect data from diverse
              sources effortlessly—on-prem, cloud, and big data platforms.
            </li>
            <li>
              <strong>Advanced Analytics:</strong> Use predictive modeling, ML,
              and NLP to gain deep insights and take proactive actions.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Drag-and-drop tools and
              intuitive dashboards for users of all skill levels.
            </li>
            <li>
              <strong>Collaboration:</strong> Work in real time with
              team-based sharing, commenting, and report editing.
            </li>
            <li>
              <strong>Scalability:</strong> A cloud-native design that scales
              with your users, data sources, and business growth.
            </li>
            <li>
              <strong>Cost Savings:</strong> Reduce IT overhead with
              cloud-based deployment and no infrastructure to maintain.
            </li>
          </ul>
        </section>

        {/* Feature Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            SAP Analytics Cloud Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {idx + 1}. {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SapAnalyticsCloud;
