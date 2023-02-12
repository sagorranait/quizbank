import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
   {
     name: 'HTML',
     uv: 15,
     mr: 15,
   },
   {
     name: 'CSS',
     uv: 15,
     mr: 12,
   },
   {
     name: 'Reactjs',
     uv: 15,
     mr: 10,
   },
   {
     name: 'JavaScript',
     uv: 15,
     mr: 8,
   },
   {
     name: 'Nodejs',
     uv: 14,
     mr: 4,
   }
 ];

const MarkChart: React.FC = () => {
  return (
   <ResponsiveContainer width="100%" aspect={4}>
      <AreaChart
         data={data}
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
         <YAxis dataKey='mr' axisLine={{ strokeWidth: 0 }} tickLine={false} />
         <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#3751FF" />
      </AreaChart>
   </ResponsiveContainer>
  )
}

export default MarkChart