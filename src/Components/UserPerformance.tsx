import React from 'react';
import { 
  Avatar, 
  Box, 
  Grid,
  Typography
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import Reward from '../Assets/reward.png';
import CSSLogo from '../Assets/quiz/css.png';
import HTMLogo from '../Assets/quiz/html.png';
import ReactLogo from '../Assets/quiz/react.png';
import JavaScriptLogo from '../Assets/quiz/javascript.png';
import MarkChart from './MarkChart';

const UserPerformance: React.FC = () => {
  return (
   <Box component='div' className='user-quiz-performance' sx={{p: {xs: '0px', sm: '0px', md: '70px 50px 0px', lg: '20px 50px 0px', xl: '50px 50px 0px',}}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <Box 
          component='div' 
          sx={{
            width: '100%',
            p: {xs: '20px', sm: '20px', md: '12px 20px', lg: '41px 20px', xl: '111px 20px'},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#FFF',
            boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
            borderRadius: '15px'
          }}
        >
          <Avatar alt="Reward" src={Reward} sx={{borderRadius: '0px', border: 'none', width: '90px', height: '90px'}} />
          <Box component='div' sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', 
              gap: 1,
              p: '20px 0',
              flexWrap: 'wrap'
            }}>
              <Avatar alt="CSSLogo" src={CSSLogo} sx={{
                width: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},  
                height: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},
                borderRadius: '0px', 
                border: 'none'
                }} />
              <Avatar alt="HTMLogo" src={HTMLogo} sx={{
                width: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},  
                height: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},
                borderRadius: '0px', 
                border: 'none'
                }} />
              <Avatar alt="ReactLogo" src={ReactLogo} sx={{
                width: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},  
                height: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},
                borderRadius: '0px', 
                border: 'none'
                }} />
              <Avatar alt="JavaScriptLogo" src={JavaScriptLogo} sx={{
                width: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},  
                height: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},
                borderRadius: '0px', 
                border: 'none'
                }} />
              <Avatar sx={{
                width: {xs: '40px', sm: '40px', md: '48px', lg: '40px'},  
                height: {xs: '40px', sm: '40px', md: '48px', lg: '40px'},
              }}>6+</Avatar>
          </Box>
          <Typography variant='h6' fontWeight='600' sx={{fontSize: {xs: '1.25rem', sm: '1.25rem', md: '1rem', lg: '1.25rem'}}}>Quiz Badges</Typography>
        </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Box 
            component='div' 
            sx={{
              width: '100%',
              p: '20px',
              backgroundColor: '#FFF',
              boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
              borderRadius: '15px'
            }}
          >
            <Typography variant='h5' fontWeight='700'>Quiz Analytics</Typography>
            <Box component='div' sx={{p: '15px 0px', display: 'flex', gap: 1.5, alignItems: 'center'}}>
              <Box sx={{
                width: '45px', 
                height: '45px', 
                bgcolor: '#FDF7DF', 
                borderRadius: 50,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <StarIcon sx={{color: '#FFC800', fontSize: 23}}/>
              </Box>
              <Box component='div'>
                <Typography variant='h6' fontWeight='600' sx={{lineHeight: .8}}>80.00</Typography>
                <Typography variant='body2' >Avg Quiz Mark</Typography>
              </Box>
            </Box>
            <Box component='div' className='chart' width="100%">
              <MarkChart/>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserPerformance