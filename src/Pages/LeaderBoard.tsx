import React from 'react'
import { Box, Typography } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TopLeaders from '../Components/TopLeaders';

const LeaderBoard: React.FC = () => {
  return (
    <>
      <Box component='section' sx={{textAlign: 'center'}}>
        <EmojiEventsOutlinedIcon sx={{fontSize: '45px'}}/>
        <Typography variant='h1' sx={{fontSize: '25px', fontWeight: 600}}>Leader Board</Typography>
        <Typography variant='caption' color='secondary.light'>Make your position today</Typography>
      </Box>
      <Box component='div' sx={{width: '85%', m: '20px auto'}}>
        <TopLeaders/>
      </Box>
    </>
  )
}

export default LeaderBoard