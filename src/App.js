/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";

import WelcomeScreen from "./screens/WelcomeScreen";
<<<<<<< HEAD
=======
import LoginScreen from "./screens/AuthNRegistrationScreens/_LoginScreen";
import SUGeneralInformationScreen from "./screens/AuthNRegistrationScreens/_SUGeneralInformationScreen";
// import _NewActivity from "./screens/NewActivity";
>>>>>>> 906ec4cbbf135029d1ee98362ce6d282cfb8b997
import _MainScreen from "./screens/MainScreens/_MainScreen";
import _TimeScreen from "./screens/CreateActivityScreens/_TimeScreen";

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
<<<<<<< HEAD
        //first: { screen: WelcomeScreen },
        time: { screen: _TimeScreen},
        main: { screen: _MainScreen },

=======
        first: { screen: WelcomeScreen },
        // first: { screen: _NewActivity }
        login: { screen: LoginScreen },
        signUp: { screen: SUGeneralInformationScreen },
        main: { screen: _MainScreen }
>>>>>>> 906ec4cbbf135029d1ee98362ce6d282cfb8b997
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
<<<<<<< HEAD
        <View style = {styles.container}>
          <MainNavigator 
            style = {{
              ...Platform.select({
                android: { width: Dimensions.get("window").width}
=======
        <View style={styles.container}>
          <MainNavigator
            style={{
              ...Platform.select({
                android: { width: Dimensions.get("window").width }
>>>>>>> 906ec4cbbf135029d1ee98362ce6d282cfb8b997
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
    backgroundColor: "#F5FCFF"
  }
})