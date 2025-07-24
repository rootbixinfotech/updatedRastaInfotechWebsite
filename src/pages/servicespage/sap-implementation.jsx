import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ContactModal from "../../components/ContactModal";
import Seo from '../../components/Seo';

const SAPImplementation = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Seo title="SAP Implementation Services | Rasta Infotech" description="Optimize your business with SAP implementation services from Rasta Infotech." />
      <div className="w-full h-full pt-24 px-4 md:px-20 bg-gray-50">
        <div className="w-full max-w-5xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 leading-snug">
              SAP <span className="text-blue-600">Implementation Services</span>
            </h1>
            <div className="h-1 w-24 bg-blue-500 mt-4 mx-auto rounded-lg"></div>
          </div>

          {/* Section 1: Intro */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Welcome to Rasta Infotech
            </h2>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              In today's fast-paced business environment, leveraging the power of
              SAP can be a game-changer for organizations seeking to optimize
              their supply chain processes and streamline their operations. We
              help you harness the full potential of SAP through our top-notch SAP
              Implementation services.
            </p>
          </div>

          {/* Section 2: About */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Introduction to Rasta Infotech
            </h2>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              At Rasta Infotech, we understand the critical role that effective
              supply chain management plays in the success of any organization.
              With over 10 years of experience, we have become a leading provider
              of SAP services, helping businesses across industries transform
              their supply chain operations, boost efficiency, and gain a
              competitive edge in the market.
              <br />
              <br />
              Our team comprises highly skilled SAP consultants, developers, and
              project managers who are dedicated to delivering tailored SAP
              solutions that align perfectly with your unique business goals and
              requirements.
            </p>
          </div>

          {/* Section 3: Benefits */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Why Implement SAP?
            </h2>
            <ul className="list-disc ml-6 text-gray-700 text-base space-y-3 text-justify">
              <li>
                <strong>Streamlined Processes:</strong> Automate and optimize core
                business processes, reducing manual effort and errors.
              </li>
              <li>
                <strong>Real-time Insights:</strong> Gain real-time visibility
                into your supply chain for informed decision-making.
              </li>
              <li>
                <strong>Enhanced Productivity:</strong> User-friendly interface
                and integrated features improve employee productivity.
              </li>
              <li>
                <strong>Scalability:</strong> SAP solutions are highly scalable
                and can grow with your business.
              </li>
            </ul>
          </div>

          {/* Section 4: Implementation Process */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Our SAP Implementation Process
            </h2>
            <ol className="list-decimal ml-6 text-gray-700 text-base space-y-3 text-justify">
              <li>
                <strong>Needs Assessment and Planning:</strong> We start by
                understanding your business objectives and requirements,
                identifying stakeholders, and planning the implementation
                strategy.
              </li>
              <li>
                <strong>System Design and Configuration:</strong> We design and
                configure a tailored SAP system to fit your unique operations.
              </li>
              <li>
                <strong>Data Migration:</strong> Seamless migration of your
                existing data into the new SAP system.
              </li>
              <li>
                <strong>Testing and Quality Assurance:</strong> Rigorous testing
                to ensure a smooth transition to the new system.
              </li>
              <li>
                <strong>Training and Change Management:</strong> Comprehensive
                training and support for your staff.
              </li>
              <li>
                <strong>Go-Live and Support:</strong> Ongoing support to address
                any queries or issues post-launch.
              </li>
            </ol>
          </div>

          {/* Section 5: SAP Development Services */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              SAP Development Services
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
              Every business has unique requirements. Our SAP Development services
              include:
            </p>
            <ul className="list-disc ml-6 text-gray-700 text-base space-y-3 text-justify">
              <li>
                <strong>Custom SAP Reports:</strong> Tailored reports and
                dashboards for actionable insights.
              </li>
              <li>
                <strong>SAP Integrations:</strong> Seamlessly connect SAP with
                other systems and applications.
              </li>
              <li>
                <strong>Workflow Enhancements:</strong> Optimize your business
                processes with workflow automation.
              </li>
              <li>
                <strong>Mobile Applications:</strong> Extend SAP with mobile app
                development.
              </li>
              <li>
                <strong>UI/UX Improvements:</strong> Enhance the user experience
                with intuitive interfaces.
              </li>
            </ul>
          </div>

          {/* Section 6: Why Choose Us */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Why Choose Rasta Infotech for SAP Implementation?
            </h2>
            <ul className="list-disc ml-6 text-gray-700 text-base space-y-3 text-justify">
              <li>
                <strong>Expertise and Experience:</strong> Decades of experience
                in SAP implementation and development.
              </li>
              <li>
                <strong>Tailored Solutions:</strong> Customized solutions that
                precisely fit your requirements.
              </li>
              <li>
                <strong>Ongoing Support:</strong> We provide ongoing support and
                maintenance.
              </li>
              <li>
                <strong>Proven Track Record:</strong> Successful SAP projects
                across various industries.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> We prioritize your needs
                and goals.
              </li>
            </ul>
          </div>

          {/* CTA Section */}
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
      </div>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default SAPImplementation;
