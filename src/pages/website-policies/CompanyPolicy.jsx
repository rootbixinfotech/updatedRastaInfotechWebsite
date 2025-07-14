import React from "react";
import privacyPolicy from "../../assets/blockchainbannerimg1.jfif";
// import contactImage from "../../assets/cyber-security-1.jpg"; // Add any image you want

const CompanyPolicy = () => {
  return (
    <div className="text-[#1a1a1a]">
      {/* Banner */}
      <section
        className="relative h-[300px] md:h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${privacyPolicy})` }}
      >
        <div className="absolute inset-0 "></div>
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm md:text-base text-gray-600">
        Home &gt; <span className="text-blue-600">Privacy Policy</span>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16 space-y-12 text-base md:text-lg leading-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            Introduction
          </h2>
          <p>
            Welcome to <strong>Rasta Infotech Pvt. Ltd.</strong> (“we”, “our”,
            “us”). This Privacy Policy outlines our practices regarding the
            collection, use, and disclosure of information when you use our
            website, <strong>rastainfotech.com</strong>. We are committed to
            protecting your privacy and ensuring that your personal information
            is handled safely and responsibly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            Information We Collect
          </h2>
          <h3 className="font-bold mt-4 mb-2">Personal Information:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold mb-2">Usage Data:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited</li>
            <li>Time and date of visits</li>
            <li>Time spent on pages</li>
            <li>Other diagnostic data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies to monitor activity
            on our Site and hold certain information. Cookies are files with a
            small amount of data, which may include an anonymous unique
            identifier...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>To provide and maintain our Site</li>
            <li>To notify you about changes to our Site</li>
            <li>To allow participation in interactive features</li>
            <li>To provide customer support</li>
            <li>To improve our Site</li>
            <li>To monitor usage</li>
            <li>To detect and address technical issues</li>
            <li>To fulfill other purposes you provide it for</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            Sharing Your Information
          </h2>
          <p>
            We may share your information under the following circumstances:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>With your consent</li>
            <li>With service providers</li>
            <li>To protect our rights</li>
            <li>To comply with legal obligations</li>
            <li>To protect personal safety</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            Security of Your Information
          </h2>
          <p>
            At <strong>Rasta Infotech</strong>, we prioritize the protection of
            your personal data. We implement commercially acceptable security
            measures including encryption, secure servers, and access controls
            to safeguard your information. However, please note that no method
            of transmission over the Internet or method of electronic storage is
            100% secure. While we strive to use the best practices to protect
            your data, we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            Links to Other Sites
          </h2>
          <p>
            Our website may contain links to external sites that are not
            operated by <strong>Rasta Infotech</strong>. These links are
            provided for your convenience, but we do not control or endorse the
            content or privacy practices of these third-party websites. We
            strongly encourage you to review the privacy policies of any site
            you visit before sharing personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            Children’s Privacy
          </h2>
          <p>
            The services provided by <strong>Rasta Infotech</strong> are not
            intended for individuals under the age of 18. We do not knowingly
            collect personal information from children without verified parental
            consent. If we become aware that we have inadvertently received
            personal data from a child, we will take steps to delete such
            information from our records promptly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B121B] mb-2">
            Changes to This Privacy Policy
          </h2>
          <p>
            <strong>Rasta Infotech</strong> reserves the right to update or
            modify this Privacy Policy at any time. Any changes will be
            reflected on this page along with a revised effective date. We
            encourage users to periodically review this policy to stay informed
            about how we are protecting the information we collect.
          </p>
        </section>

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

        <div className="text-gray-500 text-sm pt-4 border-t mt-8">
          This Privacy Policy was last updated on 07th July 2025.
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicy;
