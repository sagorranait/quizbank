import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import JavaScriptLogo from '../Assets/quiz/javascript.png';
import { Link } from 'react-router-dom';

const QuizItem: React.FC = () => {
  return (
   <Box sx={{ 
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    borderRadius: '15px', 
    boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
    p: '15px'
  }}>
    <Avatar
      alt="JavaScriptLogo"
      src={JavaScriptLogo}
      sx={{ width: 60, height: 60, borderRadius: '0px' }}
    />
    <Box component='div'>
      <Typography variant='h6'>
        JavaScript
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary">
        Intermediate
      </Typography>
    </Box>
    <Box component='div'>
      <Link to={'/html/practice'}>
        <Button 
          size="small" 
          sx={{
            border: '1px solid rgba(55, 81, 255, 0.5)', 
            borderRadius: '25px', 
            textTransform: 'capitalize',
            paddingLeft: '12px',
            paddingRight: '12px',
            mr: '5px'
          }}
        >Practice</Button>
      </Link>
      <Link to={'/html/start'}>
        <Button 
          size="small" 
          sx={{
            border: '1px solid rgba(55, 81, 255, 0.5)', 
            borderRadius: '25px', 
            textTransform: 'capitalize',
          }}
        >Start</Button>
      </Link>
    </Box>
   </Box>
  )
}

export default QuizItem