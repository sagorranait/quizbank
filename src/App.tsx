import React from 'react';
import {
  Box, 
  Toolbar,
  CssBaseline
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

const drawerWidth = 240;

const App: React.FC = () => {
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
        </Box>
      </Box>
    </Box>
  );
}

export default App;
