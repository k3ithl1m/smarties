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
import _MainScreen from "./screens/MainScreens/_MainScreen";

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        //first: { screen: WelcomeScreen },
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
          <MainNavigator style={{ width: Dimensions.get("window").width }} />
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
});
