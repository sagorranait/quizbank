import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Avatar, Typography, List, ListItem, ListItemText } from '@mui/material';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';

const Exam: React.FC = () => {
  return (
   <Box component='div'>
      <Box component='div'>
         <Link to='/'>
            <Button 
               variant="text" 
               startIcon={<KeyboardBackspaceOutlinedIcon />} 
               sx={{ color: '#00000099', fontWeight: 600, }}
            >
               Quizzes
            </Button>
         </Link>
         <Box 
            component='div'
            sx={{
               width: '950px',
               backgroundColor: '#FFF',
               boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
               borderRadius: '15px',
               p: '30px'
            }}
         >
            <Avatar
               alt="Remy Sharp"
               src="/static/images/avatar/1.jpg"
               sx={{ width: 56, height: 56, borderRadius: 0, }}
            />
            <Typography variant='h6' sx={{p: '8px 0px'}}>Reactjs Quiz</Typography>
            <Typography variant='body2'>Topics: Advanced React, Component Side Effects, Rendering React Elements, Stateful Components and User Interactivity</Typography>
            <Typography variant='body2' sx={{p: '13px 0px'}}>10 people took this</Typography>
               <List sx={{ height: 'auto' }}>
                  <ListItem sx={{p: '5px 0px 0px'}}>
                     <FormatListBulletedOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                     <ListItemText primary="10 multiple choice questions" />
                  </ListItem>
                  <ListItem sx={{p: '5px 0px 0px'}}>
                     <AccessTimeOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                     <ListItemText primary="1.5 minutes per question" />
                  </ListItem>
                  <ListItem sx={{p: '5px 0px 0px'}}>
                     <BeenhereOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                     <ListItemText primary="Score in the top 30% to earn a badge" />
                  </ListItem>
               </List>
         </Box>
      </Box>
   </Box>
  )
}

export default Exam