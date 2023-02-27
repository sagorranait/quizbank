import React from 'react';
import { 
  Avatar, 
  Box, 
  Card, 
  CardContent, 
  Typography 
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface SliderItemProps {
  bache: string;
  title: string;
  topics: [string];
  type: string;
}

const SliderItem:React.FC<SliderItemProps> = (props) => {
  const { bache, title, topics, type } = props;

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
              src={bache}
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
            {title}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {type}
          </Typography>
          <Typography variant="body2" color="secondary.light">
            Topics: {topics.map(topic => topic+', ')} etc.
          </Typography>
        </CardContent>
      </Card>
   </Box>
  )
}

export default SliderItem