import React from "react";

const SapS4hana = () => {
  return (
    <div className="bg-gray-50 py-24 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-14">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Getting Started with SAP S/4HANA
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
            The most important questions about getting started with SAP
            S/4HANA—understand the Why, What, and How to ensure a successful
            transformation.
          </p>
        </div>

        {/* Why, What, How Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Why? The Strategic Imperative",
              points: [
                "Digital transformation is no longer optional.",
                "Disruption impacts every industry in new ways.",
                "Modern technology unlocks future opportunities.",
                "Enables new business models and tremendous growth potential.",
              ],
            },
            {
              title: "What? Overview of SAP Answers",
              points: [
                "SAP’s application strategy and next-gen ERP.",
                "SAP S/4HANA capabilities provide a true competitive advantage.",
                "Cloud deployment is key to agility.",
                "New architecture transforms business operations forever.",
              ],
            },
            {
              title: "How? The Right Approach",
              points: [
                "Digitization requires the right strategy, not just a switch.",
                "Follow best practices from successful SAP S/4HANA adopters.",
                "Choose the right transition path: Greenfield, Brownfield, or Hybrid.",
                "Optimize efficiency and effectiveness across all processes.",
              ],
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                {item.title}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Migration Paths */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Path to SAP S/4HANA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-justify">
              Migrating to SAP S/4HANA is a matter of when and how—not if.
              Planning now ensures readiness by 2027 when SAP ECC 6 support
              ends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Brownfield Conversion",
                desc: "Convert your existing SAP system to SAP S/4HANA with minimal disruption. Ideal if your system is already optimized.",
              },
              {
                title: "Hybrid Simplification",
                desc: "Ideal for large enterprises consolidating SAP and non-SAP systems. Enables global alignment and quick wins.",
              },
              {
                title: "Greenfield Approach",
                desc: "Start fresh with a clean slate—ideal if your legacy landscape is outdated. Build a future-ready digital core.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Key Features of SAP S/4HANA
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
            <li>
              <strong>In-Memory Computing:</strong> Ultra-fast data processing
              powered by SAP HANA.
            </li>
            <li>
              <strong>Real-Time Analytics:</strong> Get instant insights and
              real-time reporting.
            </li>
            <li>
              <strong>Simplified Data Model:</strong> Reduce complexity and
              redundancy in data structures.
            </li>
            <li>
              <strong>Modern User Experience:</strong> SAP Fiori delivers
              intuitive, responsive UI.
            </li>
            <li>
              <strong>Deployment Flexibility:</strong> Cloud, On-Premise, or
              Hybrid based on your needs.
            </li>
          </ul>
        </section>

        {/* Final Summary */}
        <section className="text-center">
          <p className="text-gray-700 text-lg max-w-3xl mx-auto text-justify">
            SAP S/4HANA is more than just an ERP—it’s a next-generation digital
            core that transforms business operations and enables real-time,
            insight-driven decision-making. Now is the time to act.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SapS4hana;
