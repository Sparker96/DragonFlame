import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchCharacters = createAsyncThunk('fetchCharacters', async (userId) => {
  const { data } = await axios.get('/api/characters', userId);
  return data;
});

export const createCharacter = createAsyncThunk('createNewCharacter', async ({userId, newChar}) => {
  const { data } = await axios.post('/api/me', {userId, newChar});
  return data;
});

const characters = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createCharacter.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectCharacters = (state) => {
  return state.characters;
};

export default characters.reducer;
