import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo{
   id: string | null;
   name: string | null;
   email: string | null;
}

interface UserState{
   user: UserInfo;
   loading: boolean;
}

const initialState: UserState = {
   user: {
      id: '',
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
            id: action.payload.id,
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