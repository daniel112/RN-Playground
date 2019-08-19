
import React, { Fragment, Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
} from "react-native"
import { connect } from 'react-redux'
import * as CounterActions from './CounterAction'
import { styles } from './styles'
// Props info: https://www.robinwieruch.de/react-pass-props-to-component/#react-props
// Q: How do props get transferred from view to view?
// doesnt seem like you have to instantiate the props
class CounterView extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    console.log("----Counter View Props-----")
    console.log(this.props)
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView>
          <View style= {{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => this.props.increaseCounter()}>
              <Text style={{ fontSize:20 }}>Increase</Text>
            </TouchableOpacity>

            <Text style={{ fontSize:20 }}>{this.props.counter}</Text>

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

function mapStateToProps(state) {
  console.log("MAPSTATETOPROPS: State")
  console.log(state)
  return {
    // this 'counter' will tie into this.props
    // so we can call it with this.props.counter
    // Q: can we reduce this down to 'state.counter' somehow?
    // 'CounterReducer' comes from /reducer/index.js
    counter: state.CounterReducer.counter
  }
}
// conects the props to the view
// connects the state and dispatcher methods
// params:
//    CounterActions =  {increaseNumber, decreaseNumber}
export default connect(mapStateToProps, CounterActions)(CounterView) 