import aboutusimg1 from "../../src/assets/trainings_img1.jpg";
import aboutusimg2 from "../../src/assets/trainings_img2.jpg";
import aboutusimg3 from "../../src/assets/aboutus3.jpg";
import aboutusimg4 from "../../src/assets/aboutus4.jpg";
import IndustriesWeServe from "../components/industriesweserve/IndustriesWeServe";
import GetInTouch from "../components/getintouch/GetInTouch";
import { useState } from "react";
import ContactModal from "../components/ContactModal";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-sans min-h-screen pt-20 ">
      {/* Header */}
      <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 text-center py-32 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          About Us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg font-semibold">
          We’re dedicated to delivering impactful solutions with clarity and
          purpose.
        </p>
      </div>

      {/* Image Row placed AFTER header but visually overlaps */}
      <div className="relative -mt-20 flex justify-center flex-wrap gap-4 px-4">
        {[aboutusimg1, aboutusimg2, aboutusimg3, aboutusimg4].map(
          (img, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg border-4 border-white transform transition-transform duration-500 ease-in-out hover:scale-105
        ${
          index % 2 === 0
            ? "w-32 h-40 md:w-80 md:h-100"
            : "w-28 h-32 md:w-70 md:h-80"
        }
      `}
            >
              <img
                src={img}
                alt={`Team ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          )
        )}
      </div>

      <div className="fixed top-2/3 right-4 transform -translate-y-1/2 rotate-90 origin-right z-50">
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded-l-full text-sm hover:bg-blue-800 transition "
          onClick={() => {
            setShowModal(true);
          }}
        >
          Get in Touch
        </button>
      </div>

      {/* Section 1 */}
      <section className="mt-24 py-16 px-6 md:px-20">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          We make sure your idea & creation delivered properly
        </h3>
        <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-justify">
          <p>
            <strong>Rasta Infotech</strong> is a leading digital solutions
            provider specializing in custom software development, enterprise
            technology consulting, and industry-specific digital transformation.
            We help businesses across sectors—including healthcare, life
            sciences, manufacturing, travel and transportation, energy, and
            utilities—leverage modern technologies to achieve operational
            excellence and sustainable growth.
          </p>
          <p>
            With a strong foundation in cloud computing, AI/ML, IoT, and data
            analytics, we deliver scalable, secure, and future-ready platforms
            that solve real-world challenges. Our team of experienced engineers,
            designers, and strategists work collaboratively to build solutions
            that are not only technically robust but also aligned with your
            business goals.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image - takes 50% width */}
          <div className="w-full md:w-1/2">
            <img
              src={aboutusimg3}
              alt="Founder"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
            <p className="mt-4 text-center text-sm text-gray-600 italic">
              “Making an impact, together” <br />
              <span className="font-medium text-gray-800">Rasta Founder</span>
            </p>
          </div>

          {/* Right: Content - takes 50% width */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6">
              We empower small business owners
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed text-justify">
              At <strong>Rasta Infotech</strong>, we believe that small
              businesses are the backbone of innovation and community growth.
              Our mission is to empower entrepreneurs and small business owners
              with affordable, scalable, and smart digital solutions that help
              them compete in today’s fast-paced market.
            </p>
            <blockquote className="border-l-4 border-yellow-400 pl-4 text-gray-700 italic text-justify">
              “Whether you're launching a startup, running a local shop, or
              expanding your online presence, we provide the tools and
              technology to help you succeed.”
            </blockquote>
          </div>
        </div>
      </section>
      <IndustriesWeServe />

      {/* Section 3 */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white py-20 px-4 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            We help business to grow faster and bigger
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Whether you're a startup looking to launch a new product or an
            enterprise aiming to modernize legacy systems, Rasta Infotech is
            your trusted partner in digital transformation. Let’s collaborate to
            create technology that drives impact.
          </p>
          <div className="w-16 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full flex items-center justify-center shadow-lg text-3xl">
              👥
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
            <p className="text-sm">
              At <strong>Rasta Infotech</strong>, our strength lies in our
              people. Our team of experienced developers, designers,
              strategists, and project managers bring deep industry knowledge
              and technical expertise to every project. We foster a culture of
              collaboration, continuous learning, and innovation—ensuring that
              every solution we deliver is crafted with precision, creativity,
              and professionalism.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full flex items-center justify-center shadow-lg text-3xl">
              🎯
            </div>
            <h3 className="text-xl font-semibold mb-2">Target Oriented</h3>
            <p className="text-sm">
              We don’t just build software—we solve problems. Every project we
              undertake is guided by clear goals, measurable KPIs, and a deep
              understanding of your business objectives. Our target-oriented
              approach ensures that every feature, design element, and line of
              code contributes directly to your success.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full flex items-center justify-center shadow-lg text-3xl">
              ✅
            </div>
            <h3 className="text-xl font-semibold mb-2">Success Guarantee</h3>
            <p className="text-sm">
              Your success is our priority. At <strong>Rasta Infotech</strong>,
              we stand behind our work with a commitment to quality,
              transparency, and results. Our proven methodologies, agile
              development practices, and post-launch support ensure that your
              project is delivered on time, within budget, and beyond
              expectations. We measure our success by the growth, satisfaction,
              and long-term impact we create for our clients.
            </p>
          </div>
        </div>
      </section>

      <GetInTouch />
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default About;
