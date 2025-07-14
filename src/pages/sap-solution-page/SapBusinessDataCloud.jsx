import React from "react";

const newCapabilities = [
  {
    title: "Intelligent App",
    description:
      "Context-aware dashboards where SAP manages the entire data pipeline, from source systems to visualizations. Available as a subscription for many common use cases.",
  },
  {
    title: "Data Products",
    description:
      "Trusted, standardized, semantically rich data products that make analytics easier to consume and deploy across the business.",
  },
  {
    title: "AI & Data Engineering",
    description:
      "A modern architecture powered by SAP Databricks and Joule enables real-time data access, bi-directional flows, and AI/ML decision support.",
  },
  {
    title: "Unified Platform",
    description:
      "A scalable, cloud-based platform covering analytics, planning, data warehousing, modeling, federation, engineering, and BW modernization.",
  },
];

const SapBusinessDataCloud = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            SAP Business Data Cloud
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SAP Business Data Cloud is your foundation for AI-driven, connected
            insights—bringing together data, analytics, and intelligent
            applications in one unified platform.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is SAP Business Data Cloud?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The SAP Business Data Cloud solution enables deep integration by
            combining semantically rich data from critical applications with
            intelligent decision support. It empowers business leaders to act
            quickly through real-time analytics, automation, and context-aware
            insights across functions such as working capital, distribution, and
            workforce planning.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Built as a managed SaaS solution, SAP Business Data Cloud leverages
            a modern architecture to streamline your entire data value chain—from
            ingestion to visualization and action.
          </p>
        </section>

        {/* Product Pillars */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            What’s in the SAP Business Data Cloud Platform?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>SAP Analytics Cloud:</strong> State-of-the-art analytics
              with enterprise-grade planning.
            </li>
            <li>
              <strong>SAP Datasphere:</strong> Semantically rich data fabric
              with modeling and integration.
            </li>
            <li>
              <strong>SAP BW PCE:</strong> Cloud-based modernization path for
              existing BW investments.
            </li>
            <li>
              <strong>SAP Databricks:</strong> Embedded AI/ML platform enabling
              advanced analytics use cases.
            </li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Benefits of SAP Business Data Cloud
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Data Products:</strong> Trusted, semantically rich datasets
              aligned with Line of Business (LOB) structures.
            </li>
            <li>
              <strong>Intelligent App:</strong> End-to-end data pipeline managed
              by SAP, available as a subscription.
            </li>
            <li>
              <strong>Foundation for AI/ML:</strong> Joule and SAP Databricks
              power advanced insights and decision-making.
            </li>
            <li>
              <strong>Unified Data Layer:</strong> Consolidate SAP/non-SAP,
              structured/unstructured data in one fabric with context preserved.
            </li>
            <li>
              <strong>BW Modernization:</strong> Migrate and reuse existing BW
              investments within a future-proof cloud environment.
            </li>
          </ul>
        </section>

        {/* New Capabilities (Card Section) */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            New Capabilities with SAP Business Data Cloud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {item.title}
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

export default SapBusinessDataCloud;
