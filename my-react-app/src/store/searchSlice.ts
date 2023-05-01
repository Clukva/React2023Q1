import { createSlice } from '@reduxjs/toolkit';

interface IsearchSlice {
  seachString: string;
}

const initialState: IsearchSlice = {
  seachString: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSeachString(state, action) {
      state.seachString = action.payload;
    },
  },
});

export const { addSeachString } = searchSlice.actions;
export default searchSlice.reducer;
