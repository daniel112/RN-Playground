
import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from "react-native"
import { styles } from './styles'
import { Navigation } from 'react-native-navigation'

class FirstView extends Component {

  render() {
    console.log("----First View Props-----")
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>First Screen</Text>
        <Button title='Second Screen' onPress={()=>this.navigateToView("SecondView")}/>
        <Button title='Counter Screen' onPress={()=>this.navigateToView("CounterView")}/>
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

// function mapStateToProps(state) {
//   console.log("MAPSTATETOPROPS: State")
//   console.log(state)
//   return {
//     // this 'counter' will tie into this.props
//     // so we can call it with this.props.counter
//     counter: state.counter
//   }
// }

//export default connect(mapStateToProps)(FirstView) 
export default FirstView