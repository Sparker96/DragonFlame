import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacter } from '../store';

const Character = ({ currCharacter }) => {
  const [character, setCharacter] = useState(currCharacter);
  console.log(character)

  return (
    <div className='charContainer' id='char'>
      <ul className='charInfo'>
        <li>{character.name}</li>
        <li>{character.race}</li>
        <li>{character.class}</li>
      </ul>
    </div>
  );
};

export default Character;
