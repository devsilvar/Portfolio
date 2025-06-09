import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../Wrapper';
import fullStack from '/fullstack.png';
import {
  AiFillCode,
  AiFillRobot,
  AiFillBulb,
  AiFillTrophy,
  AiFillEye,
  AiFillDatabase,
} from 'react-icons/ai';
import './train.scss';

const Training = () => {
  const [selectedModule, setSelectedModule] = useState('All');
  const [animateCards, setAnimateCards] = useState({ y: 0, opacity: 1 });
  const pricingPlans = [
    {
      name: 'Premium',
      price: '$200',
      duration: 'Full 6-Month Program',
      features: [
        'Personal mentor',
        'Priority support',
        '3 career coaching sessions',
        'Project feedback',
        'Professional Certificate ',
      ],
      popular: true,
    },
  ];

  const trainingModules = [
    {
      id: 1,
      title: 'Frontend Foundations + AI Intro',
      duration: 'Month 1',
      description:
        'Master HTML/CSS/JavaScript fundamentals while learning basic AI-assisted development',
      skills: [
        'Semantic HTML5',
        'CSS Grid/Flexbox',
        'JavaScript ES6+',
        'Git/GitHub',
        'VS Code + Copilot',
      ],
      icon: <AiFillCode />,
      category: 'Fundamentals',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      aiIntegration: 'Basic',
    },
    {
      id: 2,
      title: 'React Development & AI Tools',
      duration: 'Month 2',
      description:
        'Build React applications with AI-powered component generation and debugging',
      skills: [
        'React Components',
        'Hooks & Context',
        'AI Code Completion',
        'ChatGPT for React',
        'API Consumption',
      ],
      icon: <AiFillCode />,
      category: 'Frontend',
      techStack: ['React', 'JavaScript'],
      aiIntegration: 'Intermediate',
    },
    {
      id: 3,
      title: 'Backend Fundamentals (Node/Django)',
      duration: 'Month 3',
      description:
        'Server-side development with choice of Node.js or Django, introducing AI for backend',
      skills: [
        'Express.js/Django ORM',
        'REST API Design',
        'Database Modeling',
        'AI API Integration',
        'Automated Documentation',
      ],
      icon: <AiFillDatabase />,
      category: 'Backend',
      techStack: ['Node.js/Express', 'Django', 'Python'],
      aiIntegration: 'Basic',
    },
    {
      id: 4,
      title: 'Full-Stack AI Integration',
      duration: 'Month 4',
      description:
        'Connect frontend to AI-enhanced backend services with proper architecture',
      skills: [
        'Authentication',
        'WebSockets',
        'AI Microservices',
        'Prompt Engineering',
        'Error Handling',
      ],
      icon: <AiFillRobot />,
      category: 'Full-Stack',
      techStack: ['React', 'Node/Django'],
      aiIntegration: 'Advanced',
    },
    {
      id: 5,
      title: 'Database & Deployment',
      duration: 'Month 5',
      description:
        'Advanced data management and cloud deployment with AI optimization',
      skills: [
        'PostgreSQL/MongoDB',
        'Docker Basics',
        'CI/CD Pipelines',
        'AI Performance Tuning',
        'Cloud Deployment',
      ],
      icon: <AiFillDatabase />,
      category: 'DevOps',
      techStack: ['SQL', 'Docker', 'AWS/Vercel'],
      aiIntegration: 'Intermediate',
    },
    {
      id: 6,
      title: 'Capstone Project & Career Prep',
      duration: 'Month 6',
      description:
        'Build and deploy a full-stack AI-enhanced application with professional workflows',
      skills: [
        'Project Architecture',
        'Team Collaboration',
        'AI Debugging',
        'Technical Interviews',
        'Portfolio Presentation',
      ],
      icon: <AiFillTrophy />,
      category: 'Production',
      techStack: ['Full Stack'],
      aiIntegration: 'Advanced',
    },
  ];
  const certifications = [
    {
      title: 'AI Frontend Developer Certificate',
      description:
        'Industry-recognized certification upon successful completion',
      issuer: 'AI Development Institute',
    },
    {
      title: 'React AI Specialist Badge',
      description: 'Specialized certification in React with AI integration',
      issuer: 'Tech Certification Board',
    },
  ];

  const handleModuleFilter = (category) => {
    setSelectedModule(category);
    setAnimateCards({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCards({ y: 0, opacity: 1 });
    }, 300);
  };

  const filteredModules =
    selectedModule === 'All'
      ? trainingModules
      : trainingModules.filter((module) => module.category === selectedModule);

  const categories = [
    'All',
    'AI Fundamentals',
    'React Development',
    'UI/UX Design',
    'Advanced JavaScript',
    'Full-Stack',
    'Career Development',
  ];

  return (
    <>
      <h2 className='head-text'>
        AI Full Stack Development <span>Training Program</span>
        <br />
        <span className='training-subtitle'>6-Month Intensive Course</span>
      </h2>

      <div className='app__training-flyer'>
        <motion.div whileHover={{ scale: 1.02 }} className='flyer-container'>
          <img src={fullStack} alt='Training Program Flyer' />
          <div className='flyer-overlay'>
            <h3>Download Program Brochure</h3>
            <button className='download-button'>PDF Version</button>
          </div>
        </motion.div>
      </div>

      <div className='app__training-overview'>
        <div className='training-stats'>
          <div className='stat-item'>
            <h3>180+</h3>
            <p>Hours of Training</p>
          </div>
          <div className='stat-item'>
            <h3>3+</h3>
            <p>AI Aided Projects</p>
          </div>
          <div className='stat-item'>
            <h3>100%</h3>
            <p>Job Placement Support</p>
          </div>
        </div>
      </div>

      <div className='app__training-filter' style={{ marginBottom: '2rem' }}>
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleModuleFilter(category)}
            className={`app__training-filter-item app__flex p-text ${
              selectedModule === category ? 'item-active' : ''
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCards}
        transition={{ duration: 0.5, delayChildren: 0.2 }}
        className='app__training-modules'
      >
        {filteredModules.map((module, index) => (
          <motion.div
            key={module.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='app__training-item app__flex'
          >
            <div className='app__training-header'>
              <div className='training-icon'>{module.icon}</div>
              <div className='training-duration'>
                <span className='duration-tag'>{module.duration}</span>
              </div>
            </div>

            <div className='app__training-content'>
              <h4 className='bold-text'>{module.title}</h4>
              <p
                className='p-text'
                style={{ marginTop: '10px', marginBottom: '15px' }}
              >
                {module.description}
              </p>

              <div className='training-skills'>
                <h5 className='skills-title'>Key Skills:</h5>
                <div className='flex__tags'>
                  {module.skills.map((skill, skillIndex) => (
                    <p className='tags' key={skillIndex}>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <div className='app__training-certifications'>
        <h3 className='certification-title'>Certifications Included</h3>
        <div className='certifications-grid'>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className='certification-card'
            >
              <h4 className='bold-text'>{cert.title}</h4>
              <p className='p-text'>{cert.description}</p>
              <span className='issuer'>Issued by: {cert.issuer}</span>
            </motion.div>
          ))}
        </div>
      </div> */}

      <div className='app__training-pricing'>
        <h3 className='section-title'>Program Pricing</h3>
        <div className='pricing-grid'>
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className='popular-badge'>Most Popular</div>
              )}
              <h4>{plan.name}</h4>
              <h2>{plan.price}</h2>
              <p className='duration'>{plan.duration}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href='https://wa.link/q0za9y'>
                <button
                  className={`pricing-button ${
                    plan.popular ? 'primary' : 'secondary'
                  }`}
                >
                  Enroll
                </button>
              </a>
            </motion.div>
          ))}
        </div>
        <div className='payment-options'>
          <p>
            Flexible payment options available • Scholarships for qualifying
            students
          </p>
        </div>
      </div>

      <div className='app__training-cta'>
        <motion.div whileHover={{ scale: 1.02 }} className='cta-card'>
          <h3 className='bold-text'>Limited Seats Available</h3>
          <p className='p-text'>
            Next cohort starts June 15th. Apply now to secure your spot in this
            transformative program.
          </p>
          <div className='cta-buttons'>
            <a href='https://wa.link/q0za9y'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='cta-button primary'
              >
                Enroll Now
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Training, 'app__training'),
  'Training',
  'app__primarybg'
);
