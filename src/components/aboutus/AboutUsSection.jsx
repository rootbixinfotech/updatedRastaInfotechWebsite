import React from "react";
import { FaCheck } from "react-icons/fa";
import aboutImage from "../../assets/aboutus_3.jpg";

const pointsLeft = [
  "Experts in AI, Blockchain & Data Science",
  "Tailored IT solutions for your needs",
  "24/7 support with fast response",
  "Strong focus on security & privacy",
];

const pointsRight = [
  "Agile process with fast delivery",
  "Clear communication & support",
  "Affordable without cutting quality",
  "Proven success across industries",
];

const AboutUsSection = () => {
  return (
    <>
      <section className="py-20 px-6 bg-white text-gray-800" id="about">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src={aboutImage}
              alt="About Us"
              className="rounded-lg shadow-md w-full object-cover h-[600px]"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">
              ABOUT US
              <div className="w-20 h-1 bg-blue-500 mt-1"></div>
            </h2>
            <p className="text-gray-600 text-justify">
              At <span className="text-black font-semibold">Rasta InfoTech</span>,
              we are passionate about transforming ideas into innovative
              technology solutions. Founded with a vision to empower businesses
              through digital excellence,{" "}
              <span className="text-black font-semibold">Rasta InfoTech</span>{" "}
              offers a full spectrum of IT services, including{" "}
              <span className="text-black font-semibold">
                {" "}
                custom software development, blockchain solutions, AI and data
                science projects.
              </span>
            </p>
            <p className="text-gray-600 text-justify">
              What sets{" "}
              <span className="text-black font-semibold">Rasta InfoTech</span>{" "}
              apart is our unwavering commitment to quality, timely delivery, and
              long-term client partnerships. We don’t just build software — we
              build trust and future-ready businesses.
            </p>

            <h3 className="text-2xl font-semibold mt-6">Why Choose Us?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <ul className="space-y-2">
                {pointsLeft.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-blue-600"
                  >
                    <FaCheck className="text-blue-500" /> {point}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {pointsRight.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-blue-600"
                  >
                    <FaCheck className="text-blue-500" /> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
