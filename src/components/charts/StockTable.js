import React, { useEffect, useState } from "react";
import axios from "axios";
import { allStock } from "../../config";
import "../../styles/StockTable.css";

const StockTable = () => {
  const [stocks, setTableData] = useState(null);
  useEffect(() => {
    axios
      .get(allStock)
      .then((response) => {
        console.log(response.data);
        setTableData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Symbol</th>
            <th>Change</th>
            <th>Change Percent</th>
            <th>Market Cap</th>
            <th>Latest Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks &&
            stocks.length > 0 &&
            stocks.map((stock) => (
              <tr
                key={stock.symbol}
                className={stock.change < 0 ? "decreasing" : "increasing"}
              >
                <td>{stock.companyName}</td>
                <td>{stock.symbol}</td>
                <td>{stock.change}</td>
                <td>{stock.changePercent}</td>
                <td>{stock.marketCap}</td>
                <td>{stock.latestPrice}</td>

              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
