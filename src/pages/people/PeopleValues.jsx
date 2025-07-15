import React, { useState } from "react";
import valuesBanner from "../../assets/terms.jpg";
import ContactModal from "../../components/ContactModal";

const valuesList = [
  {
    title: "Integrity",
    description:
      "Integrity is the foundation of trust, and trust is the foundation of everything we do. We uphold the highest standards of honesty and ethical conduct, encouraging courage and transparency in every action.",
  },
  {
    title: "Respect",
    description:
      "Respect is central to our culture. We value every individual’s voice and create inclusive spaces where everyone feels safe, supported, and empowered to be themselves.",
  },
  {
    title: "Innovation",
    description:
      "We encourage our people to think creatively and push boundaries. Innovation isn’t just about technology—it’s a mindset that powers every decision and every project.",
  },
  {
    title: "Collaboration",
    description:
      "We believe that collaboration fuels success. Through strong relationships and shared goals, our teams create solutions that are greater than the sum of their parts.",
  },
  {
    title: "Growth",
    description:
      "We invest in continuous learning and development through mentorship, certifications, and leadership opportunities—enabling both personal and professional growth.",
  },
  {
    title: "Empathy",
    description:
      "Empathy allows us to connect deeply—with one another and our communities. It shapes our inclusive culture and drives human-centered innovation.",
  },
  {
    title: "Accountability",
    description:
      "We take ownership, lead with confidence, and follow through with excellence. Accountability is about being responsible for both results and how we achieve them.",
  },
  {
    title: "Purpose",
    description:
      "Purpose gives our work meaning. Our mission is to use technology to create a better world—impacting lives and empowering communities beyond business goals.",
  },
];

const PeopleValues = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-slate-50 text-gray-800 pt-20">
      {/* Banner */}
      <section className="relative h-[420px] overflow-hidden rounded-b-3xl shadow-md text-justify">
        <img
          src={valuesBanner}
          alt="People Values at Rasta Infotech"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            People Values at Rasta Infotech
          </h1>
          <p className="text-lg max-w-3xl">
            The values we live by define who we are and how we grow—together.
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-16 text-justify">
        {/* Intro */}
        <Section
          title="Guided by Values, Driven by Purpose"
          content="At Rasta Infotech, our values are the heartbeat of our organization. They guide how we work, how we treat each other, and how we contribute to the world. These aren’t just principles—we live them every day, shaping our culture and defining the experience of being part of our team."
        />

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {valuesList.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Living Our Values */}
        <Section
        className="text-justify"
          title="How We Live Our Values"
          content={
            <>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Hiring with values in mind:</strong> We seek
                  individuals who align with our principles and bring integrity,
                  empathy, and passion to their work.
                </li>
                <li>
                  <strong>Leadership by example:</strong> Our leaders model our
                  values through their behaviors and decisions.
                </li>
                <li>
                  <strong>Values-based recognition:</strong> We reward those who
                  live our values through awards, shout-outs, and growth
                  opportunities.
                </li>
                <li>
                  <strong>Training and development:</strong> Programs include
                  communication, ethics, collaboration, and emotional
                  intelligence.
                </li>
              </ul>
            </>
          }
        />

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 text-justify">
          {[
            {
              quote:
                "The values at Rasta Infotech aren’t just slogans—they’re part of how we work and how we treat each other.",
              author: "Team Lead",
            },
            {
              quote:
                "I’ve grown so much here, not just professionally but personally. The culture encourages you to be your best self.",
              author: "Software Engineer",
            },
            {
              quote:
                "What stands out to me is the respect and empathy. You feel heard, valued, and supported. That’s why I stay.",
              author: "HR Manager",
            },
          ].map((item, i) => (
            <blockquote
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 italic text-gray-700"
            >
              “{item.quote}” — <strong>{item.author}</strong>
            </blockquote>
          ))}
        </div>

        {/* Conclusion */}
        <Section
        className="text-justify"
          title="Conclusion"
          content="Our people values are the soul of Rasta Infotech. They define who we are, how we operate, and what we stand for. By living these values every day, we create a workplace that is ethical, inclusive, innovative, and impactful. We’re proud of our culture—and excited for the future we’re shaping together."
        />

        {/* CTA */}
        <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">
            We Live Our Values
          </h3>
          <p className="text-lg text-gray-700 text-justify">
            At Rasta Infotech, values aren’t just what we believe—they’re what
            we live. Join a team that leads with integrity, empathy, and
            purpose.
          </p>
        </div>
      </div>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
};

// Reusable Section
const Section = ({ title, content }) => (
  <section>
    <h2 className="text-3xl font-bold text-blue-800 mb-4">{title}</h2>
    <div className="text-lg leading-relaxed text-justify">{content}</div>
  </section>
);

export default PeopleValues;
