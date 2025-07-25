import React from "react";

const RiseWithSap = () => {
  const benefits = [
    {
      title: "Lower TCO",
      content:
        "Up to a 20% reduction in TCO over five years for SAP S/4HANA, private cloud edition as compared to a traditional ERP deployment.",
    },
    {
      title: "Faster Deployment",
      content:
        "A more than two-month potential acceleration in deployment speed as operational lead times fall.",
    },
    {
      title: "Reduced In-House Costs",
      content:
        "87% reduction in sticky costs due to more flexible operational environment.",
    },
  ];

  const components = [
    {
      title: "SAP S/4HANA Cloud",
      content:
        "It starts with SAP S/4HANA Cloud – bringing agility and responsiveness to the core of your business and your business processes.",
    },
    {
      title: "Infrastructure",
      content:
        "You choose your infrastructure – you can work with four different hyperscalers, SAP data centers, or dedicated data centers for regulated industries.",
    },
    {
      title: "SAP Business Technology Platform",
      content:
        "A single platform for extending, integrating, and enhancing with SAP, partner, or third-party solutions using a common data model and business services.",
    },
    {
      title: "Business Process Transformation",
      content:
        "SAP’s intelligent application analyzes your processes and provides tailored recommendations for implementation.",
    },
    {
      title: "SAP Business Network Starter Pack",
      content:
        "Extends transformation with dynamic, digital connections to trading partners.",
    },
    {
      title: "Tools and Services",
      content:
        "Includes readiness check, custom code analysis, and SAP Learning Hub to support your journey.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">RISE with SAP</h1>

        <p className="mb-6 text-justify">
          Of course, there’s no singular path forward, while still every business
          is moving forward. And every SAP customer is at a different point.
          That’s why SAP has launched its holistic offering as a Business
          Transformation-as-a-Service that is executed in close cooperation with
          its partners like Westernacher Consulting.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
          Intelligent Business. One Step Ahead.
        </h2>
        <p className="mb-6 text-justify">
          A game changer is the ability to migrate into the cloud (Private
          Edition) using brownfield or selective transition approaches.
          Westernacher Consulting supports with proven best practices to determine
          the right strategy for your needs.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
          Benefit from RISE with SAP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-bold mb-2 text-blue-700">
                {item.title}
              </h3>
              <p className="text-justify">{item.content}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-6 mt-10">
          Inside RISE with SAP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((comp, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {idx + 1}. {comp.title}
              </h3>
              <p className="text-gray-700 text-justify">{comp.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RiseWithSap;
