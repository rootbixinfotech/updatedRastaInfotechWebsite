import React from "react";

const SapSct = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-green-800">
        SAP Sustainability Control Tower (SCT)
      </h1>

      <p className="mb-6 text-justify">
        SAP Sustainability Control Tower (SCT) is a comprehensive, cloud-based
        platform that helps businesses monitor, manage, and optimize their
        environmental, social, and governance (ESG) performance in real time. It
        acts as a centralized hub for sustainability data, allowing
        organizations to comply with regulations, reduce carbon footprints, and
        drive sustainable growth.
      </p>

      <p className="mb-6 text-justify">
        With growing global emphasis on sustainability reporting frameworks like
        the CSRD, EU Taxonomy, ISSB, and TCFD, businesses need automated,
        data-driven solutions to simplify compliance, track ESG performance, and
        turn sustainability goals into action. SAP SCT is the answer.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mb-4 mt-10">
        Why SAP Sustainability Control Tower?
      </h2>
      <ul className="space-y-4 list-disc list-inside text-justify">
        <li>
          <strong>Fragmented Data & Manual Processes:</strong> Sustainability
          data is scattered across multiple systems, making reporting
          inefficient and error-prone.
        </li>
        <li>
          <strong>Regulatory Compliance Complexity:</strong> New global
          regulations require comprehensive sustainability disclosures,
          increasing compliance pressure.
        </li>
        <li>
          <strong>Lack of Actionable Insights:</strong> Organizations struggle
          to turn sustainability data into business impact, missing
          opportunities to drive real change.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-700 mb-6 mt-10">
        Key Features of SAP SCT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Real-time Sustainability Monitoring",
            content:
              "Tracks Scope 1, 2, and 3 emissions with automated data integration. Provides instant visibility into sustainability performance using SAP’s analytics engine.",
          },
          {
            title: "Regulatory-ready ESG Reporting",
            content:
              "Ensures compliance with CSRD, ISSB, EU Taxonomy, TCFD, and other frameworks. Generates audit-ready reports for both internal and external stakeholders.",
          },
          {
            title: "AI-driven Predictive Analytics",
            content:
              "Forecasts sustainability risks and opportunities using machine learning models. Benchmarks performance against industry peers and helps set strategic sustainability targets.",
          },
          {
            title: "Circular Economy & Business Network Integration",
            content:
              "Optimizes resource utilization and reduces waste through a circular economy approach. Facilitates carbon data sharing across supply chains using SAP’s Business Network for Sustainability.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-bold mb-2 text-green-700">
              {item.title}
            </h3>
            <p className="text-justify">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SapSct;
