// Graph.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { cashFlowApi } from "../config";
import getMultipleStocks from "./StockHistory.ts";
import "../styles/Graph.css";
import MyLoader from "./MyLoader";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import { Typography } from "antd";


IgrFinancialChartModule.register();

const Graph = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getMultipleStocks()
      .then((stocks: any[]) => {
        setData(stocks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { Title, Text } = Typography;
  return (
    <div className="container">
      <div className="chart">
        {data ? (
          <IgrFinancialChart
            height="100%"
            thickness={2}
            chartTitle="Tesla vs Microsoft Changes"
            subtitle="Between Sep 2022 and Nov 2023"
            yAxisMode="PercentChange"
            yAxisTitle="Percent Changed"
            dataSource={data}
            
          />
        ) : (
          <div className="loader">
            <MyLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Graph;
