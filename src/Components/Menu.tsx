import React from 'react';
import { NavLink } from 'react-router-dom';
import {
   List, 
   Toolbar, 
   ListItem, 
   ListItemText, 
   ListItemIcon, 
   ListItemButton, 
   Typography
 } from '@mui/material';
 import Motivation from './Motivation';
 import { useAppSelector } from '../app/store';
 import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
 import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
 import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
 import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
 import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

const Menu: React.FC = () => {
   const user = useAppSelector(state => state?.userData.user);
  return (
   <>
      <Typography 
         sx={{padding: "16px 25px", color: '#3751FF', fontWeight: 800,}} 
         variant="h6" 
         noWrap 
         component="p"
      >
         QuizBank
      </Typography>
      <Toolbar />
      <List>
         {user.id && 
            <NavLink
               to={'/profile'}
               className={({ isActive }) => {
                  return isActive ? "active" : "";
               }}
               end
            >
               <ListItem disablePadding>
                  <ListItemButton sx={{fontWeight: 600,}}>
                     <ListItemIcon>
                        <PersonOutlinedIcon/>
                     </ListItemIcon>
                     <ListItemText primary="My Profile"/>
                     </ListItemButton>
               </ListItem>
            </NavLink>
         }
         <NavLink
            to={'/'}
            className={({ isActive }) => {
               return isActive ? "active" : "";
            }}
         >
            <ListItem disablePadding>
               <ListItemButton>
               <ListItemIcon>
                  <QuizOutlinedIcon/>
               </ListItemIcon>
                     <ListItemText primary="Quizzes" />
               </ListItemButton>
            </ListItem>
         </NavLink>
         <NavLink
            to={'/about-us'}
            className={({ isActive }) => {
               return isActive ? "active" : "";
            }}
         >
            <ListItem disablePadding>
               <ListItemButton>
               <ListItemIcon>
                  <HailOutlinedIcon/>
               </ListItemIcon>
               <ListItemText primary="About Us" />
               </ListItemButton>
            </ListItem>
         </NavLink>
         <NavLink
            to={'/contact-us'}
            className={({ isActive }) => {
               return isActive ? "active" : "";
            }}
         >
            <ListItem disablePadding>
               <ListItemButton>
               <ListItemIcon>
                  <ConnectWithoutContactOutlinedIcon/>
               </ListItemIcon>
               <ListItemText primary="Contact Us" />
               </ListItemButton>
            </ListItem>
         </NavLink>
         <NavLink
            to={'/faq'}
            className={({ isActive }) => {
               return isActive ? "active" : "";
            }}
         >
            <ListItem disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                     <LiveHelpOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="FAQ" />
               </ListItemButton>
            </ListItem>
         </NavLink>
      </List>
      <Motivation/>
   </>
  )
}

export default Menu