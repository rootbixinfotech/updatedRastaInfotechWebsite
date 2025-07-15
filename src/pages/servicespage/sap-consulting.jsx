import React, { useState } from "react";
import ContactModal from "../../components/ContactModal";

const SAPConsulting = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-full pt-24 px-4 md:px-20 bg-gray-50">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Transform Your Business with{" "}
            <span className="text-blue-600">SAP Consulting Services</span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mt-4 mx-auto rounded-lg"></div>
        </div>

        {/* Section 1 */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            What is Supply Chain Consulting?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Supply chain consulting is a process of advising businesses on how
            to improve their supply chains. Consultants help businesses identify
            and fix inefficiencies, reduce costs, and improve customer service.
            <br />
            <br />
            From strategy execution and sector-specific knowledge to steady
            management, Rasta Infotech offers end-to-end SAP services with
            highly experienced technology consultants. Our experts ensure
            optimal performance for complex application environments by
            leveraging the latest technology.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Highly Collaborative Approach for Optimal Business Performance
          </h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            As a leading SAP Consulting Company, we take a collaborative
            approach to unlock maximum productivity with new technologies. This
            strategy has resulted in a 100% success rate for our clients.
            <br />
            <br />
            Our senior consultants bring industry-specific expertise, strong
            technical knowledge, and sharp business acumen. We maintain low
            consultant-to-client ratios for better communication and autonomy.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Leveraging the Power of SAP Technology for Business Development
          </h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            We provide technical SAP services including SAP Fiori & UI5, SAP S/4
            Hana, and more. Our experience spans full project lifecycles from
            planning to deployment.
            <br />
            <br />
            Our consultants help you drive results across multiple business
            processes by utilizing cloud computing technologies such as SaaS,
            PaaS, and IaaS effectively.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Why Choose Rasta Infotech for Supply Chain Consulting Services?
          </h2>
          <ul className="list-disc ml-6 text-gray-700 text-base space-y-3 text-justify">
            <li>
              <strong>Expertise:</strong> Proven experience in identifying and
              solving supply chain challenges.
            </li>
            <li>
              <strong>Objectivity:</strong> Clear and unbiased assessment and
              improvement suggestions.
            </li>
            <li>
              <strong>Resources:</strong> Access to top-tier tools, best
              practices, and analytics.
            </li>
          </ul>
          <p className="mt-6 text-gray-700 leading-relaxed text-justify">
            Ready to take your supply chain to the next level? We’ll discuss
            your goals and challenges and create a customized roadmap for
            success.
          </p>
          <div className="mt-6 text-justify">
            <span className="font-bold text-blue-600 text-lg">
              “Contact Rasta Infotech today for a quick consultation and learn
              how we can help you improve your supply chain.”
            </span>
          </div>
        </div>

        {/* Optional CTA Section */}
        <section className="bg-blue-600 text-white text-center p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Need expert SAP guidance?
          </h3>
          <p className="text-base mb-4 text-justify">
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

export default SAPConsulting;
