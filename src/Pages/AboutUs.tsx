import React from 'react';
import {
  Grid, 
  Box,
  Typography
} from '@mui/material';
import About from '../Assets/about.png';
import Title from '../Components/Title';

const AboutUs: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box component='div'>
          <Title title='Who We Are' subtitle="QuizBank is a knowledge base dedicated to helping you increase your programming knowledge. We're on a mission to help people build their knowledge. Our team is comprised of top-level programmers who is passionate about choosing the best questions for you."/>
          <Box component='div' sx={{pb: '25px'}}>
            <Typography variant='h6' sx={{fontWeight: 700, pb: '10px'}}>Our Story</Typography>
            <Typography variant='body1' sx={{color: '#ADAEB2'}}>QuizBank was founded in 2023 by Sagor Rana, who saw an opportunity to build a platform for programmers who wants to build their knowledge about programming. Since then, we've grown quickly and have become popular.</Typography>
          </Box>
          <Box component='div' sx={{pb: '25px'}}>
            <Typography variant='h6' sx={{fontWeight: 700, pb: '10px'}}>Our Approach</Typography>
            <Typography variant='body1' sx={{color: '#ADAEB2'}}>At QuizBank, we believe that as a programmer we should increase our knowledge everyday. That's why we take a [what kind of approach the company takes] to everything we do. We're dedicated to [what the company is dedicated to] and we're always striving to [what the company is striving to do].</Typography>
          </Box>
          <Box component='div' sx={{pb: '25px'}}>
            <Typography variant='h6' sx={{fontWeight: 700, pb: '10px'}}>Our Products/Services</Typography>
            <Typography variant='body1' sx={{color: '#ADAEB2'}}>We offer [what your company offers]. Our [products/services] are designed to [what they're designed to do] and are made with [what they're made with]. We're constantly innovating and improving, so that we can provide the best [products/services] possible.</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box 
          component='div'
          sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
          <img src={About} alt="about" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default AboutUs