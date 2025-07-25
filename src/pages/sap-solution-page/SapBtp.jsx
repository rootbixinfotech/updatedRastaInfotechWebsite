import React from "react";

const SapBTP = () => {
  const btpBenefits = [
    {
      title: "Unifying data and applications",
      content:
        "Bringing together information from various sources and systems into a single platform, fostering better visibility and streamlining operations.",
    },
    {
      title: "Facilitating application development and deployment",
      content:
        "Providing tools and services for building and launching new applications faster, often with low-code/no-code options and pre-built components.",
    },
    {
      title: "Enhancing security and compliance",
      content:
        "Integrating robust security features and adhering to compliance standards to safeguard data and applications.",
    },
    {
      title: "Simplifying IT management",
      content:
        "Reducing complexity and overhead through centralized platform management and automated processes.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">
          What is SAP BTP?
        </h1>
        <p className="mb-6 text-justify">
          SAP BTP (Business Technology Platform) is an open, multi-cloud
          platform-as-a-service (PaaS) that enables businesses to build,
          integrate, and extend applications efficiently in the cloud. It supports
          digital transformation by offering tools and services for data
          management, analytics, AI, and application development.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
          SAP BTP Product Categories
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Application Development & Automation: SAP Build Apps, SAP Build Work
            Zone, Cloud ABAP
          </li>
          <li>
            Data and Analytics: HANA Database Cloud, Data Management, Analytics
            and Planning
          </li>
          <li>
            Integration Suite: Accelerates connectivity, supports hybrid
            integrations, event mesh
          </li>
          <li>
            Extended Planning and Analysis: Financial, Supply Chain, Workforce,
            Sales Planning
          </li>
          <li>Artificial Intelligence: Generative AI, SAP AI Services</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-800 mb-6 mt-10">
          Key SAP BTP Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              SAP Build Apps
            </h3>
            <p className="text-justify">
              Create low-code web and mobile applications, integrating BTP
              services seamlessly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              SAP Build Work Zone
            </h3>
            <p className="text-justify">
              Create centralized business sites for application access and
              enterprise operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              Cloud ABAP Environment
            </h3>
            <p className="text-justify">
              Extend applications with ABAP for the cloud, embracing Clean Core
              principles.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              HANA Database Cloud
            </h3>
            <p className="text-justify">
              Real-time data access via a powerful, multi-cloud
              database-as-a-service platform.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              SAP Datasphere
            </h3>
            <p className="text-justify">
              End-to-end data management for governance, orchestration, and fast
              insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              SAP BTP Analytics Services
            </h3>
            <p className="text-justify">
              Collaborative planning and real-time data integration for decision
              support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              Integration Suite
            </h3>
            <p className="text-justify">
              Integrate across SAP and third-party systems using APIs and prebuilt
              connectors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              Extended Planning & Analysis
            </h3>
            <p className="text-justify">
              Drive planning in finance, supply chain, workforce, and sales using
              predictive tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              Generative AI & SAP AI Services
            </h3>
            <p className="text-justify">
              Use built-in AI for process automation, including document
              extraction and predictions.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-6 mt-10">
          Why Use SAP BTP?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {btpBenefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-bold mb-2 text-blue-700">
                {benefit.title}
              </h3>
              <p className="text-justify">{benefit.content}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-justify">
          SAP BTP also offers a flexible licensing model—either subscription-based
          or consumption-based. Start with pay-as-you-go and scale to a Cloud
          Platform Enterprise Agreement (CPEA) as needs grow.
        </p>
      </div>
    </>
  );
};

export default SapBTP;
