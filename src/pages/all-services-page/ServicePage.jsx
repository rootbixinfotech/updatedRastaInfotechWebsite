import React, { useState } from "react";
import GetInTouch from "../../components/getintouch/GetInTouch";
import ContactModal from "../../components/ContactModal";

const ServicePage = ({ serviceData }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    banner,
    introduction,
    blockchainTypes,
    cybersecurityTypes,
    devopsCapabilities,
    whyChooseUs,
    marketingCapabilities,
    grcCapabilities,
    coeCapabilities,
    opsModels,
    technologies,
    services,
    xaapModels,
    cloudModels,
    azureModels,
    appTypes,
    cognitiveSolutions,
    aiCapabilities,
    automationPillars,
    infrastructurePillars,
    engineeringPillars,
    salesforceCapabilities,
    awsCapabilities,
    tanzuCapabilities,
  } = serviceData;

  // Use either blockchainTypes or cybersecurityTypes depending on which exists
  const types =
    blockchainTypes ||
    cybersecurityTypes ||
    devopsCapabilities ||
    marketingCapabilities ||
    grcCapabilities ||
    coeCapabilities ||
    opsModels ||
    xaapModels ||
    cloudModels ||
    azureModels ||
    appTypes ||
    cognitiveSolutions ||
    aiCapabilities ||
    automationPillars ||
    infrastructurePillars ||
    engineeringPillars ||
    salesforceCapabilities ||
    awsCapabilities ||
    tanzuCapabilities;

  return (
    <div className="font-sans  ">
      {/* Header Section */}
      <div
        className="text-white py-40 text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <h1 className="text-4xl font-bold py-10">{banner.heading}</h1>
        <div className="mt-4 text-yellow-500 text-sm">
          {banner.breadcrumb.map((crumb, i) => (
            <span key={i}>
              {crumb}{" "}
              {i < banner.breadcrumb.length - 1 && (
                <span className="mx-2">&#xbb;</span>
              )}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-yellow-500 rounded-full animate-bounce"></div>
      </div>

      <div className="fixed top-2/3 right-4 transform -translate-y-1/2 rotate-90 origin-right z-50">
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded-l-full text-sm hover:bg-blue-800 transition "
          onClick={() => {
            setShowModal(true);
          }}
        >
          Get in Touch
        </button>
      </div>

      {/* Introduction */}
      <div className="bg-gray-800 text-white p-8 sm:p-10 rounded-md shadow-md max-w-5xl mx-auto my-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {introduction.title.split("–")[0]}–
          <span className="text-orange-500">
            {introduction.title.split("–")[1]}
          </span>
        </h2>
        <p className="leading-relaxed text-gray-300 text-justify" style={{textJustify:"inter-word"}}>
          {introduction.content}
        </p>
      </div>

      {/* Types Cards (Blockchain or Cybersecurity) */}
      <div className="py-16 px-4 md:px-0 flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {types?.map((type, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-lg flex-1 flex flex-col min-w-[300px] max-w-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${type.bgColor} ${type.textColor}`}
          >
            <div
              className={`w-16 h-16 ${type.iconBg} rounded-full flex items-center justify-center mb-6 shadow-md`}
            >
              <span className="text-2xl">{type.icon}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
            <p className="text-base text-justify" style={{textJustify:"inter-word"}}>{type.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={whyChooseUs.image}
            alt="Why Choose"
            className="rounded-lg w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {whyChooseUs.heading}
          </h2>
          <p className="text-gray-700 mb-6 text-justify" style={{textJustify:"inter-word"}}>
            {whyChooseUs.description}
          </p>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-50 py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {technologies.heading}
          </h2>
          <p className="text-gray-700 mb-6 text-justify" style={{textJustify:"inter-word"}}>
            {technologies.description}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={technologies.image}
            alt="Technologies We Use"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-blue-700 text-center">
          Our {banner.heading.replace(/ Solutions| Development/i, "")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-justify"style={{textJustify:"inter-word"}}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <GetInTouch />

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ServicePage;
