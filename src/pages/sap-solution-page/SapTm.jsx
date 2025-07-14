import React from "react";

const tmHighlights = [
  {
    title: "Automated",
    description:
      "Automation of your transportation processes allows you to reach the next level of logistics. Westernacher helps you stay prescriptive—handling challenges with smart alternatives and solutions before disruptions occur.",
  },
  {
    title: "User-centric",
    description:
      "SAP Fiori apps provide a modern, intuitive interface for operating SAP systems. Westernacher customizes and builds Fiori apps tailored to your business needs, boosting the user experience significantly.",
  },
  {
    title: "Connected",
    description:
      "SAP TM integrates with your global logistics network using S/4HANA-based connectivity, Westernacher Collaboration Platform, IoT technologies, Logistics Business Network, Global Track & Trace, and Event Management.",
  },
  {
    title: "Integrated",
    description:
      "Westernacher unifies transportation with warehousing, ERP, sales, procurement, yard logistics, and finance, delivering a comprehensive and cohesive supply chain execution solution.",
  },
];

const tmFunctions = [
  {
    title: "Forwarding Order Management",
    content:
      "Handles order entry, confirmation, route calculation, cost display, duration estimation, and capacity availability for efficient transportation planning.",
  },
  {
    title: "Freight Order Management",
    content:
      "Manages freight orders and bookings including carrier assignments, tenders, tracking, documentation, and driver details.",
  },
  {
    title: "Freight Forwarding Invoicing",
    content:
      "Enables billing and invoice verification within the ERP system for financial transparency.",
  },
  {
    title: "Transportation Network",
    content:
      "Centralizes master data for business partners, products, and pricing for seamless transport processing.",
  },
  {
    title: "Dangerous Goods Management",
    content:
      "Supports environment, health, and safety (EH&S) standards for safe and compliant transport of hazardous materials.",
  },
];

const editions = [
  {
    title: "SAP TM Cloud Edition",
    description:
      "A cloud-based solution with no local infrastructure needed. Offers simplified administration, cost reduction, and excellent scalability.",
  },
  {
    title: "SAP TM based on HANA",
    description:
      "Runs on the high-performance SAP HANA platform. Enables real-time processing and analysis of large logistics datasets.",
  },
  {
    title: "SAP TM for E-commerce",
    description:
      "Optimized for online businesses. Synchronizes platforms, inventory, shipping options, and pricing to ensure accurate customer data.",
  },
  {
    title: "SAP TM – SAP S/4HANA Migration",
    description:
      "Facilitates seamless migration of SAP systems to the S/4HANA environment with monitoring tools to ensure safe transition.",
  },
];

const SapTm = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            SAP Transportation Management (SAP TM)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SAP TM is a powerful tool that enables intelligent transportation
            planning, execution, and cost control across your entire supply
            chain. With Westernacher Consulting, you can adapt SAP TM to fit
            your unique logistics challenges.
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is SAP TM?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SAP Transportation Management (SAP TM) is part of SAP’s Supply Chain
            Execution (SCE) platform. It streamlines cargo movement from
            customer order to delivery proof with visibility, cost control, and
            planning precision. SAP TM helps reduce freight costs, manage
            shipments, and integrate transportation with your broader ERP and
            warehousing landscape.
          </p>
        </section>

        {/* Highlights Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Key Capabilities of SAP TM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tmHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {idx + 1}. {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Functional Components */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Core Functions of SAP TM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tmFunctions.map((fn, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {idx + 1}. {fn.title}
                </h3>
                <p className="text-gray-700">{fn.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editions Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            SAP TM Deployment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editions.map((edition, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {edition.title}
                </h3>
                <p className="text-gray-700">{edition.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SapTm;
