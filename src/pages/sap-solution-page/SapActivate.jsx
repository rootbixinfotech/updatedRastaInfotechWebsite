import React from "react";

const phases = [
  {
    title: "Discover",
    content:
      "Identify and select the right SAP solution. Explore trial systems, define scope, timeline, and implementation model with guidance from industry experts. Milestone: Solution defined.",
  },
  {
    title: "Prepare",
    content:
      "Project planning and team onboarding. Finalize rules of engagement and project plan. Introduce key stakeholders. Milestone: Formal project kickoff.",
  },
  {
    title: "Explore",
    content:
      "Conduct fit/gap analysis, review best practices, identify and document gaps and requirements. Workshops with solution experts. Milestone: Finalized and signed-off design.",
  },
  {
    title: "Realize",
    content:
      "Iterative configuration, testing, and validation of the system. Load data, perform adoption activities, and conduct user testing. Milestone: Business approval for go-live.",
  },
  {
    title: "Deploy",
    content:
      "Prepare production system, train users, execute cutover plan, and go live. Post-go-live Hypercare support provided. Option for ongoing AMS.",
  },
  {
    title: "Run",
    content:
      "Optimize operations and ensure system availability. Maintain IT systems for performance and support of business activities.",
  },
];

const SapActivate = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">SAP Activate</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            SAP Best Practices
          </h2>
          <p className="mb-4 text-justify">
            At the core of the SAP Activate framework are ready-to-run business
            processes, optimized for SAP S/4HANA and accessible via SAP Best
            Practices Explorer. These include standard flows, roles,
            responsibilities, and test scripts.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
            Guided Configurations
          </h2>
          <p className="mb-4 text-justify">
            Guided Configurations simplify SAP system customization with pre-built
            settings supporting industry best practices, enabling effective global
            and standardized implementations.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
            SAP Activate Methodology
          </h2>
          <p className="mb-4 text-justify">
            SAP Activate Methodology is SAP's modern project delivery approach,
            offering solution-specific roadmaps for streamlined project success
            and continuous improvement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            The 6 Phases of SAP Activate Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-lg font-bold mb-2 text-blue-700">
                  {index + 1}. {phase.title}
                </h3>
                <p className="text-justify">{phase.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SapActivate;
