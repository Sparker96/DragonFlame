import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  fetchCharacters,
  createCharacter,
  selectCharacters,
} from '../store/slices/characters';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCreate from './CharacterCreate';

const CharacterSelect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchCharacters(user.id));
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
          if (Object.keys(character).length === 0) {
            return (
              <Link to='/character-create'>
                <div className='charContainer' id='newChar'>
                  New Character
                </div>
              </Link>
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
