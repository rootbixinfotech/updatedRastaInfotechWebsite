import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import csrBanner from "../assets/banner-csrpage.png";
import womenImage from "../assets/women-empower-csr.jpeg";
import clothesImage from "../assets/clothing-csr.png";
import foodImage from "../assets/comminity-food.png";
import innovationImage from "../assets/Innovation-csr.png";
import GetInTouch from "../components/getintouch/GetInTouch";
import Seo from '../components/Seo';

const Csr = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Seo title="CSR | Rasta Infotech" description="Corporate Social Responsibility initiatives by Rasta Infotech." />
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[380px] md:h-[400px] flex items-center justify-center text-center text-white rounded-3xl shadow-lg"
        style={{
          backgroundImage: `url(${csrBanner})`,
        }}
      >
        <div className="relative px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md mb-2">
            🌍 Corporate Social Responsibility
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-800 drop-shadow-sm">
            Uplifting Communities
          </p>
          <p className="text-xl md:text-2xl font-medium text-blue-800 drop-shadow-sm">
            Empowering Women, Creating Change
          </p>
        </div>
      </div>

      {/* Responsibility Highlight Box */}
      <div className="bg-gray-800 text-white p-8 sm:p-10 rounded-2xl shadow-lg  mx-auto my-12 text-center ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          What are our <span className="text-orange-500">responsibility</span>
        </h2>
        <p className="text-lg mx-45 leading-relaxed text-gray-300 text-justify">
          At <span className="font-semibold italic">Rasta Infotech</span>,
          responsibility doesn’t end at the firewall. Our Corporate Social
          Responsibility (CSR) philosophy blends compassion with action—building
          a better world through empathy, equity, and empowerment.
        </p>
      </div>

      {/* Food Drives Section */}
      <div className="bg-gray-100 py-16 px-6 rounded-2xl shadow-md mb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              🍲 Community Nourishment: Food Drives That Matter
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Hunger shouldn’t be a barrier to dignity. Through our ongoing{" "}
              <span className="italic text-gray-900">
                food drive initiatives
              </span>
              , we’ve reached remote villages and urban communities,
              distributing nutritious meals to those most in need. Each meal
              shared is a promise fulfilled—to uplift lives and restore hope.
            </p>
          </div>
          <img
            src={foodImage}
            alt="Food Drive"
            className="w-full max-w-[450px] h-auto mx-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Clothing Distribution Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-16 items-center mb-16">
        <img
          src={clothesImage}
          alt="Clothing Distribution"
          className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            👕 Dignity in Clothing
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            We believe that the right to warmth and comfort is universal. Rasta
            Infotech runs regular{" "}
            <span className="italic text-gray-900">
              clothing distribution campaigns
            </span>
            , supplying appropriate seasonal wear to underserved
            families—including uniforms for school children and winter
            essentials for the elderly.
          </p>
        </div>
      </div>

      {/* Women Empowerment Section */}
      <div className="bg-gray-100 py-16 px-6 rounded-2xl shadow-md mb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              👩‍🏫 Women's Empowerment: A Vision in Action
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
              Driven by the leadership and vision of{" "}
              <span className="font-semibold italic">
                Director Tejashwini KC
              </span>{" "}
              and{" "}
              <span className="font-semibold italic">
                Director Reena Saxena
              </span>
              , our CSR mission places{" "}
              <strong>women's empowerment at its core</strong>. In rural areas
              where opportunity is scarce, we invest in:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 text-lg text-justify">
              <li>
                <span className="italic">Educational programs</span> covering
                digital literacy, financial planning, and career skills
              </li>
              <li>
                <span className="italic">Entrepreneurship workshops</span> that
                enable women to launch micro-enterprises
              </li>
              <li>
                <span className="italic">
                  Mentorship and leadership guidance
                </span>{" "}
                that open doors to the workforce
              </li>
            </ul>
            <p className="mt-4 text-gray-700 text-lg text-justify leading-relaxed">
              Their collective dream: a future where women are not just
              present—but{" "}
              <span className="font-semibold italic">
                powerful, visible, and equal
              </span>
              .
            </p>
          </div>
          <img
            src={womenImage}
            alt="Women Empowerment"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-600"
          />
        </div>
      </div>

      {/* Innovation Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center mb-20">
        <img
          src={innovationImage}
          alt="Innovation"
          className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            🌐 Responsibility Through Innovation
          </h2>
          <p className="text-gray-700 text-lg text-justify leading-relaxed">
            CSR isn’t a side initiative—it’s embedded in our culture. Whether
            it’s feeding families, educating women, or clothing a child, our
            actions reflect the same values that shape our technology:{" "}
            <span className="italic text-gray-900">
              efficiency, inclusivity, and ethical growth
            </span>
            .
          </p>
          <p className="mt-4 text-gray-700 text-lg text-justify leading-relaxed">
            We don’t just lead in IT—we lead in <strong>impact</strong>.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <GetInTouch />
    </>
  );
};

export default Csr;
