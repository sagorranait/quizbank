import React, { useState } from 'react';
import { 
   Avatar, 
   Box, 
   Button, 
   Grid, 
   IconButton, 
   TextField,
 } from '@mui/material';
 import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useAppSelector } from '../app/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase.config';
import { toast } from 'react-hot-toast';

type ProfileInputs = {
  name: string,
  email: string,
  phone: string,
  photo_url: string,
  address: string,
  city: string,
  zip_code: string,
};

const ProfileUpdate: React.FC = () => {
  const urlKey = process.env.REACT_APP_IMGBB;
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileInputs>();
  const { id, name, email, phone, photo_url, address, city, zip_code } = useAppSelector(state => state.userData.user);

  const profileImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const washingtonRef = doc(db, "user", id || '');
      const formData = new FormData();
      formData.append('image', file);
      const url = `https://api.imgbb.com/1/upload?key=${urlKey}`;
      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(async imgData => {
        if (imgData.success) {
          setImage(imgData.data.url);
          await updateDoc(washingtonRef, { photo_url: imgData.data.url })
          .then((_)=>{
            toast.success('Successfully Image Added.');
          })
          .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`${errorCode} : ${errorMessage}`);
          });
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorCode} : ${errorMessage}`);
      }); 
    }
  }

  const onProfileHanler: SubmitHandler<ProfileInputs> = async data => {
    const washingtonRef = doc(db, "user", id || '');
    const { name, email, phone, address, city, zip_code } = data;
    setLoading(true);
    await updateDoc(washingtonRef, { name, email, phone, address, city, zip_code})
    .then((_)=>{
      setLoading(false);
      toast.success('Successfully Profile Updated.');
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
      toast.error(`${errorCode} : ${errorMessage}`);
    });
  };

  return (
   <Grid container spacing={2}>      
      <Grid item xs={12} sm={12} md={4} lg={3}>
        <Box 
          component='div' 
          sx={{
            width: '100%',
            p: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <Avatar
            alt={'P'}
            src={`${image ? image : photo_url}`}
            sx={{ 
              width: {xs: 200, sm: 200, md: 220, lg: 296}, 
              height: {xs: 200, sm: 200, md: 220, lg: 296}, 
              fontSize: '85px', 
              backgroundColor: '#3751ff52', 
            }}
          />
          <IconButton 
            color="primary" 
            aria-label="upload picture" 
            component="label"
            sx={{
              position: 'absolute',
              bottom: '49px',
              right: {xs: '30px', sm: '135px', md: '5px', lg: '7px', xl: '70px'},
              backgroundColor: '#F7F8FC',
              '&:hover': {
                backgroundColor: '#F7F8FC',
             },
            }}
          >
            <input hidden accept="image/*" type="file" onChange={profileImageHandler} />
            <PhotoCamera />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={9}>
        <Box component='form' sx={{p: {xs: '20px', sm: '20px', md: '20px 80px', lg: '20px 80px',},}} onSubmit={handleSubmit(onProfileHanler)}>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px', flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'}, gap: {xs: '30px', sm: '30px', md: '0px', lg: '0px'}}}>
            <TextField 
              {...register("name", { required: true })}
              id={errors.name?.type === 'required' ? 'standard-error' : 'standard-basic-name' }
              label={errors.name?.type === 'required' ? 'Name is required' : 'Name'} 
              error={errors.name?.type === 'required'}
              variant="standard" 
              type='text' 
              fullWidth 
              sx={{mr: '20px'}} 
              defaultValue={name}
            />
            <TextField 
              {...register("email", { required: true})}
              id={errors.email?.type === 'required' ? 'standard-error' : 'standard-basic-email' }
              label={errors.email?.type === 'required' ? 'Email is required' : 'Email'} 
              error={errors.email?.type === 'required'}
              variant="standard" 
              type='email' 
              fullWidth 
              defaultValue={email}
            />
          </Box>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px'}}>
            <TextField 
              {...register("phone", { required: true})}
              id={errors.phone?.type === 'required' ? 'standard-error' : 'standard-basic-phone' }
              label={errors.phone?.type === 'required' ? 'Phone Number is required' : 'Phone Number'} 
              error={errors.phone?.type === 'required'}
              variant="standard" 
              type='text' 
              fullWidth 
              sx={{mr: '20px'}} 
              defaultValue={phone}
            />
            <TextField 
              {...register("address", { required: true})}
              id={errors.address?.type === 'required' ? 'standard-error' : 'standard-basic-phone' }
              label={errors.address?.type === 'required' ? 'Address is required' : 'Address'} 
              error={errors.address?.type === 'required'}
              variant="standard" 
              type='text' 
              fullWidth
              defaultValue={address}
            />
          </Box>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px'}}>
          <TextField 
              {...register("city", { required: true})}
              id={errors.city?.type === 'required' ? 'standard-error' : 'standard-basic-city' }
              label={errors.city?.type === 'required' ? 'City is required' : 'City'} 
              error={errors.city?.type === 'required'}
              variant="standard" 
              type='text' 
              fullWidth 
              sx={{mr: '20px'}} 
              defaultValue={city}
            />
            <TextField 
              {...register("zip_code", { required: true})}
              id={errors.zip_code?.type === 'required' ? 'standard-error' : 'standard-basic-code' }
              label={errors.zip_code?.type === 'required' ? 'Zip Code is required' : 'Zip Code'} 
              error={errors.zip_code?.type === 'required'}
              variant="standard" 
              type='text' 
              fullWidth
              defaultValue={zip_code}
            />
          </Box>
          <Button type='submit' variant="contained" color='primary' sx={{pt: '10px', pb: '10px', textTransform: 'capitalize'}}>
            {loading ? 'Updating...' : 'Update Profile'}
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProfileUpdate