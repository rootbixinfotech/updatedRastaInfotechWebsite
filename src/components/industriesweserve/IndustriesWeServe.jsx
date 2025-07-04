import React from "react";
import {
  FaCar,
  FaPlaneDeparture,
  FaCloud,
  FaTruck,
  FaPhotoVideo,
  FaHeartbeat,
  FaUniversity,
  FaShoppingCart,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";

const industries = [
  { icon: <FaHeartbeat />, title: "Health Care" },
  { icon: <FaUniversity />, title: "Banking & Finance" },
  { icon: <FaShoppingCart />, title: "Retail & E-Commerce" },
  { icon: <FaBuilding />, title: "ISVs & Software Product" },
  { icon: <FaGraduationCap />, title: "Education & E-Learning" },
  { icon: <FaCar />, title: "Automotive" },
  { icon: <FaPlaneDeparture />, title: "Travel" },
  { icon: <FaCloud />, title: "Fintech" },
  { icon: <FaTruck />, title: "Logistics & Transportation" },
  { icon: <FaPhotoVideo />, title: "Media & Entertainment" },
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Industries We Serve
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl p-6 w-full max-w-[220px] flex flex-col items-center text-center shadow-md transition-all duration-300 hover:shadow-xl hover:bg-red-50"
          >
            <div className="bg-white rounded-full shadow-md p-6 mb-4 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
              <div className="text-red-400 text-4xl transition-all duration-300 group-hover:text-red-500 group-hover:scale-110">
                {industry.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 transition-all duration-300 group-hover:text-red-500">
              {industry.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
