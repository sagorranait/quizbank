import React from 'react';
import { Box } from '@mui/material';
import ProfileUpdate from '../Components/ProfileUpdate';
import UserPerformance from '../Components/UserPerformance';

const Profile: React.FC = () => {
  return (
  <Box component='div' className='user-update-profile'>
    <ProfileUpdate/>
    <UserPerformance/>
  </Box>
  )
}

export default Profile