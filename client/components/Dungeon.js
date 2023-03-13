import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { selectCharacter } from '../store/slices/characters';
import { useDispatch, useSelector } from 'react-redux';
import Character from '../feature/character';
import Monster from '../feature/monster'

const Dungeon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const user = useSelector((state) => state.auth.user);

  useEffect(() => {}, [dispatch]);

  let character = useSelector(selectCharacter);

  return (
    <div className='battleScreen'>
      <h3>A FOE APPEARS!</h3>
      <div className='battleContainer'>
        <Character currCharacter={character} />
        <button>SWING</button>
        <Monster/>
      </div>
    </div>
  );
};

export default Dungeon;
