import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { YHeader } from "../../components";

class _MainScreen extends Component {
  render() {
    return (
      <View>
        <YHeader
          leftComponent={<Icon name="chevron-left" size={30} />}
          //centerComponent={{ text: "My Events" }}
        />
        <Text>Hey</Text>
      </View>
    );
  }
}

export default _MainScreen;
