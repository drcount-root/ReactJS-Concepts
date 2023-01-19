import {combineReducers} from 'redux';
import amountReducer from './amountReducer';

// to combine multiple reducers
const reducers = combineReducers({
    amount: amountReducer
})