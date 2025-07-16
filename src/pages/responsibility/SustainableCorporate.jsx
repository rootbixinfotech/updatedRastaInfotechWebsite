import React, { useState } from "react";
import bannerImage from "../../assets/sustnablebanner.jpg";
import ContactModal from "../../components/ContactModal";
import { useNavigate } from "react-router-dom";

const SustainableCorporate = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 px-2 sm:px-4 md:px-8 py-4 md:py-8 w-full">
      {/* Banner Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden w-full">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 md:px-8 py-8 md:py-16 gap-6 md:gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={bannerImage}
              alt="Scientist with microscope"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              Sustainable Corporate Governance
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6">
              Building Responsible, Resilient, and Ethical Organizations
            </p>
          </div>
        </div>
      </section>
      <div className="fixed top-2/3 right-2 sm:right-4 transform -translate-y-1/2 rotate-90 origin-right z-50">
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded-l-full text-xs sm:text-sm hover:bg-blue-800 transition "
          onClick={() => {
            setShowModal(true);
          }}
        >
          Get in Touch
        </button>
      </div>

      {/* Main Content Section */}
      <section className="w-full px-2 sm:px-4 md:px-8 py-8 md:py-16 space-y-8 md:space-y-12">
        {/* Introduction */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2 md:mb-4">
            What Is Sustainable Corporate Governance?
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-justify">
            Sustainable corporate governance refers to the systems, principles,
            and processes by which companies are directed and controlled, with a
            focus on long-term value creation for all stakeholders—including
            shareholders, employees, customers, communities, and the
            environment. It combines traditional governance structures with
            sustainability goals, ensuring that organizations operate
            responsibly and ethically while pursuing growth.
          </p>
        </div>

        {/* Key Pillars */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-2 md:mb-4">
            Key Pillars of Sustainable Governance
          </h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li>
              <strong>Transparency:</strong> Clear reporting and open
              communication with stakeholders.
            </li>
            <li>
              <strong>Accountability:</strong> Defined roles and
              responsibilities across leadership and management.
            </li>
            <li>
              <strong>Ethical Conduct:</strong> Adherence to legal, moral, and
              social standards.
            </li>
            <li>
              <strong>Stakeholder Engagement:</strong> Inclusive decision-making
              that considers diverse perspectives.
            </li>
            <li>
              <strong>Environmental and Social Integration:</strong> Embedding
              ESG factors into strategy and operations.
            </li>
          </ul>
        </div>

        {/* Why It Matters */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-2 md:mb-4">
            Why It Matters
          </h3>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-2 sm:mb-4 text-justify">
            In an age of climate change, social inequality, and digital
            disruption, businesses are under increasing pressure to demonstrate
            responsible leadership. Investors, regulators, and consumers are
            demanding more than financial performance—they want to see companies
            contributing positively to society and the planet.
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-base sm:text-lg text-justify">
            <li>Enhanced Reputation</li>
            <li>Risk Mitigation</li>
            <li>Investor Confidence</li>
            <li>Regulatory Compliance</li>
            <li>Employee Engagement</li>
            <li>Innovation and Resilience</li>
          </ul>
        </div>

        {/* Our Commitment */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-2 md:mb-4">
            Our Commitment at Rasta Infotech
          </h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-4 text-base sm:text-lg">
            <li>
              <strong>Leadership Accountability:</strong> Ethical decisions,
              transparency, diversity, and long-term value creation.
            </li>
            <li>
              <strong>ESG Integration:</strong> Strategic planning, risk
              assessment, and ESG performance evaluation.
            </li>
            <li>
              <strong>Stakeholder Engagement:</strong> Collaborative, inclusive,
              and transparent communication.
            </li>
            <li>
              <strong>Ethical Business Practices:</strong> Code of conduct,
              anti-corruption, and data privacy enforcement.
            </li>
            <li>
              <strong>Sustainable Innovation:</strong> Green tech, remote
              enablement, and carbon-reducing solutions.
            </li>
          </ul>
        </div>

        {/* Governance in Action */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-2 md:mb-4">
            Governance in Action: Our Practices
          </h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li>Board Oversight</li>
            <li>Diversity & Inclusion</li>
            <li>Data Governance</li>
            <li>Supply Chain Responsibility</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>

        {/* Global Standards */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-2 md:mb-4">
            Aligning with Global Standards
          </h3>
          <p className="text-base sm:text-lg leading-7 sm:leading-8">
            Rasta Infotech aligns its governance practices with globally
            recognized frameworks and standards such as:
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-base sm:text-lg">
            <li>UN Sustainable Development Goals (SDGs)</li>
            <li>OECD Principles of Corporate Governance</li>
            <li>ISO 26000 – Social Responsibility</li>
            <li>GRI (Global Reporting Initiative) Standards</li>
            <li>SASB (Sustainability Accounting Standards Board)</li>
          </ul>
        </div>

        {/* Future-Ready Governance */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-2 md:mb-4">
            Future-Ready Governance
          </h3>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-justify">
            As we look ahead, emerging technologies like AI, blockchain, and big
            data are reshaping how companies manage risk, transparency, and
            stakeholder engagement. At Rasta Infotech, we are committed to
            leveraging these innovations to enhance governance and deliver
            greater value to our stakeholders.
          </p>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 mt-2 sm:mt-4">
            We also recognize the importance of climate resilience, human
            rights, and digital ethics in shaping the future of governance.
          </p>
        </div>

        <div className="px-0 sm:px-4 lg:px-8 w-full">
          <div className="bg-[#eeeeee] rounded-2xl py-10 sm:py-16 text-center w-full">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
              Partner with Us
            </h2>
            <p className="text-gray-600 mt-2 sm:mt-4 max-w-2xl mx-auto">
              Whether you're a startup building your governance framework or an
              enterprise strengthening its responsible practices, Rasta Infotech
              offers strategic consulting, tools, and support for long-term,
              sustainable growth.
            </p>

            <button
              type="submit"
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-xs sm:text-base font-semibold px-4 sm:px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-500 transition w-full sm:w-auto mt-4"
            >
              Contact with us
            </button>
          </div>
        </div>
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </section>
    </div>
  );
};

export default SustainableCorporate;
