import { 
  TEST_ACTION
} from '../actions/actionTypes';

const INITIAL_STATE = {
  test: "Testing"
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case TEST_ACTION:
        return {
          ...state,
          test: action.payload
        }
      default:
          return state
  }
}