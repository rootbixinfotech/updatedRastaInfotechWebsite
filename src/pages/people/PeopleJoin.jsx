import React, { useState } from "react";
import joinBanner from "../../assets/terms.jpg";
import ContactModal from "../../components/ContactModal";

const PeopleJoin = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-slate-100 text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative h-[420px] rounded-b-3xl overflow-hidden shadow-md">
        <img
          src={joinBanner}
          alt="People Join Rasta Infotech"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">People Join</h1>
          <p className="text-lg max-w-3xl">
            Discover how <strong>Rasta Infotech</strong> empowers individuals,
            nurtures talent, and builds a purpose-driven community.
          </p>
        </div>
      </section>

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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-16">
        {/* Sections */}
        <Section
          title="Introduction"
          color="blue"
          content="At Rasta Infotech, we believe that people are the driving force behind innovation, growth, and transformation. When individuals choose to join us, they’re not just starting a job—they’re becoming part of a purpose-driven community."
        />

        <CardSection title="A Culture of Belonging">
          We foster an inclusive environment where every voice is heard, every
          idea is valued, and every individual is respected. At{" "}
          <strong>Rasta Infotech</strong>, we believe that diversity is our
          strength and belonging is our foundation. Our culture encourages open
          dialogue, mutual respect, and collaboration across all levels of the
          organization. We actively celebrate different backgrounds,
          perspectives, and experiences, knowing that they enrich our workplace
          and fuel innovation. Our onboarding process ensures new team members
          feel welcomed, supported, and confident from day one, with
          personalized guidance, mentorship, and access to resources that help
          them thrive. Whether you're working remotely or on-site, we make sure
          you feel connected, appreciated, and empowered to be your authentic
          self.
        </CardSection>

        <CardSection title="Meaningful Work">
          We work on impactful projects across AI, cloud, cybersecurity, and
          civic tech. At <strong>Rasta Infotech</strong>, it's not just about
          writing code—it’s about solving real-world problems and creating
          technology that drives meaningful change. Our teams collaborate on
          solutions that improve access to education, enhance public safety,
          support healthcare innovation, and promote digital inclusion. Every
          project is an opportunity to make a difference, whether it's building
          scalable cloud platforms for nonprofits, developing AI tools for
          smarter decision-making, or securing digital infrastructure for
          vulnerable communities. We take pride in knowing that our work
          contributes to a better, more connected world—where technology serves
          people, not just processes.
        </CardSection>

        <CardSection
          title="Work-Life Balance"
          list={[
            "Mental health support and counseling",
            "Fitness and mindfulness programs",
            "Flexible work models",
            "Family-friendly policies",
          ]}
        />

        <CardSection title="Collaboration & Innovation">
          Hackathons, brainstorming sessions, and a culture of curiosity define
          our innovation approach. At <strong>Rasta Infotech</strong>, we
          believe that great ideas can come from anywhere—and we make space for
          everyone to contribute, from interns to senior leaders. Our teams work
          in agile, cross-functional environments where experimentation is
          encouraged and failure is seen as a stepping stone to growth. We host
          regular innovation challenges, design sprints, and collaborative
          workshops to spark creativity and solve complex problems. By combining
          diverse perspectives with cutting-edge technology, we turn bold ideas
          into impactful solutions that shape the future.
        </CardSection>

        <CardSection
          title="Recognition & Rewards"
          list={[
            "Performance bonuses and spot awards",
            "Peer recognition and team outings",
            "Annual celebrations",
          ]}
        />

        <CardSection
          title="Social Impact & Volunteering"
          list={[
            "Digital literacy and tech education outreach for underserved communities",
            "Environmental projects including tree planting, clean-up drives, and sustainability campaigns",
            "Partnerships with NGOs, schools, and social groups to support health, education, and empowerment",
            "Employee volunteering programs with paid volunteer days and donation matching",
            "Support for disaster relief and humanitarian aid through tech-enabled solutions",
            "Community engagement events that promote awareness and civic responsibility",
            "Mentorship programs for students and aspiring professionals in STEM fields",
          ]}
        />

        {/* Testimonials */}
        <section className="bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Why People Join Rasta Infotech
          </h2>
          <div className="space-y-4 text-gray-700">
            <blockquote className="italic border-l-4 border-blue-600 pl-4">
              “Rasta Infotech gave me the platform to grow beyond my
              expectations. The culture here is inclusive, the work is exciting,
              and the people are amazing.” — <strong>Software Engineer</strong>
            </blockquote>
            <blockquote className="italic border-l-4 border-blue-600 pl-4">
              “I joined for the tech, but stayed for the people.” —{" "}
              <strong>UX Designer</strong>
            </blockquote>
            <blockquote className="italic border-l-4 border-blue-600 pl-4">
              “We’re not just building products—we’re building a better future.”
              — <strong>Project Manager</strong>
            </blockquote>
          </div>
        </section>

        {/* Conclusion */}
        <Section
          title="Conclusion"
          color="blue"
          content="If you’re looking for a place to grow, make a difference, and be your authentic self, Rasta Infotech is the place to be. We’re not just building technology—we’re building a culture of innovation, inclusion, and impact. Here, your ideas matter, your growth is supported, and your contributions help shape a better future. Whether you're starting your career or seeking your next big challenge, you'll find purpose, passion, and possibility with us. Join us. Build with us. Grow with us. Lead with us—and be part of something truly meaningful."
        />
      </div>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

// Reusable Section with plain content
const Section = ({ title, content, color = "green" }) => (
  <section>
    <h2 className={`text-3xl font-bold text-${color}-700 mb-4`}>{title}</h2>
    <p className="text-lg leading-relaxed text-gray-700">{content}</p>
  </section>
);

// Card-style Section with optional list
const CardSection = ({ title, children, list = [] }) => (
  <section className="bg-white rounded-3xl shadow-md p-8">
    <h2 className="text-2xl font-semibold text-green-700 mb-4">{title}</h2>
    {list.length > 0 ? (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-700 leading-relaxed">{children}</p>
    )}
  </section>
);

export default PeopleJoin;
