// Home.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { cashFlowApi } from "../config";
import StockChart from "./charts/StockChart";
import StockTable from "./charts/StockTable";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import getMultipleStocks from "./StockHistory.ts";
import "../styles/Home.css";
import { Table, Button, Typography } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { setStockData } from './stockDataActions';

const { Title, Text } = Typography;

IgrFinancialChartModule.register();

const Home = () => {
  const [data, setData] = useState(null);
  const [tempData, setTempData] = useState(null);

  const dispatch = useDispatch();
  const stockData = useSelector((state) => state.stockData) || [];
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState(null);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  useEffect(() => {
    const symbols = [
      'AAPL', 'AMZN', 'GOOGL', 'MSFT', 'FB', 'KO', 'BAC', 'ADBE', 'PYPL', 'MCD', 'HD', 
      'TSLA', 'NVDA', 'JNJ', 'JPM', 'V','WMT', 'DIS', 'PFE', 'NFLX',
    ];

    const generateRandomPrice = () => {
      return (Math.random() * (1000 - 1) + 1).toFixed(2);
    };

    const generateRandomTime = () => {
      const date = new Date();
      return date.toLocaleTimeString();
    };

    const generateDummyData = () => {
      const data = symbols.map(symbol => ({
        companyName: `${symbol} Company`,
        symbol: symbol,
        latestPrice: generateRandomPrice(),
        high: generateRandomPrice(),
        currency: 'USD',
        latestTime: generateRandomTime()
      }));
      return data;
    };

    const dummyData = generateDummyData();

    dispatch(setStockData(dummyData));

  }, [dispatch]);


  const sortStocks = (a, b) => {
    if (sortOrder === 'asc') {
      return a.latestPrice - b.latestPrice;
    } else if (sortOrder === 'desc') {
      return b.latestPrice - a.latestPrice;
    }
    return 0;
  };

  const filteredAndSortedStocks = stockData
    .sort(sortStocks)
    .filter(
      (stock) =>
        stock.companyName.toLowerCase().includes(searchText.toLowerCase()) ||
        stock.symbol.toLowerCase().includes(searchText.toLowerCase())
    );

  const columns = [
    {
      title: 'Sr. No',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (_, __, index) => {
        return (pagination.current - 1) * pagination.pageSize + index + 1;
      },
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Stock Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'Current Price',
      dataIndex: 'latestPrice',
      key: 'latestPrice',
    },
    {
      title: 'Highest Price',
      dataIndex: 'high',
      key: 'high',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },

  ];
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

  return (
    <div className="container">
      <div style={{ backgroundColor: '#1890ff', padding: '20px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}> Real Time Data</Title>
      </div>

      <div>
        <input
          placeholder="Search by company name or symbol"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchText}
        />
        <Button onClick={() => handleSort('asc')}>Sort Low to High</Button>
        <Button onClick={() => handleSort('desc')}>Sort High to Low</Button>
      </div>
      <Table dataSource={filteredAndSortedStocks} columns={columns} />
      <div className="table">{<StockTable />}</div>
    </div>
  );
};

export default Home;
