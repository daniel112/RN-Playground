import { createStore, applyMiddleware } from 'redux'
import rootReducers from './rootReducers';
import ReduxThunk from 'redux-thunk'

export function configureStore(initialState) {
  return createStore(rootReducers, initialState, applyMiddleware(ReduxThunk))
}