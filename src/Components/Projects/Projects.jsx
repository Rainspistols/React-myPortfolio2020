import React from 'react';
import './Projects.scss';
import Project from './Project/Project';
import {
  barbershopBor,
  catEnergy,
  stopClimateChange,
  goSurf,
  sedona,
  myLittleDreams,
} from './projectImgs';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';

const Projects = () => {
  const data = [
    {
      imgPath: stopClimateChange,
      title: 'Stop climate change',
      href: 'https://rainspistols.github.io/Stop-climate-change/',
    },
    {
      imgPath: myLittleDreams,
      title: 'My little dreams',
      href: 'https://mylittledreams.pl/',
    },
    {
      imgPath: goSurf,
      title: 'Go surf',
      href: 'https://rainspistols.github.io/Go-surf/',
    },
    {
      imgPath: barbershopBor,
      title: 'Barber shop Borodinski',
      href: 'https://rainspistols.github.io/BarbershopV2/',
    },
    {
      imgPath: catEnergy,
      title: 'Cat energy',
      href: 'https://rainspistols.github.io/Cat-energy/',
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
