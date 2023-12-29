const BASE_URL = "https://api.iex.cloud/v1/";
const BASE_URL_STOCK = "https://cloud.iexapis.com/stable/stock/";
const token = "pk_ee921a5394f44b2eb62a9554c59647d5";

//APIs
export const allStock = `${BASE_URL}data/CORE/STOCK_COLLECTION/list?collectionName=mostactive&token=${token}`;
export const appleStock = `${BASE_URL_STOCK}aapl/chart/500d?token=${token}`;
export const micorsoftStock = `${BASE_URL_STOCK}msft/chart/500d?token=${token}`;
export const cashFlowApi = `${BASE_URL}data/CORE/CASH_FLOW/JPM/quarterly?token=${token}&last=10`;
