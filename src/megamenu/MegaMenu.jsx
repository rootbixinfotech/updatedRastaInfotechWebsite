import React from "react";
import { Industries } from "../data/Data";
import { ServiceList } from "../data/Data";
import { useNavigate } from "react-router-dom";
import { getServicePath, getIndustryPath } from "../utils/pathUtils";
import * as FaIcons from "react-icons/fa";

const MegaMenu = ({ type, isMobile }) => {
  const navigate = useNavigate();
  const dataList = type === "services" ? ServiceList : Industries;

  const handleServiceClick = (title) => {
    const route = getServicePath(title);
    navigate(route);
  };

  const handleIndustryClick = (title) => {
    const route = getIndustryPath(title);
    navigate(route);
  };

  return (
    <div>
      <div
        className={`${
          isMobile
            ? "relative w-full"
            : "absolute left-1/2 top-full transform -translate-x-1/2"
        } opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-500 ease-in-out bg-white text-gray-800 p-4 md:p-8 rounded-xl shadow-lg z-50 mt-4 ${
          isMobile ? "w-full" : "w-[900px]"
        } grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8`}
      >
        {/* Column 1 - Main Content */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold text-blue-600 mb-4">
            {type === "services" ? "Our Services" : "Industries We Serve"}
          </h4>
          <ul className="space-y-4 text-sm max-h-[320px] overflow-y-auto pr-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dataList.map((item, index) => {
              const IconComponent = FaIcons[item.icon] || FaIcons.FaRegCircle;
              return (
                <li
                  key={index}
                  className={`flex items-start space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded-md transition-colors duration-300`}
                  onClick={() =>
                    type === "services"
                      ? handleServiceClick(item.title)
                      : handleIndustryClick(item.title)
                  }
                >
                  <span className="text-xl mt-1"><IconComponent /></span>
                  <div>
                    <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-xs line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-blue-600 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li
              className="flex items-start space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded-md transition-colors duration-300"
              onClick={() => navigate("/about")}
            >
              <span>ℹ️</span>
              <div>
                <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
                  About Us
                </p>
                <p className="text-gray-500 text-xs">
                  Learn more about our company
                </p>
              </div>
            </li>

            <li
              className="flex items-start space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded-md transition-colors duration-300"
              onClick={() => navigate("/contact")}
            >
              <span>📞</span>
              <div>
                <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
                  Contact
                </p>
                <p className="text-gray-500 text-xs">Get in touch with us</p>
              </div>
            </li>

            <li
              className="flex items-start space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded-md transition-colors duration-300"
              onClick={() => navigate("/documents")}
            >
              <span>💼</span>
              <div>
                <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
                  Documents
                </p>
                <p className="text-gray-500 text-xs">See our Documentation</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
