import {
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGIN_FAIL,
  SIGNUP_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  errorMessage: "",
  token: null
};

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { token: action.payload };
    case LOGIN_FAIL:
      return { token: null };
    case LOGIN_USER:
      return { ...state, loading: true };
    case SIGNUP_FAIL:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
