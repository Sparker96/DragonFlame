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

export const deleteCharacter = createAsyncThunk(
  'deleteCharacter',
  async (id) => {
    const { data } = await axios.delete('/api/characters', {
      data: { id: id },
    });
    return {id, data};
  }
);

const characters = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacter: (state, { payload: character }) => {
      state.single = character;
    },
    setCharacterHealth: (state, { payload: newHealth }) => {
      state.single.healthCurrent = newHealth;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.all = action.payload;
    });
    builder.addCase(createCharacter.fulfilled, (state, action) => {
      state.all.push(action.payload);
    });
    builder.addCase(deleteCharacter.fulfilled, (state, { payload }) => {
      console.log(payload)
      console.log(state.all.filter((character) => character.id !== payload.id))
      state.all = state.all.filter((character) => character.id !== payload.id);
    });
  },
});

const { setCharacter, setCharacterHealth } = characters.actions;

export { setCharacter, setCharacterHealth };

export const selectCharacters = (state) => {
  return state.characters.all;
};

export const selectCharacter = (state) => {
  return state.characters.single;
};

export default characters.reducer;
