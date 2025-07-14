import React from "react";

const features = [
  {
    title: "Yard Planning & Scheduling",
    content:
      "SAP YL enables efficient planning and scheduling of yard activities, including assigning parking spaces, dock doors, and equipment to streamline operations.",
  },
  {
    title: "Gate & Yard Check-In / Out",
    content:
      "Facilitates automated check-in and check-out of trucks, trailers, and other assets. It registers, validates, and documents all inbound and outbound movements.",
  },
  {
    title: "Yard Execution & Operations",
    content:
      "Provides real-time visibility and control of goods movement within the yard. Coordinates with drivers and yard staff for seamless operations.",
  },
  {
    title: "Yard Resource Optimization",
    content:
      "Maximizes the use of yard assets by allocating resources based on constraints, equipment availability, and operational priorities.",
  },
  {
    title: "Reporting & Analytics",
    content:
      "Offers advanced reporting to monitor yard KPIs and performance, helping identify bottlenecks and improve efficiency.",
  },
  {
    title: "Integration with External Systems",
    content:
      "Seamlessly connects with transportation management, warehouse systems, and ERP platforms for end-to-end process visibility.",
  },
  {
    title: "Mobile Support",
    content:
      "Supports real-time mobile access so yard staff can view, update, and manage tasks on the go with handheld devices.",
  },
];

const benefits = [
  {
    title: "Enhanced Visibility",
    content:
      "SAP YL delivers real-time tracking of yard operations, including deliveries and assets. This enables smooth workflows and reduced disruptions.",
  },
  {
    title: "Improved Efficiency",
    content:
      "Automates manual tasks to reduce delays, shorten truck turnaround times, and boost yard throughput performance.",
  },
  {
    title: "Greater Control",
    content:
      "Centralized control panel lets businesses plan, execute, and monitor every yard activity from a single platform.",
  },
  {
    title: "Compliance and Safety",
    content:
      "Ensures regulatory compliance through documentation and logs, while improving vehicle and personnel safety within the yard.",
  },
];

const SapYl = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            SAP Yard Logistics (SAP YL)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Optimize your yard operations to streamline your supply chain. SAP
            Yard Logistics provides centralized, real-time yard visibility and
            control, reducing delays, enhancing efficiency, and boosting customer
            satisfaction.
          </p>
        </div>

        {/* Intro */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is SAP YL?</h2>
          <p className="text-gray-700 leading-relaxed">
            SAP Yard Logistics (SAP YL) is part of the SAP Digital Supply Chain
            suite, designed to manage all yard-related activities such as check-in,
            parking, staging, dock assignment, and check-out. It helps businesses
            enhance visibility, improve logistics efficiency, and gain control over
            yard processes—leading to reduced costs and higher satisfaction across
            the supply chain.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Features of SAP Yard Logistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Benefits of SAP Yard Logistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SapYl;
