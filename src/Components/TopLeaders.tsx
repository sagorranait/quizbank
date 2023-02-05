import * as React from 'react';
import { Table, Typography } from '@mui/material';
import { Box } from '@mui/system';

function createData(
  name: string,
  calories: number,
  fat: number,
) {
  return { name, calories, fat };
}

const rows = [
  createData('1. Frozen yoghurt', 159, 6.0),
  createData('2. Ice cream sandwich', 237, 9.0),
  createData('3. Eclair', 262, 16.0),
];

export default function TableHover() {
  return (    
   <Table className='topleaders-table' aria-label="table variants">
      <thead>
         <tr>
            <th style={{ width: '60%', textAlign: 'left' }}>Top Position</th>
            <th>Quizzes</th>
            <th align='right'>Average Mark</th>
         </tr>
      </thead>
      <tbody>
      {rows.map((row) => (
         <tr key={row.name}>
            <td>{row.name}</td>
            <td align='center'>{row.calories}</td>
            <td align='right'>{row.fat}</td>
         </tr>
      ))}
      </tbody>
   </Table>
  );
}
