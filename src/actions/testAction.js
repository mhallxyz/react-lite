import {
  TEST_ACTION
} from './actionTypes';

export const testAction = (payload) => {
  return {
    type: TEST_ACTION,
    payload: payload
  }
} 