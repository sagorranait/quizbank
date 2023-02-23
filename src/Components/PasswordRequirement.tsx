import React from 'react';
import { Box, Typography, } from '@mui/material';

const PasswordRequirement: React.FC = () => {
  return (
   <Box component='div' textAlign='left'>
    <Typography variant='inherit'>Password must contain at least : </Typography>
    <Box component='ul' sx={{p: '6px 30px 10px'}}>
      <Box component='li'>One uppercase letter.</Box>
      <Box component='li'>One lowercase letter.</Box>
      <Box component='li'>One number.</Box>
      <Box component='li'>One special character.</Box>
      <Box component='li'>And be 8-12 characters long.</Box>
    </Box>
  </Box>
  )
}

export default PasswordRequirement