import { Navigation } from "react-native-navigation"
import { registerViews } from './core/views'
import { configureStore }  from './core/rootStore'

// Entry point
// 1. configure root store
// 2. registers all views
// 3. set the root view
let reduxStore = configureStore()
registerViews(reduxStore)

const splashScreen = {
  root: {
    component: {
      name: 'splashScreenView'
    }
  }
}

// if you want to start on a single page app
// Ref - https://wix.github.io/react-native-navigation/#/docs/top-level-api
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(splashScreen)
})