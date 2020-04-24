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

  const renderDataIcons = dataIcons.map(({ icon, text, linkTo }, index) => (
    <motion.li key={index}>
      <IconContext.Provider value={{ className: 'socialIcon' }}>
        {icon}
      </IconContext.Provider>
      <motion.a
        href={linkTo}
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.9 }}
      >
        <p>{text}</p>
      </motion.a>
    </motion.li>
  ));

  return (
    <section className='Contact' id='contact'>
      <SectionTitle title='Contact' color='#F23557' />

      <footer>
        <section className='links'>
          <MainPadding>
            <ul className='links__list'>{renderDataIcons}</ul>
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
