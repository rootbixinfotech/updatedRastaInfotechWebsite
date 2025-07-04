import React from "react";
import ServiceSidebar from "../../components/ServiceSidebar";
import services from "../../components/services";
import { Outlet, useLocation } from "react-router-dom";
import {
  sapConsultingBanner,
  sapImplementationBanner,
  sapManagedBanner,
  sapEnterpriseBanner,
  sapDataMigrationBanner,
  sapStaffingBanner,
} from "./serviceBanners";

const bannerMap = {
  "sap-consulting": sapConsultingBanner,
  "sap-implementation": sapImplementationBanner,
  "sap-managed": sapManagedBanner,
  "sap-enterprise": sapEnterpriseBanner,
  "sap-data-migration": sapDataMigrationBanner,
  "sap-staffing": sapStaffingBanner,
};

const ServiceBanner = ({ image, title }) => (
  <div
    style={{
      backgroundImage: `url(${image})`,
      height: "480px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      width: "100%",
    }}
    className="flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-opacity-60"></div>
    <div className="relative flex items-center justify-center h-full w-full ">
      <h1 className="text-white text-4xl font-bold text-center">{title}</h1>
    </div>
  </div>
);

const ServicesPageLayout = () => {
  const location = useLocation();
  // Extract the service key from the path
  const match = location.pathname.match(/servicespage\/([^/]+)/);
  const serviceKey = match ? match[1] : null;
  const bannerData = bannerMap[serviceKey];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Dynamic Banner */}
      {bannerData && <ServiceBanner {...bannerData} />}
      {/* Sidebar and Content below banner */}
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto mt-8">
        <aside className="w-full md:w-[30%] px-2 md:px-0">
          <ServiceSidebar services={services} />
        </aside>
        <main className="w-full md-[70%] px-2 md:px-8 mb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ServicesPageLayout;