import React, { useState } from 'react';
import ContactModal from '../ContactModal';

const GetInTouch = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-4 sm:px-6 lg:px-20 mb-12">
      <div className="bg-[#eeeeee] rounded-2xl py-10 sm:py-14 md:py-16 text-center space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Still have questions?
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Have more questions? Contact us and we'll do our best to provide
          the answers you need.
        </p>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-500 transition w-full sm:w-auto"
        >
          Get in touch
        </button>
      </div>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default GetInTouch;
