import PropTypes from 'prop-types'
import { useState } from 'react';

function getSpouse(spouse) {
  if (spouse === "") {
    return "None";
  }
  return spouse;
}

function getDoD(dod) {
  if (dod === "") {
    return "Still Alive";
  }
  return dod;
}

const Character = ({ name, imgUrl, birth, death, race, spouse, realm }) => {
  const listItemSpouse = getSpouse(spouse);
  const dateOfDeath = getDoD(death);

  return (
    <div className="card-container">
      <img src={imgUrl} alt={name} />
      <div className="card-body">
        <h2>{name}</h2>
        <ol>
          <li>Date of Birth: {birth}</li>
          <li>Date of Death: {dateOfDeath}</li>
          <li>Race: {race}</li>
          <li>Spouse: {listItemSpouse}</li>
          <li>Realm: {realm}</li>
        </ol>
      </div>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  death: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  spouse: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
};

export default Character;