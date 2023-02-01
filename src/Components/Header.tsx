import React from 'react';
import {
   AppBar, 
   Toolbar, 
   IconButton, 
   Typography,
   Button,
 } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
 import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Sidebar from './Sidebar';

 const windowRef = () => window;

 interface Props {
   dwidth: number;
 }

const Header: React.FC<Props> = (props) => {
   const { dwidth } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${dwidth}px)` },
          ml: { sm: `${dwidth}px` },
          backgroundColor: '#F7F8FC',
          color: '#C9CBD7',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{justifyContent: 'space-between',}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            sx={{
              color: '#3751FF', 
              fontWeight: 700, 
              paddingRight: '15px', 
              display: {xs: 'block', sm: 'none', md: 'none', lg: 'none'}
            }} 
            variant="h6" 
            noWrap 
            component="p"
          >
            QuizBank
          </Typography>
          <Typography 
            variant="caption" 
            noWrap 
            component="p" 
            sx={{
              fontWeight: 600, 
              display: {xs: 'none', sm: 'flex', lg: 'flex'}
            }}
          >
            You are building : 
            <Typography 
              variant='caption' 
              noWrap 
              component="span" 
              sx={{
                color: '#3751FF', 
                paddingLeft: '3px', 
                fontWeight: 600, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '5px'
              }}
            >
              Programming Knowledge <HelpOutlineOutlinedIcon sx={{fontSize: '13px', cursor: 'pointer'}}/>
            </Typography>
          </Typography>
          <Button variant="contained" color='primary'>SIGN IN</Button>
        </Toolbar>
      </AppBar>
      {/* Sidebar Start */}
            <Sidebar 
              dwidth={dwidth} 
              window={windowRef} 
              drawerOpen={mobileOpen} 
              drawerFunction={handleDrawerToggle}
            />
      {/* Sideber End */}
    </>
  )
}

export default Header