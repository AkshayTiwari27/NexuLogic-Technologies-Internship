import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ProgressVisualization.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{label}</p>
        <div className="tooltip-items">
          {payload.map((entry, index) => (
            <p key={index} className="tooltip-item" style={{ color: entry.color }}>
              {entry.name}: <span className="value">{entry.value}%</span>
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const ProgressVisualization = ({ progressData }) => {
  return (
    <div className="progress-visualization">
      <h2 className="heading">Project Progress Overview</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={progressData}>
            <defs>
              <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4caf50" stopOpacity={0.2}/>
              </linearGradient>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c4dff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7c4dff" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid stroke="#f0f0f0" vertical={false} />
            
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#f0f0f0' }}
              axisLine={{ stroke: '#f0f0f0' }}
            />
            
            <YAxis 
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#f0f0f0' }}
              axisLine={{ stroke: '#f0f0f0' }}
              label={{
                value: 'Percentage (%)',
                angle: -90,
                position: 'insideLeft',
                fill: '#666',
                fontSize: 14
              }}
            />
            
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ stroke: '#f0f0f0', strokeWidth: 1 }}
            />
            
            <Legend 
              verticalAlign="top" 
              height={60}
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingBottom: 20 }}
              formatter={(value) => <span className="legend-text">{value}</span>}
            />
            
            <Line 
              type="monotone" 
              dataKey="completion" 
              stroke="url(#progressGradient)"
              strokeWidth={4}
              dot={{ fill: '#4caf50', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8 }}
              animationDuration={400}
            />
            
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="url(#salesGradient)"
              strokeWidth={4}
              strokeDasharray="5 5"
              dot={{ fill: '#7c4dff', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8 }}
              animationDuration={400}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressVisualization;