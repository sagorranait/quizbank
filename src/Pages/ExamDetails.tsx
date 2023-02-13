import React from 'react';
import { Link } from 'react-router-dom';
import { 
   Box, 
   Button, 
   Avatar, 
   Typography, 
   List, 
   ListItem, 
   ListItemText,
   Divider
} from '@mui/material';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const ExamDetails: React.FC = () => {
  return (
   <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Box component='div'>
         <Link to='/'>
            <Button 
               variant="text" 
               startIcon={<KeyboardBackspaceOutlinedIcon />} 
               sx={{ color: '#00000099', fontWeight: 600, mb: '15px'}}
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
            <Typography variant='body2' sx={{p: '13px 0px 5px'}}>10 people took this</Typography>
            <List sx={{ height: 'auto' }}>
               <ListItem sx={{p: '5px 0px 0px'}}>
                  <FormatListBulletedOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                  <ListItemText primary="10 multiple choice questions" sx={{fontSize: '12px'}} />
               </ListItem>
               <ListItem sx={{p: '5px 0px 0px'}}>
                  <AccessTimeOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                  <ListItemText primary="1.5 minutes per question" sx={{fontSize: '12px'}} />
               </ListItem>
               <ListItem sx={{p: '5px 0px 5px'}}>
                  <BeenhereOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                  <ListItemText primary="Score in the top 30% to earn a badge" sx={{fontSize: '12px'}} />
               </ListItem>
            </List>
            <Divider light />
            <Typography variant='h6' sx={{p: '8px 0px 0px'}}>Before you start</Typography>
            <List sx={{ height: 'auto' }}>
               <ListItem sx={{p: '0px'}}>
                  <FiberManualRecordIcon sx={{color: '#333', pr: '10px'}} />
                  <ListItemText primary="You must complete this assessment in one session — make sure your internet is reliable." sx={{fontSize: '12px'}} />
               </ListItem>
               <ListItem sx={{p: '5px 0px 0px'}}>
                  <FiberManualRecordIcon sx={{color: '#333', pr: '10px'}} />
                  <ListItemText primary="You can retake this assessment once if you don’t earn a badge." sx={{fontSize: '12px'}} />
               </ListItem>
               <ListItem sx={{p: '5px 0px 5px'}}>
                  <FiberManualRecordIcon sx={{color: '#333', pr: '10px'}} />
                  <ListItemText primary="We won’t show your results to anyone without your permission." sx={{fontSize: '12px'}} />
               </ListItem>
            </List>
            <Box 
               component='div' 
               sx={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  mt: '5px',
                  pt: '15px',
                  borderTop: '1px solid #ddd',
               }}
            >
               <Typography variant='body2'>Language: <b>English</b></Typography>
               <Box component='div'>
                  <Link to={'/html/practice'}>
                  <Button 
                     size="small" 
                     sx={{
                        border: '1px solid rgba(55, 81, 255, 0.5)', 
                        borderRadius: '25px', 
                        textTransform: 'capitalize',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        mr: '10px'
                     }}
                  >Practice</Button>
                  </Link>
                  <Link to={'/quiz/html/start'}>
                  <Button
                     variant="contained"
                     size="small" 
                     sx={{
                        border: '1px solid rgba(55, 81, 255, 0.5)', 
                        borderRadius: '25px', 
                        textTransform: 'capitalize',
                     }}
                  >Start</Button>
                  </Link>
               </Box>
            </Box>
         </Box>
      </Box>
   </Box>
  )
}

export default ExamDetails