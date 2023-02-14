import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import FormWraper from '../Components/FormWraper';
import SocialMedia from '../Components/SocialMedia';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <FormWraper>
      <Typography variant='h5' sx={{fontWeight: 800, mb: 1, fontSize: {xs: '18px', sm: '18px', md: '23px', lg: '28px'}}}>Hey, Welcome Back !!!</Typography>
      <Typography variant='body1' sx={{fontSize: {xs: '15px', sm: '15px', md: '15px', lg: '16px'}}}>Use the email and password you chose when registering to your account.</Typography>
      <Box component='form'>
        <TextField id="standard-basic" variant="standard" label="Email" type='email' fullWidth sx={{m: '20px 0px 10px'}} />
        <TextField id="standard-basic" variant="standard" label="Password" type='password' fullWidth sx={{m: '20px 0px 25px'}} />
        <Box 
          component='div' 
          display='flex'
          alignItems='center'
          justifyContent='space-between' 
          sx={{flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'}, gap: '10px'}}
        >
          <Button variant="contained" color='primary' sx={{pt: '10px', pb: '10px', width: '72%'}}>Sign In</Button>
          <Button variant="contained" color='primary' sx={{pt: '10px', pb: '10px'}}>Demo Sign In</Button>
        </Box>
      </Box>
      <SocialMedia/>
      <Typography variant='body1'>
        Don’t have an account? 
        <Link to='/sign-up' style={{color: '#3751FF', textDecoration: 'underline',  marginLeft: '5px'}}>Create an account</Link>
      </Typography>
  </FormWraper>
  );
}

export default SignIn