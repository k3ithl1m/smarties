import { USER_DATA } from "../actions/types";

const INITIAL_STATE = {
  userData: null
};

export default function(state = {}, action) {
  switch (action.type) {
    case USER_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
