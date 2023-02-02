import React from 'react';
import {
  Box,
  Typography
} from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="section" 
      sx={{ height: '50px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', p: {xs: '30px 0px'}}}
    >
      <Typography variant='subtitle2' sx={{textAlign: 'center', width: '100%', color: '#ADAEB2'}}>
        &copy; Copyright 2023, Developed by 
        <a href="https://www.linkedin.com/in/sagorranait" target="_blank" rel="noreferrer" style={{fontWeight: 600}}> Sagor Rana</a>
      </Typography>   
    </Box>
  )
}

export default Footer