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
      <CardContent sx={{padding: '30px', paddingBottom: '0px'}}>
        <Typography 
          variant="inherit" 
          color="text.secondary"
          sx={{textAlign: 'justify', color: '#333', fontSize: '16px', fontWeight: 500}}
        >
          Hard work will pay off later, laziness
        </Typography>
      </CardContent>
      <CardHeader
        sx={{padding: '10px 30px 25px',}}
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
        title="Adom Smith"
      />
    </Card>
  );
}

export default Motivation;