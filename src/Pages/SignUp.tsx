import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import FormWraper from '../Components/FormWraper';
import SocialMedia from '../Components/SocialMedia';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../app/store';
import { storeUser } from '../features/user/user';

type Inputs = {
  name: string,
  email: string,
  password: string,
};

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSignUp: SubmitHandler<Inputs> = data => {
    console.log(data);
    dispatch(storeUser({name: data.name, email: data.email}));
  };

  const passwordRequirement = <Box component='div' textAlign='left'>
    <Typography variant='inherit'>Password must contain at least : </Typography>
    <Box component='ul' sx={{p: '6px 30px 10px'}}>
      <Box component='li'>One uppercase letter.</Box>
      <Box component='li'>One lowercase letter.</Box>
      <Box component='li'>One number.</Box>
      <Box component='li'>One special character.</Box>
      <Box component='li'>And be 8-12 characters long.</Box>
    </Box>
  </Box>;
  
  return (
    <FormWraper>
      <Typography variant='h5' sx={{fontWeight: 800, mb: 1, fontSize: {xs: '18px', sm: '18px', md: '23px', lg: '28px'}}}>Create an Account</Typography>
      <Typography variant='body1' sx={{fontSize: {xs: '15px', sm: '15px', md: '15px', lg: '16px'}}}>Even though registration just takes a few seconds, it provides you complete control over your purchase.</Typography>
      <Box component='form' onSubmit={handleSubmit(onSignUp)}>
        <TextField 
            {...register("name", { required: true, maxLength: 10 })}
            id={errors.name?.type === 'required' ? 'standard-error' : 'standard-basic' }
            label={errors.name?.type === 'required' ? 'Name is required' : 'Name'} 
            error={errors.name?.type === 'required'}
            variant="standard" 
            type='text' 
            fullWidth 
            sx={{m: '20px 0px 10px'}} 
          />
        <TextField 
            {...register("email", { required: true})}
            id={errors.email?.type === 'required' ? 'standard-error' : 'standard-basic' }
            label={errors.email?.type === 'required' ? 'Email is required' : 'Email'} 
            error={errors.email?.type === 'required'}
            variant="standard" 
            type='email' 
            fullWidth 
            sx={{m: '20px 0px 10px'}} 
          />
        <TextField 
            {...register("password", { 
              required: true, 
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              })}
            id={errors.password?.type === 'required' ? 'standard-error' : 'standard-basic' }
            label={errors.password?.type === 'required' ? 'Password is required' : 'Password'} 
            error={errors.password?.type === 'required'}
            variant="standard" 
            type='password' 
            fullWidth 
            sx={{m: '20px 0px 25px'}} 
          />
          {errors.password?.message && passwordRequirement}
        <Button fullWidth variant="contained" type='submit' color='primary' sx={{pt: '10px', pb: '10px'}}>Sign Up</Button>
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