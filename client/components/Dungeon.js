import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { selectCharacter } from '../store/slices/characters';
import { selectMonster, fetchMonster } from '../store/slices/monsters';
import { useDispatch, useSelector } from 'react-redux';
import Character from '../feature/character';
import Monster from '../feature/monster';
import { setMonsterHealth, setCharacterHealth } from '../store';

const Dungeon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let character = useSelector(selectCharacter);

  function randomInt(min = 1, max = 3) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  useEffect(() => {
    dispatch(fetchMonster(randomInt()));
  }, [dispatch]);

  const swing = () => {
    dispatch(setMonsterHealth(monster.healthCurrent - character.strength));
    if (monster.healthCurrent - character.strength <= 0) {
      navigate('/victory');
    }
    dispatch(setCharacterHealth(character.healthCurrent - monster.strength));
    if (character.healthCurrent - monster.strength <= 0) {
      navigate('/defeat');
    }
  };

  let monster = useSelector(selectMonster);

  return (
    <div className='battleScreen'>
      <h3>A FOE APPEARS!</h3>
      <div className='battleContainer'>
        <Character />
        <button onClick={swing}>SWING</button>
        <Monster />
      </div>
    </div>
  );
};

export default Dungeon;
