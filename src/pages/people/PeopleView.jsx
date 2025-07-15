import React, { useState } from "react";
import peopleBanner from "../../assets/terms.jpg";
import ContactModal from "../../components/ContactModal";


const PeopleView = () => {
    const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="bg-slate-50 text-gray-800 pt-20">
      {/* Banner */}
      <section className="relative h-[420px] overflow-hidden rounded-b-3xl shadow-md text-justify">
        <img
          src={peopleBanner}
          alt="People at Rasta Infotech"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">People View at Rasta Infotech</h1>
          <p className="text-lg max-w-4xl">
            Hear how our team experiences purpose, growth, and belonging every day at Rasta Infotech.
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-14">
        <Section
          title="More Than Just Employees"
          content="At Rasta Infotech, our people are more than just employees—they’re innovators, collaborators, and changemakers. The way our team members experience life here reflects our values, culture, and our commitment to empowering everyone to thrive."
        />

        <Section
          title="A Workplace Built on Trust and Respect"
          content="People at Rasta Infotech describe the environment as open, respectful, and inclusive. We believe that trust is the foundation of great teamwork, cultivated through transparent communication, ethical leadership, and a shared sense of purpose. Every individual is treated with dignity, and every idea is welcomed—regardless of title or tenure."
        />

        <QuoteSection
          title="Growth That Goes Beyond the Job"
          quote="Rasta Infotech gave me the freedom to grow, the support to learn, and the platform to lead. It’s more than a job—it’s a career path with purpose."
          author="Senior Developer"
          content="Our team members value the opportunities for personal and professional growth. From hands-on learning and mentorship to leadership development and cross-functional collaboration, Rasta Infotech is a place where careers flourish. Employees are encouraged to explore new roles, take on challenges, and continuously evolve in their journey."
        />

        <QuoteSection
          title="Innovation with Impact"
          quote="What I love most is that our work isn’t just technical—it’s meaningful. We’re solving problems that help people and communities."
          author="Product Designer"
          content="People at Rasta Infotech are proud to work on projects that matter. Whether it’s building AI-powered solutions, enhancing cybersecurity, or developing civic tech platforms, our teams know their work has real-world impact. The culture of innovation is driven by curiosity, collaboration, and a shared mission to use technology for good."
        />

        <QuoteSection
          title="A Culture of Belonging"
          quote="Rasta Infotech is the first place I’ve worked where I truly feel I belong. The support, the openness, the respect—it’s all real."
          author="HR Associate"
          content="Inclusivity is at the heart of our culture. Our people feel seen, heard, and valued for who they are. We celebrate diversity in all its forms and actively create spaces where everyone can be their authentic selves. From inclusive hiring practices to employee resource groups, we ensure that belonging isn’t just a buzzword—it’s a lived experience."
        />

        <QuoteSection
          title="Collaboration That Inspires"
          quote="The collaborative spirit here is unmatched. You’re never working alone—you’re always part of a team that lifts each other up."
          author="Project Manager"
          content="Teamwork is a cornerstone of life at Rasta Infotech. Our people thrive in a collaborative environment where cross-functional teams work together to solve complex challenges. Hackathons, brainstorming sessions, and open forums are regular features of our innovation culture. Everyone’s input matters, and everyone has a seat at the table."
        />

        <QuoteSection
          title="Wellness and Work-Life Balance"
          quote="Rasta Infotech respects your time, your health, and your life. It’s a company that truly values its people."
          author="QA Engineer"
          content="We care deeply about the well-being of our people. Employees appreciate the flexibility, wellness programs, and supportive policies that help them maintain a healthy work-life balance. Whether it’s remote work options, mental health resources, or time off to recharge, Rasta Infotech ensures that people feel cared for—inside and outside of work."
        />

        <QuoteSection
          title="Giving Back Together"
          quote="It feels amazing to work for a company that encourages us to give back. Whether it’s tech education or environmental projects, we’re making an impact."
          author="CSR Coordinator"
          content="Our people are passionate about making a difference beyond the workplace. Volunteering, social impact projects, and community engagement are part of our DNA. Employees take pride in contributing to causes they care about, and Rasta Infotech supports them every step of the way."
        />

        <Section
          title="Why People Stay"
          content="People stay at Rasta Infotech because they feel connected—to the mission, to the team, and to their own growth. It’s a place where careers are built, friendships are formed, and futures are shaped. The sense of purpose, the culture of care, and the opportunities to innovate make Rasta Infotech more than just a workplace—it’s a community."
        />

        {/* Join CTA */}
        <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Join the Experience</h3>
          <p className="text-lg text-gray-700 text-justify">
            If you’re looking for a company where your voice matters, your growth is supported,
            and your work makes a difference, Rasta Infotech is the place to be. Discover what
            it’s like to be part of a team that values people, celebrates progress, and leads with purpose.
          </p>
          <p className="mt-4 text-xl font-semibold text-blue-700">Come see what our people see. Come be part of Rasta Infotech.</p>
        </div>
      </div>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
};

// Reusable text section
const Section = ({ title, content }) => (
  <section>
    <h2 className="text-3xl font-bold text-blue-800 mb-4">{title}</h2>
    <p className="text-lg leading-relaxed text-gray-700 text-justify">{content}</p>
  </section>
);

// Reusable section with a testimonial
const QuoteSection = ({ title, quote, author, content }) => (
  <section className="bg-white rounded-3xl shadow-md p-8 space-y-4">
    <h2 className="text-2xl font-semibold text-green-700">{title}</h2>
    <p className="text-gray-700 text-justify">{content}</p>
    <blockquote className="italic border-l-4 border-green-500 pl-4 text-gray-600">
      “{quote}” — <strong>{author}</strong>
    </blockquote>
  </section>
);

export default PeopleView;
