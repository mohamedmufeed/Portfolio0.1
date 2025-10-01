import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_x1dsypo",
        "template_7g1xbb9",
        {
          from_name: form.name,
          to_name: "Mufeed",
          from_email: form.email,
          to_email: "mohamedmufeed44@gmail.com",
          message: form.message,
        },
        "foJ2hSfYzwjCbuHWd"
      );
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" }); 
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
<h3 className="head-text">Let's talk</h3>

          <p className="text-lg text-white-600 mt-3">
            I’d love to hear from you! Whether you have a question, a project
            idea, or just want to say hi, feel free to reach out.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="" className="space-y-3 ">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Jhone Doe"
              />
            </label>
            <label htmlFor="" className="space-y-3 ">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="jhonedoe@gmail.com"
              />
            </label>
            <label htmlFor="" className="space-y-3 ">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                rows={5}
                placeholder="Hi , I'm interested in...."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
