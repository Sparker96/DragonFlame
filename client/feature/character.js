import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacter } from '../store';

const Character = ({ currCharacter }) => {
  const [character, setCharacter] = useState(currCharacter);

  return (
    <div className='charContainer' id='char'>
      <div>
        <h4 style={{ textAlign: 'center' }}>Bio</h4>
        <ul className='charInfo'>
          <li>{character.name}</li>
          <li>{character.race}</li>
          <li>{character.class}</li>
        </ul>
      </div>
      <div>
        <h4 style={{ textAlign: 'center' }}>Stats</h4>
        <ul className='charStats'>
          <li>Strength: {character.strength}</li>
          <li>Intellect: {character.intellect}</li>
          <li>Dexterity: {character.dexterity}</li>
          <li>Vitality: {character.vitality}</li>
          <li>Charisma: {character.charisma}</li>
          <li>
            Health: {character.healthCurrent}/{character.healthTotal}
          </li>
          <li>Armor: {character.armor}</li>
        </ul>
      </div>
    </div>
  );
};

export default Character;
