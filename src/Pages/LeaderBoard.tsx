import React from 'react'
import { Box, Typography } from '@mui/material';
import LeadersTable from '../Components/LeadersTable';

function createData(
  name: string,
  calories: number,
  fat: number,
) {
  return { name, calories, fat };
}

const rows = [
  createData('1. Frozen yoghurt ♛', 159, 6.0),
  createData('2. Ice cream sandwich ♚', 237, 9.0),
  createData('3. Eclair', 262, 16.0),
  createData('4. Frozen yoghurt', 159, 6.0),
  createData('5. Ice cream sandwich', 237, 9.0),
  createData('6. Eclair', 262, 16.0),
  createData('7. Frozen yoghurt', 159, 6.0),
  createData('8. Ice cream sandwich', 237, 9.0),
  createData('9. Eclair', 262, 16.0),
  createData('10. Eclair', 262, 16.0),
];
const yous = [
  createData('111. Frozen yoghurt', 159, 6.0),
];

const LeaderBoard: React.FC = () => {
  return (
    <>
      <Box component='section' sx={{textAlign: 'center'}}>
        <Typography variant='h1' sx={{fontSize: '25px', fontWeight: 600}}>Leader Board</Typography>
        <Typography variant='caption' color='secondary.light'>Make your position today</Typography>
      </Box>
      <Box component='div' sx={{width: '85%', m: '25px auto 0px'}}>
        <LeadersTable title="You Position" rows={yous}/>
      </Box>
      <Box component='div' sx={{width: '85%', m: '20px auto'}}>
        <LeadersTable title="Top Position" rows={rows} otherTitle={true}/>
      </Box>
    </>
  )
}

export default LeaderBoard