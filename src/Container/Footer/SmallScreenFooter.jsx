import React from "react";
import { SocialMedia } from "../../Components";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaMediumM } from "react-icons/fa";
import "./Footer.scss";

const SmallScreenFooter = () => {
  return (
    <section className="app__flex footer ft4">
      <div className="app__smallsocial">
        <div>
          <a href="https://twitter.com/001Refsilva" className="social__flex ">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a
            className="social__flex "
            href="https://www.linkedin.com/in/aiyegbajeje-yusuf/"
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a
            className="social__flex "
            href="https://medium.com/@yusufaiyegbajeje"
          >
            <FaMediumM />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SmallScreenFooter;
