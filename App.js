import React, { Component } from 'react';
import  { CounterView } from './core/views'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import reducer from './core/reducers'

class App extends Component {
  render() {
    const reduxStore = createStore(reducer, {}, applyMiddleware(ReduxThunk))
    console.log("---getState---")
    console.log(reduxStore.getState())
    return (
      // this makes sure that we have access to store across views
      <Provider store = {reduxStore}>
        <CounterView />
      </Provider>
      
    )
  }
}

export default App
