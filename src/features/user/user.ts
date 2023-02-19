import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo{
   name: string;
   email: string;
}

interface UserState{
   user: UserInfo;
}

const initialState: UserState = {
   user: {
      name: '',
      email: ''
   },
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
     }
   }
 });

 export const {
   storeUser 
 } = userSlice.actions;
 export default userSlice.reducer;