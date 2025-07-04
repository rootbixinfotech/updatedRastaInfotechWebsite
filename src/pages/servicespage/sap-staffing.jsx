import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SAPStaffing = () => {
  const staffingTypes = [
    {
      title: "Contract-Based SAP Staff",
      desc: "Need SAP professionals for short-term projects or assignments? We’ve got you covered.",
    },
    {
      title: "Temporary-Based Staff",
      desc: "Hire SAP experts for durations from 3 days to 12 months for flexible project support.",
    },
  ];

  const benefits = [
    "100% in-house staff",
    "Transparency",
    "Reduced recruitment and training costs",
    "Improved project quality and delivery speed",
    "Access to the latest SAP technology & solutions",
    "Highly skilled and experienced SAP Staff",
  ];

  return (
    <div className="w-full h-full pt-24 px-4 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Hire Highly Qualified{" "}
            <span className="text-blue-600">
              SAP Resources from Rasta Infotech
            </span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mt-4 mx-auto rounded-lg"></div>
        </div>

        {/* Introduction */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700 text-base leading-relaxed">
            Rasta Infotech bridges the gap between SAP talent and enterprise
            opportunity. With deep industry knowledge and a vast network, we
            connect you to top-tier SAP professionals across all modules —
            including SAP EWM, SAP S/4HANA, Cloud Migration, and more.
            <br />
            <br />
            We maintain one of the largest SAP staffing teams with proven
            placement across varied domains.
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-800 list-disc list-inside">
            <li>SAP Extended Warehouse Management (SAP EWM)</li>
            <li>SAP Transportation Management Services</li>
            <li>SAP Warehouse Robotics/Automation</li>
            <li>SAP Yard Logistics</li>
            <li>SAP Business Network for Logistics</li>
            <li>SAP S/4HANA</li>
            <li>SAP Cloud Migration ECC to S/4HANA</li>
          </ul>
        </section>

        {/* Staffing Services */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Our SAP Staffing Services Include:
          </h2>
          <p className="text-gray-700 text-base mb-6">
            At Rasta Infotech Pvt Ltd, our team of SAP experts and recruiters
            deeply understands the hiring needs for enterprise SAP
            implementations. We offer adaptable contract and contingent staffing
            models for maximum flexibility.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {staffingTypes.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <MdOutlineKeyboardDoubleArrowRight className="text-blue-600 text-2xl mt-1" />
                <div>
                  <p className="font-bold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Why Choose Rasta Infotech Pvt. Ltd. for SAP Staffing?
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Rasta Infotech provides skilled SAP developers capable of designing
            and optimizing mission-critical enterprise solutions. Our flexible
            staffing models are aligned with project-specific and budgetary
            needs.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <MdOutlineKeyboardDoubleArrowRight className="text-blue-600 text-xl mt-1" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white text-center p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Need expert SAP guidance?
          </h3>
          <p className="text-base mb-4">
            We’re ready to help you streamline your business with intelligent
            SAP solutions.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-300 text-white font-semibold px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-400 transition">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

export default SAPStaffing;
