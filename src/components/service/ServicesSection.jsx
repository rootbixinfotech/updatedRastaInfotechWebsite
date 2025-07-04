import React from "react";
import {
  FaWordpress,
  FaCartPlus,
  FaCloudDownloadAlt,
  FaLanguage,
  FaPlane,
  FaChartPie,
} from "react-icons/fa";


const services = [
  {
    id: 1,
    icon: <FaWordpress size={40} />,
    title: "SAP CONSULTING SERVICES",
    description:
      "Optimize your business operations with our SAP consulting services, offering end-to-end implementation, customization, and support for enterprise-grade solutions",
  },
  {
    id: 2,
    icon: <FaCartPlus size={40} />,
    title: "BLOCKCHAIN",
    description:
      "Leverage secure, decentralized applications and smart contracts with our blockchain development services, tailored for supply chain, finance, and more",
  },
  {
    id: 3,
    icon: <FaCloudDownloadAlt size={40} />,
    title: "CYBER SECURITY",
    description:
      "Protect your digital assets with our advanced cybersecurity services, including threat detection, penetration testing, and risk management",
  },
  {
    id: 4,
    icon: <FaLanguage size={40} />,
    title: "DEVOPS AUTOMATION SERVICES",
    description:
      "Accelerate your software delivery pipeline with our DevOps automation, covering CI/CD, infrastructure as code, and monitoring solutions",
  },
  {
    id: 5,
    icon: <FaPlane size={40} />,
    title: "INFRASTRUCTURE SERVICES",
    description:
      "Ensure scalability and reliability with our IT infrastructure services, including network setup, data center management, and cloud migration",
  },
  {
    id: 6,
    icon: <FaChartPie size={40} />,
    title: "CLOUD",
    description:
      "Harness the power of the cloud with our cloud consulting, migration, and managed services across AWS, Azure, and Google Cloud",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white py-20 px-4" id="services">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">OUR SERVICES</h2>
        <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
        <p className="text-lg">Powering Digital Solutions of FUTURE, TODAY!.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="text-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
