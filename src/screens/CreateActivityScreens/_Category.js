import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { ComponentStyle } from "../../styling";
import { YHeader } from "../../components";

class _Category extends Component {
  render() {
    return (
      <View>
        <YHeader
          rightComponent={
            <Icon
              name="chevron-right"
              size={30}
              onPress={() => this.props.navigation.navigate("newActivity")}
            />
          }
        />
        <Text style={ComponentStyle.title}>Category</Text>
        <Text style={ComponentStyle.description}>
          Please select at least one to continue
        </Text>
        <View />
      </View>
    );
  }
}

export default _Category;
