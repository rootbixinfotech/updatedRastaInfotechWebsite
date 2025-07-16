import { useState, useEffect } from "react";
import tainingimg from "../assets/trainings_img1.jpg";
import tainingimg2 from "../assets/trainings_img2.jpg";
import img1 from "../assets/student-6.jpeg";
import img2 from "../assets/student_5.jpeg";
import img3 from "../assets/student_4.jpeg";
import img4 from "../assets/student_3.jpeg";
import img5 from "../assets/student_2.jpeg";
import img6 from "../assets/student_1.jpeg";
import { CiLinkedin } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail, MdOutlineMessage, MdPerson } from "react-icons/md";

// const studentImages = [img1, img2, img3, img4, img5, img6];

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

const training = [
  {
    img: img5,
    name: "Sourabh Sharma ",
    linkedIn: "",
    comp: "GANDIVA IT SERVICES PRIVATE LIMITED.",
    text: "Working with Rasta Infotech was a game-changer for our business. Their team quickly understood our requirements and delivered a high-quality solution ahead of schedule. Excellent communication and technical skills!",
  },
  {
    img: img2,
    name: "Aarav Mehta",
    comp: "BB Infotech Solutions Pvt Ltd",
    text: "Rasta Infotech helped us revamp our digital presence. From design to deployment, everything was handled with professionalism and attention to detail. We saw a 40% increase in user engagement within the first month.",
  },
  {
    img: img3,
    name: "Priya Nair",
    linkedIn: "",
    comp: "Artiset",
    text: "Their DevOps automation services streamlined our entire release cycle. What used to take days now takes just a few hours. Their team is knowledgeable, proactive, and genuinely cares about client success.",
  },
  {
    img: img6,
    name: "Rahul Verma",
    comp: "Wraystech Pvt Ltd",
    linkedIn: "",
    text: "We collaborated with Rasta Infotech on a complex web application, and they exceeded our expectations. The UI/UX was modern, responsive, and built with scalability in mind. Highly recommend them!",
  },
  {
    img: img1,
    name: "Anjali Desai",
    comp: "Tagskills",
    linkedIn: "",
    text: "Excellent service from start to finish. The team provided timely updates, clear documentation, and thoughtful suggestions that improved our product. They’ve become our go-to tech partner.Highly recommend them!",
  },
  {
    img: img4,
    name: "Karan Patel",
    comp: "Canarys Pvt Ltd",
    linkedIn: "",
    text: "I’ve worked with multiple vendors in the past, but none matched the efficiency and dedication of Rasta Infotech. They deliver what they promise, and they do it with integrity.They’ve become our go-to tech partner.Highly recommend them!",
  },
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
      <section className="bg-gray-50 py-10 relative pt-10 ">
        <div className="max-w-[1500px] mx-auto flex flex-col justify-between lg:flex-row items-start gap-10 mt-16 px-2 sm:px-4 md:px-8">
          {/* Left Content */}
          <div className="relative w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Training: <br />
              <span className="text-blue-900">
                We Deliver Quality Every Step
                <br /> of the Way
              </span>
            </h1>
            <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl text-justify">
              Enterprise Consulting Company focused on SAP Consulting, Corporate
              IT Training, Recruitment, Talent Management, and Product
              Development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition text-center"
              >
                Book Call
              </a>
            </div>
          </div>

          {/* Right Side Carousel Slider */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <img
              src={carouselImages[current]}
              alt="Teamwork"
              className="rounded-xl shadow-xl w-full h-56 sm:h-80 md:h-96 object-cover"
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
        <div className="w-full py-10 bg-white flex flex-col items-center">
          <div className="text-center mb-2 text-base sm:text-lg md:text-xl text-[#181848]">
            Our alumni's are working in{" "}
            <span className="text-blue-700 font-bold">100+</span> best
            organisations
          </div>
          <div className="text-center font-bold text-xl sm:text-2xl md:text-3xl mb-6 text-[#181848]">
            Top Organisations
          </div>
          <div className="overflow-hidden w-full">
            <div className="marquee flex items-center gap-10 sm:gap-20 w-max animate-marquee px-2 sm:px-4">
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

        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-10 px-2 sm:px-4 md:px-8 py-8">
          {/* Left Image Section */}
          <div className="w-full lg:w-7/12 flex items-center justify-center">
            <img
              src={tainingimg}
              alt="Consulting Motivation"
              className="w-full rounded-xl shadow-xl max-h-[300px] sm:max-h-[400px] object-cover"
            />
          </div>

          {/* Right Static Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center mt-8 lg:mt-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-snug">
              Consulting Services that <br /> Suits Your Needs
            </h2>

            <div className="space-y-6 transition-all duration-600 ease-in-out">
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

        <section className="bg-white py-10 sm:py-16">
          <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-8 px-2 sm:px-4 md:px-8">
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

                  <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                    Development is where ideas come to life. Whether it's coding
                    a new feature, optimizing a system, or exploring emerging
                    technologies, our development teams are at the forefront of
                    innovation. We focus on building scalable, secure, and
                    user-friendly solutions that meet real-world needs.
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed text-justify">
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

                  <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                    Projects are the foundation of our work at{" "}
                    <strong>Rasta Infotech.</strong>
                    Each project is a focused initiative designed to deliver
                    value through technology, innovation, and collaboration.
                    From software development to digital transformation, our
                    teams work together to bring ideas to life with precision
                    and purpose.
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed text-justify">
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

                  <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                    We provide comprehensive support across technical,
                    functional, and operational areas. Whether it's resolving a
                    system issue, guiding a client through a process, or
                    maintaining backend stability, our support teams are
                    equipped to handle it all with professionalism and care.
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed text-justify">
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
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img
                src={tainingimg2} // change path as needed
                alt="Office Area"
                className="w-full h-56 sm:h-80 md:h-96 object-cover rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Real Success Stories */}

        <div className="max-w-[1500px] mx-auto px-2 sm:px-4 md:px-8 py-10 md:py-20">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f3a] mb-4">
              Real Success Stories
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              <strong className="text-[#0f0f3a]">RastaInfotech</strong> isn't
              just about acquiring new skills; it's about transforming lives.
              Our alumni network is a testament to the impact of our training,
              with countless graduates going on to lead successful careers. Your
              success story starts here.
            </p>
          </div>

          {/* Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {training.map((student, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-between">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                  />
                  <h3 className="text-lg font-semibold text-[#0f0f3a]">
                    {student.name}
                  </h3>

                  {student.comp && (
                    <p className="text-sm text-gray-500 mb-2">{student.comp}</p>
                  )}

                  <p className="text-gray-600 text-sm mt-2">{student.text}</p>

                  <a
                    href={student.linkedIn || "https://www.linkedin.com"} // fallback if empty
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-600 hover:text-blue-800 text-2xl"
                  >
                    <CiLinkedin />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* collabration section */}

        <section className="bg-gradient-to-br from-white to-slate-50 py-10 sm:py-20 px-2 sm:px-4 md:px-8">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 leading-snug">
                Rasta Infotech & GTR Academy Collaboration
              </h2>
              <p className="text-gray-700 text-lg text-justify">
                Rasta Infotech forwards all training-related leads to{" "}
                <strong>GTR Academy</strong>. If you’re here to learn, just
                submit your details — GTR Academy will get in touch with you.
              </p>
              <p className="text-gray-700 text-lg text-justify">
                Let’s bridge the gap between learning and real-world skills
                through this impactful industry-academia partnership.
              </p>
              <div className="mt-6">
                <a
                  href="https://gtracademy.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-green-700 transition"
                >
                  Visit GTR Academy Website <FaArrowRight className="text-sm" />
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
                Submit Your Training Interest
              </h3>
              <form
                action="https://gtracademy.in/your-form-handler"
                method="POST"
                className="space-y-5"
              >
                <div className="relative">
                  <MdPerson className="absolute top-3.5 left-3 text-gray-500 text-lg" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <MdEmail className="absolute top-3.5 left-3 text-gray-500 text-lg" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Phone input with country code */}
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  inputClass="!w-full !py-3 !pl-12 !pr-4 !border !rounded-lg focus:!ring-2 focus:!ring-blue-500"
                  containerClass="!w-full"
                />

                <div className="relative">
                  <MdOutlineMessage className="absolute top-3.5 left-3 text-gray-500 text-lg" />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message or Course of Interest"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-medium"
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
