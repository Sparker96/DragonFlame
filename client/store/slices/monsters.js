import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { all: [], single: {} };

export const fetchMonsters = createAsyncThunk('fetchMonsters', async () => {
  const { data } = await axios.get('/api/monsters', {
    params: {},
  });
  return data;
});

export const fetchMonster = createAsyncThunk(
  'fetchMonster',
  async (monsterId) => {
    const { data } = await axios.get(`/api/monsters/${monsterId}`, {});
    return data;
  }
);

const monsters = createSlice({
  name: 'monsters',
  initialState,
  reducers: {
    setMonsterHealth: (state, { payload: newHealth }) => {
      state.single.healthCurrent = newHealth;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMonsters.fulfilled, (state, action) => {
      state.all = action.payload;
    });
    builder.addCase(fetchMonster.fulfilled, (state, action) => {
      state.single = action.payload;
    });
  },
});

const { setMonsterHealth } = monsters.actions;

export { setMonsterHealth };

export const selectMonsters = (state) => {
  return state.monsters.all;
};

export const selectMonster = (state) => {
  return state.monsters.single;
};

export default monsters.reducer;
