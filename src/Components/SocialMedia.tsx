import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import Google from '../Assets/search.png';
import FaceBook from '../Assets/facebook.png';
import GitHub from '../Assets/github.png';
import {AuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db, Gprovider, Fprovider, GHprovider } from '../firebase.config';
import { toast } from 'react-hot-toast';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAppDispatch } from '../app/store';
import { storeUser } from '../features/user/user';
import { useLocation, useNavigate } from 'react-router-dom';

interface PopupProps {
   Gprovider?: GoogleAuthProvider  | undefined;
   Fprovider?: FacebookAuthProvider  | undefined;
   GHprovider?: GithubAuthProvider  | undefined;
}

interface ExtendedPopupProps extends PopupProps {
   provider: 'google' | 'facebook' | 'github';
}


const SocialMedia: React.FC = () => {
   const dispatch = useAppDispatch();
   let navigate = useNavigate();
   let location = useLocation();

   let from = location.state?.from?.pathname || "/";

   const signInWithSocialMediaPopup = (props: ExtendedPopupProps) => {
      let providers: AuthProvider | undefined;

      switch (props.provider) {
         case 'google':
           providers = props.Gprovider || new GoogleAuthProvider();   
           break;
         case 'facebook':
           providers = props.Fprovider || new FacebookAuthProvider();   
           break;
         case 'github':
           providers = props.GHprovider || new GithubAuthProvider();   
           break;
         default:
           providers = props.Gprovider || new GoogleAuthProvider();
           break;
       }

      console.log(props.provider);
      

      signInWithPopup(auth, providers)
      .then(async (result) => {
         const user = result.user;        
         if (user) {
            const { uid } = user;
            const docRef = doc(db, "user", uid);
            const docSnap = await getDoc(docRef);
      
            if (docSnap.exists()) {
               const {name, email} = docSnap.data();
               dispatch(storeUser({id: uid, name, email}));
            } else{
               await setDoc(doc(db, "user", user.uid), {
                  name: user.displayName,
                  email: user.email,
                  quiz_took: [],
                });
                dispatch(storeUser({id: uid, name: user.displayName, email: user.email}));
            }
         }

         navigate(from, { replace: true });
         toast.success('Successfully Sign-In.');
      }).catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         toast.error(`${errorCode} : ${errorMessage}`);
      });
   }

  return (
   <Box component='div' sx={{m: '20px 0 35px'}}>
      <Typography variant='inherit'>Or</Typography>
      <Box 
         component='div' 
         sx={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'},
            gap: 2, 
            mt: '15px'
         }}
      >
         <Button 
            onClick={()=>signInWithSocialMediaPopup({Gprovider, provider: 'google'})}
            sx={{
               color: '#000', 
               border: '1px solid #EA4335', 
               borderRadius: '35px', 
               width: '100%', 
               '&:hover': {
                  backgroundColor: '#ea43350f',
               },
            }}
         >
            <Avatar alt="Google" src={Google} sx={{ width: 24, height: 24, mr: '10px' }} /> 
            Google
         </Button>
         <Button 
            onClick={()=>signInWithSocialMediaPopup({Fprovider, provider: 'facebook'})}
            sx={{
               color: '#000', 
               border: '1px solid #4267B2', 
               borderRadius: '35px', 
               width: '100%',
            }}
         >
            <Avatar alt="FaceBook" src={FaceBook} sx={{ width: 24, height: 24, mr: '10px' }} /> 
            Facebook
         </Button>
         <Button 
            onClick={()=>signInWithSocialMediaPopup({GHprovider, provider: 'github'})}
            sx={{
               color: '#000', 
               border: '1px solid #000', 
               borderRadius: '35px', 
               width: '100%', 
               '&:hover': {
                  backgroundColor: '#0000000f',
               },
            }}
         >
            <Avatar alt="GitHub" src={GitHub} sx={{ width: 24, height: 24, mr: '10px'}} /> 
            GitHub
         </Button>
      </Box>
   </Box>
  )
}

export default SocialMedia