import React from 'react';
import './Projects.scss';
import Project from './Project/Project';
import {
  barbershopBor,
  cakeBooking,
  catEnergy,
  stopClimateChange,
  deviceShop,
  goSurf,
  reactHooks,
  reactQuiz,
  sedona,
} from './projectImgs/index';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';

const Projects = () => {
  const data = [
    {
      imgPath: barbershopBor,
      title: 'Barber shop Borodinski',
      href: 'https://rainspistols.github.io/BarbershopV2/',
    },
    {
      imgPath: cakeBooking,
      title: 'Cake booking',
      href: 'https://rainspistols.github.io/CakeBooking/',
    },
    {
      imgPath: catEnergy,
      title: 'Cat energy',
      href: 'https://rainspistols.github.io/Cat-energy/',
    },
    {
      imgPath: stopClimateChange,
      title: 'Stop climate change',
      href: 'https://rainspistols.github.io/Stop-climate-change/',
    },
    {
      imgPath: deviceShop,
      title: 'Device shop',
      href: 'https://rainspistols.github.io/Device/#',
    },
    {
      imgPath: goSurf,
      title: 'Go surf',
      href: 'https://rainspistols.github.io/Go-surf/',
    },
    {
      imgPath: reactHooks,
      title: 'React hooks',
      href: 'https://rainspistols.github.io/React-hooks/',
    },
    {
      imgPath: reactQuiz,
      title: 'React quiz',
      href: 'https://react-quiz-71f8e.firebaseapp.com/',
    },
    {
      imgPath: sedona,
      title: 'Sedona',
      href: 'https://rainspistols.github.io/Sedona/',
    },
  ];

  const renderPojects = data.map(({ ...props }, index) => (
    <Project {...props} key={index} />
  ));

  return (
    <section id='projects'>
      <SectionTitle color='#0cb2dc' title='Some of my projects' />
      <ul className='Projects'>{renderPojects}</ul>;
    </section>
  );
};

export default Projects;
