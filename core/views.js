// we import > export so other files can access it through
// import { some_module } from './core/views'
// Q: is there a better way to import/export this?
import  CounterView  from './counter/CounterView'
import FirstView from './first/FirstView'
import SecondView from './second/SecondView'
import React from 'react'
import { Provider } from 'react-redux'
import { Navigation } from "react-native-navigation"

// register views here
// Params:
//  - store - root redux store
export function registerViews(store) {
  console.log("---Importing Views-----")

  Navigation.registerComponent('FirstView', () => FirstView)
  Navigation.registerComponent('SecondView', () => SecondView)
  
  // Ref: https://wix.github.io/react-native-navigation/#/docs/top-level-api-migration?id=registering-screens-with-wrapping-provider-component
  //Navigation.registerComponent('CounterView', () => CounterView)
  Navigation.registerComponent('CounterView', () => (props) => (
    <Provider store={store}>
      <CounterView { ...props }/>
    </Provider>
  ))
}
