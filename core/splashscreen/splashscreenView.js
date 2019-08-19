import React, { Component } from 'react'
import { styles } from './styles'
import { View, Text,} from "react-native"
import { Navigation } from 'react-native-navigation'

export default class splashscreenView extends Component {
  
  constructor(props) {
    super(props)
  }

  // TODO: splashscreen, add dynamic countdown text to simulate loading
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>SplashScreen</Text>
      </View>
    )
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      console.log("---------Simulating loading---------")
      this.navigateToInitialView("FirstView")
    }, 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle)
  }

  // reset the root to the stackview with initial screen
  navigateToInitialView(name) {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'AppStack',
          children: [
            {
              component: {
                name:name,
                options: {
                  topBar: {
                    title: { text: name }
                  }
                }
              }
            }
          ]
        }
      }
    })
  }
}

