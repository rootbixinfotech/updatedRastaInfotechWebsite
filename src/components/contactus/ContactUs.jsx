import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [messageText, setMessageText] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    // const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("number");
    const message = formData.get("message") || "";

    const wordCount = message.trim().split(/\s+/).length;

    // Validations
    // if (!/^[A-Za-z\s]+$/.test(name)) {
    //   toast.error("Name must contain only alphabets and spaces.");
    //   return;
    // }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      toast.error("Mobile number must be exactly 10 digits.");
      return;
    }

    if (wordCount > 100) {
      toast.error("Message should not exceed 100 words.");
      return;
    }

    emailjs
      .sendForm("service_9qlbiyd", "template_ztkevcd", form.current, {
        publicKey: "_SUeNZvl9SCvVsOCi",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setMessageText("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="py-16 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 px-6 py-20 text-center rounded-3xl mx-4 md:mx-24 shadow-xl mt-18">
        <p className="text-indigo-700 text-lg font-bold uppercase tracking-widest">
          Contact Us
        </p>
        <h2 className="text-indigo-900 text-5xl font-extrabold mt-3 mb-4 leading-tight">
          Let’s Connect and Collaborate
        </h2>
        <p className="text-indigo-700 max-w-3xl mx-auto text-lg">
          Reach out today and find out how we can help transform your business
          with intelligent solutions and expert guidance.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
        {[
          {
            icon: <FaEnvelope className="h-9 w-8" />,
            text: "info@rastainfotech.com",
            text2: "",
            description:
              "Email us for project inquiries, support, or general information.",
          },
          {
            icon: <FaPhoneAlt className="h-9 w-8" />,
            text: "+91-97425-07066",
            description:
              "Call our team directly for immediate assistance or consultation.",
          },
          {
            icon: <FaMapMarkerAlt className="h-9 w-8" />,
            text: "Bangalore, Karnataka, India",
            description:
              "Our headquarters are located in the tech hub of Bangalore.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-indigo-50 to-white text-center p-8 rounded-3xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 flex gap-4"
          >
            <div className="text-indigo-600 mb-4 flex">{item.icon}</div>
            <div className="flex-col text-justify gap-2">
              <p className="text-md text-gray-800 font-semibold">{item.text}</p>
              <p className="text-md text-gray-500 font-semibold">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl mx-auto grid md:grid-cols-3 mt-10">
        {/* Contact Info Left */}
        <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 p-8 rounded-l-2xl flex flex-col gap-6 justify-center text-gray-800">
          <h3 className="text-xl font-semibold text-blue-700">
            Contact Information
          </h3>
         
          <div className="flex flex-col gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" />
              <span>+91-97425-07066</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <span>info@rastainfotech.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>
                Office Address : 23 2nd Cross, Near Malnad, Coaching Center MHR
                Layout, Bangalore North, Karnataka, India-560090
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="md:col-span-2 p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            pattern="[A-Za-z\s]+"
            className="border-b-2 border-gray-300 focus:border-teal-500 py-2 px-1 outline-none bg-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border-b-2 border-gray-300 focus:border-teal-500 py-2 px-1 outline-none bg-transparent"
          />
          <input
            type="text"
            name="number"
            placeholder="Your mobile no"
            maxLength="10"
            pattern="\d*"
            className="border-b-2 border-gray-300 focus:border-teal-500 py-2 px-1 outline-none bg-transparent"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message here"
            className="border-b-2 border-gray-300 focus:border-teal-500 py-2 px-1 outline-none bg-transparent md:col-span-2"
            value={messageText}
            onChange={(e) => {
              const value = e.target.value;
              const wordCount = value
                .trim()
                .split(/\s+/)
                .filter(Boolean).length;

              if (wordCount <= 100) {
                setMessageText(value);
              } else {
                toast.error("Message cannot exceed 300 words.");
              }
            }}
          ></textarea>
          <div className="text-sm text-gray-500 md:col-span-2 text-right">
            {messageText.trim().split(/\s+/).filter(Boolean).length} / 100 words
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-500 transition w-full sm:w-auto"
          >
            Get in touch
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default ContactUs;
