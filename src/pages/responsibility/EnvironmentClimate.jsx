import React, { useState } from "react";
import bannerClimate from "../../assets/bannerclimateimage.jfif";
import environmetImage from "../../assets/climateimage-1.jpg";
import climateImage from "../../assets/climateimage-2.jfif";
import climateImagess from "../../assets/climateimage-3.jpeg";
import ContactModal from "../../components/ContactModal";
import { useNavigate } from "react-router-dom";

const EnvironmentClimate = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white text-gray-800 font-sans px-4 md:px-10 py-10 md:py-20">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-br from-green-100 via-blue-100 to-white py-12 md:py-20 text-center px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-800 mb-4 leading-snug">
            Environment & Climate: Understanding Our Planet’s Future
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Explore key environmental and climate issues, their impact, and how
            we can create a sustainable future together.
          </p>
          <img
            src={bannerClimate}
            alt="Nature landscape"
            className="w-full h-64 sm:h-80 md:h-[400px] object-cover mt-6 sm:mt-8 rounded-xl shadow-lg"
          />
        </div>

        <div className="fixed top-2/3 right-2 transform -translate-y-1/2 rotate-90 origin-right z-50 hidden sm:block">
          <button
            className="bg-blue-900 text-white py-2 px-4 rounded-l-full text-xs sm:text-sm hover:bg-blue-800 transition"
            onClick={() => setShowModal(true)}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-2 sm:px-6 md:px-10 py-10 md:py-16 space-y-16">

        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              About the Environment?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              {/* List items as-is */}
              <li><strong>Air:</strong> The atmosphere that surrounds us...</li>
              <li><strong>Water:</strong> Oceans, rivers, lakes...</li>
              <li><strong>Land:</strong> Forests, deserts, urban areas...</li>
              <li><strong>Biodiversity:</strong> Variety of life forms...</li>
              <li><strong>Climate:</strong> Long-term weather patterns...</li>
              <li><strong>Soil:</strong> A vital resource for agriculture...</li>
              <li><strong>Energy Resources:</strong> Natural sources...</li>
              <li><strong>Forests:</strong> Crucial ecosystems...</li>
              <li><strong>Oceans:</strong> Regulate climate...</li>
            </ul>
            <p className="mt-4 text-sm sm:text-base">
              A healthy environment supports life, regulates climate...
            </p>
          </div>
          <img
            src={environmetImage}
            alt="Forest and Earth"
            className="rounded-xl shadow-md w-full h-64 md:h-[600px] object-cover"
          />
        </section>

        {/* Climate Impact */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={climateImage}
            alt="Climate crisis"
            className="rounded-xl shadow-md w-full h-64 md:h-[400px] object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
              Environmental Impacts of Climate Change
            </h2>
            <h3 className="text-lg font-semibold text-green-700 mt-4">
              Rising Temperatures
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base">
              <li>Melting glaciers and polar ice</li>
              <li>Heatwaves and droughts</li>
              <li>Shifted growing seasons</li>
            </ul>
            <h3 className="text-lg font-semibold text-green-700 mt-4">
              Extreme Weather
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base">
              <li>More intense hurricanes</li>
              <li>Frequent flooding</li>
              <li>Wildfires and unpredictable rainfall</li>
            </ul>
          </div>
        </section>

        {/* Solutions */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
              Solutions and Sustainability
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li><strong>Renewable Energy:</strong> Harness clean power...</li>
              <li><strong>Sustainable Agriculture:</strong> Crop rotation...</li>
              <li><strong>Conservation:</strong> Preserve natural resources...</li>
              <li><strong>Green Infrastructure:</strong> Sustainable designs...</li>
              <li><strong>Circular Economy:</strong> Reduce, reuse, recycle...</li>
              <li><strong>Water Conservation:</strong> Efficient use...</li>
              <li><strong>Sustainable Transportation:</strong> EVs, transit...</li>
              <li><strong>Climate Education:</strong> Raise awareness...</li>
              <li><strong>Corporate Responsibility:</strong> Green practices...</li>
            </ul>
          </div>
          <img
            src={climateImagess}
            alt="Green energy"
            className="rounded-xl shadow-md w-full h-64 md:h-[400px] object-cover"
          />
        </section>

        {/* What You Can Do */}
        <section className="bg-blue-50 p-6 sm:p-10 rounded-xl shadow-md">
          <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">
            What You Can Do
          </h2>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base">
            <li>Use public transport, eat sustainably, reduce waste...</li>
            <li>Support eco-conscious brands...</li>
            <li>Raise awareness through education and social media...</li>
            <li>Volunteer for environmental causes...</li>
          </ul>
        </section>

        {/* Looking Ahead */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4">
              Looking Ahead
            </h2>
            <p className="text-sm sm:text-base">
              The future of our planet hinges on today’s actions...
            </p>
          </div>
          <img
            src={climateImage}
            alt="Looking ahead"
            className="rounded-xl shadow-md w-full h-64 md:h-[400px] object-cover"
          />
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4">
            Conclusion
          </h2>
          <p className="text-sm sm:text-base">
            The environment and climate are deeply intertwined...
          </p>
        </section>

        {/* Call to Action */}
        <div className="px-4 sm:px-8 lg:px-20 mb-0">
          <div className="bg-[#eeeeee] rounded-2xl py-10 sm:py-16 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Partner with Us
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Whether you're a startup building your governance framework or an
              enterprise strengthening its responsible practices...
            </p>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="mt-6 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-500 transition w-full sm:w-auto"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default EnvironmentClimate;
