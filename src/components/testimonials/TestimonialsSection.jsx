import React from "react";

// Replace these paths with actual image imports
import img1 from "../../assets/tagskill.png";
import img2 from "../../assets/BB pvt.png";
import img3 from "../../assets/Artiset-LMS.png"
import img4 from "../../assets/canarys_logo.jfif"
import img5 from "../../assets/scm-logo.png"
import img6 from "../../assets/wyraster.png"



const testimonials = [
  {
    img: img5,
    name: "Sourabh Sharma ",
    comp:"GANDIVA IT SERVICES PRIVATE LIMITED.",
    text: "Working with Rasta Infotech was a game-changer for our business. Their team quickly understood our requirements and delivered a high-quality solution ahead of schedule. Excellent communication and technical skills!",
  },
  {
    img: img2,
    name: "Aarav Mehta",
    comp:"BB Infotech Solutions Pvt Ltd",
    text: "Rasta Infotech helped us revamp our digital presence. From design to deployment, everything was handled with professionalism and attention to detail. We saw a 40% increase in user engagement within the first month.",
  },
  {
    img: img3,
    name: "Priya Nair",
    comp:"Artiset",
    text: "Their DevOps automation services streamlined our entire release cycle. What used to take days now takes just a few hours. Their team is knowledgeable, proactive, and genuinely cares about client success.",
  },
  {
    img: img6,
    name: "Rahul Verma",
    comp:"Wraystech Pvt Ltd",
    text: "We collaborated with Rasta Infotech on a complex web application, and they exceeded our expectations. The UI/UX was modern, responsive, and built with scalability in mind. Highly recommend them!",
  },
  {
    img: img1,
    name: "Anjali Desai",
    comp:"Tagskills",
    text: "Excellent service from start to finish. The team provided timely updates, clear documentation, and thoughtful suggestions that improved our product. They’ve become our go-to tech partner.",
  },
  {
    img: img4,
    name: "Karan Patel",
    comp:"Canarys Pvt Ltd",
    text: "I’ve worked with multiple vendors in the past, but none matched the efficiency and dedication of Rasta Infotech. They deliver what they promise, and they do it with integrity.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">WHAT OUR CLIENTS SAY</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="italic text-gray-600">"{testimonial.text}  "</p>
                <p className="font-bold mt-2">- {testimonial.name} / <span  className="text-gray-400">{testimonial.comp}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
