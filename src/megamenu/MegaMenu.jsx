import React from "react";
import { Industries } from "../data/Data";
import { ServiceList } from "../data/Data";
import { useNavigate } from "react-router-dom";

const MegaMenu = ({ type, isMobile }) => {
  const navigate = useNavigate();
  const dataList = type === "services" ? ServiceList : Industries;

  const serviceRoutes = {
    "SAP CONSULTING SERVICES": "/servicespage/sap-consulting",
    "BLOCKCHAIN": "/all-services-page/blockchain",
    "CYBER SECURITY": "/all-services-page/cyber-security",
    "DEVOPS AUTOMATION SERVICES": "/all-services-page/devops",
    "DIGITAL MARKETING": "/all-services-page/digital-marketing",
    "GOVERNANCE, RISK & COMPLIANCE": "/all-services-page/risk-compliance",
    "MICROSOFT COE": "/all-services-page/microsoft-coe",
    "AGILE IT OPERATIONS": "/all-services-page/agileitopscontent",
    "PLATFORMS & PROTOCOLS - XAAP": "/all-services-page/xaap-content",
    "CLOUD": "/all-services-page/cloud-content",
    "AZURE SERVICES": "/all-services-page/azure-services-page",
    "APPLICATION SERVICES": "/all-services-page/application-services-content",
    "COGNITIVE": "/all-services-page/cognitive-page-content",
     "AI" : "/all-services-page/AI-page-content",
     "ENTERPRISE AUTOMATION" : "/all-services-page/enterprise-automation-content",
     "PRODUCT-ENGINEERING-SERVICES":"/all-services-page/product-engineering-content",
     "SALESFORCE CONSULTING AND SERVICES COE" : "/all-services-page/salesforce-page-content",
     "AWS SERVICES":"/all-services-page/aws-services-page-content",
     "VMWARE TANZU SERVICES":"/all-services-page/tanzu-services-content",
     "INFRASTRUCTURE SERVICES":"/all-services-page/infrastructure-services-content"
     


    // Add more special cases here if needed
  };

  const handleServiceClick = (title) => {
    const route =
      serviceRoutes[title] ||
      `/servicespage/${title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")}`;
    navigate(route);
  };

  const handleIndustryClick = (title) => {
    const route = `/industries/${title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`;
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
            {dataList.map((item, index) => (
              <li
                key={index}
                className={`flex items-start space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded-md transition-colors duration-300`}
                onClick={() =>
                  type === "services"
                    ? handleServiceClick(item.title)
                    : handleIndustryClick(item.title)
                }
              >
                <span>🏭</span>
                <div>
                  <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-xs line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
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

            {/* <li
              className="flex items-start space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded-md transition-colors duration-300"
              onClick={() => navigate("/careers")}
            >
              <span>💼</span>
              <div>
                <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
                  Careers
                </p>
                <p className="text-gray-500 text-xs">Join our growing team</p>
              </div>
            </li> */}
            
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
