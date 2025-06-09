import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { client, urlFor } from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import './Work.scss';

const Work = () => {
  const refer = useRef('norefferrer');
  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });
  const [Works, setWorks] = useState([]);
  const [FilterWork, setFilterWork] = useState([]);

  async function getWorks() {
    const posts = await client.fetch('*[_type == "works"]');
    setWorks(posts);
    setFilterWork(posts);
    return posts;
  }

  useEffect(() => {
    getWorks();
  }, []);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setanimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);

      if (item == 'All') {
        setFilterWork(Works);
      } else {
        setFilterWork(Works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span> Section{' '}
      </h2>
      <div className='app__work-filter' style={{ marginBottom: '2rem' }}>
        {['SEO Content Writing', 'Javascript', 'React Js', 'NextJs', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {FilterWork.map((item, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(item.imgUrl)} alt={item.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'
              >
                <a href={item.projectLink} target='_blank' ref={refer}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={item.projectLink} target='_blank' ref={refer}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{item.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {item.description}
              </p>
              <div className='flex__tags'>
                {item.tags.map((e) => {
                  return (
                    <p className='tags' key={e}>
                      {e}
                    </p>
                  );
                })}
              </div>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{item.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'Work',
  'app__primarybg'
);
