import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const Motivation: React.FC = () => {

  return (
    <Card 
      sx={{
        paddingTop: '10px', 
        boxShadow: 'none', 
        border: 'none', 
        borderRadius: '0px',
      }}
    >
      <Typography variant='inherit' sx={{fontSize: '70px', color: '#F2F3F7', height: '30px', paddingLeft: '8px'}}>"</Typography>
      <CardContent sx={{padding: '0px 33px 0px',}}>
        <Typography 
          variant="inherit" 
          color="text.secondary"
          sx={{textAlign: 'justify', color: '#434652', fontSize: '16px', fontWeight: 500}}
        >
          Hard work will pay off later, laziness.
        </Typography>
      </CardContent>
      <CardHeader
        sx={{padding: '10px 33px 25px',}}
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
        title="Adom Smith"
      />
      <Typography variant='subtitle2' sx={{textAlign: 'center', width: '100%', color: '#ADAEB2', pb: '10px'}}>
        Developed By
        <a href="https://www.linkedin.com/in/sagorranait" target="_blank" rel="noreferrer" style={{fontWeight: 600, paddingLeft: '5px'}}>Sagor Rana</a>
      </Typography>   
    </Card>
  );
}

export default Motivation;