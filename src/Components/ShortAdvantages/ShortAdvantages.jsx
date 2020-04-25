import React from 'react';
import './ShortAdvantages.scss';

const ShortAdvantages = () => {
  const data = [
    { upper: '2+ YEARS', under: 'Work experience' },
    { upper: '30+', under: 'Total projects' },
    { upper: '11+', under: 'React projects' },
    { upper: 'ASAP', under: 'accessibility' },
    { upper: 'ASAP', under: 'accessibility' },
  ];

  const rendeShortAdvantages = data.map(({ upper, under }, index) => (
    <li className='ShortAdvantage' key={index}>
      <p className='upper'>{upper}</p>
      <p className='under'>{under}</p>
    </li>
  ));

  return <ul className='ShortAdvantages'>{rendeShortAdvantages}</ul>;
};

export default ShortAdvantages;
