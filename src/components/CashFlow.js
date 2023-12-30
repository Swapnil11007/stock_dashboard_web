// Graph.js
import axios from "axios";
import getMultipleStocks from "./StockHistory.ts";
import "../styles/Graph.css";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { cashFlowApi } from "../config";
import StockChart from "./charts/StockChart";


IgrFinancialChartModule.register();

const CashFlow = () => {
  const [data, setData] = useState(null);
  const [tempData, setTempData] = useState(null);
  useEffect(() => {
    getMultipleStocks()
      .then((stocks: any[]) => {
        setData(stocks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get(cashFlowApi)
      .then((response) => {
        setTempData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { Title, Text } = Typography;
  return (
    <div className="container">
      <div style={{ backgroundColor: '#1890ff', padding:'10px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}> Cash Flow </Title>
      </div>
      <div className="cashFlow">
        {tempData && tempData.length > 0 && <StockChart stockData={tempData} />}
      </div>
    </div>
  );
};

export default CashFlow;
