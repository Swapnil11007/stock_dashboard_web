import { createStore, combineReducers } from 'redux';
import stockDataReducer from './stockDataReducer';

const rootReducer = combineReducers({
    stockData: stockDataReducer,
});

const store = createStore(rootReducer);

export default store;
