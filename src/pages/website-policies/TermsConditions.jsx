import React from "react";
import termsBanner from "../../assets/blockchainbannerimg1.jfif"; // Replace with your banner image

const TermsConditions = () => {
  return (
    <>
      <div className="text-[#1a1a1a]">
        {/* Banner */}
        <section
          className="relative  h-[300px] md:h-[500px] flex items-center justify-center"
          style={{ backgroundImage: `url(${termsBanner})` }}
        >
          <div className="absolute inset-0"></div>
          <div className="text-center text-white relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
          Home &gt; <span className="text-blue-600">Terms & Conditions</span>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-16 space-y-12 text-base md:text-lg leading-8 text-gray-800">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p>
              These terms and conditions ("Terms", "Agreement") are an agreement
              between <strong>Rasta Infotech Pvt. Ltd.</strong> and you ("User",
              "you" or "your"). This Agreement sets forth the general terms and
              conditions of your use of the rastainfotech.com website and any of
              its products or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
            <p>
              By accessing or using our Website, you confirm that you accept
              these Terms and agree to comply with them. If you do not agree to
              these Terms, you must not use our Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Eligibility</h2>
            <p>
              You must be at least 18 years old to use this website. By using this
              site, you represent and warrant that you meet the age requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Use of Website</h2>
            <p>
              You are granted a limited license only for accessing the Website for
              personal and non-commercial use. The following activities are
              prohibited:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Republishing content from the Website</li>
              <li>Selling, renting or sub-licensing Website material</li>
              <li>Using this Website in any way that is damaging</li>
              <li>Engaging in data mining or any similar activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">User Content</h2>
            <p>
              Any content you submit, including audio, video, text, or images,
              remains your responsibility. You grant us a non-exclusive,
              royalty-free, transferable license to use, reproduce, and distribute
              your content across our services. You must ensure you have the legal
              right to use and share any content you upload.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">No Warranties</h2>
            <p>
              This Website is provided "as is," with all faults, and we express no
              representations or warranties of any kind related to this Website or
              the materials contained on it. Use at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
            <p>
              In no event shall Rasta Infotech Pvt. Ltd. or its employees be held
              liable for anything arising out of or in any way connected with your
              use of this Website. We are not liable for indirect, consequential,
              or special liability related to the use of this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Indemnification</h2>
            <p>
              You agree to indemnify Rasta Infotech Pvt. Ltd. and its affiliates
              against all liabilities, damages, and expenses arising from your
              violation of these Terms or use of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid under any
              applicable law, such provisions shall be deleted without affecting
              the remaining provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Variation of Terms</h2>
            <p>
              Rasta Infotech Pvt. Ltd. may revise these Terms at any time. You are
              expected to review them regularly. Continued use of the Website
              means you accept the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Assignment</h2>
            <p>
              Rasta Infotech may assign, transfer, and subcontract its rights and
              obligations under these Terms without notification. You are not
              permitted to do the same.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Entire Agreement</h2>
            <p>
              These Terms, including legal notices and disclaimers, constitute the
              entire agreement between Rasta Infotech Pvt. Ltd. and you regarding
              your use of this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of India. You agree to submit
              to the jurisdiction of the courts in Delhi for the resolution of any
              disputes.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p>
                If you have questions about these Terms and Conditions, please
                contact us at:
                <br />
                <strong>Email:</strong> info@rastainfotech.com
                <br />
                <strong>Address:</strong> 23 2nd Cross, Near Malnad Coaching
                Center, MHR Layout, Bangalore North, Karnataka, India, 560090
              </p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
              alt="Contact illustration"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </section>

          <div className="text-gray-500 text-sm pt-4 border-t mt-6">
            This Terms & Conditions page was last updated on 10th July 2025.
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
