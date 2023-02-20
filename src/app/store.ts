import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import UserSlice from '../features/user/user';
import userSigninSlice from '../features/signin/signin';

export const store = configureStore({
  reducer: {
    userData: UserSlice,
    userSignin: userSigninSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;