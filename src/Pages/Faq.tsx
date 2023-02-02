import React from 'react';
import {
  Grid, 
  Box,
  Typography
} from '@mui/material';
import FAQ from '../Assets/faq.png';
import FaqAccordion from '../Components/FaqAccordion';

const Faq: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

   const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
   };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box component='div'>
          <Typography 
            variant='h4'
            sx={{
              fontSize: {xs: '28px'},
              fontWeight: 700,
              p: '30px 0 5px',
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography 
            variant='inherit'
            sx={{
              color: '#ADAEB2',
              pb: '25px'
            }}
          >
            Here are some common questions about QuizBank.
          </Typography>
          <FaqAccordion 
            id="panel1" 
            control='panel1d' 
            title='Poll or Survey Questions' 
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            expanded={expanded}
            handleChange={handleChange}
          />
          <FaqAccordion 
            id="panel2" 
            control='panel2d' 
            title='How to reopen an expired game?' 
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            expanded={expanded}
            handleChange={handleChange}
          />
          <FaqAccordion 
            id="panel3" 
            control='panel3d' 
            title='How do I make my content private?' 
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            expanded={expanded}
            handleChange={handleChange}
          />
          <FaqAccordion 
            id="panel4" 
            control='panel4d' 
            title='How do I change the order of my questions?' 
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            expanded={expanded}
            handleChange={handleChange}
          />
          <FaqAccordion 
            id="panel5" 
            control='panel5d' 
            title='Is there a character limit for questions?' 
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            expanded={expanded}
            handleChange={handleChange}
          />
          <FaqAccordion 
            id="panel6" 
            control='panel6d' 
            title='How do I change the name of my quiz?' 
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            expanded={expanded}
            handleChange={handleChange}
          />
          <FaqAccordion 
            id="panel7" 
            control='panel7d' 
            title='Can I add images to the answer options?' 
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            expanded={expanded}
            handleChange={handleChange}
          />
          <FaqAccordion 
            id="panel8" 
            control='panel8d' 
            title='How do I save the results of my quiz?' 
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            expanded={expanded}
            handleChange={handleChange}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box 
          component='div'
          sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
            <img src={FAQ} alt="FAQ" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Faq