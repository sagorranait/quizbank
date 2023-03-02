import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import { useAppSelector } from '../app/store';

 interface examState {
  bache: string,
  title: string,
  quizId: string,
  mark: number,
}

 interface MarkChartData {
  name: string;
  uv: number;
};

const MarkChart: React.FC = () => {
  const { quiz_took } = useAppSelector(state => state.userData.user);
  const [markData, setMarkData] = useState<MarkChartData[]>([]);

  useEffect(() => {
    const datas: MarkChartData[] = [];
    quiz_took?.forEach((data: examState) => {   
      datas.push({name: data.title, uv: data.mark});
    });   
    setMarkData(datas);
  }, [quiz_took]);  

  if (!quiz_took) {
    return null; // or show a loading spinner, error message, etc.
  }

  return (
    quiz_took?.length > 0 ? (
      <ResponsiveContainer width="100%" aspect={4}>
        <AreaChart
          data={markData}
          margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
          }}
        >
          <XAxis 
              dataKey="name" 
              axisLine={{ strokeWidth: 0 }} 
              tickLine={false}
            />
          <YAxis dataKey='uv' axisLine={{ strokeWidth: 0 }} tickLine={false} />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#3751FF" />
        </AreaChart>
      </ResponsiveContainer>
    ) : (
      <Typography 
        sx={{
          width: '100%',
          height: '275px',
          textAlign: 'center',
          pt: '100px'
        }}
      >You haven't given any quiz. Please give a test to show your chart.</Typography>
    )
  )
}

export default MarkChart