import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Data representing traffic by location
const data = [
  { name: 'India', value: 500 },
  { name: 'United States', value: 300 },
  { name: 'Canada', value: 200 },
  { name: 'Mexico', value: 100 },
  { name: 'Others', value: 150 }
];

// Color palette for each country
const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#FFC300', '#DAF7A6'];

const CustomerPieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomerPieChart;



