import { EmailJSResponseStatus } from "@emailjs/browser";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //   service_3r1vgtf  emailjs

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    // service id, template id, {format}, public key

    try {
        await emailjs.send("service_3r1vgtf", "template_dmdna5m", {
            from_name: form.name,
            to_name: 'Pavan',
            from_email: form.email,
            to_email: 'pavan111222111@gmail.com',
            message: form.message,
          },'r2EqbXIo64k22Qfbf');
          alert('sent')

          setForm({
            name: "",
            email: "",
            message: "",
          })
    } catch (err) {
console.log(err)
    }
    finally{
        setLoading(false)
    }
    
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col m-auto">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container ">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're interested build something in life or have any plans
            bring it to me I'd deffinitely help you. Feel free to reach out if
            you have any questions or want to work together.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                className="field-input"
                value={form.name}
                required
                placeholder="Pavan Kumar"
                onChange={handleChange}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                className="field-input"
                value={form.email}
                required
                placeholder="pavan@gmail.com"
                onChange={handleChange}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                rows={6}
                className="field-input"
                value={form.message}
                required
                placeholder="Say something..."
                onChange={handleChange}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
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
