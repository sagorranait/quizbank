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
          width: {xs: '100%', sm: '100%', md: '600px', lg: '600px'},
          textAlign: 'center',
          backgroundColor: '#FFF',
          boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
          p: {xs: '20px', sm: '20px', md: '50px', lg: '50px'},
          mb: {xs: '0px', sm: '0px', md: '110px', lg: '0px'}
        }}
      >
         {children}
      </Box>
   </Box>
  )
}

export default FormWraper