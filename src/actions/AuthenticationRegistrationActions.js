import { AsyncStorage } from "react-native";
import firebase from "firebase";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER,
  SIGNUP_FAIL,
  USER_DATA
} from "./types";

var userData = {
  userUID: "",
  userName: "",
  userEmail: ""
};

// ##LOGIN## //
export const loginCheck = () => async dispatch => {
  let token = await AsyncStorage.getItem("login_token");
  if (token) {
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  }
};

export const login = (email, password, callback) => {
  return dispatch => {
    loading(dispatch);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        loginSuccess(dispatch, user, callback);
      })
      .catch(error => {
        console.log(error);
        loginFail(dispatch);
      });
  };
};

const loginSuccess = async (dispatch, user) => {
  var logUser = firebase.auth().currentUser;

  userData.userUID = logUser.uid;

  firebase
    .database()
    .ref(`users/${logUser.uid}`)
    .on("value", snapshot => {
      userData.userName = snapshot.val().name;
      userData.userEmail = snapshot.val().email;

      dispatch({ type: USER_DATA, payload: userData });
    });

  await AsyncStorage.setItem("login_token", logUser.uid);
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};

const loading = dispatch => {
  dispatch({ type: LOGIN_USER });
};

const loginFail = dispatch => {
  dispatch({ type: LOGIN_FAIL });
};

// ##SignOut## //
export const signOut = async callback => {
  firebase
    .auth()

    .signOut()
    .then(() => {})
    .catch(error => {
      console.log(error.message);
    });
  await AsyncStorage.removeItem("login_token", callback());
};

// ##SignUp## //
export const signUp = (username, email, password, callback) => {
  return dispatch => {
    loading(dispatch);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        user = firebase.auth().currentUser;
        var database = firebase.database().ref(`users/${user.uid}`);

        console.log(user);
        database.push({
          name: username,
          email: email,
          password: password
        });

        userData.uid = user.uid;
        userData.uid = user.name;
        userData.uid = user.email;

        console.log("async stored");
        signUpSuccess(user, callback);
        dispatch({ type: USER_DATA, payload: userData });
      })
      .catch(error => {
        console.log(error.code);
        console.log(error.message);
        signUpFail(dispatch, error.Message);
      });
  };
};

const signUpFail = (dispatch, errorMessage) => {
  dispatch({ type: SIGNUP_FAIL, payload: errorMessage });
};

const signUpSuccess = async (user, callback) => {
  await AsyncStorage.setItem("login_token", user.uid);

  console.log("async stored");
  callback();
};
