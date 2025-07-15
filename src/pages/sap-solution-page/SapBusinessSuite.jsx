import React from "react";

const benefits = [
  {
    title: "Lower Total Cost of Ownership",
    content:
      "No on-premises hardware, subscription-based pricing, and less maintenance.",
  },
  {
    title: "Faster Implementation and Time-to-Value",
    content:
      "Pre-configured best practices enable quick deployment and simplified onboarding.",
  },
  {
    title: "Scalability and Flexibility",
    content: "Supports multi-region growth and adapts to changing workloads.",
  },
  {
    title: "Continuous Innovation",
    content:
      "Bi-annual updates, embedded AI, ML, and RPA access to innovations.",
  },
  {
    title: "Enhanced User Experience",
    content:
      "Modern SAP Fiori UI, mobile-first design, real-time analytics, and embedded Joule.",
  },
  {
    title: "Robust Security and Compliance",
    content:
      "Built-in GDPR and IFRS compliance, industry-standard security updates.",
  },
  {
    title: "Intelligent Business Operations",
    content:
      "Real-time data with SAP HANA, predictive analytics, and integrated planning.",
  },
  {
    title: "Integration with SAP Ecosystem",
    content:
      "Seamless integration with SuccessFactors, Ariba, Concur, and third-party apps.",
  },
  {
    title: "Sustainability and Environmental Responsibility",
    content:
      "Tools for tracking sustainability goals and resource optimization.",
  },
  {
    title: "Focus on Core Business",
    content:
      "Reduces IT overhead and ensures continuity with disaster recovery.",
  },
];

const SapBusinessSuite = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            SAP Business Suite
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
            SAP Business Suite, with S/4HANA Public Cloud ERP at its core,
            modernizes enterprise resource planning through cloud delivery,
            embedded AI, real-time data, scalability, and improved security—all
            while eliminating costly on-premises systems.
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <p className="text-gray-700 leading-relaxed text-justify">
            Traditionally, ERP solutions were hosted on-premises, requiring
            significant investment and IT maintenance. SAP Business Suite
            transforms this with a cloud-based model, offering real-time data
            access, scalability, and lower total cost of ownership.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            S/4HANA Public Cloud ERP eliminates the need for on-site
            infrastructure, enabling agility, collaboration, and operational
            efficiency for businesses of all sizes.
          </p>
        </section>

        {/* Industries Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Industries Thriving with ERP Public Cloud
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700 text-justify">
            <li>
              <strong>SMEs:</strong> Lower upfront costs and scalability bring
              ERP capabilities to growing businesses.
            </li>
            <li>
              <strong>Wholesale Distribution:</strong> Improved inventory
              visibility and streamlined supply chains.
            </li>
            <li>
              <strong>Retail:</strong> Enhanced CRM and real-time data support
              better decisions.
            </li>
            <li>
              <strong>Manufacturing:</strong> More efficient operations and
              production tracking.
            </li>
            <li>
              <strong>Construction:</strong> Better project oversight through
              linked financial and operational data.
            </li>
          </ul>
        </section>

        {/* Private Cloud ERP */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Primary Advantages of Private Cloud ERP
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Private Cloud ERP offers cloud agility with greater control. It's
            ideal for existing SAP customers looking to retain enhancements
            while benefiting from a cloud environment. Hosted in third-party
            data centers, it reduces internal IT burden and simplifies cost
            structures.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Brownfield conversions enable customers to migrate to SAP S/4HANA
            while preserving configuration and data. In contrast, Public Cloud
            typically requires a Greenfield approach.
          </p>
        </section>

        {/* Key Benefits Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Key Benefits of SAP S/4HANA Public Cloud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-gray-700 text-justify">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SapBusinessSuite;
