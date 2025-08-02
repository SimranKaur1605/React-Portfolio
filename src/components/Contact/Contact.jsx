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
    <section className="bg-[#090008] text-white py-20 px-6 md:px-24 transition-all duration-300">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 tracking-wide hover:scale-105 transform transition duration-300">
          Let’s Connect
        </h2>
        <p className="text-white text-lg opacity-80">
          Have a question or want to work together? I’d love to hear from you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="col-span-1 md:col-span-2 p-4 rounded-xl bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffffff70] placeholder-white transition-all duration-300"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="col-span-1 md:col-span-2 p-4 rounded-xl bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffffff70] placeholder-white transition-all duration-300"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          className="col-span-1 md:col-span-2 p-4 rounded-xl bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffffff70] placeholder-white transition-all duration-300"
        ></textarea>

        <div className="col-span-1 md:col-span-2 text-center space-y-4">
          <button
            type="submit"
            className="bg-white text-[#090008] font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 hover:scale-105"
          >
            Send via WhatsApp
          </button>

          <p className="text-sm text-gray-300">
            Prefer email?{" "}
            <a
              href="mailto:kaur.simransawna@gmail.com"
              className="underline hover:text-gray-100"
            >
              Send me an email
            </a>
          </p>
        </div>
      </form>

      <div className="max-w-3xl mx-auto text-center mt-10">
        <p className="text-xs text-white italic">
          I respect your privacy. Your contact details are never shared.
        </p>
      </div>
    </section>
  );
}
