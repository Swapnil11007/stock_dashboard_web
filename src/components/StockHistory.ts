import { appleStock, micorsoftStock } from "../config";

async function getMultipleStocks() {
  const dataSources = [
    //await getAmazonStock(),
    await getMicrosoftStock(),
    await getAppleStock(),
    //await getTeslaStock()
  ];

  return Promise.all(dataSources);
}

export async function getMicrosoftStock() {
  const response = await fetch(micorsoftStock);
  const jsonData = await response.json();
  const stockData = convertData(jsonData);
  stockData.__dataIntents = {
    close: ["SeriesTitle/Tesla"],
  };
  return stockData;
}

export async function getAppleStock() {
  const response = await fetch(appleStock);
  const jsonData = await response.json();
  const stockData = convertData(jsonData);
  stockData.__dataIntents = {
    close: ["SeriesTitle/Microsoft"],
  };
  return stockData;
}

export function convertData(jsonData) {
  return jsonData.map((json) => {
    const parts = json.date.split("-");
    return {
      date: new Date(parts[0], parts[1], parts[2]),
      open: json.open,
      high: json.high,
      low: json.low,
      close: json.close,
      volume: json.volume,
    };
  });
}

export async function getLatestStock() {
  const response = await fetch(
    "https://api.iex.cloud/v1/data/CORE/STOCK_COLLECTION/list?collectionName=mostactive&token=pk_0e47f6d2e5ee4940baab6fcb2d475188"
  );
  const jsonData = await response.json();
  const stockData = convertData(jsonData);
  stockData.__dataIntents = {
    close: ["SeriesTitle/Microsoft"],
  };
  return stockData;
}

export default getMultipleStocks;
