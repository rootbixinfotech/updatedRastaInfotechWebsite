import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    // Validation
    if (!/^[A-Za-z\s]+$/.test(name)) {
      toast.error("Name must contain only alphabets and spaces.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return;
    }

    // Success
    setSubmitted(true);
    toast.success("Submitted successfully!");

    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-3xl shadow-xl w-full max-w-md p-8 animate-fade-in"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
          Get in Touch
        </h2>

        {submitted ? (
          <div className="text-center text-green-600 text-lg font-medium">
            Thank you! We'll get back to you soon.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                maxLength="10"
                pattern="\d*"
                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={4}
                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default ContactModal;
