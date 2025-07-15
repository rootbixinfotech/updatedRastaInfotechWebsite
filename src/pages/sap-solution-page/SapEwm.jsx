import React from "react";

const features = [
  {
    title: "Return Processes Optimization",
    content:
      "Returns are managed more efficiently through automated workflows, improving customer satisfaction. Return orders are recorded on time, and deliveries processed accurately.",
  },
  {
    title: "Maximum Asset Utilization",
    content:
      "Facilities including warehouses, racks, and forklifts are optimally utilized by automating warehouse movements. Bottlenecks are identified and avoided.",
  },
  {
    title: "Visibility & Transparency in Real Time",
    content:
      "Comprehensive monitoring enables visibility across all processes, with real-time stock levels and movement tracking. Reporting tools identify warehouse trends.",
  },
  {
    title: "Automated Stock Transfers",
    content:
      "Barcodes and mobile technologies enable error-free, fast stock transfers. Reports help analyze and improve transfer efficiency.",
  },
  {
    title: "Efficient Production Supply in Real Time",
    content:
      "Automated processes ensure timely and accurate material provisioning. SAP EWM monitors material flow and prevents bottlenecks.",
  },
  {
    title: "Practical Warehouse Automation",
    content:
      "Supports automation for goods receipt, transfer, and delivery using barcodes, RFID, and mobile devices with analytics support.",
  },
  {
    title: "Reliable Cross-Docking",
    content:
      "Incoming goods are quickly and accurately forwarded to outgoing deliveries without storage, optimizing speed and reliability.",
  },
  {
    title: "Smooth Yard Management",
    content:
      "Manages truck entries/exits, gates, and parking efficiently. SAP’s intelligent system prevents congestion using IoT solutions.",
  },
  {
    title: "Clear Contract Logistics",
    content:
      "Enhances collaboration with logistics service providers. Integrates supplier data and supports freight/parcel partnerships.",
  },
  {
    title: "Shuttles and Control Conveyors",
    content:
      "Monitors and optimizes shuttle/conveyor flow. Tracks performance and manages maintenance for equipment efficiency.",
  },
  {
    title: "Integration with Transportation Management",
    content:
      "Combines transport, yard, and warehouse management to streamline and optimize entire supply chain operations.",
  },
  {
    title: "Labor Management in the Warehouse",
    content:
      "Tracks labor activities, schedules, and performance in real-time. Improves workforce utilization and lowers operational costs.",
  },
];

const SapEwm = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            SAP Extended Warehouse Management (SAP EWM)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
            SAP EWM enables you to monitor warehouse operations in real time,
            optimize resources, and integrate with the broader supply chain. Get
            full transparency and performance control from goods receipt to
            shipping.
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is SAP EWM?
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            SAP EWM (Extended Warehouse Management) is a leading system that
            integrates warehouse execution into the supply chain to provide
            transparency, flexibility, and real-time operations. It helps manage
            inventory, automate operations, and optimize resources across the
            warehouse floor—from goods receipt to storage, picking, packing, and
            shipping.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            SAP EWM on the SAP S/4HANA platform empowers companies to achieve
            high productivity through intelligent automation and optimization.
            Techniques like interleaving tasks and space/equipment control
            enhance efficiency and throughput.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Key Features of SAP EWM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {index + 1}. {feature.title}
                </h3>
                <p className="text-gray-700 text-justify">{feature.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SapEwm;
