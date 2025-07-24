import React from "react";
import Seo from '../../components/Seo';

const addons = [
  {
    title: "Forecast Consumption",
    description:
      "Our Forecast Consumption add‑on reacts to variances between monthly forecasts and actual sales orders, automatically adjusting planning quantities based on real demand.",
  },
  {
    title: "Maintenance Plan Integration (MPI)",
    description:
      "MPI enables SPP/eSPP to act as the planning engine for materials that will be required by future maintenance orders, ensuring parts are procured before the need arises.",
  },
];

const SAPSPPPage = () => {
  return (
    <>
      <Seo title="SAP IBP | Rasta Infotech" description="Discover SAP Integrated Business Planning (IBP) solutions by Rasta Infotech." />
   <div className="bg-gray-50 min-h-screen py-16 px-6 lg:px-20">
  <div className="max-w-screen-xl mx-auto space-y-12">
    {/* Page Header */}
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        SAP Service Parts Planning (SPP) & extended SPP (eSPP)
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
        Learn how SAP’s pioneering network planning tool evolved into a modern S/4HANA‑integrated
        solution—and how Rasta Infotech drives its innovation and adoption.
      </p>
    </div>

    {/* What is SPP & eSPP */}
    <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">What is SAP SPP & eSPP?</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
        SAP Service Parts Planning (SPP) debuted in 2001—co‑innovated with Ford and Caterpillar—as
        the first network planning tool dedicated to service parts. Initially part of APO, it opened
        to all APO users in 2005 and received industry‑specific enhancements in 2007.
      </p>
      <p className="text-gray-700 leading-relaxed text-justify">
        In 2018 SAP launched extended SPP (eSPP) natively on S/4HANA, carrying forward mature SPP
        processes and adding capabilities such as multiechelon inventory optimization and advanced
        forecast strategies. Since 2020, eSPP features ship with every S/4HANA release.
      </p>
    </section>

    {/* Rasta Infotech’s Stake */}
    <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Rasta Infotech Stake in SPP & eSPP</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
        Rasta Infotech partnered with Ford on SPP 5.0’s inception and led the first non‑automotive
        SPP 7.01 rollout. SAP recognizes us as a preferred implementation partner for both SPP and
        eSPP, and we enrich your solution with unique add‑ons and services.
      </p>
      <p className="text-gray-700 leading-relaxed text-justify">
        We’re also the only consultancy offering dedicated SPP/eSPP training and full Application
        Management Services (AMS) to ensure your team maximizes the value of your planning
        investment.
      </p>
    </section>

    {/* Add‑Ons */}
    <section>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Rasta Infotech Add‑Ons for SPP & eSPP
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addons.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              {idx + 1}. {item.title}
            </h3>
            <p className="text-gray-700 text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
</div>
    </>
  );
};

export default SAPSPPPage;
