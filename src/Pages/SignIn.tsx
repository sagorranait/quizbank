import React, {useState} from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import FormWraper from '../Components/FormWraper';
import SocialMedia from '../Components/SocialMedia';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordRequirement from '../Components/PasswordRequirement';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase.config';
import { toast } from 'react-hot-toast';
import { doc, getDoc, setDoc } from "firebase/firestore";

type SignInputs = {
  email: string,
  password: string,
};

const SignIn: React.FC = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SignInputs>();

  let from = location.state?.from?.pathname || "/";

  const onSignIn: SubmitHandler<SignInputs> = data => {
    const {email, password} = data;
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      if (user) {        
        setLoading(false);
        navigate(from, { replace: true });
        toast.success('Successfully Sign-In.');

        const docRef = doc(db, "user", user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          await setDoc(doc(db, "user", user.uid), {
            name: user.displayName,
            email: user.email,
            quiz_took: [],
          });
        }
        
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
      <Typography variant='h5' sx={{fontWeight: 800, mb: 1, fontSize: {xs: '18px', sm: '18px', md: '23px', lg: '28px'}}}>Hey, Welcome Back !!!</Typography>
      <Typography variant='body1' sx={{fontSize: {xs: '15px', sm: '15px', md: '15px', lg: '16px'}}}>Use the email and password you chose when registering to your account.</Typography>
      <Box component='form' onSubmit={handleSubmit(onSignIn)}>
      <TextField 
        {...register("email", { required: true})}
        id={errors.email?.type === 'required' ? 'standard-error' : 'standard-basic-email' }
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
        id={errors.password?.type === 'required' ? 'standard-error' : 'standard-basic-password' }
        label={errors.password?.type === 'required' ? 'Password is required' : 'Password'} 
        error={errors.password?.type === 'required'}
        variant="standard" 
        type='password' 
        fullWidth 
        sx={{m: '20px 0px 25px'}} 
      />
      {errors.password?.message && <>{PasswordRequirement}</>}
        <Button fullWidth type='submit' variant="contained" color='primary' sx={{pt: '10px', pb: '10px'}}>{loading ? 'Signing...':'Sign In'}</Button>
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