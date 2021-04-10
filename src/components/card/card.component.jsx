import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img src={props.monster.img} width='180' height='180' alt='monster' />
    <h1> {props.monster.name}</h1>
  </div>
);
