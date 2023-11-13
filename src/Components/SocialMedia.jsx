import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaMediumM } from "react-icons/fa";
import "../Components/Comp.scss";
const SocialMedia = () => {
  return (
    <div className="app__social">
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
  );
};

export default SocialMedia;
