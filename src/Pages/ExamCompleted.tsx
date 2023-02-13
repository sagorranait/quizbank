import React from 'react';
import { 
   Box, 
   Button, 
   Typography,
   Avatar
} from '@mui/material';
import Reward from '../Assets/reward.png';

const ExamCompleted: React.FC = () => {
  return (
   <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Box component='div'>
         <Box 
            component='div'
            sx={{
               width: '750px',
               backgroundColor: '#FFF',
               boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
               borderRadius: '15px',
               p: '0px 0px 30px',
               textAlign: 'center',
            }}
         >
           <Typography 
               variant='h6' 
               sx={{p: '15px 0px', textAlign: 'center', mb: '15px', borderBottom: '1px solid #ddd'}}
            >Reactjs Quiz</Typography>
            <Avatar alt="Reward" src={Reward} sx={{borderRadius: '0px', border: 'none', width: '90px', height: '90px', m: '0 auto'}} />
            <Typography variant='inherit' sx={{p: '5px 0'}}>Great Work! You earned a badge.</Typography>
            <Typography variant='body2'>You're in the <strong>top 5</strong>% of 2.0M people who took this.</Typography>
         </Box>
      </Box>
   </Box>
  )
}

export default ExamCompleted