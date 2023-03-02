import React from 'react';
import { 
  Avatar, 
  Box, 
  Grid,
  Typography
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Reward from '../Assets/reward.png';
import MarkChart from './MarkChart';
import { useAppSelector } from '../app/store';

interface examState {
  bache: string,
  title: string,
  quizId: string,
  mark: number,
}

const UserPerformance: React.FC = () => {
  const { quiz_took } = useAppSelector(state => state.userData.user);
  const baches =  quiz_took?.filter((quiz: examState) => quiz.mark > 5 ) || [];
  const sum = quiz_took?.reduce((accumulator: number, currentValue: examState) => {
    return accumulator + currentValue.mark;
  }, 0);  

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
              {baches?.length > 0 ? (
                baches.map((data: examState, index: number) => <Avatar key={index} alt={data.title} src={data.bache} sx={{
                  width: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},  
                  height: {xs: '40px', sm: '40px', md: '20px', lg: '40px'},
                  borderRadius: '0px', 
                  border: 'none'
                }} />)                
              ) : (
                <Typography sx={{textAlign: 'center'}}>You haven't earn any bache. Please give a test to earn a bache.</Typography>
              )}
              {baches?.length > 4 ? (
                <Avatar sx={{
                  width: {xs: '40px', sm: '40px', md: '48px', lg: '40px'},  
                  height: {xs: '40px', sm: '40px', md: '48px', lg: '40px'},
                }}>{baches?.length - 4 }+</Avatar>
              ) : undefined}              
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
                <Typography variant='h6' fontWeight='600' sx={{lineHeight: .8}}>{((sum || 0) / (quiz_took?.length || 0))}</Typography>
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