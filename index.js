import { Navigation } from "react-native-navigation"
import { registerViews } from './core/views'
import { configureStore }  from './core/rootStore'
import { Provider } from 'react-redux'

// Entry point
// 1. configure root store
// 2. registers all views
// 3. set the root view
let reduxStore = configureStore()
registerViews(reduxStore)

// if you want to start on a single page app
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'FirstView'
//       }
//     }
//   })
// })
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