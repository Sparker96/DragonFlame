import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCharacters, selectCharacters } from '../store/slices/characters';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacter } from '../store';
import Character from '../feature/character';

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
                <div id='newChar'>New Character</div>
              </Link>
            );
          } else {
            return (
              <div
                onClick={() => {
                  dispatch(setCharacter(character));
                  navigate('/dungeon');
                }}
              >
                <Character menuCharacter={character} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CharacterSelect;
