import React from "react";
import cookiesBanner from "../../assets/blockchainbannerimg1.jfif"; // Replace with your image

const CookiesPolicy = () => {
  return (
    <div className="text-[#1a1a1a]">
      {/* Banner */}
      <section
        className="relative bg-center bg-cover h-[500px] md:h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${cookiesBanner})` }}
      >
        <div className="absolute inset-0 "></div>
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Cookies</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
        Home &gt; <span className="text-blue-600">Cookies</span>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16 space-y-10 text-base md:text-lg leading-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p>
            This Cookie Policy explains how <strong>Rasta Infotech Pvt. Ltd.</strong> ("we", "our", "us")
            uses cookies and similar technologies to recognize you when you visit our website at
            rastainfotech.com ("Site"). It explains what these technologies are, why we use them, and
            your rights to control our use of them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">What Are Cookies?</h2>
          <p>
            Cookies are small data files placed on your computer or mobile device when you visit a
            website. They are used to make websites function properly, more efficiently, and to
            provide reporting information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Types of Cookies We Use</h2>
          <p>We use the following types of cookies on our Site:</p>

          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-bold">1. Necessary Cookies:</h3>
              <p>
                These cookies are essential for the operation of our Site. They enable you to navigate
                the Site and use its features. Without these cookies, certain services cannot be
                provided.
              </p>
            </div>

            <div>
              <h3 className="font-bold">2. Analytics Cookies:</h3>
              <p>
                These cookies collect data about how you use the Site, like which pages you visit most
                often. This data is aggregated and anonymous, used only to improve performance.
              </p>
            </div>

            <div>
              <h3 className="font-bold">3. Functionality Cookies:</h3>
              <p>
                These cookies help remember choices you’ve made, such as language or font preferences,
                to enhance your experience and personalize content.
              </p>
            </div>

            <div>
              <h3 className="font-bold">4. Advertising Cookies:</h3>
              <p>
                These cookies deliver ads more relevant to your interests. They also limit how often
                you see ads and measure ad campaign effectiveness. These may be shared with third
                parties like advertisers.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Third-Party Cookies</h2>
          <p>
            We may also use cookies from trusted third parties like analytics platforms or advertising
            networks. These are governed by their respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Managing Cookies</h2>
          <p>
            You can manage cookies through your browser settings. Most web browsers allow you to
            refuse or delete cookies. However, disabling cookies may affect the functionality of our
            website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Your Consent</h2>
          <p>
            By continuing to use our Site, you consent to the use of cookies in accordance with this
            Cookie Policy. If you do not agree, you should set your browser settings accordingly or not
            use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Changes to This Cookie Policy</h2>
          <p>
            We may update this policy to reflect changes in our practices or legal obligations. Please
            review it periodically to stay informed.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other tracking technologies,
              contact us at:
              <br />
              <strong>Email:</strong> info@rastainfotech.com
              <br />
              <strong>Address:</strong> 23 2nd Cross, Near Malnad Coaching Center, MHR Layout,
              Bangalore North, Karnataka, India, 560090
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/cookie-policy-concept-illustration_114360-7454.jpg"
            alt="Cookies policy illustration"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </section>

        <div className="text-gray-500 text-sm pt-4 border-t mt-6">
          This Cookie Policy was last updated on 10th July 2025.
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
