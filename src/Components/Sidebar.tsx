import React from 'react';
import {
   Box, 
   Drawer, 
 } from '@mui/material';
import Menu from './Menu';

interface Props {
   dwidth: number;
   window: () => Window & typeof globalThis;
   drawerOpen: boolean;
   drawerFunction: () => void;
 }

const Sidebar:React.FC<Props> = (props) => {
   const {dwidth, window, drawerOpen, drawerFunction} = props;

   const container = window !== undefined ? () => window().document.body : undefined;

  return (
   <Box
      component="nav"
      sx={{ width: { sm: dwidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
   >
      <Drawer
      container={container}
      variant="temporary"
      open={drawerOpen}
      onClose={drawerFunction}
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
         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: dwidth, borderRight: '0px', justifyContent: 'space-between' },
      }}
      open
      >
      <Menu/>
      </Drawer>
   </Box>
  )
}

export default Sidebar