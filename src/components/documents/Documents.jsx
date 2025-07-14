import React, { useState } from 'react';

// Simple modern loader
const Loader = () => (
  <div className="flex items-center justify-center min-h-[80vh]">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const Documents = () => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Top bar */}
      <div className="bg-black w-full h-20"></div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Main Content */}
      <div className={`flex flex-col items-center px-4 md:px-10 transition-opacity duration-500 ${loading ? 'hidden' : 'opacity-100'}`}>
        <h1 className="text-3xl sm:text-4xl font-serif text-slate-800 font-bold mt-14 text-center">
          SAP Documents
        </h1>

        <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-3xl text-center leading-relaxed">
          Find below a list of recommended documents related to multiple modules in SAP ERP and SAP S/4HANA shared via our LinkedIn profile:
        </p>

        <div className="w-full mt-10 mb-20 flex justify-center">
          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[75%] rounded-md overflow-hidden shadow-md border border-gray-300">
            <iframe
              className="w-full h-[80vh] min-h-[600px] max-h-[1000px]"
              src="https://airtable.com/embed/apprGFujtHcll8vqC/shrqo6V0dUrk5zXj2?viewControls=on"
              style={{ background: 'transparent' }}
              onLoad={handleIframeLoad}
              title="SAP Documents"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
