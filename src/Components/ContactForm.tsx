import React from 'react';
import {
   Box,
   Button,
   TextField,
 } from '@mui/material';

const ContactForm: React.FC = () => {
  return (
   <Box 
      component='form'
      sx={{p: '45px 200px'}}
   >
      <Box component='div' sx={{display: 'flex', justifyContent: 'space-between'}}>
         <TextField id="outlined-name" label="First Name" type='text' fullWidth  sx={{mr: '20px'}} />
         <TextField id="outlined-name" label="Last Name" type='text' fullWidth />
      </Box>
      <TextField id="outlined-name" label="Email" type='email' fullWidth sx={{m: '20px 0px'}} />
      <TextField fullWidth multiline id="outlined-multiline-static" label="Message" rows={5} variant="outlined" sx={{mb: '20px'}}/>
      <TextField fullWidth multiline id="outlined-multiline-static" label="Additional Details" rows={5} variant="outlined" sx={{mb: '20px'}}/>
      <Button fullWidth variant="contained" color='primary' sx={{pt: '10px', pb: '10px'}}>Send Message</Button>
   </Box>
  )
}

export default ContactForm