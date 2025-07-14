import { useState, useEffect } from "react";
import tainingimg from "../assets/trainings_img1.jpg";
import tainingimg2 from "../assets/trainings_img2.jpg";
import img1 from "../assets/student-6.jpeg";
import img2 from "../assets/student_5.jpeg";
import img3 from "../assets/student_4.jpeg";
import img4 from "../assets/student_3.jpeg";
import img5 from "../assets/student_2.jpeg";
import img6 from "../assets/student_1.jpeg";

const studentImages = [img1, img2, img3, img4, img5, img6];

import { FaThLarge } from "react-icons/fa";

// Add imports for company logos
import relianceLogo from "../assets/relianceimg.png";
import tcsLogo from "../assets/tcsimg.png";
import techmahindraLogo from "../assets/techmahindraimg.png";
import wiproLogo from "../assets/wiproimg.svg";
import yesSecuritiesLogo from "../assets/yes-securitiesimg.png";
import himalayaLogo from "../assets/himalayaimg.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const tabs = ["Projects", "Support", "Developments"];

const carouselImages = [
  "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
  "https://images.pexels.com/photos/859264/pexels-photo-859264.jpeg",
  "https://images.pexels.com/photos/68761/pexels-photo-68761.jpeg",
];

const Training = () => {
  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Developments");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-gray-50 py-16 relative pt-10 ">
        <div className="max-w-[1500px] mx-auto flex flex-col justify-between lg:flex-row items-start gap-10 mt-24">
          {/* Left Content */}
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Training: <br />
              <span className="text-blue-900">
                We Deliver Quality Every Step
                <br /> of the Way
              </span>
            </h1>
            <p className="text-gray-600 mt-6 text-lg max-w-xl">
              Enterprise Consulting Company focused on SAP Consulting, Corporate
              IT Training, Recruitment, Talent Management, and Product
              Development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
              >
                Book Call
              </a>
            </div>
          </div>

          {/* Right Side Carousel Slider */}
          <div className="relative flex w-[45%] items-center justify-center">
            <img
              src={carouselImages[current]}
              alt="Teamwork"
              className="rounded-xl shadow-xl w-full sm:h-100 object-cover"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    current === idx ? "bg-orange-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="absolute top-4 left-4 w-full h-full bg-orange-100 -z-10 transform -rotate-2 rounded-xl" />
          </div>
        </div>

        {/* Marquee Section */}
        <div className="w-full py-16 bg-white flex flex-col items-center">
          <div className="text-center mb-2 text-lg md:text-xl text-[#181848]">
            Our alumni's are working in{" "}
            <span className="text-blue-700 font-bold">100+</span> best
            organisations
          </div>
          <div className="text-center font-bold text-2xl md:text-3xl mb-6 text-[#181848]">
            Top Organisations
          </div>
          <div className="overflow-hidden w-full">
            <div className="marquee flex items-center gap-20 w-max animate-marquee px-4">
              <img
                src={relianceLogo}
                alt="Reliance"
                className="h-12 w-auto object-contain"
              />
              <img
                src={tcsLogo}
                alt="TCS"
                className="h-12 w-auto object-contain"
              />
              <img
                src={techmahindraLogo}
                alt="Tech Mahindra"
                className="h-12 w-auto object-contain"
              />
              <img
                src={wiproLogo}
                alt="Wipro"
                className="h-12 w-auto object-contain"
              />
              <img
                src={yesSecuritiesLogo}
                alt="Yes Securities"
                className="h-16 w-auto object-contain"
              />
              <img
                src={himalayaLogo}
                alt="Himalaya"
                className="h-12 w-auto object-contain"
              />
              {/* Repeat for smooth loop */}
              <img
                src={relianceLogo}
                alt="Reliance"
                className="h-12 w-auto object-contain"
              />
              <img
                src={tcsLogo}
                alt="TCS"
                className="h-12 w-auto object-contain"
              />
              <img
                src={techmahindraLogo}
                alt="Tech Mahindra"
                className="h-12 w-auto object-contain"
              />
              <img
                src={wiproLogo}
                alt="Wipro"
                className="h-12 w-auto object-contain"
              />
              <img
                src={yesSecuritiesLogo}
                alt="Yes Securities"
                className="h-16 w-auto object-contain"
              />
              <img
                src={himalayaLogo}
                alt="Himalaya"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
        {/* End Marquee Section */}

        {/* bleow banner section has image and content */}

        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-10  p-25">
          {/* Left Image Section */}
          <div className="lg:w-7/12 w-full flex items-center justify-center">
            <img
              src={tainingimg}
              alt="Consulting Motivation"
              className="w-full rounded-xl shadow-xl max-h-[400px] object-cover"
            />
          </div>

          {/* Right Static Content */}
          <div className="lg:w-5/12 w-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-snug">
              Consulting Services that <br /> Suits Your Needs
            </h2>

            <div className="space-y-8 transition-all duration-600 ease-in-out">
              {/* Accordion Item 1 */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center font-bold text-lg mt-1 transition-all duration-300 ${
                    openIndex === 0
                      ? "bg-[#00C18D] text-white"
                      : "border-2 border-gray-600 text-gray-800"
                  }`}
                >
                  1
                </div>
                <div className="flex-1">
                  <button
                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                    className="text-left "
                  >
                    <div
                      className={`text-2xl font-bold mb-1 transition-colors duration-600 ${
                        openIndex === 0 ? "text-[#00C18D]" : "text-gray-900"
                      }`}
                    >
                      Large Experience in ERP Projects
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-600 ease-in-out ${
                      openIndex === 0
                        ? "max-h-40 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-gray-600 text-base leading-relaxed">
                      The Rasta team has a high level of training and extensive
                      experience in consulting and development.
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center font-bold text-lg mt-1 transition-all duration-300 ${
                    openIndex === 1
                      ? "bg-[#00C18D] text-white"
                      : "border-2 border-gray-600 text-gray-800"
                  }`}
                >
                  2
                </div>
                <div className="flex-1">
                  <button
                    onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                    className="text-left"
                  >
                    <div
                      className={`text-2xl font-bold mb-1 transition-colors duration-600 ${
                        openIndex === 1 ? "text-[#00C18D]" : "text-gray-900"
                      }`}
                    >
                      Understanding Customer Requirements
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-600 ease-in-out ${
                      openIndex === 1
                        ? "max-h-40 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-gray-600 text-base leading-relaxed">
                      We prioritize listening to our clients, ensuring our
                      solutions align with their exact business goals and
                      technical needs.
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center font-bold text-lg mt-1 transition-all duration-300 ${
                    openIndex === 2
                      ? "bg-[#00C18D] text-white"
                      : "border-2 border-gray-600 text-gray-800"
                  }`}
                >
                  3
                </div>
                <div className="flex-1">
                  <button
                    onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                    className="text-left"
                  >
                    <div
                      className={`text-2xl font-bold mb-1 transition-colors duration-600 ${
                        openIndex === 2 ? "text-[#00C18D]" : "text-gray-900"
                      }`}
                    >
                      Best Practices
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-600 ease-in-out ${
                      openIndex === 2
                        ? "max-h-40 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-gray-600 text-base leading-relaxed">
                      We implement proven industry practices and frameworks to
                      maximize project success and efficiency.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}

        <section className="bg-white py-16">
          <div className="max-w-[1580px] mx-auto flex flex-col lg:flex-row gap-10 px-6">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              {/* Toggle Tabs */}
              <div className="flex gap-6 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex items-center gap-2 text-2xl font-bold text-black transition-all duration-600"
                  >
                    <span className="flex items-center gap-2">
                      {activeTab === tab && (
                        <FaThLarge className="text-green-500" />
                      )}
                      <span
                        className={
                          activeTab === tab ? "text-green-500" : "text-black"
                        }
                      >
                        {tab}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "Developments" && (
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Developments & Innovation
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Development is where ideas come to life. Whether it's coding
                    a new feature, optimizing a system, or exploring emerging
                    technologies, our development teams are at the forefront of
                    innovation. We focus on building scalable, secure, and
                    user-friendly solutions that meet real-world needs.
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Through continuous learning and collaboration, we encourage
                    innovation and excellence in every project. Our developers
                    are equipped with modern tools, agile methodologies, and a
                    mindset geared toward solving complex challenges.
                  </p>

                  <strong className="text-gray-800 block mb-2">
                    Key Learning Areas:
                  </strong>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Software Development Lifecycle (SDLC)</li>
                    <li>Agile and Scrum methodologies</li>
                    <li>Version control systems (Git, GitHub)</li>
                    <li>Continuous Integration and Deployment (CI/CD)</li>
                    <li>
                      Programming languages and frameworks used at Rasta
                      Infotech
                    </li>
                    <li>Best practices for clean code and documentation</li>
                    <li>
                      Exploring emerging technologies like AI, IoT, and cloud
                      computing
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "Projects" && (
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Project Services
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Projects are the foundation of our work at{" "}
                    <strong>Rasta Infotech.</strong>
                    Each project is a focused initiative designed to deliver
                    value through technology, innovation, and collaboration.
                    From software development to digital transformation, our
                    teams work together to bring ideas to life with precision
                    and purpose.
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Whether you're managing a client-facing solution or
                    contributing to internal innovation, understanding our
                    project framework is key to your success.
                  </p>

                  <strong className="text-gray-800 block mb-2">
                    What You’ll Learn:
                  </strong>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>
                      Project lifecycle and delivery models (Agile, Scrum,
                      Waterfall)
                    </li>
                    <li>Roles and responsibilities within a project team</li>
                    <li>
                      Tools for project tracking and collaboration (e.g., Jira,
                      Trello)
                    </li>
                    <li>Effective communication and documentation practices</li>
                    <li>Risk management and quality assurance</li>
                    <li>Client interaction and stakeholder engagement</li>
                  </ul>
                </div>
              )}

              {activeTab === "Support" && (
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Support Services
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We provide comprehensive support across technical,
                    functional, and operational areas. Whether it's resolving a
                    system issue, guiding a client through a process, or
                    maintaining backend stability, our support teams are
                    equipped to handle it all with professionalism and care.
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Our goal is to deliver seamless experiences and build
                    long-term trust through consistent and high-quality support.
                  </p>

                  <strong className="text-gray-800 block mb-2">
                    Training Focus:
                  </strong>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>
                      Understanding types of support: technical, customer,
                      internal
                    </li>
                    <li>Using ticketing systems and managing escalations</li>
                    <li>
                      Effective communication and empathy in support roles
                    </li>
                    <li>Troubleshooting and problem-solving techniques</li>
                    <li>Maintaining service quality and client satisfaction</li>
                    <li>
                      Building and using a knowledge base for faster resolutions
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={tainingimg2} // change path as needed
                alt="Office Area"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </section>

        <div className="max-w-[1500px] mx-auto px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f3a] mb-4">
              Real Success Stories
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              <strong>RastaInfotech</strong> isn't just about acquiring new
              skills; it's about transforming lives. Our alumni network is a
              testament to the impact of our training, with countless graduates
              going on to lead successful careers in their chosen fields. Your
              success story starts here.
            </p>

            {/* Google Rating Box */}
            <div className="bg-gray-50 p-6 rounded-md inline-flex items-center gap-4 shadow-md justify-center lg:justify-start">
              <img
                src="data:image/png;base64,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"
                alt="Google"
                className="h-15 w-15"
              />
              <div className="text-left">
                <div className="text-yellow-400 text-xl flex items-center gap-1 mb-1">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">4.9</span>{" "}
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 underline"
                  >
                    192 Google Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 gap-4">
            {studentImages.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-md ${
                  i === 0 || i === 3
                    ? "col-span-1 row-span-1"
                    : "col-span-1 row-span-1"
                }`}
              >
                <img
                  src={src}
                  alt={`Student ${i + 1}`}
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            ))}
          </div>
        </div>

        {/* collabration section */}

        <section className="bg-white text-gray-800 py-12 px-4 sm:px-8 lg:px-20">
          <div className="max-w-[1500] mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                Rasta Infotech & GTR Academy Collaboration
              </h2>
              <p className="text-gray-700 mb-4">
                Rasta Infotech forwards all training-related leads to GTR
                Academy. If you’re here to learn, just submit your details — GTR
                Academy will get in touch with you.
              </p>
              <p className="text-gray-700">
                Let’s bridge the gap between learning and real-world skills
                through this industry-academia partnership.
              </p>
              <div className="text-center mt-16">
                <a
                  href="https://gtracademy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
                >
                  Visit GTR Academy Website
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Submit Your Training Interest
              </h3>
              <form
                action="https://gtracademy.in/your-form-handler"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md"
                />

                {/* Phone input with country code */}
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  inputClass="!w-full !py-4 !px-10 !border !rounded-md"
                  containerClass="!w-full"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message or Course of Interest"
                  className="w-full px-4 py-2 border rounded-md"
                ></textarea>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Submit to GTR Academy
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Training;
