import { useState } from "react";
import codeImage from "../../assets/ethichComplain.jfif";
import ethicsBanner from "../../assets/ethicbanner.jfif";
import ContactModal from "../../components/ContactModal";
import { useNavigate } from "react-router-dom";
import Seo from '../../components/Seo';

const EthicsCompliance = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Seo title="Ethics & Compliance | Rasta Infotech" description="Learn about ethics and compliance initiatives at Rasta Infotech." />
      <div className="bg-white text-gray-800 py-12 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto space-y-20">
        {/* Banner */}
        <div className="relative h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden shadow-md mb-10">
          <img
            src={ethicsBanner}
            alt="Ethics and compliance background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ethics & Compliance
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl">
              Upholding integrity, transparency, and accountability in all aspects
              of our operations.
            </p>
          </div>

          {/* Sticky Button - Hidden on small screens */}
          <div className="fixed top-2/3 right-2 transform -translate-y-1/2 rotate-90 origin-right z-50 hidden sm:block">
            <button
              className="bg-blue-900 text-white py-2 px-4 rounded-l-full text-sm hover:bg-blue-800 transition"
              onClick={() => setShowModal(true)}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Intro */}
        <section className="space-y-4 text-sm sm:text-base text-justify">
          <p>
            At <strong>Rasta Infotech</strong>, we are committed to conducting
            business with the highest standards of integrity, transparency, and
            accountability.
          </p>
          <p>
            We believe that ethical conduct is not just a policy—it’s a core value
            that guides how we operate and contribute to society.
          </p>
          <p>
            Through regular training, clear policies, and open communication
            channels, we empower employees to uphold our values and report
            concerns.
          </p>
          <p>
            At <strong>Rasta Infotech</strong>, ethics and compliance are not just
            checkboxes—they are the pillars of our long-term success.
          </p>
        </section>

        {/* Commitment */}
        <section className="space-y-4 text-sm sm:text-base text-justify">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700">
            Our Commitment
          </h2>
          <p>
            We believe that ethical conduct is not just a legal obligation—it’s a
            core value that defines who we are.
          </p>
          <p>
            At <strong>Rasta Infotech</strong>, we strive to create a culture
            rooted in honesty, fairness, and mutual respect.
          </p>
          <p>
            We continuously evaluate and improve our compliance framework to stay
            aligned with regulations and best practices.
          </p>
        </section>

        {/* Code of Conduct */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">
              Code of Conduct
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Our Code of Conduct outlines the principles that guide our behavior.
              It includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-justify">
              <li>Anti-corruption and bribery prevention</li>
              <li>Fair competition and antitrust compliance</li>
              <li>Data privacy and protection</li>
              <li>Workplace respect and non-discrimination</li>
              <li>Conflict of interest management</li>
              <li>Responsible use of company resources</li>
            </ul>
            <p className="mt-4 text-sm sm:text-base">
              Every team member is trained on these principles and encouraged to
              report misconduct.
            </p>
          </div>
          <img
            src={codeImage}
            alt="Code of Conduct"
            className="w-full h-64 md:h-[400px] object-cover rounded-xl shadow-md"
          />
        </section>

        {/* Ethical Decision-Making */}
        <section className="space-y-4 text-sm sm:text-base text-justify">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700">
            Ethical Decision-Making
          </h2>
          <p>
            We empower employees with tools and frameworks to make ethical
            decisions in complex situations.
          </p>
          <p>
            Ethical decision-making is a skill we foster through real-world
            scenarios and internal support.
          </p>
          <p>
            We promote a culture where doing the right thing is always the right
            choice.
          </p>
        </section>

        {/* Reporting & Accountability */}
        <section className="bg-blue-50 p-6 sm:p-10 rounded-xl shadow-md space-y-4 text-sm sm:text-base">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">
            Reporting & Accountability
          </h2>
          <p>
            We provide safe, confidential channels for reporting ethical concerns,
            including anonymous options.
          </p>
          <p>No retaliation is tolerated for those who speak up in good faith.</p>
        </section>

        {/* Continuous Improvement */}
        <section className="space-y-4 text-sm sm:text-base">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700">
            Continuous Improvement
          </h2>
          <p>Ethics and compliance require ongoing review and improvement.</p>
          <p>
            We audit, assess, and benchmark our practices to stay ahead of risks
            and maintain accountability.
          </p>
          <p>
            At <strong>Rasta Infotech</strong>, we believe that continuous
            learning is key to trust and transparency.
          </p>
        </section>

        {/* Final Statement */}
        <section className="text-center px-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-2">
            A Culture Built on Integrity
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
            At Rasta Infotech, ethics is not just a policy—it’s our promise.
            Integrity leads the way.
          </p>
        </section>

        {/* CTA */}
        <div className="px-4 sm:px-8 lg:px-20">
          <div className="bg-[#eeeeee] rounded-2xl py-10 sm:py-16 text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Partner with Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Whether you're a startup or an enterprise, Rasta Infotech supports
              your responsible growth journey.
            </p>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-500 transition w-full sm:w-auto"
            >
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Contact Modal */}
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </>
  );
};

export default EthicsCompliance;
