import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';

export default function AnimalCard({ diet, name, size , ...props }) {
  return(
    <Card
     title="Animal" 
     details={<em>Mammal</em>}>
    <div>
      <h3>{name}</h3>
      <div>{size}kg</div>
      <AnimalDetails
      
      {...props}
        diet={diet}
      />
      <div>{diet.join(', ')}.</div>
    </div>
    </Card>
  )
}

AnimalCard.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}