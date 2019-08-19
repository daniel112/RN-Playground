import * as ActionTypes from '../utils/types'

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