import React from "react";
import privacyPolicy from "../../assets/blockchainbannerimg1.jfif";
import Seo from '../../components/Seo';

const Disclaimer = () => {
  return (
    <>
      <Seo title="Disclaimer | Rasta Infotech" description="Disclaimer for Rasta Infotech website and services." />
      <div className="text-[#1a1a1a]">
        {/* Banner */}
        <section
          className="relative h-[300px] md:h-[500px] flex items-center justify-center"
          style={{ backgroundImage: `url(${privacyPolicy})` }}
        >
          <div className="absolute inset-0 "></div>
          <div className="text-center text-white relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Disclaimer</h1>
          </div>
        </section>

        <div className="bg-white py-16 px-6 md:px-20 max-w-screen-xl mx-auto text-gray-800">
          {/* Breadcrumb */}
          <div className="text-sm mb-6">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-blue-600 font-medium">Disclaimer</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-10">Introduction</h1>

          {/* Sections */}
          <div className="space-y-10">
            {/* General Info */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">General Information</h2>
              <p className="text-gray-700 leading-relaxed">
                The information provided by Rasta Infotech
                 on https://www.rastainfotech.com/ is for general informational
                purposes only. All information on the Site is provided in good
                faith; however, we make no representation or warranty of any kind,
                express or implied, regarding the accuracy, adequacy, reliability,
                validity, or completeness of any information on the Site.
              </p>
            </section>

            {/* External Links Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                External Links Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Site may contain links
                to other websites or content belonging to or originating from
                third parties or links to websites and features in banners or
                other advertising. We do not warrant, endorse, guarantee, or
                assume responsibility for the accuracy or reliability of any
                information offered by third-party websites linked through the
                Site or any website or feature linked in any banner or other
                advertising. We will not be a party to or in any way be
                responsible for monitoring any transaction between you and
                third-party providers of products or services.
              </p>
            </section>

            {/* Professional Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Professional Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Site cannot and does not contain professional advice. The
                information is provided for general informational and educational
                purposes only and is not a substitute for professional advice.
                Accordingly, before taking any actions based upon such
                information, we encourage you to consult with the appropriate
                professionals. We do not provide any kind of professional advice.
                Your use or reliance of any information contained on the Site is
                solely at your own risk.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Rasta Infotech, nor its directors,
                employees, partners, agents, suppliers, or affiliates, be liable
                for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from (i) your
                access to or use of or inability to access or use the Site; (ii)
                any conduct or content of any third party on the Site; (iii) any
                content obtained from the Site; and (iv) unauthorized access, use,
                or alteration of your transmissions or content, whether based on
                warranty, contract, tort (including negligence), or any other
                legal theory, whether or not we have been informed of the
                possibility of such damage.
              </p>
            </section>

            {/* Use at Your Own Risk */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                "Use at Your Own Risk" Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All information in the Site is provided "as is", with no guarantee
                of completeness, accuracy, timeliness, or of the results obtained
                from the use of this information, and without warranty of any
                kind, express or implied, including, but not limited to warranties
                of performance, merchantability, and fitness for a particular
                purpose. Rasta Infotech will not be liable to you or anyone
                else for any decision made or action taken in reliance on the
                information given by the Site or for any consequential, special,
                or similar damages.
              </p>
            </section>

            {/* Contact Info */}
            {/* Contact Us with Image */}
            <section className="grid md:grid-cols-2 items-center gap-10">
              <div>
                <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, contact us
                  at:
                  <br />
                  <strong>Email:</strong> info@rastainfotech.com
                  <br />
                  <strong>Address:</strong> 23 2nd Cross, Near Malnad, Coaching
                  Center, MHR Layout, Bangalore North, Karnataka, India, 560090
                </p>
              </div>
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
                alt="Contact illustration"
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </section>

            {/* Last updated */}
            <div className="text-sm text-gray-500 pt-6 border-t border-gray-200">
              This Disclaimer was last updated on 10th July 2025.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
