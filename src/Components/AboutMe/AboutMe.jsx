import React from 'react';
import './AboutMe.scss';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import MainPadding from '../../Layouts/MainPadding/MainPadding';
import Advantages from './Advantages/Advantages';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const dataTech = [
    'React',
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Git',
    'ES6',
    'jQuery',
    'JSON',
    'REST',
    'Sass',
    'Webpack',
    'Gulp',
    'BEM',
    'npm',
    'Bootstrap',
    'Responsive',
    'Adaptive',
    'Adobe Illustrator',
    'Figma',
    'Adobe Photoshop',
    'Adobe Xd',
    'etc ...',
  ];

  const liVariants = {
    hidden: (i) => ({
      scale: 0,
    }),
    visible: (i) => ({
      transition: { delay: i * 0.2, damping: 10, type: 'spring' },
      scale: 1.0,
    }),
  };

  const [listRef, listInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const renderTech = dataTech.map((item, index) => (
    <motion.li
      key={index}
      variants={liVariants}
      animate={listInView ? 'visible' : 'hidden'}
      custom={index}
      initial='hidden'
    >
      {item}
    </motion.li>
  ));

  return (
    <section className='AboutMe' id='aboutMe'>
      <SectionTitle color='#F1D620' title='About me' />

      <MainPadding>
        <div className='wrap'>
          <p className='helloSpeach'>
            Hello, my name is Max. I’m 28 years old. The main area of my
            expertise is front end development (clientSide of the web). I am
            looking for a company in which I can improve and work on larger
            projects than now, study and use new technologies. <br />
            <br />
            My main area of ​​expertise is React and related libraries (Redux,
            Create React App,React bootstrap, React Router, etc). HTML, CSS, JS
            (TypeScript), building small and medium web Apps with React, custom
            plugins, features, animations, and Coding interactive layouts.
          </p>
          <Advantages />
        </div>
      </MainPadding>

      <ul ref={listRef} className='tech'>
        {renderTech}
      </ul>
    </section>
  );
};

export default AboutMe;
