import React, { useState } from 'react';
import {
   Box,
   Button,
   TextField,
 } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase.config';
import { toast } from 'react-hot-toast';

type ContactInputs = {
   fname: string,
   lname: string,
   email: string,
   message: string,
   additional_message: string;
 };

const ContactForm: React.FC = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInputs>();

   const onContactHandler: SubmitHandler<ContactInputs> = async data => {
      const {fname, lname, email, message, additional_message} = data;
      setLoading(true);
      await addDoc(collection(db, "message"), {
         name: `${fname} ${lname}`,
         email,
         message,
         additional_message
      })
      .then((result)=>{
         console.log(result);         
         setLoading(false);
         reset();
         toast.success('Successfully Message Send.')
      })
      .catch((error)=>{
         const errorCode = error.code;
         const errorMessage = error.message;
         setLoading(false);
         toast.error(`${errorCode} : ${errorMessage}`);
      });
   }

  return (
   <Box 
      component='form'
      sx={{p: {xs: '35px 0px 15px', sm: '35px 0px 15px', md: '35px 0px', lg: '45px 200px'}}}
      onSubmit={handleSubmit(onContactHandler)}
   >
      <Box component='div' sx={{display: 'flex', justifyContent: 'space-between'}}>
         <TextField 
            {...register("fname", { required: true, maxLength: 10 })}
            id={errors.fname?.type === 'required' ? 'standard-error' : 'standard-basic' }
            label={errors.fname?.type === 'required' ? 'First Name is required' : 'First Name'} 
            error={errors.fname?.type === 'required'}
            variant="standard" 
            type='text' 
            fullWidth 
            sx={{mr: '20px'}}
         />
         <TextField 
            {...register("lname", { required: true, maxLength: 10 })}
            id={errors.lname?.type === 'required' ? 'standard-error' : 'standard-basic' }
            label={errors.lname?.type === 'required' ? 'Last Name is required' : 'Last Name'} 
            error={errors.lname?.type === 'required'}
            variant="standard" 
            type='text' 
            fullWidth 
         />
      </Box>
      <TextField 
         {...register("email", { required: true})}
         id={errors.email?.type === 'required' ? 'standard-error' : 'standard-basic' }
         label={errors.email?.type === 'required' ? 'Email is required' : 'Email'} 
         error={errors.email?.type === 'required'}
         variant="standard" 
         type='email' 
         fullWidth 
         sx={{m: '30px 0px'}}
      />
      <TextField 
         {...register("message", { required: true})}
         id={errors.message?.type === 'required' ? 'standard-error' : 'standard-basic' }
         label={errors.message?.type === 'required' ? 'Message is required' : 'Message'} 
         error={errors.message?.type === 'required'}
         fullWidth 
         multiline 
         rows={4} 
         variant="standard" 
         sx={{mb: '35px'}}
      />
      <TextField 
         {...register("additional_message")}
         id="standard-multiline-static" 
         label="Additional Details" 
         rows={4} 
         variant="standard" 
         fullWidth 
         multiline 
         sx={{mb: '35px'}}
      />
      <Button 
         type='submit' 
         fullWidth 
         variant="contained" 
         color='primary' 
         sx={{pt: '10px', pb: '10px', mt: '10px'}}
      >{loading ? 'Sending...' : 'Send Message'}</Button>
   </Box>
  )
}

export default ContactForm