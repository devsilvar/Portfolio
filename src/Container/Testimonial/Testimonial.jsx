import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import imageUrlBuilder from '@sanity/image-url';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
    console.log(currentIndex);
  };

  async function getTestimony() {
    const Testimony = await client.fetch('*[_type == "testimonials"]');
    const brandsQuery = await client.fetch('*[_type == "brands"]');

    setTestimonials(Testimony);
    setBrands(brandsQuery);
  }

  useEffect(() => {
    getTestimony();
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div
            className='app__testimonial-item app__flex'
            style={{ margin: '5rem auto' }}
          >
            <img
              src={urlFor(testimonials[currentIndex].imageURL)}
              alt={testimonials[currentIndex].name}
            />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className='bold-text'>{testimonials[currentIndex].name}</h4>
                <h5 className='p-text'>{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div
        className='app__testimonial-brands app__flex'
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      ></div>
    </>
  );
};

export default Testimonial;

// AppWrap(
//   MotionWrap(Testimonial, "app__testimonial"),
//   "Testimonials",
//   "app__primarybg"
// );
