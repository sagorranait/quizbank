import React from 'react';
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

const ProfileUpdate: React.FC = () => {
  const { name, email, phone, photo_url, address, city, zip_code } = useAppSelector(state => state.userData.user);

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
            alt={name?.charAt(0) || 'P'}
            src={photo_url || ''}
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
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={9}>
        <Box component='form' sx={{p: {xs: '20px', sm: '20px', md: '20px 80px', lg: '20px 80px',},}}>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px', flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'}, gap: {xs: '30px', sm: '30px', md: '0px', lg: '0px'}}}>
            <TextField id="standard-basic" variant="standard" label="Name" type='text' fullWidth  sx={{mr: '20px'}} defaultValue={name} />
            <TextField id="standard-basic" variant="standard" label="Email" type='email' fullWidth defaultValue={email} />
          </Box>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px'}}>
            <TextField id="standard-basic" variant="standard" label="Phone Number" type='text' fullWidth  sx={{mr: '20px'}} defaultValue={phone} />
            <TextField id="standard-basic" variant="standard" label="Address" type='text' fullWidth defaultValue={address} />
          </Box>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px'}}>
            <TextField id="standard-basic" variant="standard" label="City" type='text' fullWidth  sx={{mr: '20px'}} defaultValue={city} />
            <TextField id="standard-basic" variant="standard" label="Zip Code" type='text' fullWidth defaultValue={zip_code} />
          </Box>
          <Button type='submit' variant="contained" color='primary' sx={{pt: '10px', pb: '10px', textTransform: 'capitalize'}}>Update Profile</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProfileUpdate