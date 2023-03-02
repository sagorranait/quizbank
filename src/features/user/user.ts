import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo{
   id: string | null;
   name: string | null;
   email: string | null;
   phone?: string | null;
   photo_url?: string | null;
   address?: string | null;
   city?: string | null;
   zip_code?: string | null;
   quiz_took?: [] | null;
}

interface UserState{
   user: UserInfo;
   loading: boolean;
}

const initialState: UserState = {
   user: {
      id: '',
      name: '',
      email: '',
      phone: '',
      photo_url: '',
      address: '',
      city: '',
      zip_code: '',
      quiz_took: []
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
            email: action.payload.email,
            phone: action.payload.phone,
            photo_url: action.payload.photo_url,
            address: action.payload.address,
            city: action.payload.city,
            zip_code: action.payload.zip_code,
            quiz_took: action.payload.quiz_took,
         }
     },
     loadingState: (state) => {
         state.loading = !state.loading;
     }
   }
 });

 export const {
   storeUser,
   loadingState
 } = userSlice.actions;
 export default userSlice.reducer;