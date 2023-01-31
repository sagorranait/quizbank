import React from 'react';
import {
  Box, 
  Toolbar,
  CssBaseline
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

const drawerWidth = 240;
const windowRef = () => window;

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Header dwidth={drawerWidth} window={windowRef}/>
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          width: { sm: `calc(100% - ${drawerWidth}px)` } ,
          backgroundColor:  '#F7F8FC',
          height: '100vh'
        }}
      >
        <Toolbar />
          <Outlet/>
      </Box>
    </Box>
  );
}

export default App;
