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
         <TextField id="standard-basic" variant="standard" label="First Name" type='text' fullWidth  sx={{mr: '20px'}} />
         <TextField id="standard-basic" variant="standard" label="Last Name" type='text' fullWidth />
      </Box>
      <TextField id="standard-basic" variant="standard" label="Email" type='email' fullWidth sx={{m: '30px 0px'}} />
      <TextField fullWidth multiline id="standard-multiline-static" label="Message" rows={5} variant="standard" sx={{mb: '30px'}}/>
      <TextField fullWidth multiline id="standard-multiline-static" label="Additional Details" rows={5} variant="standard" sx={{mb: '30px'}}/>
      <Button fullWidth variant="contained" color='primary' sx={{pt: '10px', pb: '10px'}}>Send Message</Button>
   </Box>
  )
}

export default ContactForm