import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SAPEnterprise = () => {
  const bulletList = (points) =>
    points.map((text, i) => (
      <li key={i} className="flex items-start gap-2">
        <MdOutlineKeyboardDoubleArrowRight className="text-blue-600 mt-1" />
        <span>{text}</span>
      </li>
    ));

  return (
    <div className="w-full h-full pt-24 px-4 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            SAP{" "}
            <span className="text-blue-600">
              Enterprise Digital Transformation
            </span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mt-4 mx-auto rounded-lg"></div>
        </div>

        {/* Intro */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Enterprise Digital Transformation with Rasta Infotech
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Rasta Infotech is a leading provider of enterprise digital
            transformation services. We help organizations of all sizes
            implement and optimize SAP solutions to achieve digital excellence.
          </p>
        </section>

        {/* What is EDT */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            What is Enterprise Digital Transformation?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            It's the integration of digital technologies into every aspect of
            your business – automating processes, enabling new models, and
            improving decision-making.
          </p>
        </section>

        {/* Why EDT */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Why is Digital Transformation Important?
          </h2>
          <ul className="list-none space-y-3 text-gray-700 text-base">
            {bulletList([
              "Improve efficiency and productivity",
              "Reduce costs",
              "Increase customer satisfaction",
              "Gain competitive advantage",
              "Adapt to changing market conditions",
            ])}
          </ul>
        </section>

        {/* How Rasta Helps */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            How Rasta Infotech Helps in SAP Digital Transformation
          </h2>
          <ul className="list-none space-y-3 text-gray-700 text-base">
            {bulletList([
              "Develop a digital transformation strategy",
              "Select and implement the right SAP solutions",
              "Integrate SAP with existing systems",
              "Migrate your data to SAP",
              "Train employees on SAP tools",
              "Optimize SAP performance and scalability",
            ])}
          </ul>
        </section>

        {/* Digital Platform Advantages */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Advantages of a Digital Platform
          </h2>
          <ul className="list-none space-y-3 text-gray-700 text-base">
            {bulletList([
              "Generate new revenue streams & become a platform company",
              "Build ecosystems with partners, suppliers, and customers",
              "Connect/manage IoT devices for advanced analytics",
              "Deliver innovative features with custom applications",
              "Develop modern business logic and digital apps",
              "Use modern ERP/CRM/SCM to enhance processes",
              "Access Big Data to improve decision-making",
              "Enable real-time insights for better outcomes",
            ])}
          </ul>
        </section>

        {/* Framework Section */}
        <section className="bg-white shadow-md p-6 rounded-xl space-y-6">
          <h2 className="text-2xl font-semibold text-blue-700">
            SAP Digital Transformation Framework
          </h2>
          <div className="space-y-3 text-gray-700 text-base">
            {bulletList([
              `Digital Enterprise Architecture:
              A unified, enterprise-ready platform simplifying IT landscapes and integrating
              front-end and back-end operations for innovation.`,
              `Next-Gen SAP Solutions:
              SAP S/4HANA as a digital core, with support from SAP Ariba, Concur, SuccessFactors, Fieldglass, and Hybris –
              covering supply chain, finance, HR, and customer engagement.`,
            ])}
          </div>
        </section>

        {/* Advantages of SAP Digital Transformation */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Advantages of SAP Digital Transformation
          </h2>
          <ul className="list-none space-y-3 text-gray-700 text-base">
            {bulletList([
              "Rapid creation of new value from SAP applications",
              "Improved agility and innovation across teams",
              "Predictive insights and proactive decision-making",
              "Stronger business continuity and uptime",
              "Reduced TCO and increased operational efficiency",
            ])}
          </ul>
        </section>

        {/* Benefits of Working with Rasta */}
        <section className="bg-white shadow-md p-6 rounded-xl space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">
            Benefits of Working with Rasta Infotech
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Deep SAP solution expertise</li>
            <li>Proven success with global clients</li>
            <li>Customer-first engagement models</li>
            <li>On-time, on-budget delivery</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Ready to transform your enterprise digitally? Contact us today to
            discuss your goals and explore how Rasta Infotech can empower your
            journey.
          </p>
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

export default SAPEnterprise;
