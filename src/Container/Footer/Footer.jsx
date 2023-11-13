import React, { useState, useRef } from "react";
import { images } from "../../Constant";
import { AppWrap, MotionWrap } from "../../Wrapper";
// import { client } from "../../client";
import emailjs from "@emailjs/browser";

import "./Footer.scss";

const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const { name, email, message, subject } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(form.current);
    console.log(form);
    setLoading(false);

    const serviceId = "service_1jvkq19";
    const templateId = "template_ha4qz5a";
    const publicKey = "vV0vblRh9FF5rmrXh";
    const templateParams = {
      ...formData,
    };

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        console.log(response);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        console.log("error network" + error);
        setLoading(true);
      });

    console.log(formData);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="https:malto:yusufaiyegbajeje@gmail.com" className="p-text">
            yusufaiyegbajeje@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+2348148434507" className="p-text">
            +2348148434507
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="whatsapp" />
          <a href="https://wa.link/2tsdj2" className="p-text">
            Whatsapp
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form action="" ref={form} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
