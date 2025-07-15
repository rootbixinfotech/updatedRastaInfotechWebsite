import React from "react";

const SapSdx = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-green-900">
        SAP Sustainability Data Exchange (SDX)
      </h1>

      <p className="mb-6 text-justify">
        SAP Sustainability Data Exchange (SDX) is a cloud-enabled platform
        designed to bring accuracy, consistency, and transparency to carbon
        accounting across complex supply chains. It enables businesses to track,
        exchange, and validate sustainability data in real time, ensuring
        compliance with global reporting standards and enhancing decarbonization
        efforts.
      </p>
      <p className="mb-6 text-justify">
        SAP SDX facilitates seamless data integration across the entire value
        chain, ensuring that organizations collaborate effectively with
        suppliers, trading partners, and customers to track and reduce emissions
        efficiently. By automating carbon data sharing and standardizing
        reporting, SDX eliminates double counting risks, improves supplier
        engagement, and provides businesses with real-time insights to
        accelerate their net-zero transition.
      </p>

      <h2 className="text-2xl font-semibold text-green-800 mb-4 mt-10">
        Why SAP Sustainability Data Exchange?
      </h2>
      <ul className="list-disc list-inside space-y-4 text-justify">
        <li>
          <strong>Fragmented & inconsistent carbon data:</strong> Supply chain
          emissions data is spread across multiple tiers of suppliers, often
          relying on manual estimates that lack accuracy and consistency.
        </li>
        <li>
          <strong>Lack of standardized methodologies:</strong> Varying practices
          for calculating Product Carbon Footprints (PCFs) lead to
          inconsistencies, making emissions data non-comparable across the
          supply chain.
        </li>
        <li>
          <strong>Compliance with global regulations:</strong> New
          sustainability disclosure frameworks such as CSRD, IFRS S2, and SEC
          Climate Disclosures mandate transparent Scope 3 emissions tracking,
          adding compliance pressure on businesses.
        </li>
        <li>
          <strong>Limited supplier engagement:</strong> Many suppliers lack the
          digital tools to report emissions accurately, increasing the risk of
          double counting and inaccurate reporting.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-800 mb-4 mt-10">
        How it works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-4 border rounded-lg shadow">
          <h3 className="text-lg font-bold text-green-700 mb-2">TRACK</h3>
          <p className="text-justify">
            Enables businesses to collect and integrate primary emissions data
            from suppliers, reducing reliance on industry averages.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h3 className="text-lg font-bold text-green-700 mb-2">EXCHANGE</h3>
          <p className="text-justify">
            Standardizes sustainability data-sharing processes across multi-tier
            supply chains, improving visibility and auditability.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h3 className="text-lg font-bold text-green-700 mb-2">REDUCE</h3>
          <p className="text-justify">
            Supports real-time emissions tracking, helping companies identify
            decarbonization opportunities and set accurate reduction targets.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-green-800 mb-4">
        What it offers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "End-to-end Scope 3 emissions tracking",
            content:
              "Centralizes data collection from suppliers, logistics providers, and downstream partners. Moves from estimated emissions to actual supplier-reported values for improved accuracy.",
          },
          {
            title: "Real-time sustainability data exchange",
            content:
              "Automates the secure sharing of carbon footprint data across the supply chain. Enhances supplier collaboration to ensure reliable carbon disclosures.",
          },
          {
            title: "Regulatory-ready carbon accounting",
            content:
              "Aligns with PACT V2, GHG Protocol, CSRD, IFRS S2, and SEC Climate Disclosure Rules. Supports compliance with global sustainability frameworks through auditable, standardized reporting.",
          },
          {
            title: "Seamless integration with SAP sustainability solutions",
            content:
              "Connects with SAP Sustainability Footprint Management for comprehensive emissions tracking. Integrates with SAP S/4HANA, SAP Analytics Cloud, and SAP Business Network to ensure real-time data flow.",
          },
          {
            title: "AI-powered data accuracy and automation",
            content:
              "Uses machine learning models to automate emission factor mapping and verification. Reduces manual effort in sustainability reporting by up to 80 percent.",
          },
        ].map((item, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-green-700 mb-2">
              {item.title}
            </h3>
            <p className="text-justify">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SapSdx;
