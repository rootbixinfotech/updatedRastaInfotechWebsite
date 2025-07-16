import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const ServiceSidebar = ({ services, sapSolutions }) => {
  return (
    <aside className="w-full max-w-xs p-4 bg-white shadow-md rounded-xl mt-23">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Our Services
      </h2>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index}>
            <NavLink
              to={service.link}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg border 
                 transition-all duration-200 group 
                 ${
                   isActive
                     ? "bg-blue-100 border-blue-500 text-blue-700 font-semibold"
                     : "bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                 }`
              }
            >
              <span className="flex items-center gap-2">
                <FaAngleRight className="text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                {service.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      {sapSolutions && sapSolutions.length > 0 && (
        <>
          {/* Add spacing between sections */}
          <div className="my-8" />
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            SAP Solutions
          </h2>
          {/* Make SAP Solutions scrollable with increased height */}
          <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {sapSolutions.map((solution, idx) => (
              <li key={idx}>
                <NavLink
                  to={solution.link}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 group ${
                      isActive
                        ? "bg-blue-100 border-blue-500 text-blue-700 font-semibold"
                        : "bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                    }`
                  }
                >
                  <FaAngleRight className="text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                  {solution.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
};

export default ServiceSidebar;
