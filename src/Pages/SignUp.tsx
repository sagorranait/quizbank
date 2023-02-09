import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import FormWraper from '../Components/FormWraper';
import SocialMedia from '../Components/SocialMedia';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <FormWraper>
      <Typography variant='h5' sx={{fontWeight: 800, mb: 1}}>Create an Account</Typography>
      <Typography variant='body1'>Even though registration just takes a few seconds, <br/> it provides you complete control over your purchase.</Typography>
      <Box component='form'>
        <TextField id="standard-basic" variant="standard" label="Name" type='text' fullWidth sx={{m: '20px 0px 10px'}} />
        <TextField id="standard-basic" variant="standard" label="Email" type='email' fullWidth sx={{m: '20px 0px 10px'}} />
        <TextField id="standard-basic" variant="standard" label="Password" type='password' fullWidth sx={{m: '20px 0px 25px'}} />
        <Button fullWidth variant="contained" color='primary' sx={{pt: '10px', pb: '10px'}}>Send Message</Button>
      </Box>
      <SocialMedia/>
      <Typography variant='body1'>
        Already have an account?
        <Link to='/sign-in' style={{color: '#3751FF', textDecoration: 'underline', marginLeft: '5px'}}>Login</Link>
      </Typography>
  </FormWraper>
  )
}

export default SignUp