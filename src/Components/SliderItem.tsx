import React from 'react';
import { 
  Avatar, 
  Box, 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  Typography 
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import JavaScriptLogo from '../Assets/quiz/javascript.png';

const SliderItem:React.FC = () => {
  return (
   <Box>
       <Card sx={{ 
            minWidth: '275px', 
            width: '275px', 
            borderRadius: '15px', 
            boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)' 
          }}
        >
        <CardContent sx={{pb: 0}}>
          <Box component='div' sx={{display: 'flex', 
              alignItems: 'flex-start', 
              justifyContent: 'space-between'}}>
            <Avatar
              alt="JavaScriptLogo"
              src={JavaScriptLogo}
              sx={{ width: 66, height: 66, borderRadius: '0px' }}
            />
            <Box sx={{
              width: '35px', 
              height: '35px', 
              bgcolor: '#FDF7DF', 
              borderRadius: 50,
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}>
              <StarIcon sx={{color: '#FFC800', fontSize: 19}}/>
            </Box>
          </Box>
          <Typography variant='h6' sx={{ mt: 1.5 }}>
            JavaScript
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            Intermediate
          </Typography>
          <Typography variant="body2" color="secondary.light">
            Topics: Variables, Data Types, Functions, Objects, Class, etc.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Start</Button>
        </CardActions>
      </Card>
   </Box>
  )
}

export default SliderItem