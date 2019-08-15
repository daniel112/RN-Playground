/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import  { CounterView } from './core/views'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Redux
const initialState = {
  counter: 0
}

// Reducer
// gets called from the dispatcher
// performs some action based on the passed in 'action'
// it returns a new modified object
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
      return {
        counter:state.counter+1
      }
    case 'DECREASE_COUNTER':
      return {
        counter:state.counter-1
      }
  }
  return state
}
const store = createStore(reducer)
// Redux


class App extends Component {
  render() {
    return (
      // this makes sure that we have access to store across views
      <Provider store = {store}>
        <CounterView />
      </Provider>
      
    )
  }
}

export default App
