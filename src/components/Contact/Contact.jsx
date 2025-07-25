import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    const whatsappNumber = "918053725999"; 
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hello Simran, my name is ${name}.\nSubject: ${subject}\n\n${message}`
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#090008] text-white py-12 px-6 md:px-24">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Contact Me 
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid grid-cols-1 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#090008]"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#090008]"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#090008]"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-white text-[#090008] py-1 px-3 rounded hover:bg-[#1c1c1c] transition"
        >
          Send via WhatsApp
        </button>
      </form>
    </section>
  );
}
