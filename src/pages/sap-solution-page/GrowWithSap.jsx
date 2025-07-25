import React from "react";

const GrowWithSap = () => {
  const benefits = [
    {
      title: "Business Agility",
      content:
        "Using an agile innovation platform that enables developers to rapidly build, integrate and collaborate, allowing you to adapt swiftly to changing market demands."
    },
    {
      title: "Scalability",
      content:
        "Thanks to an ERP cloud solution that supports current industry standards, innovation, and continued business growth."
    },
    {
      title: "Simplicity",
      content:
        "With support for best practices and services that help you get up and running quickly."
    },
    {
      title: "Cost Efficiency",
      content:
        "No upfront infrastructure costs or ongoing maintenance costs; leveraging the public cloud ERP means you only pay for resources you use and take advantage of the latest technology without high capital investment costs."
    },
    {
      title: "Innovation",
      content:
        "Benefit from continuous updates and access to the latest innovations to the ERP cloud without the hassle of manual upgrades and ensure your business stays at the forefront of technological developments."
    },
    {
      title: "Accessibility",
      content:
        "The public ERP cloud gives you access to data, applications and upgrades from anywhere in the world, providing the ability for teams to collaborate globally."
    },
    {
      title: "Security",
      content:
        "Robust security from reputable public cloud providers ensures data encryption and regular security updates, safeguarding your critical business information."
    },
    {
      title: "Rapid Deployment",
      content:
        "Benefit from the ERP cloud’s pre-configured templates and automated workflows, allowing you to go live faster and achieve faster ROI."
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800 ">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">GROW with SAP</h1>

        <p className="mb-6 text-justify">
          GROW with SAP is a cloud-based ERP offering from SAP, specifically designed to help midmarket
          and fast-growing companies quickly adopt and benefit from SAP S/4HANA Cloud Public Edition.
          It’s a streamlined, cost-effective, and scalable solution tailored for businesses that want to
          modernize their operations without the complexity of traditional ERP implementations.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
          Why Start with GROW with SAP?
        </h2>
        <ul className="space-y-3 list-disc list-inside text-justify">
          <li>Manage continuous changes and regulations with ease</li>
          <li>Grow into new markets while reducing your cost base</li>
          <li>Simplify IT infrastructure with secure, cloud-based ERP and automatic upgrades</li>
          <li>Standardize your processes and reduce complex interfaces</li>
          <li>Derive trusted data with modern analytics capabilities</li>
          <li>Leverage AI technology to automate repetitive tasks</li>
        </ul>

        <p className="mt-4 italic text-justify">
          If your answer is yes to any of these questions, then the GROW with SAP offering could be the
          solution for you.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-6 mt-10">
          Maximizing Gains with GROW with SAP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-bold mb-2 text-blue-700">{item.title}</h3>
              <p className="text-justify">{item.content}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 mt-10">
          The Implementation Approach – SAP Activate Methodology
        </h2>
        <p className="mb-4 text-justify">
          At Westernacher, our goal is a holistic business transformation—not just a tech
          implementation. GROW with SAP is based on the ‘Cloud Mindset’ approach, which means adopting
          best practices over customizations. 
        </p>
        <p className="mb-4 text-justify">
          SAP Activate methodology is the recommended implementation approach. With SAP’s
          prescriptive tools, accelerators, and methodology, you get speed and quality.
        </p>
        <p className="mb-4 text-justify">
          Westernacher advocates a 'core foundation first' strategy. Focus first on core processes
          (Wave 1) to go live quickly, gain immediate value, and prepare your team for future expansion
          (Wave 2).
        </p>
      </div>
    </>
  );
};

export default GrowWithSap;
