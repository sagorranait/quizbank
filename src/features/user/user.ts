import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo{
   name: string;
   email: string;
}

interface UserState{
   user: UserInfo;
   loading: boolean;
}

const initialState: UserState = {
   user: {
      name: '',
      email: ''
   },
   loading: false,
}

const userSlice = createSlice({
   name: "userData",
   initialState,
   reducers: {
     storeUser: (state, action: PayloadAction<UserInfo>) => {
         state.user = {
            ...state.user,
            name: action.payload.name,
            email: action.payload.email
         }
     },
     loadingState: (state) => {
         state.loading = !state.loading;
     }
   }
 });

 export const {
   storeUser 
 } = userSlice.actions;
 export default userSlice.reducer;