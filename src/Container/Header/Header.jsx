import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../Constant";
import { AppWrap } from "../../Wrapper";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span> 👋 </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Yusuf</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p>Web Developer</p>
            <p>SEO Content Writer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img
          src={images.profile}
          width="70%"
          className="w-[70%]"
          alt="profile-bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          images.react,
          images.graphql,
          images.javascript,
          images.redux,
          images.typescript,
        ].map((item, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={item} alt="circle" />
          </div>
        ))}
      </motion.div>
      <button type="button" className="p-text app__flex ">
        <a
          className="p-text"
          href="https://drive.google.com/uc?export=download&id=1lTWrjYBuQkR0jKuabu1CjPlGHLvD1WHb"
        >
          Download CV <AiOutlineSafetyCertificate />
        </a>
      </button>
    </div>
  );
};

export default AppWrap(Header, "Home");
