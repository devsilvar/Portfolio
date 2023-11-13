import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../Constant";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src={images.LogoMain}
          alt="Logo"
          style={{ width: "100px", height: "50px" }}
        />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => {
          return (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(!Toggle)} />

        {Toggle && (
          <motion.div
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(!Toggle)} />
            <ul className="bbb">
              {["Home", "About", "Work", "Skills", "Contact"].map((item) => {
                return (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(!Toggle)}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
