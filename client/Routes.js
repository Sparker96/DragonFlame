import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AuthForm } from './components/AuthForm';
import CharacterSelect from './components/CharacterSelect';
import CharacterCreate from './components/CharacterCreate';
import Dungeon from './components/Dungeon';
import { getUserByToken } from './store';
import { getUserToken, isLoggedIn } from './utils';

const Router = ({}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(getUserByToken(getUserToken()));
    }
  }, []);

  return (
    <div>
      {user ? (
        <Routes>
          <Route path='/character-select' element={<CharacterSelect />} />
          <Route path='/character-create' element={<CharacterCreate />} />
          <Route path='/dungeon' element={<Dungeon />} />
          <Route path='*' element={<CharacterSelect />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path='/login' element={<AuthForm mode='login' />} />
          <Route exact path='/signup' element={<AuthForm mode='signup' />} />
          <Route path='*' element={<AuthForm mode='login' />} />
        </Routes>
      )}
    </div>
  );
};

export default Router;
