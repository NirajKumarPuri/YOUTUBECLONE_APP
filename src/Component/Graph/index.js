import React from "react";
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph=()=>{
    const Location=useLocation();
    console.log(Location)
    return(
        
        <BarChart
          width={500}
          height={300}
          data={Location.state.Statistics}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="LikeCount" fill="#8884d8" />
          <Bar dataKey="dislikeCount" fill="#82ca9d" />
        </BarChart>
    )
}
export default Graph;