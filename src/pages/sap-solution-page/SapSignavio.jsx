import React from "react";
import Seo from '../../components/Seo';

const SapSignavio = () => {
  const useCases = [
    {
      title: "Operational Excellence",
      content:
        "Order to cash (O2C), Purchase to pay (P2P), Record to report (R2R), Lean manufacturing, Service management, Warehouse management, Transportation management",
    },
    {
      title: "SAP S/4HANA Migration & Business Transformation",
      content:
        "Tailored improvement recommendations, insights into current performance and benchmarks, ERP utilization analysis, and automation potential using best practices.",
    },
    {
      title: "Digital Transformation",
      content:
        "ERP conversion and consolidation, return to standard code, digital foundation setup, and continuous improvement with SAP LeanIX.",
    },
    {
      title: "Performance Initiatives",
      content:
        "Customer excellence, cost reduction, governance, risk and compliance, transportation and warehouse optimization, cross-LOB improvements.",
    },
    {
      title: "Sustainability",
      content:
        "Data-driven sustainable decision-making, process efficiency, alignment with regulations, and environmental impact monitoring.",
    },
    {
      title: "Change Management",
      content:
        "Analyze workflows, optimize procedures, ERP transition support, process governance, and compliance alignment.",
    },
  ];

  const benefits = [
    {
      title: "Game Changer",
      content:
        "Real-time insights with a single process truth source accelerate bottleneck identification, adoption, and decision-making.",
    },
    {
      title: "Empowering Process Transparency",
      content:
        "A central repository fosters alignment, collaboration, and visibility across processes.",
    },
    {
      title: "Customer Excellence",
      content:
        "Combine experience and operational data to analyze root causes and drive improvements for customer satisfaction.",
    },
    {
      title: "Continuous Process Innovation",
      content:
        "Pinpoint areas where legacy systems can be modernized and boost collaboration across teams.",
    },
    {
      title: "Operational Agility",
      content:
        "Enterprise-wide transparency enables swift adaptation to market demands and threats.",
    },
    {
      title: "Cost Reduction",
      content:
        "Minimize costs by eliminating bottlenecks and optimizing resources.",
    },
    {
      title: "Future Focus",
      content:
        "Supports digital transformation using AI/ML for identifying improvement areas.",
    },
    {
      title: "Stay Updated",
      content:
        "Cloud-based delivery ensures continuous updates and access to industry-leading BPM resources.",
    },
  ];

  return (
    <>
      <Seo title="SAP Signavio | Rasta Infotech" description="Discover SAP Signavio solutions and business transformation with Rasta Infotech." />
      <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">SAP Signavio</h1>

        <p className="mb-6 text-justify">
          SAP Signavio is a powerful suite that combines process mining,
          management, and automation. It enables enterprises to design, analyze,
          improve, and manage processes with transparency and intelligence.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {index + 1}. {useCase.title}
              </h3>
              <p className="text-gray-700 text-justify">{useCase.content}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-bold text-blue-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-justify">{benefit.content}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
          Why Rasta Infotech for SAP Signavio?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-justify">
          <li>Certified consultants with in-depth expertise.</li>
          <li>Trusted partnership with the SAP Signavio team.</li>
          <li>Clients across industries and geographies.</li>
          <li>
            Enable full SAP Signavio suite capabilities with stakeholder buy-in.
          </li>
          <li>Training & support for key users, admins, and end users.</li>
          <li>Focus on mindset and long-term adoption success.</li>
          <li>
            Core expertise in SAP S/4HANA migration with Signavio, improvement
            recommendations, and ERP usage insights.
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-16">
          📊 SAP Signavio Project Timeline Overview
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm md:text-base">
            <thead className="bg-gradient-to-r from-orange-100 to-orange-200 text-gray-800 uppercase text-xs md:text-sm">
              <tr>
                <th className="px-4 py-3 font-semibold tracking-wider whitespace-nowrap">
                  Phase
                </th>
                <th className="px-4 py-3 font-semibold tracking-wider whitespace-nowrap">
                  Duration
                </th>
                <th className="px-4 py-3 font-semibold tracking-wider whitespace-nowrap">
                  Key Activities
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800">
              {[
                {
                  phase: "Discover",
                  duration: "2–3 weeks",
                  activities:
                    "Identify transformation goals, assess current processes, showcase Signavio value",
                },
                {
                  phase: "Prepare",
                  duration: "3–4 weeks",
                  activities:
                    "Configure Signavio workspace, scope process recording & intelligence, onboard teams",
                },
                {
                  phase: "Explore",
                  duration: "4–6 weeks",
                  activities:
                    "Model as-is processes, design to-be processes, conduct fit-gap analysis",
                },
                {
                  phase: "Realize",
                  duration: "6–8 weeks",
                  activities:
                    "Validate models, simulate processes, integrate with SAP S/4HANA, test workflows",
                },
                {
                  phase: "Deploy",
                  duration: "2–3 weeks",
                  activities:
                    "Finalize documentation, enable Collaboration Hub, train users, go-live support",
                },
                {
                  phase: "Run & Improve",
                  duration: "Ongoing",
                  activities:
                    "Monitor KPIs, optimize processes, apply insights from Process Intelligence",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-4 py-4 font-semibold text-blue-800 whitespace-nowrap">
                    {item.phase}
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    {item.duration}
                  </td>
                  <td className="px-4 py-4 text-gray-700 text-justify">
                    {item.activities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-700 flex items-start gap-2">
          <span className="text-orange-600 text-lg mt-0.5">⏳</span>
          <span>
            <span className="italic">Total Estimated Duration:</span>{" "}
            <strong>~4 to 6 months</strong> depending on scope, industry, and
            client readiness.
          </span>
        </div>
      </div>
    </>
  );
};

export default SapSignavio;
