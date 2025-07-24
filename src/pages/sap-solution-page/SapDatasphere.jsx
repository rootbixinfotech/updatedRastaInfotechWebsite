import React from "react";
import Seo from '../../components/Seo';

const SapDatasphere = () => {
  return (
    <>
      <Seo title="SAP Datasphere | Rasta Infotech" description="Discover SAP Datasphere solutions and data management by Rasta Infotech." />
      <div className="bg-gray-50 py-24 px-6 lg:px-20">
        <div className="max-w-screen-xl mx-auto space-y-14">
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              SAP Datasphere
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Unleash the power of your business data with SAP Datasphere — a
              modern data fabric platform for harmonized, secure, and
              business-context-rich data access across your enterprise.
            </p>
          </div>

          {/* Overview Section */}
          <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is SAP Datasphere?
            </h2>
            <p className="text-gray-700 text-justify">
              SAP Datasphere helps organizations unlock the full value of their
              data without the need to transfer it between technologies. Built on
              the concept of a business data fabric, it offers a unified view of
              your entire data landscape—across SAP and non-SAP systems—while
              retaining crucial business context.
            </p>
            <p className="text-gray-700 text-justify">
              It simplifies complex data environments and empowers users with
              trusted, real-time, governed data to accelerate decision-making and
              innovation.
            </p>
          </section>

          {/* Core Capabilities */}
          <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Core Services of SAP Datasphere
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
              <li>
                <strong>Data Integration:</strong> Seamlessly connect and ingest
                data from disparate systems.
              </li>
              <li>
                <strong>Cataloging:</strong> Organize and classify data for easy
                discovery and governance.
              </li>
              <li>
                <strong>Semantic Modeling:</strong> Add business meaning to raw
                data and simplify analysis.
              </li>
              <li>
                <strong>Data Warehousing:</strong> Leverage cloud-native,
                enterprise-grade warehousing capabilities.
              </li>
              <li>
                <strong>Virtualization:</strong> Query and access distributed data
                without duplication or movement.
              </li>
            </ul>
          </section>

          {/* Why SAP Datasphere */}
          <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Choose SAP Datasphere?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Simplifies Complex Data Landscapes",
                  desc: "Brings structure and ease to managing vast and distributed data environments.",
                },
                {
                  title: "AI-Integrated Business Terms",
                  desc: "Connects to AI platforms for semantic access to data across multiple locations and systems.",
                },
                {
                  title: "Trusted Self-Service Access",
                  desc: "Empowers teams with governed access to clean, business-ready data.",
                },
                {
                  title: "Real-Time Analytics & Operations",
                  desc: "Supports hybrid and multi-cloud environments with live data for immediate insights.",
                },
                {
                  title: "Secure & Governed Decision-Making",
                  desc: "Centralized data governance ensures compliance, privacy, and trust in decision-making.",
                },
                {
                  title: "Built-in Data Marketplace",
                  desc: "Find, share, and enrich internal data with external datasets for deeper insights.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-6 rounded-xl border hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-justify">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Ecosystem Section */}
          <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Built for an Open Data Ecosystem
            </h2>
            <p className="text-gray-700 text-justify">
              SAP Datasphere allows seamless integration with leading open data
              and AI platforms. It lets you extend your existing investments,
              connect to third-party systems, and enrich your internal data with a
              wide array of external sources from its built-in data marketplace.
            </p>
            <p className="text-gray-700 text-justify">
              With integration capabilities and support for modern architectures,
              it acts as a scalable foundation for enterprise-wide data
              strategies.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default SapDatasphere;
