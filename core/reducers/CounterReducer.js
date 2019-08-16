
import { ActionTypes } from '../actions'

// the store, like the model
const initialState = {
  counter: 0
}

console.log("ActionTypes")
console.log(ActionTypes)

// Reducer
// gets called from the dispatcher
// performs some action based on the passed in 'action'
// it returns a new modified object
export default (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.INCREASE_COUNTER:
      return {
        counter:state.counter+1
      }
    case ActionTypes.DECREASE_COUNTER:
      return {
        counter:state.counter-1
      }
    default: {
      return state
    }
  }
}