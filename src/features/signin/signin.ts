import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { auth } from "../../firebase.config";

export interface SignInData{
   name: string;
   email: string;
   password: string;
}

const initialState = {
   loading: false,
}

const userSigninSlice = createSlice({
   name: "userSignin",
   initialState,
   reducers: {
     signinwithemailandpassword: (state, action: PayloadAction<SignInData>) => {
      state.loading = true;
      createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
      .then(({user})=>{
         if (user) {
            updateProfile(user, { displayName: action.payload.name,})
            .then(() => {
               signOut(auth)
               .then(() => {
                  state.loading = false;
               })
             })
         }
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         toast.error(`${errorCode} : ${errorMessage}`);
         state.loading = false;
      });
     }
   }
 });

 export const {
   signinwithemailandpassword 
 } = userSigninSlice.actions;
 export default userSigninSlice.reducer;