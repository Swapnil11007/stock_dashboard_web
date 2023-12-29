// StockChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "../../styles/StockChart.css";

const StockChart = ({ stockData }) => {
  const formatYAxis = (tick) => {
    return (tick / 1000000000).toFixed(2) + "B";
  };

  return (
    <div className="chart-container">
      <h1 className="chart-title">Cash Flow of JPM </h1>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart
          data={stockData}
          margin={{ top: 30, right: 0, left: 30, bottom: 30 }}
        >
          <XAxis dataKey="fiscalDate" />
          <YAxis tickFormatter={formatYAxis} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="cashFlow" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
