import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonster, fetchMonster } from '../store';

const Monster = () => {
  const dispatch = useDispatch();

  function randomInt(min = 1, max = 3) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  useEffect(() => {
    dispatch(fetchMonster(randomInt()));
  }, [dispatch]);

  let monster = useSelector(selectMonster);

  return (
    <div className='monsterContainer' id='char'>
      <div>
        <h4 style={{ textAlign: 'center' }}>Bio</h4>
        <ul className='monsterInfo'>
          <li>{monster.name}</li>
          <li>{monster.race}</li>
          <li>{monster.class}</li>
        </ul>
      </div>
      <div>
        <h4 style={{ textAlign: 'center' }}>Stats</h4>
        <ul className='monsterStats'>
          <li>Strength: {monster.strength}</li>
          <li>Intellect: {monster.intellect}</li>
          <li>Dexterity: {monster.dexterity}</li>
          <li>Vitality: {monster.vitality}</li>
          <li>Charisma: {monster.charisma}</li>
          <li>
            Health: {monster.healthCurrent}/{monster.healthTotal}
          </li>
          <li>Armor: {monster.armor}</li>
        </ul>
      </div>
    </div>
  );
};

export default Monster;
