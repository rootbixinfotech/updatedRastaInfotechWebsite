import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import fillerimg from "../../assets/DataMigrationServices.jpeg";
import ContactModal from "../../components/ContactModal";


const SAPDataMigration = () => {
    const [showModal, setShowModal] = useState(false);
  
  const migrationServices = [
    "Market dynamics change overnight with the introduction of new business laws and govt legislation...",
    "Our Migration and upgrade services cater to the enterprise's requirement to move to new releases...",
    "Rasta Infotech ensures that the customers face the least downtime...",
    "Our Upgrade and Migration Services ensure a fast, smooth transition...",
    "Our consultants work closely with you to manage all aspects...",
  ];

  const upgradeServices = [
    "Customers are challenged to implement new solutions by upgrading their platforms...",
    "The success of any IT transformation task depends on the success and usability of the resulting systems...",
    "Upgrading to SAP HANA allows you to transform your organization into a real-time business...",
    "HANA is designed to run standard SAP processes...",
    "Migration to SAP S/4HANA can deliver greater agility...",
    "Steps for a successful migration to SAP HANA include...",
    "Rasta Infotech will perform the following stages for the organizations for HANA migration...",
  ];

  const rastaHelp = [
    "Our consultants work closely with you to manage all aspects of the SAP system upgrades and migration...",
    "Rasta Infotech ensures that the customers face the least downtime...",
    "Our Upgrade and Migration Services ensure a fast, smooth transition...",
  ];

  return (
    <div className="w-full h-full pt-24 px-4 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Title */}
 

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            SAP Data Migration &{" "}
            <span className="text-blue-600">Upgrade Services</span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mt-4 mx-auto rounded-lg"></div>
        </div>

        {/* Intro */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700 text-base leading-relaxed">
            SAP data migration is the process of moving data from one SAP system
            to another. This is critical for businesses upgrading or
            transitioning to new SAP environments.
            <br />
            <br />
            Rasta Infotech offers comprehensive services to ensure safe,
            efficient migration for organizations across all sectors.
          </p>
        </section>

        {/* Services Offered */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">
            SAP Data Migration Services
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "System migration: e.g., from SAP ECC to SAP S/4HANA.",
              "Platform migration: e.g., from on-premise to cloud.",
              "Data cleansing and transformation for compatibility.",
              "Data testing to validate accuracy and completeness.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <MdOutlineKeyboardDoubleArrowRight className="text-blue-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* SAP HANA Migration Impact */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            SAP HANA Migration and Its Impact
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Upgrading to SAP S/4HANA enables real-time business transformation,
            unlocking performance and process improvements throughout your
            operations.
          </p>
        </section>

        {/* Readiness of IT Team */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            IT Team Readiness for SAP HANA
          </h2>
          <img
            src={fillerimg}
            alt="SAP Data Migration"
            className="rounded-lg shadow-md mb-4"
          />
          <p className="text-gray-700">
            For a successful SAP HANA migration, key steps must be taken by IT
            teams to prepare infrastructure, ensure data integrity, and maintain
            system uptime during the transition.
          </p>
        </section>

        {/* Migration Services */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-3">
          <h2 className="text-2xl font-semibold text-blue-700">
            SAP Migration Services
          </h2>
          {migrationServices.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <MdOutlineKeyboardDoubleArrowRight className="text-blue-600 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </section>

        {/* Upgrade Services */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-3">
          <h2 className="text-2xl font-semibold text-blue-700">
            SAP Upgrade Services
          </h2>
          {upgradeServices.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <MdOutlineKeyboardDoubleArrowRight className="text-blue-600 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </section>

        {/* Rasta Infotech Help */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-3">
          <h2 className="text-2xl font-semibold text-blue-700">
            How Rasta Infotech Can Help You
          </h2>
          {rastaHelp.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <MdOutlineKeyboardDoubleArrowRight className="text-blue-600 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </section>

        {/* Final Call to Action */}
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

export default SAPDataMigration;
