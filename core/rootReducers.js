import { combineReducers } from 'redux'
import CounterReducer from './counter/CounterReducer'

// setup for root reducers
// here's where all your reducer should be initialized
const rootReducers = combineReducers({
  CounterReducer,
})

export default rootReducers