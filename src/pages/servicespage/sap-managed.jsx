import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ContactModal from "../../components/ContactModal";


const SAPManaged = () => {
    const [showModal, setShowModal] = useState(false);
  const servicePoints = [
    {
      title: "SAP Hosting",
      desc: "Featuring SAP Basis Support, SAP Managed Security, and Hosted SAP S/4HANA",
    },
    {
      title: "SAP Remote Managed Hosting and Services",
      desc: "Includes Basis Support, DB Admin, Installs, Upgrades, OS Admin, and more.",
    },
    {
      title: "SAP Service Delivery Management",
      desc: "Coordination of services, Hypercare, SLAs, Platinum services, and reporting.",
    },
    {
      title: "SAP Maintenance",
      desc: "Support, software updates, SAP Early Watch Alerts, and service marketplace.",
    },
    {
      title: "SAP Application Managed Services (AMS)",
      desc: "Covers app support, fixes, enhancements, rollouts, upgrades, and new apps.",
    },
    {
      title: "SAP Security",
      desc: "Includes security planning, endpoint protection, firewall, SIEM, and SSO.",
    },
    {
      title: "SAP Business Continuity",
      desc: "Ensures high availability, backups, and disaster recovery planning.",
    },
  ];

  return (
    <div className="w-full h-full pt-24 px-4 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
  

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            SAP <span className="text-blue-600">Managed Services Provider</span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mt-4 mx-auto rounded-lg"></div>
        </div>


        {/* Intro Section */}
        <section className="bg-white shadow-md p-6 rounded-xl space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The term <strong>“SAP Managed Services”</strong> refers to
            comprehensive solutions around SAP systems like SAP HANA, SAP apps,
            and SAP landscapes. These services include SAP hosting, security,
            upgrades, and operational support.
            <br />
            <br />
            At <strong>Rasta Infotech</strong>, we help businesses streamline,
            support, and optimize their SAP operations. With our deep technical
            know-how, scalable approach, and business-first mindset, we
            transform SAP management into a strategic advantage.
          </p>
        </section>

        {/* Key Advantages */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Key Advantages of Our SAP Managed Services
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-base">
            <li>
              <strong>Proactive Monitoring:</strong> 24/7 issue detection before
              disruption.
            </li>
            <li>
              <strong>Enhanced Efficiency:</strong> Performance tuning to reduce
              costs.
            </li>
            <li>
              <strong>Customized Solutions:</strong> Tailored to fit unique
              business goals.
            </li>
            <li>
              <strong>Scalability:</strong> Flexible support as your business
              grows.
            </li>
            <li>
              <strong>Peace of Mind:</strong> Round-the-clock technical support.
            </li>
          </ul>
        </section>

        {/* Service List */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Our SAP Managed Services Include:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {servicePoints.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <MdOutlineKeyboardDoubleArrowRight className="text-blue-600 text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Section */}
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Partner with Rasta Infotech
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Rasta Infotech isn't just a service provider – we're your trusted
            SAP partner. We tailor every engagement to the core needs of your
            enterprise and ensure seamless SAP system operations.
            <br />
            <br />
            <strong>
              Let us manage your SAP systems, so you can focus on growing your
              business.
            </strong>
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
         <button
            className="bg-gradient-to-r from-blue-500 to-blue-300 text-white font-semibold px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-400 transition"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Get Started
          </button>
        </section>
      </div>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
};

export default SAPManaged;
