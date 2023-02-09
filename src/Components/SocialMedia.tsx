import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import Google from '../Assets/search.png';
import FaceBook from '../Assets/facebook.png';
import GitHub from '../Assets/github.png';


const SocialMedia: React.FC = () => {
  return (
   <Box component='div' sx={{m: '20px 0'}}>
      <Typography variant='inherit'>Or</Typography>
      <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mt: '10px'}}>
         <Button sx={{color: '#000', border: '1px solid #EA4335', borderRadius: '35px', width: '100%', '&:hover': {
         backgroundColor: '#ea43350f',
         },}}><Avatar alt="Google" src={Google} sx={{ width: 24, height: 24, mr: '10px' }} /> Google</Button>
         <Button sx={{color: '#000', border: '1px solid #4267B2', borderRadius: '35px', width: '100%',}}><Avatar alt="FaceBook" src={FaceBook} sx={{ width: 24, height: 24, mr: '10px' }} /> Facebook</Button>
         <Button sx={{color: '#000', border: '1px solid #000', borderRadius: '35px', width: '100%', '&:hover': {
         backgroundColor: '#0000000f',
         },}}><Avatar alt="GitHub" src={GitHub} sx={{ width: 24, height: 24, mr: '10px'}} /> GitHub</Button>
      </Box>
   </Box>
  )
}

export default SocialMedia