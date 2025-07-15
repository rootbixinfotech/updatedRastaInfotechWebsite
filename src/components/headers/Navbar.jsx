import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import rastainfotech_black from "../../assets/rastainfotech_black.png";
import MegaMenu from "../../megamenu/MegaMenu";
import { ServiceList, Industries } from "../../data/Data";
import { getServicePath, getIndustryPath } from "../../utils/pathUtils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null); // null = main menu

  // Restore original nav items and sub-items
  const navItems = [
    { label: "ABOUT", key: "ABOUT", hasSub: false },
    { label: "SERVICES", key: "SERVICES", hasSub: true },
    { label: "TRAININGS", key: "TRAININGS", hasSub: false },
    // { label: "CAREER", key: "CAREER", hasSub: false },
    { label: "INDUSTRIES", key: "INDUSTRIES", hasSub: true },
    { label: "CONTACT", key: "CONTACT", hasSub: false },
    { label: "RESPONSIBILITY", key: "RESPONSIBILITY", hasSub: true },
    { label: "PEOPLE", key: "PEOPLE", hasSub: true },
    { label: "CSR", key: "CSR", hasSub: true },
  ];

  const routeMap = {
    ABOUT: "/about",
    SERVICES: "/services",
    TRAININGS: "/training",
    // CAREER: "/careers",
    INDUSTRIES: "/industries",
    CONTACT: "/contact",
    RESPONSIBILITY: "/responsibility",
    PEOPLE: "/people",
    CSR: "/csr"
  };

  const responsibilityItems = [
    {
      label: "Sustainable corporate governance",
      path: "/responsibility/sustainable-corporate",
    },
    {
      label: "Environment & Climate",
      path: "/responsibility/environment-climate",
    },
    { label: "Ethics & Compliance", path: "/responsibility/ethics-compliance" },
    {
      label: "Social & People Impact",
      path: "/responsibility/social-people-impact",
    },
  ];

  const people = [
    { label: "Join", path: "/people/people-join" },
    { label: "View", path: "/people/people-view" },
    { label: "Values", path: "/people/people-values" },
  ];


  // Replace generatePath with two functions:
  // Remove local generateServicePath and generateIndustryPath

const getSubItems = (section) => {
  if (section === "SERVICES")
    return ServiceList.map((s) => ({
      label: s.title,
      key: getServicePath(s.title),
    }));
  if (section === "INDUSTRIES")
    return Industries.map((i) => ({
      label: i.title,
      key: getIndustryPath(i.title),
    }));
  if (section === "RESPONSIBILITY")
    return responsibilityItems.map((item) => ({
      label: item.label,
      key: item.path,
    }));
  if (section === "PEOPLE")
    return people.map((item) => ({
      label: item.label,
      key: item.path,
    }));
  return [];
};

  // Mobile menu rendering
  const renderMobileMenu = () => {
    if (!activeMobileSection) {
      // Main menu
      return (
        <ul className="pt-2 ">
          {navItems.map((item) => (
            <li key={item.key}>
              {item.hasSub ? (
                <button
                  className="w-full flex items-center justify-between px-4 py-4 text-lg font-medium border-b transition-colors text-black hover:bg-gray-100"
                  style={{
                    color: "black",
                    display: "flex",
                    width: "100%",
                    margin: "0",
                    fontSize: "18px",
                  }}
                  onClick={() =>
                    setActiveMobileSection(
                      activeMobileSection === item.key ? null : item.key
                    )
                  }
                >
                  <span>
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </span>
                  <FaChevronRight />
                </button>
              ) : (
                <Link
                  to={routeMap[item.key]}
                  className="w-full flex items-center justify-between px-4 py-4 text-lg font-medium border-b text-black hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <span>
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </span>
                  <FaChevronRight />
                </Link>
              )}
            </li>
          ))}
        </ul>
      );
    } else {
      // Sub-menu for active section
      const subItems = getSubItems(activeMobileSection);
      const isScrollable =
        activeMobileSection === "SERVICES" ||
        activeMobileSection === "INDUSTRIES";
      return (
        <div>
          <div
            className="flex items-center px-4 py-2 border-b cursor-pointer"
            onClick={() => setActiveMobileSection(null)}
          >
            <FaChevronLeft size={22} className="mr-2 text-black" />
            <span className="text-lg font-bold">
              {navItems
                .find((i) => i.key === activeMobileSection)
                ?.label.charAt(0) +
                navItems
                  .find((i) => i.key === activeMobileSection)
                  ?.label.slice(1)
                  .toLowerCase()}
            </span>
          </div>
          <ul
            className={`pt-2 ${
              isScrollable ? "max-h-[60vh] overflow-y-auto" : ""
            }`}
          >
            {subItems.map((sub) => (
              <li key={sub.key}>
                <Link
                  to={sub.key}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-base text-black border-b hover:bg-gray-100 cursor-pointer"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 p-0">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          {/* Logo on the left (always visible) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo_white" className="h-10 w-auto" />
            </Link>
            <Link to="/" className="flex items-center">
              <img
                src={rastainfotech_black}
                alt="logo_white"
                className="h-18 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 relative items-center p-8">
            {navItems.map((item) =>
              item.key === "INDUSTRIES" || item.key === "SERVICES" ? (
                <div key={item.key} className="relative group">
                  <span className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
                    {item.label}
                  </span>
                  <MegaMenu type={item.key.toLowerCase()} />
                </div>
              ) : item.key === "RESPONSIBILITY" ? (
                <div key={item.key} className="relative group">
                  <span className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
                    {item.label}
                  </span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-70 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="py-2 px-4 space-y-2 text-gray-700">
                      {responsibilityItems.map((subItem, index) => (
                        <li key={index}>
                          <Link
                            to={subItem.path}
                            className="hover:text-blue-600 cursor-pointer"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : item.key === "PEOPLE" ? (
                <div key={item.key} className="relative group">
                  <span className="text-gray-700 hover:text-blue-600 transition cursor-pointer">
                    {item.label}
                  </span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-50 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="py-3 px-5 space-y-2 text-gray-700">
                      {people.map((subItem, index) => (
                        <li key={index}>
                          <Link
                            to={subItem.path}
                            className="hover:text-blue-600 cursor-pointer"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.key}
                  to={routeMap[item.key]}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle (HiMenu on right) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none w-100"
              style={{ color: "#374151", width: "28px" }}
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          {/* Mobile menu header with only close button */}
          <div className="flex items-center justify-end px-4 py-2 border-b">
            <button onClick={() => setIsOpen(false)} className="text-black">
              <HiX size={28} />
            </button>
          </div>
          {renderMobileMenu()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
