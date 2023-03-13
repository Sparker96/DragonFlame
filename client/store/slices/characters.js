import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { all: [], single: {} };

export const fetchCharacters = createAsyncThunk(
  'fetchCharacters',
  async (userId) => {
    const { data } = await axios.get('/api/characters', {
      params: {
        userId: userId,
      },
    });
    return data;
  }
);

export const createCharacter = createAsyncThunk(
  'createNewCharacter',
  async ({ character }) => {
    const { data } = await axios.post('/api/characters', { character });
    return data;
  }
);

const characters = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacter: (state, { payload: character }) => {
      state.single = character;
      console.log( state.single);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.all = action.payload;
    });
    builder.addCase(createCharacter.fulfilled, (state, action) => {
      state.all.push(action.payload);
    });
  },
});

const { setCharacter } = characters.actions;

export { setCharacter };

export const selectCharacters = (state) => {
  return state.characters.all;
};

export const selectCharacter = (state) => {
  console.log(state.characters.single);
  return state.characters.single;
};

export default characters.reducer;
