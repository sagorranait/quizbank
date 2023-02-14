import React from 'react';
import {
  Grid, 
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
} from '@mui/material';
import Title from '../Components/Title';
import ContactForm from '../Components/ContactForm';

import DelMar from '../Assets/brands/del-mar-logo.png';
import HigherLogo from '../Assets/brands/higher-logo.png';
import InDepth from '../Assets/brands/in-depth-logo.png';
import National from '../Assets/brands/national-logo.png';
import OrSale from '../Assets/brands/or-sale-logo.png';
import Sentinal from '../Assets/brands/sentinal-logo.png';

const itemData: { img: string; title: string; }[] = [
  { img: DelMar, title: 'DelMar', },
  { img: OrSale, title: 'OrSale', },
  { img: InDepth, title: 'InDepth', },
  { img: National, title: 'National', },
  { img: Sentinal, title: 'Sentinal', },
  { img: HigherLogo, title: 'HigherLogo', }
];

const ContactUs: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Box component='div'>
          <Title 
            title='How Can We Help?' 
            subtitle='Please select a topic below related to your inquiry. If you do not find what you need, fill out our contact form.'
          />
          <List sx={{ width: '100%'}}>
            <ListItem sx={{p: '10px 0px', borderBottom: '2px solid #ddd'}}>
              <ListItemText primary="Book a Demo" secondary="Request a demo from one of our converstion specialists." />
            </ListItem>
            <ListItem sx={{p: '10px 0px', borderBottom: '2px solid #ddd'}}>
              <ListItemText primary="Get Inspired" secondary="Discoverthe many ways in which our customers use Sleeknote." />
            </ListItem>
            <ListItem sx={{p: '10px 0px'}}>
              <ListItemText primary="Become a Partner" secondary="Join our Partner Program and earn 25% recurring commission" />
            </ListItem>
          </List>                
        </Box>
        <Box component='div' sx={{mt: '50px'}}>
            <Typography color='primary' sx={{fontWeight: 700, pb: '15px'}}>Trusted By : </Typography>
            <Box 
              component='div' 
              sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              {itemData.map((item) => (
                <Avatar
                  key={item.img}
                  src={`${item.img}`}
                  alt={item.title}
                  sx={{ width: '100px', borderRadius: 0, mr: {xs: '35px', sm: '35px', md: '22px', lg: '35px'}, mb: '15px' }}
                />
                ))}
            </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <ContactForm/>
      </Grid>
    </Grid>
  )
}

export default ContactUs