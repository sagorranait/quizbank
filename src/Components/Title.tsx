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
              fontSize: {xs: '18px', sm: '25px', md: '28px', lg: '28px'},
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
              pb: '25px',
              fontSize: {xs: '14px', sm: '16px', md: '16px', lg: '16px'},
            }}
          >
            {subtitle}
         </Typography>
    </>
  )
}

export default Title