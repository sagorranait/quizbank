import React from 'react';
import { Box } from '@mui/material';

interface FormWraperProps{
   children?: React.ReactNode;
}

const FormWraper: React.FC<FormWraperProps> = ({children}) => {
  return (
   <Box component='div' display='flex' alignItems='center' justifyContent='center' height='100%'>
      <Box 
        component='div' 
        sx={{
          textAlign: 'center',
          backgroundColor: '#FFF',
          boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
          p: '50px'
        }}
      >
         {children}
      </Box>
   </Box>
  )
}

export default FormWraper