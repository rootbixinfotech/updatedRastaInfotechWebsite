import { useState } from "react";
import { FaHeadset, FaChartLine, FaShieldAlt, FaCogs } from "react-icons/fa";
import ContactModal from "../ContactModal";

const features = [
  {
    id: 1,
    icon: <FaHeadset size={40} />,
    title: "24/7 Managed IT Support",
    description:
      "Our dedicated support team is available round-the-clock to ensure seamless IT operations, resolve issues quickly, and maintain system uptime for your business.",
  },
  {
    id: 2,
    icon: <FaChartLine size={40} />,
    title: "Business Intelligence and Automation",
    description:
      "Unlock the power of your data with our BI solutions and streamline workflows through smart automation tools tailored to accelerate your business performance.",
  },
  {
    id: 3,
    icon: <FaShieldAlt size={40} />,
    title: "Disaster Recovery & Business Continuity",
    description:
      "Protect your data and ensure uninterrupted business operations with our comprehensive disaster recovery planning and failover solutions.",
  },
  {
    id: 4,
    icon: <FaCogs size={40} />,
    title: "Software Deployment & Integration",
    description:
      "We offer smooth deployment and integration of enterprise software, ensuring compatibility, scalability, and minimal downtime during implementation.",
  },
];

const FeaturesSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 bg-gray-100 text-center" id="features">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2">
        FEATURES
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full flex items-center justify-center shadow-lg mb-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
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
      
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default FeaturesSection;
