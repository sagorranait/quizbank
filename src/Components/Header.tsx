import React from 'react';
import {
   Box, 
   Drawer, 
   AppBar, 
   Toolbar, 
   IconButton, 
   Typography,
 } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
 import Menu from './Menu';

 interface CustomProps {
   dwidth: number;
   window: () => Window & typeof globalThis;
 }

const Header: React.FC<CustomProps> = (props) => {
   const { window, dwidth } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const container = window !== undefined ? () => window().document.body : undefined;

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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Sidebar Start */}
      <Box
        component="nav"
        sx={{ width: { sm: dwidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: dwidth },
          }}
        >
          <Menu/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: dwidth, borderRight: '0px' },
          }}
          open
        >
          <Menu/>
        </Drawer>
      </Box>
      {/* Sideber End */}
    </>
  )
}

export default Header