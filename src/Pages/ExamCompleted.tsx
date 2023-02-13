import React from 'react';
import { 
   Box, 
   Button, 
   Typography,
} from '@mui/material';

const ExamCompleted: React.FC = () => {
  return (
   <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Box component='div'>
         <Box 
            component='div'
            sx={{
               width: '950px',
               backgroundColor: '#FFF',
               boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
               borderRadius: '15px',
               p: '0px 0px 30px'
            }}
         >
           <Typography 
               variant='h6' 
               sx={{p: '15px 0px', textAlign: 'center', mb: '15px', borderBottom: '1px solid #ddd'}}
            >Reactjs Quiz</Typography>
         </Box>
      </Box>
   </Box>
  )
}

export default ExamCompleted