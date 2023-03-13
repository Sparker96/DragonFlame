import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import auth from './slices/auth';
import characters from './slices/characters';
import monsters from './slices/monsters';

const store = configureStore({
  reducer: {
    auth: auth,
    characters: characters,
    monsters: monsters,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(createLogger()),
});

export default store;
export * from './slices/auth';
export * from './slices/characters';
export * from './slices/monsters';
