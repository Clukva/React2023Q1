import { createSlice } from '@reduxjs/toolkit';
import { IStateFormStore } from '../interfaces/MyCharacterInterfases';

interface IformSlice {
  cards: [IStateFormStore | null];
}

const initialState: IformSlice = {
  cards: [null],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormCard(state, action) {
      state.cards.push(action.payload);
    },
  },
});

export const { addFormCard } = formSlice.actions;
export default formSlice.reducer;
