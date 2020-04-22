import React from 'react';
import './Contact.scss';
import { IoMdMail } from 'react-icons/io';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPhoneSquare,
  FaGithubSquare,
  FaCopyright,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import MainPadding from '../../Layouts/MainPadding/MainPadding';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const iconVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { duration: 1, type: 'spring', damping: 3 },
  },
};

const Contact = () => {
  const dataIcons = [
    {
      icon: <IoMdMail />,
      text: 'Galchenko.maksym@gmail.com',
      linkTo: 'mailto:Galchenko.maksym@gmail.com',
    },
    {
      icon: <FaPhoneSquare />,
      text: '+4 (8) 576 284 759',
      linkTo: 'tel:+4(8)576284759',
    },
    {
      icon: <FaFacebookSquare />,
      text: 'Facebook.com/Rainspistols',
      linkTo: 'https://www.facebook.com/Rainspistols',
    },
    {
      icon: <FaLinkedin />,
      text: 'Linkedin.com/in/galchenko-max/',
      linkTo: 'https://www.linkedin.com/in/galchenko-max/',
    },
    {
      icon: <FaGithubSquare />,
      text: 'Github.com/Rainspistols',
      linkTo: 'https://github.com/Rainspistols',
    },
  ];

  const [refLinks, inViewLinks] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const renderDataIcons = dataIcons.map(({ icon, text, linkTo }, index) => (
    <motion.li key={index}>
      <motion.a
        href={linkTo}
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className=''
          variants={iconVariants}
          initial='hidden'
          animate={inViewLinks ? 'visible' : 'hidden'}
        >
          <IconContext.Provider value={{ className: 'socialIcon' }}>
            {icon}
          </IconContext.Provider>
        </motion.div>

        <p>{text}</p>
      </motion.a>
    </motion.li>
  ));

  return (
    <section className='Contact' id='contact'>
      <SectionTitle title='Contact' color='#F23557' />

      <footer>
        <section className='links' ref={refLinks}>
          <MainPadding>
            <ul>{renderDataIcons}</ul>
          </MainPadding>
        </section>

        <small className='copyright'>
          <IconContext.Provider value={{ className: 'iconCopyright' }}>
            <FaCopyright />
          </IconContext.Provider>
          2020 Galchenko Maksym
        </small>
      </footer>
    </section>
  );
};

export default Contact;
