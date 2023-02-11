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

const ProfileUpdate: React.FC = () => {
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
            alt="Semy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 296, height: 296, fontSize: '85px', backgroundColor: '#3751ff52', }}
          />
          <IconButton 
            color="primary" 
            aria-label="upload picture" 
            component="label"
            sx={{
              position: 'absolute',
              bottom: '49px',
              right: '70px',
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
        <Box component='form' sx={{p: '20px 80px'}}>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px'}}>
            <TextField id="standard-basic" variant="standard" label="Name" type='text' fullWidth  sx={{mr: '20px'}} defaultValue='Sagor Rana' />
            <TextField id="standard-basic" variant="standard" label="Email" type='email' fullWidth defaultValue='sagorranait@gmail.com' />
          </Box>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px'}}>
            <TextField id="standard-basic" variant="standard" label="Phone Number" type='text' fullWidth  sx={{mr: '20px'}} defaultValue='+880188339955' />
            <TextField id="standard-basic" variant="standard" label="Photo URL" type='url' fullWidth />
          </Box>
          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', pb: '30px'}}>
            <TextField id="standard-basic" variant="standard" label="New Password" type='password' fullWidth  sx={{mr: '20px'}} />
            <TextField id="standard-basic" variant="standard" label="Confirm Password" type='password' fullWidth />
          </Box>
          <Button variant="contained" color='primary' sx={{pt: '10px', pb: '10px', textTransform: 'capitalize'}}>Update Profile</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProfileUpdate