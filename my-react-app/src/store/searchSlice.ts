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
      // eslint-disable-next-line no-console
      console.log(state, action);
      // eslint-disable-next-line no-console
      console.log(state.seachString, action.payload.text);

      // eslint-disable-next-line no-param-reassign
      state.seachString = action.payload;
    },
    /*  removeSeachString(statte, action) {},
    toogleSeachString(statte, action) {}, */
  },
});

export const { addSeachString /* , removeSeachString, toogleSeachString */ } = searchSlice.actions;
export default searchSlice.reducer;
