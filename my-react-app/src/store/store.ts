import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import { rickApi } from './rickApi';
import { cardApi } from './cardApi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [rickApi.reducerPath]: rickApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickApi.middleware, cardApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
