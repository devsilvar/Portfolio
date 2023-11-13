import { motion } from "framer-motion";
import "./About.scss";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { AppWrap , MotionWrap} from "../../Wrapper";

const builder = imageUrlBuilder(client);

const About = () => {
  const [abouts, setabouts] = useState([]);
  const [first, setfirst] = useState();

  async function getPosts() {
    const posts = await client.fetch('*[_type == "abouts"]');
    setabouts(posts);
    return posts;
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h2 className="head-text">
        <br />I Know That <span> Good Dev </span> <br /> means{" "}
        <span> Good Business </span>{" "}
      </h2>
      <div className="app__profiles">
        {abouts.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1, type: "tween" }}
            key={`about.title${index}`}
            className="app__profile-item"
          >
            <img src={urlFor(item.imgUrl)} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);
