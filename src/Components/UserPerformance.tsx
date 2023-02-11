import React from 'react';
import { 
  Avatar, 
  Box, 
  Grid,
  Typography
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import Reward from '../Assets/reward.png';
import CSSLogo from '../Assets/quiz/css.png';
import HTMLogo from '../Assets/quiz/html.png';
import ReactLogo from '../Assets/quiz/react.png';
import JavaScriptLogo from '../Assets/quiz/javascript.png';
const data = [
   {
     name: 'HTML',
     uv: 15,
   },
   {
     name: 'CSS',
     uv: 15,
   },
   {
     name: 'Reactjs',
     uv: 15,
   },
   {
     name: 'JavaScript',
     uv: 15,
   },
   {
     name: 'Nodejs',
     uv: 14,
   }
 ];

const UserPerformance: React.FC = () => {
  return (
   <Box component='div' className='user-quiz-performance' sx={{p: '60px 50px 0px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <Box 
          component='div' 
          sx={{
            width: '100%',
            p: '20px',
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
              p: '20px 0'
            }}>
              <Avatar alt="CSSLogo" src={CSSLogo} sx={{borderRadius: '0px', border: 'none'}} />
              <Avatar alt="HTMLogo" src={HTMLogo} sx={{borderRadius: '0px', border: 'none'}} />
              <Avatar alt="ReactLogo" src={ReactLogo} sx={{borderRadius: '0px', border: 'none'}} />
              <Avatar alt="JavaScriptLogo" src={JavaScriptLogo} sx={{borderRadius: '0px', border: 'none'}} />
              <Avatar>6+</Avatar>
          </Box>
          <Typography variant='h6' fontWeight='600'>Quiz Badges</Typography>
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
            <Typography variant='h5' fontWeight='700'>Assignment Analytics</Typography>
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
            <ResponsiveContainer width="100%" aspect={4}>
              <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
              >
                <XAxis dataKey="name" />
                <YAxis/>
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#3751FF" />
              </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserPerformance