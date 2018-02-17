/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import firebase from "firebase";

import store from "./store";

import WelcomeScreen from "./screens/WelcomeScreen";

import LoginScreen from "./screens/AuthNRegistrationScreens/_LoginScreen";
import SUGeneralInformationScreen from "./screens/AuthNRegistrationScreens/_SUGeneralInformationScreen";
import _NewActivity from "./screens/CreateActivityScreens/_NewActivity";
import _Where from "./screens/CreateActivityScreens/_Where";
import _MainScreen from "./screens/MainScreens/_MainScreen";
import _TimeScreen from "./screens/CreateActivityScreens/_TimeScreen";
import SUSelectInterestsScreen from "./screens/AuthNRegistrationScreens/SUSelectInterestScreen";

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCksGg6SBbP1OqOdGuYLV4vRggwqw0SwGE",
      authDomain: "smarties-1503778221826.firebaseapp.com",
      databaseURL: "https://smarties-1503778221826.firebaseio.com",
      projectId: "smarties-1503778221826",
      storageBucket: "smarties-1503778221826.appspot.com",
      messagingSenderId: "260704900664"
    };

    firebase.initializeApp(config);
  }

  render() {
    const MainNavigator = StackNavigator(
      {
        // first: { screen: WelcomeScreen }
        // first: { screen: _Where }
        // first: { screen: _NewActivity }
        //login: { screen: LoginScreen },
        //signUp: { screen: SUGeneralInformationScreen },
        selectInterest: { screen: SUSelectInterestsScreen },
        main: { screen: _MainScreen }
      },
      {
        headerMode: "none",
        navigationOptions: {
          headerVisible: false
        }
      }
    );
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator
            style={{
              ...Platform.select({
                android: { width: Dimensions.get("window").width }
              })
            }}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});
