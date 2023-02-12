import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import QuizSlider from '../Components/QuizSlider';
import QuizItem from '../Components/QuizItem';

const Quizzes: React.FC = () => {
  return (
    <>
      <Box component='div'>
          <QuizSlider/>
      </Box>
      <Box component='div' sx={{p: '40px 20px 20px'}}>
          <Box component='div' sx={{pb: '20px'}}>
            <Typography variant='h6'>All Quizzes</Typography>
          </Box>
          <Box component='div'>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <QuizItem/>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </>
  )
}

export default Quizzes