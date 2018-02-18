import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { ComponentStyle } from "../../styling";
import { YHeader, YTextInput } from "../../components";

class _Where extends Component {
  render() {
    return (
      <View>
        <YHeader
          leftComponent={<Icon name="chevron-left" size={30} />}
          rightComponent={<Icon name="chevron-right" size={30} />}
        />
        <Text style={ComponentStyle.title}>Where?</Text>
        <Text style={ComponentStyle.label}>Address</Text>
        <View style={{ height: 80 }}>
          <YTextInput title="Address or City" />
        </View>
        <View style={{ height: 80 }}>
          <YTextInput title="Name (optional)" />
        </View>
        <Text style={ComponentStyle.label}>Building or roon name</Text>
      </View>
    );
  }
}

export default _Where;
