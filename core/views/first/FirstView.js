
import React, { Component } from "react"
import {
    View,
    Text,
    Button
} from "react-native"
import { styles } from './styles'
import { Navigation } from 'react-native-navigation'

class FirstView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>First Screen</Text>
        <Button title='Second Screen' onPress={()=>this.navigateToView("SecondView")}/>
        <Button title='Counter Screen' onPress={()=>this.navigateToView("App")}/>
      </View>
    )
  }

  // Navigates to some view
  // Note:
  //    - this.props.componentId is provided by react-native-navigation
  // TODO: utilize redux to separate these out
  navigateToView = (viewName) => {
    console.log("NAVIGATING TO " + viewName)
    Navigation.push(this.props.componentId, {
      component: {
        name: viewName,
        options: {
          topBar: {
            title: { text: viewName }
          }
        }
      }
    })
  }
}

export default FirstView