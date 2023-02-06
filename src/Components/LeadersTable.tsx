import React from 'react';
import { Table } from '@mui/material';

interface LeaderTableProps {
   title: string;
   rows: {
      name: string,
      calories: number,
      fat: number,
   }[];
   otherTitle?: boolean;
}

const LeadersTable:React.FC<LeaderTableProps> = (props) => {
   const { title, rows, otherTitle } = props;
  return (    
   <Table className='topleaders-table' aria-label="table variants">
      <thead>
         <tr>
            <th style={{ width: '60%', textAlign: 'left' }}>{title}</th>
            {otherTitle ? <>
               <th style={{color: '#f7f8fc'}}>Quizzes</th>
               <th style={{color: '#f7f8fc'}} align='right'>Average Mark</th>            
            </>: <>
               <th>Quizzes</th>
               <th align='right'>Average Mark</th>            
            </>}
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

export default LeadersTable;