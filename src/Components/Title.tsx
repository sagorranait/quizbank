import React from 'react';
import {
   Typography
} from '@mui/material';

interface TitleProps {
   title: String;
   subtitle: String;
}

const Title:React.FC<TitleProps> = (props) => {
  const { title, subtitle } = props;
  return (
    <>
      <Typography 
            variant='h4'
            sx={{
              fontSize: {xs: '28px'},
              fontWeight: 700,
              p: '30px 0 8px',
            }}
          >
            {title}
         </Typography>
         <Typography 
            variant='inherit'
            sx={{
              color: '#ADAEB2',
              pb: '25px'
            }}
          >
            {subtitle}
         </Typography>
    </>
  )
}

export default Title