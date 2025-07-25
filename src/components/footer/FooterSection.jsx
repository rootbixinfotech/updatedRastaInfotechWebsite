import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import logo_white from "../../assets/logo_white.png";
import rastainfotech_white from "../../assets/rastainfotech_white.png";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blogs" },
  // { name: "FAQ" },
  // { name: "Faculty" },
];

const FooterSection = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0B121B] text-white py-12 px-6 md:px-16">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 md:gap-20 lg:gap-28">
        {/* Logo + Description + Social Icons */}
        <div className="space-y-4">
          <div className="flex items-center gap-1.5">
            <Link to="/" className="flex items-center">
              <img src={logo_white} alt="logo_white" className="h-10 w-auto" />
            </Link>
            <Link to="/" className="flex items-center">
              <img
                src={rastainfotech_white}
                alt="rasta_infotech"
                className="h-5 w-auto"
              />
            </Link>
          </div>
          <p className="text-sm text-gray-300 text-justify">
            Your trusted partner on the Road to Success! We provide end-to-end
            IT solutions, from SAP and digital marketing to AI, cybersecurity,
            and beyond, fueling innovation and growth for your business.
          </p>
          <div className="flex gap-4 text-xl mt-4">
            <FaFacebookF />
            <FaXTwitter />
            <a
              href="https://www.linkedin.com/company/rastainfotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-900 transition"
            >
              <FaLinkedinIn />
            </a>
            <FaYoutube />
            <a
              href="https://www.instagram.com/rasta_infotech/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-900 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Useful Links
          </h3>
          {links.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className="flex items-center mb-2 text-gray-300 hover:text-white transition"
            >
              <IoIosArrowForward className="mr-2" /> {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <div className="flex items-start gap-2 text-gray-300 text-sm mb-3">
            <HiOutlineLocationMarker className="mt-1 text-justify " />
            <span>
              Office Address: 23 2nd Cross, Near Malnad, Coaching Centr MHR
              Layout, Bangalore North, Karnataka, India, 560090
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-gray-300">
            <HiOutlinePhone /> +91-97425-07066
          </div>
          <div className="flex items-center gap-2 mb-4 text-gray-300">
            <HiOutlineMail /> info@rastainfotech.com
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          Copyright 2025, <span className="text-green-500">Rasta Infotech</span>
          . All Rights Reserved.
        </p>
      </div>

      {/* Bottom Links */}
      <div className="mt-4 text-sm flex flex-wrap justify-center gap-6 text-gray-300">
        <span
          onClick={() => navigate("/terms-conditions")}
          className="cursor-pointer hover:text-white"
        >
          Terms & Condition
        </span>
        <span
          onClick={() => navigate("/privacy-policy")}
          className="cursor-pointer hover:text-white"
        >
          Privacy Policy
        </span>
        <span
          onClick={() => navigate("/disclaimer")}
          className="cursor-pointer hover:text-white"
        >
          Disclaimer
        </span>
        <span
          onClick={() => navigate("/cookies")}
          className="cursor-pointer hover:text-white"
        >
          Cookies Setting
        </span>
        <a
          href="https://www.rastainfotech.com/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-white"
        >
          Site Map
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
