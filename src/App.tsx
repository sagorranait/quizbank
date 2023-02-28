import React, { useEffect } from 'react';
import {
  Box, 
  Toolbar,
  CssBaseline
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase.config';
import { useAppDispatch } from './app/store';
import { loadingState, storeUser } from './features/user/user';
import { doc, getDoc } from "firebase/firestore";

const drawerWidth = 240;

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      dispatch(loadingState());
      if (user) {
        const { uid } = user;
        const docRef = doc(db, "user", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const { name, email, address, city, zip_code, phone, photo_url } = docSnap.data();
          dispatch(
            storeUser({
              id: uid, 
              name, 
              email, 
              phone, 
              address, 
              city, 
              zip_code, 
              photo_url,
            }));
          dispatch(loadingState());
        }
      }
    });
  }, [dispatch])
  

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Header dwidth={drawerWidth}/>
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          width: { sm: `calc(100% - ${drawerWidth}px)` } ,
          backgroundColor:  '#F7F8FC',
          height: {xs: 'auto', sm: 'auto', md: 'auto', lg: '100vh'},
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Toolbar />
        <Box component="section" sx={{height: {xs: 'auto', sm: 'auto', lg: '850px'}}}>
          <Outlet/>
          <Toaster />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
