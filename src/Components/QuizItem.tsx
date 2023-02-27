import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/store';

interface QuizItemProps {
  id: string;
  bache: string;
  title: string;
  type: string;
  user_attend: [string];
}

const QuizItem: React.FC<QuizItemProps> = (props) => {
  const  user = useAppSelector(state => state.userData.user);
  const { id, bache, title, type, user_attend } = props;  

  return (
   <Box sx={{ 
    display: 'flex', 
    flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
    alignItems: 'center',
    gap: 2,
    borderRadius: '15px', 
    boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
    p: '15px',
    maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
    width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
    margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
  }}>
    <Avatar
      alt={title}
      src={bache}
      sx={{ width: 60, height: 60, borderRadius: '0px' }}
    />
    <Box component='div' width='105px'>
      <Typography variant='h6'>
        {title}
      </Typography>
      <Typography sx={{ mb: 1 }} color="text.secondary">
        {type}
      </Typography>
    </Box>
    <Box component='div'>
      <Link to={`/quiz/${id}`}>
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
      <Link to={`/quiz/${id}`}>
        <Button 
          size="small" 
          sx={{
            border: '1px solid rgba(55, 81, 255, 0.5)', 
            borderRadius: '25px', 
            textTransform: 'capitalize',
          }}
        >{user_attend.includes(`${user.id}`) ? 'Re-Take' : 'Start'}</Button>
      </Link>
    </Box>
   </Box>
  )
}

export default QuizItem