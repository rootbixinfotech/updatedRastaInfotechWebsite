import { useState } from "react";
import { useParams } from "react-router-dom";
import { FiPlayCircle } from "react-icons/fi";
import ContactModal from "../../components/ContactModal";
import GetInTouch from "../../components/getintouch/GetInTouch";
import {
  HospitalityPageContent,
  HealthCarePageContent,
  OilAndGasPageContent,
  HiTechPageContent,
  EnergyAndUtilitiesPageContent,
  ManufacturingPageContent,
  TravelAndTransportationPageContent,
  LifeSciencesPageContent,
  PublicSectorPageContent,
  CommunicationsPageContent,
  LogisticsPageContent,
} from "../../data/IndustriesData";

// Map slugs to data objects
const industryDataMap = {
  "hospitality-services": HospitalityPageContent,
  "travel-and-transportation": TravelAndTransportationPageContent,
  healthcare: HealthCarePageContent,
  "life-sciences": LifeSciencesPageContent,
  "oil-and-gas": OilAndGasPageContent,
  "public-sector": PublicSectorPageContent,
  "hi-tech": HiTechPageContent,
  communications: CommunicationsPageContent,
  "energy-and-utilities": EnergyAndUtilitiesPageContent,
  logistics: LogisticsPageContent,
  manufacturing: ManufacturingPageContent,
};

const IndustryDetail = () => {
  const { industrySlug } = useParams();
  const industryData = industryDataMap[industrySlug];
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!industryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-red-600">Industry Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white font-sans text-gray-800 pt-24 text-[20px] ">
        {/* Heading Section */}
        <div className="max-w-[1580px] mx-auto px-6 md:px-10 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {industryData.banner.heading}
          </h1>
          <p className="text-lg text-blue-800 font-medium">
            {industryData.banner.breadcrumb?.join(" / ")}
          </p>
        </div>

        {/* Banner Image */}
        <div className="max-w-[1580px] mx-auto px-6 md:px-10 mt-10 ">
          <img
            src={industryData.banner.image}
            alt={industryData.banner.heading}
            className="w-full h-[480px] object-cover rounded-2xl shadow-lg"
          />
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

        {/* Latest Thinking */}
        <div className="max-w-[1580px] mx-auto px-6 md:px-10 py-16">
          <div className="bg-gradient-to-tr from-white to-blue-50 shadow-xl rounded-xl overflow-hidden grid md:grid-cols-5">
            {/* Title Box */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white flex flex-col items-center justify-center py-6 px-4 md:px-6">
              <p className="text-sm md:text-base font-semibold text-center">
                LATEST
              </p>
              <p className="text-sm md:text-base font-semibold text-center">
                THINKING
              </p>
            </div>
            {/* Content Cards */}
            {industryData.latestThinkingArticles?.map((item, index) => (
              <div
                key={index}
                className="px-6 py-6 flex flex-col gap-2 bg-white hover:bg-blue-50 transition"
              >
                <div className="text-blue-700 font-bold text-xl">{index + 1}</div>
                <p className="text-sm text-blue-900 font-semibold">
                  {item.title}
                </p>
                <p className="text-sm text-gray-800 leading-snug md:text-justify " style={{ textJustify:"inter-word"}}>
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-[1580px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
              {industryData.introduction.title}
            </h2>
            <p className="text-lg leading-8 text-gray-700 text-justify">
              {industryData.introduction.content}
            </p>
          </div>
          <img
            src={industryData.whyChooseUs.image}
            alt="Industry Detail"
            className="w-full h-auto object-cover rounded-2xl shadow-md transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          />
        </div>

        {/* Podcast / Video */}
        <div className="bg-blue-50 py-20">
          <div className="max-w-[1480px] mx-auto px-4">
            <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
              {isPlaying ? (
                <iframe
                  className="w-full h-[300px] md:h-[460px]"
                  src={
                    industryData.podcastUrl ||
                    "https://www.youtube.com/embed/74DWwSxsVSs?autoplay=1"
                  }
                  title="Podcast Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative">
                  <img
                    src={industryData.technologies.image}
                    alt="Podcast"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <FiPlayCircle
                      onClick={() => setIsPlaying(true)}
                      className="text-white hover:text-blue-400 cursor-pointer transition duration-300"
                      style={{ fontSize: "60px" }}
                    />
                    <div className="mt-2 px-4 py-1 border border-black bg-white rounded shadow text-center">
                      <p className="text-xs font-semibold text-gray-800">
                        LISTEN TO THE
                      </p>
                      <p className="text-sm font-bold text-blue-700">PODCAST</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* WHAT WE PROVIDE */}
        <div className="max-w-[1580px] mx-auto px-6 md:px-10 pb-20 mt-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
            WHAT WE PROVIDE
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {industryData.industryHighlights.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${item.bgColor} ${item.textColor}`}
              >
                <div
                  className={`text-4xl mb-4 inline-block p-2 rounded-full ${item.iconBg}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ADVANTAGES OF RASTA INFOTECH */}
        <div className="bg-gradient-to-br from-blue-50 to-white py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              Benefit of {industryData.banner.heading} with Rasta Infotech
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Discover why companies choose Rasta Infotech as their trusted
              technology partner. We bring innovation, agility, and deep technical
              expertise across every project.
            </p>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {industryData.services.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY RASTA INFOTECH */}
        <div className="relative bg-white py-20 mb-12">
          {/* Skewed Background on Right */}
          <div className="absolute top-0 right-0 w-[35%] h-full bg-gradient-to-tr from-purple-800 to-blue-500 transform -skew-x-12 z-0 rounded-l-lg" />

          {/* Main Content */}
          <div className="relative max-w-[1580px] mx-auto pr-6 md:pr-10">
            <div className="pl-4 md:pl-5">
              {" "}
              {/* Ensure left-alignment on all screens */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {industryData.whyChooseUs.heading}
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl text-justify">
                {industryData.whyChooseUs.description}
              </p>
            </div>
          </div>
        </div>
        <GetInTouch />
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </section>
    </>
  );
};

export default IndustryDetail;
