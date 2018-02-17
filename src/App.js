/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";

import WelcomeScreen from "./screens/WelcomeScreen";
// import _NewActivity from "./screens/NewActivity";
import _MainScreen from "./screens/MainScreens/_MainScreen";

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        first: { screen: WelcomeScreen }
        // first: { screen: _NewActivity }
        // main: { screen: _MainScreen }
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
        <View>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
