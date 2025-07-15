import React, { useState } from "react";
import communityImage from "../../assets/socialImapactpeopleimg-1.jfif";
import educationImage from "../../assets/socialimpacepeopleimage-2.jfif";
// import volunteeringImage from "../../assets/volunteering.jpg";
// import greenOfficeImage from "../../assets/green-office.jpg";
// import techForGoodImage from "../../assets/tech-for-good.jpg";
// import ethicalBizImage from "../../assets/ethical-practice.jpg";
import socialBanner from "../../assets/socialbanner.jfif";
import ContactModal from "../../components/ContactModal";
import { useNavigate } from "react-router-dom";

const SocialPeopleImpact = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-12 max-w-[1400px] mx-auto space-y-20 pt-30">
      {/* Page Header */}
      <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md mb-10">
        <img
          src={socialBanner}
          alt="Social impact banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Social & People Impact
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Driving inclusive growth, community development, and environmental
            responsibility through purposeful action.
          </p>
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
      </div>

      {/* Introduction */}
      <section className="space-y-4 text-justify">
        <p>
          At <strong>Rasta Infotech</strong>, we believe that true success is
          measured not only by innovation and growth but also by the positive
          impact we create in the lives of people and communities. Our
          commitment to social responsibility is deeply embedded in our values
          and business practices. We strive to be a force for good—empowering
          individuals, supporting communities, and contributing to a more
          inclusive and equitable world.
        </p>
      </section>

      {/* Empowering People */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Empowering People Through Opportunity
          </h2>
          <p className="mb-4 text-justify">
            People are at the heart of everything we do. Whether it’s our
            employees, partners, or the communities we serve, we are dedicated
            to creating opportunities that uplift and empower.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Inclusive Hiring & Diversity:</strong> We ensure equal
              opportunity for all and support underrepresented groups in tech.
            </li>
            <li>
              <strong>Employee Well-being:</strong> Wellness programs, flexible
              work, and growth initiatives for a thriving workforce.
            </li>
          </ul>
        </div>
        <img
          src={communityImage}
          alt="Empowering People"
          className="rounded-xl shadow-md object-cover h-[400px] w-full"
        />
      </section>

      {/* Community Engagement */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={educationImage}
          alt="Digital Literacy"
          className="rounded-xl shadow-md object-cover h-[400px] w-full"
        />
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Community Engagement & Development
          </h2>
          <p>
            We are committed to making a meaningful difference in the
            communities where we live and work.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700">
            <li>
              <strong>Education & Digital Literacy:</strong> We provide access
              to technology, coding workshops, and training for students.
            </li>
            <li>
              <strong>Volunteering:</strong> Employees participate in drives,
              cleanups, and mentoring with paid volunteer time.
            </li>
            <li>
              <strong>Local Economies:</strong> We support small businesses and
              community vendors to drive sustainable growth.
            </li>
          </ul>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Environmental Responsibility
          </h2>
          <p className="text-justify">
            We integrate sustainability into everything we do—because social
            impact and environmental stewardship go hand in hand.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700 text-justify">
            <li>
              <strong>Green Offices:</strong> Energy-efficient systems,
              paperless practices, and employee-led eco-initiatives.
            </li>
            <li>
              <strong>Climate Action:</strong> Renewable energy, carbon offsets,
              and support for reforestation projects.
            </li>
          </ul>
        </div>
        <img
          src={communityImage}
          alt="Green Initiatives"
          className="rounded-xl shadow-md object-cover h-[400px] w-full"
        />
      </section>

      {/* Technology for Good */}
      <section className="grid md:grid-cols-2 gap-12 items-center text-justify">
        <img
          src={educationImage}
          alt="Technology for Good"
          className="rounded-xl shadow-md object-cover h-[400px] w-full"
        />
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Technology for Good
          </h2>
          <p>
            We use innovation to address pressing social challenges and improve
            lives.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700">
            <li>
              <strong>Accessible Solutions:</strong> Inclusive design and
              assistive technologies for all abilities, ensuring digital equity
              and usability across diverse user groups.
            </li>
            <li>
              <strong>Social Projects:</strong> Platforms for education, health,
              disaster response, and civic tech that address real-world
              challenges and improve lives.
            </li>
            <li>
              <strong>Digital Inclusion:</strong> Bridging the digital divide by
              providing access to technology and internet connectivity in
              underserved communities.
            </li>
            <li>
              <strong>Tech for Education:</strong> Developing tools and
              resources that support remote learning, skill development, and
              lifelong education.
            </li>
            <li>
              <strong>Environmental Tech:</strong> Leveraging data and AI to
              monitor climate change, optimize energy use, and support
              sustainability efforts.
            </li>
            <li>
              <strong>Healthcare Innovation:</strong> Creating digital platforms
              that improve access to medical services, telehealth, and health
              data management.
            </li>
          </ul>
        </div>
      </section>

      {/* Ethical Business */}
      <section className="grid md:grid-cols-2 gap-12 items-center text-justify">
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Ethical Business Practices
          </h2>
          <p>
            Integrity and transparency are the foundation of how we do business.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700">
            <li>
              <strong>Fair Labor:</strong> No forced or child labor. Full human
              rights compliance across the supply chain.
            </li>
            <li>
              <strong>Data Privacy:</strong> Robust data protection protocols
              and global regulation compliance.
            </li>
            <li>
              <strong>Anti-Corruption:</strong> Zero tolerance for bribery and
              unethical business conduct across all operations.
            </li>
            <li>
              <strong>Transparency:</strong> Open communication and honest
              reporting in all stakeholder interactions.
            </li>
            <li>
              <strong>Responsible Sourcing:</strong> Partnering only with
              vendors who share our ethical and sustainability values.
            </li>
            <li>
              <strong>Whistleblower Protection:</strong> Safe and confidential
              channels for reporting misconduct without fear of retaliation.
            </li>
            <li>
              <strong>Compliance Training:</strong> Regular education for
              employees on laws, regulations, and ethical standards.
            </li>
          </ul>
        </div>
        <img
          src={communityImage}
          alt="Ethical Practices"
          className="rounded-xl shadow-md object-cover h-[400px] w-full"
        />
      </section>

      {/* Impact & Future */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-700">
          Measuring Our Impact
        </h2>
        <p className="text-justify">
          We believe in accountability and transparency. That’s why we track and
          report our impact through measurable goals—from the number of students
          trained to the amount of carbon offset. At{" "}
          <strong>Rasta Infotech</strong>, we use data-driven insights to
          evaluate the effectiveness of our social, environmental, and community
          initiatives. Our internal dashboards monitor key performance
          indicators (KPIs) across education outreach, employee engagement,
          sustainability efforts, and volunteer hours. We also publish periodic
          impact reports to share our progress with stakeholders and the public.
          Feedback from employees, partners, and community members helps us
          refine our approach and ensure our efforts remain relevant, inclusive,
          and impactful.
        </p>

        <h2 className="text-3xl font-semibold text-green-700">Looking Ahead</h2>
        <p className="text-justify">
          As we grow, so does our responsibility. We continue to deepen our
          partnerships, expand our initiatives, and build a future where
          technology empowers people and businesses lead with purpose.{" "}
          <strong>Rasta Infotech</strong> is committed to scaling its social
          impact by investing in long-term programs that promote digital
          inclusion, environmental sustainability, and ethical innovation. We
          are exploring new collaborations with NGOs, educational institutions,
          and local governments to reach underserved communities and create
          lasting change. Our vision is to become a catalyst for positive
          transformation—where every product we build and every decision we make
          contributes to a better, more equitable world. The journey ahead is
          full of possibilities, and we are excited to lead with purpose,
          compassion, and integrity.
        </p>
      </section>

      {/* Conclusion */}
      {/* <section className="text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">
          Conclusion
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Social and people impact is not a side initiative—it’s a core part of
          who we are. At Rasta Infotech, we are committed to building a better
          world through inclusive growth, environmental care, and ethical
          innovation.
        </p>
      </section> */}
      
      <div className="px-4 sm:px-8 lg:px-20 mb-0">
        <div className="bg-[#eeeeee] rounded-2xl py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Partner with Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Whether you're a startup building your governance framework or an
              enterprise strengthening its responsible practices, Rasta Infotech
              offers strategic consulting, tools, and support for long-term,
              sustainable growth.
          </p>

          <button
            type="submit"
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-500 transition w-full sm:w-auto"
          >
            Contact Us Today
          </button>
        </div>
      </div>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default SocialPeopleImpact;
