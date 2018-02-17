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

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        first: { screen: WelcomeScreen }
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
