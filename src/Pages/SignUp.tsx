import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-hot-toast';
import FormWraper from '../Components/FormWraper';
import SocialMedia from '../Components/SocialMedia';
import PasswordRequirement from '../Components/PasswordRequirement';

type Inputs = {
  name: string,
  email: string,
  password: string,
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSignUp: SubmitHandler<Inputs> = data => {
    const {name, email, password} = data;
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
         if (user) {
            updateProfile(user, { displayName: name,})
            .then(() => {
               signOut(auth)
               .then(() => {
                setLoading(false);
                toast.success('Successfully Sign-Up!')
                navigate('/sign-in');
               })
             })
         }
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setLoading(false);
         toast.error(`${errorCode} : ${errorMessage}`);
      });
  };
  
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
          {errors.password?.message && <>{PasswordRequirement}</>}
        <Button fullWidth variant="contained" type='submit' color='primary' sx={{pt: '10px', pb: '10px'}}>{loading ? 'Creating...':'Sign Up'}</Button>
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