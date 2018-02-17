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

import LoginScreen from "./screens/AuthNRegistrationScreens/_LoginScreen";
import SUGeneralInformationScreen from "./screens/AuthNRegistrationScreens/_SUGeneralInformationScreen";
import _NewActivity from "./screens/CreateActivityScreens/_NewActivity";
import _Where from "./screens/CreateActivityScreens/_Where";
import _MainScreen from "./screens/MainScreens/_MainScreen";
import _TimeScreen from "./screens/CreateActivityScreens/_TimeScreen";

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        // first: { screen: WelcomeScreen }
        // first: { screen: _Where }
        // first: { screen: _NewActivity }
        //login: { screen: LoginScreen },
        //signUp: { screen: SUGeneralInformationScreen },
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
