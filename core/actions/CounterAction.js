import * as ActionTypes from '../actions/types'

console.log("ActionTypes ACTIONS")
console.log(ActionTypes)

// Public
export const increaseCounter = () => {
  return (dispatch) => {
    console.log("ACTION INCREASE")
    return dispatch({type: ActionTypes.INCREASE_COUNTER})
  }
}

export const decreaseCounter = () => {
  return (dispatch) => {
    console.log("ACTION DECREASE")
    return dispatch({type: ActionTypes.DECREASE_COUNTER})
  }
}

// Q: Why does this not work?
// export const decreaseCounter = () => {
//   dispatch({type: ActionTypes.INCREASE_COUNTER})
// }