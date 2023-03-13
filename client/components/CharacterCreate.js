import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchCharacters,
  createCharacter,
  selectCharacters,
} from '../store/slices/characters';

const CharacterCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState('');
  const [charClass, setCharClass] = useState('knight');
  const [race, setRace] = useState('human');
  const [statPoints, setStatPoints] = useState(10);
  const [strength, setStrength] = useState(0);
  const [intellect, setIntellect] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [vitality, setVitality] = useState(0);
  const [charisma, setCharisma] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      createCharacter({
        character: {
          name: name,
          class: charClass,
          race: race,
          strength: strength,
          intellect: intellect,
          dexterity: dexterity,
          vitality: vitality,
          charisma: charisma,
          userId: user.id,
        },
      })
    );
    setName('');
    setCharClass('');
    setRace('');
    setStatPoints(10);
    setStrength(0);
    setIntellect(0);
    setDexterity(0);
    setVitality(0);
    setCharisma(0);
    navigate('/character-select');
  };

  return (
    <div className='charCreate'>
      <form onSubmit={handleSubmit}>
        <div className='bio'>
          <label htmlFor='name'>
            <small>Name</small>
          </label>
          <input
            name='name'
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='bio'>
          <label htmlFor='charClass'>
            <small>Class</small>
          </label>
          <select
            name='charClass'
            onChange={(event) => setCharClass(event.target.value)}
          >
            <option value='knight'>Knight</option>
            <option value='thief'>Thief</option>
            <option value='wizard'>Wizard</option>
          </select>
        </div>
        <div className='bio'>
          <label htmlFor='race'>
            <small>Race</small>
          </label>
          <select name='race' onChange={(event) => setRace(event.target.value)}>
            <option value='human'>Human</option>
            <option value='orc'>Orc</option>
            <option value='elf'>Elf</option>
          </select>
        </div>
        <div className='stat'>
          <label htmlFor='strength'>
            <small>Strength</small>
          </label>
          <input
            name='strength'
            type='button'
            onClick={() => {
              if (strength > 0) {
                setStrength(strength - 1);
                setStatPoints(statPoints + 1);
              }
            }}
            value='-'
          />
          {` ${strength} `}
          <input
            name='strength'
            type='button'
            onClick={() => {
              if (statPoints > 0) {
                setStrength(strength + 1);
                setStatPoints(statPoints - 1);
              }
            }}
            value='+'
          />
        </div>
        <div className='stat'>
          <label htmlFor='intellect'>
            <small>Intellect</small>
          </label>
          <input
            name='intellect'
            type='button'
            onClick={() => {
              if (intellect > 0) {
                setIntellect(intellect - 1);
                setStatPoints(statPoints + 1);
              }
            }}
            value='-'
          />
          {` ${intellect} `}
          <input
            name='intellect'
            type='button'
            onClick={() => {
              if (statPoints > 0) {
                setIntellect(intellect + 1);
                setStatPoints(statPoints - 1);
              }
            }}
            value='+'
          />
        </div>
        <div className='stat'>
          <label htmlFor='dexterity'>
            <small>Dexterity</small>
          </label>
          <input
            name='dexterity'
            type='button'
            onClick={() => {
              if (dexterity > 0) {
                setDexterity(dexterity - 1);
                setStatPoints(statPoints + 1);
              }
            }}
            value='-'
          />
          {` ${dexterity} `}
          <input
            name='dexterity'
            type='button'
            onClick={() => {
              if (statPoints > 0) {
                setDexterity(dexterity + 1);
                setStatPoints(statPoints - 1);
              }
            }}
            value='+'
          />
        </div>
        <div className='stat'>
          <label htmlFor='vitality'>
            <small>Vitality</small>
          </label>
          <input
            name='vitality'
            type='button'
            onClick={() => {
              if (vitality > 0) {
                setVitality(vitality - 1);
                setStatPoints(statPoints + 1);
              }
            }}
            value='-'
          />
          {` ${vitality} `}
          <input
            name='vitality'
            type='button'
            onClick={() => {
              if (statPoints > 0) {
                setVitality(vitality + 1);
                setStatPoints(statPoints - 1);
              }
            }}
            value='+'
          />
        </div>
        <div className='stat'>
          <label htmlFor='charisma'>
            <small>Charisma</small>
          </label>
          <input
            name='charisma'
            type='button'
            onClick={() => {
              if (charisma > 0) {
                setCharisma(charisma - 1);
                setStatPoints(statPoints + 1);
              }
            }}
            value='-'
          />
          {` ${charisma} `}
          <input
            name='charisma'
            type='button'
            onClick={() => {
              if (statPoints > 0) {
                setCharisma(charisma + 1);
                setStatPoints(statPoints - 1);
              }
            }}
            value='+'
          />
        </div>
        <div>
          <button type='submit'>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CharacterCreate;
