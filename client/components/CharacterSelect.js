import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  fetchCharacters,
  createCharacter,
  selectCharacters,
} from '../store/slices/characters';
import { useDispatch, useSelector } from 'react-redux';

const CharacterSelect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  let characters = useSelector(selectCharacters);

  let charArr = [...characters];

  const fillChars = () => {
    while (charArr.length < 5) {
      charArr.push({});
    }
    return charArr;
  };

  fillChars();

  return (
    <div className='charSelect'>
      <h3>Where does the adventure begin?</h3>
      <div id='chars'>
        {charArr.map((character) => {
          console.log(character);
          if (Object.keys(character).length === 0) {
            return (
              <div
                className='charContainer'
                id='newChar'
                onClick={createCharacter}
              >
                New Character
              </div>
            );
          } else {
            return (
              <div
                className='charContainer'
                id='char'
                onClick={() =>
                  navigate('/dungeon', {
                    state: {
                      character: character,
                    },
                  })
                }
              >
                {character.name}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CharacterSelect;
