/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
} from "react-native";
import { connect } from 'react-redux'



class CounterView extends Component {

  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView>
          <View style= {{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => this.props.increaseCounter()}>
              <Text style={{ fontSize:20 }}>Increase</Text>
            </TouchableOpacity>

            {/* model state */}
            <TouchableOpacity>
              <Text style={{ fontSize:20 }}>{this.props.counter}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
              <Text style={{ fontSize:20 }}>Decrease</Text>
            </TouchableOpacity>

          </View>
        </SafeAreaView>
      </View>
      
      </Fragment>
    )
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
})


function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

// Dispatcher
//  uses the redux dispatch method to send the message
//  usually pass in a state/action
function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'})

  }
}

// conects the props to the view
// connects the state and dispatcher methods
export default connect(mapStateToProps, mapDispatchToProps)(CounterView) 