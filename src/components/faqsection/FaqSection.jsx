import React, { useState } from "react";
import ContactModal from "../ContactModal";


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
  
  const faqs = [
  {
    question: 'What services does Rasta InfoTech provide?',
    answer: 
      'We offer comprehensive IT services tailored to meet modern business needs. Our expertise spans software development, blockchain integration, AI and data science solutions, IT infrastructure management, and technical staffing. Whether you are a startup or an enterprise, we provide scalable, secure, and innovative technology solutions that drive growth and efficiency.',
  },
  {
    question: 'Do you provide customized software solutions?',
    answer: 
      'Yes, we specialize in delivering fully customized software solutions designed to align with your unique business goals. Our development process includes in-depth consultation, agile methodologies, and rigorous testing to ensure the final product is scalable, high-performing, and future-ready. We adapt to your workflows and integrate seamlessly with existing systems.',
  },
  {
    question: 'Is 24/7 technical support available?',
    answer: 
      'Absolutely. Our dedicated support team is available round-the-clock to assist with any technical issues, ensuring minimal downtime and uninterrupted operations. We offer multiple support channels including live chat, email, and phone, backed by proactive monitoring and quick resolution protocols to keep your systems running smoothly.',
  },
  {
    question: 'How experienced is your team?',
    answer: 
      'Our team is composed of certified professionals with extensive experience across various industries and technologies. From software engineers and data scientists to infrastructure experts and project managers, each member brings deep domain knowledge and a commitment to excellence. We continuously invest in training and development to stay ahead of tech trends.',
  },
  {
    question: 'Can Rasta InfoTech help modernize legacy systems?',
    answer: 
      'Yes, we specialize in legacy system modernization, helping businesses transition from outdated platforms to modern, secure, and scalable solutions. Our approach includes system assessment, architecture redesign, data migration, and integration with new technologies. We ensure minimal disruption during the upgrade and deliver enhanced performance and maintainability.',
  },
];

  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 px-8 py-20 md:px-25 pb-40">
      <div className="text-center mb-12">
        <p className="text-indigo-900 font-bold text-2xl">
          Recently Asked Question
        </p>
        <h2 className="text-4xl md:text-4xl font-bold text-black mt-2">
          {/* Frequently Asked Questions */}
          FREQUENTLY ASKED QUESTION
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Here are some of the common frequently asked questions, often raised
          by potential clients:
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: FAQs */}
        <div className="flex-1 space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-400 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <p className="text-xl font-semibold">
                  {index + 1}. {item.question}
                </p>
                <span className="text-4xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {/* Animated Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: CTA Box */}
        <div className="md:w-1/3 md:border-l md:pl-6 border-gray-400">
          <h3 className="text-2xl font-semibold mb-4">
            Let's <span className="font-bold">collaborate</span>
          </h3>
          <p className="text-gray-700 mb-6">
            No matter where you are in the world, our assistance is readily
            available. Initiate a project or reach out to us for crafting a
            personalized package tailored to your business.
          </p>

          <button
            type="submit"
             onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-500 transition w-full sm:w-auto"
          >
            Get a quote
          </button>
        </div>
      </div>
         <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default FaqSection;
