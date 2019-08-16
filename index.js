
// import {AppRegistry} from 'react-native'
// import {name as appName} from './app.json'
//  import App from './App'
// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation"
import { FirstView, SecondView } from './core/views'
import App from './App'

// TODO: there should be a way to separate this registration portion out
Navigation.registerComponent('FirstView', () => FirstView)
Navigation.registerComponent('SecondView', () => SecondView)
Navigation.registerComponent('App', () => App)

// Ref - https://wix.github.io/react-native-navigation/#/docs/top-level-api
// Setting up our Top Level Root 
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name:'FirstView',
              options: {
                topBar: {
                  title: { text: 'FirstView' }
                }
              }
            }
          }
        ]
      }
    }
  })
})