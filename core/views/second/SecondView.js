
import React, { Component } from "react"
import {
    View,
    Text,
    Button
} from "react-native"
import { styles } from './styles'

class SecondView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
      </View>
    )
  }
}

export default SecondView