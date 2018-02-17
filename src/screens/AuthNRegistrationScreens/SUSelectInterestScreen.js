import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { YHeader, CategoriesBlock } from "../../components";
import { Icon } from "react-native-elements";
import { ComponentStyle } from "../../styling";
import { NavigationActions } from "react-navigation";

const backAction = NavigationActions.back();

class SUSelectInterestsScreen extends Component {
  render() {
    return (
      <View>
        <YHeader
          leftComponent={
            <Icon
              name="chevron-left"
              size={30}
              onPress={() => this.props.navigation.dispatch(backAction)}
            />
          }
          rightComponent={
            <Icon
              style={{ rightMargin: 20 }}
              name="chevron-right"
              size={30}
              onPress={() => this.props.navigation.navigate("main")}
            />
          }
        />
        <Text style={ComponentStyle.subTitle}>
          What are some of your interests?
        </Text>
        <CategoriesBlock />
      </View>
    );
  }
}

export default SUSelectInterestsScreen;
