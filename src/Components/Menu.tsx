import React from 'react';
import {
   List, 
   Toolbar, 
   ListItem, 
   ListItemText, 
   ListItemIcon, 
   ListItemButton 
 } from '@mui/material';
 import MailIcon from '@mui/icons-material/Mail';
 import InboxIcon from '@mui/icons-material/MoveToInbox';

const Menu: React.FC = () => {
  return (
   <div>
      <Toolbar />
      <List>
      {['Quizzes', 'Leader Board', 'Profile', 'About Us', 'Contact Us', 'FAQ'].map((text, index) => (
         <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon>
               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
            </ListItemButton>
         </ListItem>
      ))}
      </List>
   </div>
  )
}

export default Menu