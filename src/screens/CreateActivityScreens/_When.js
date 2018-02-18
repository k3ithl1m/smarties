import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Switch } from "react-native-switch";
import { Icon } from "react-native-elements";
import { ComponentStyle } from "../../styling";
import { YHeader, YTextInput } from "../../components";

class _When extends Component {
  render() {
    return (
      <View>
        <YHeader
          leftComponent={<Icon name="chevron-left" size={30} />}
          rightComponent={<Icon name="chevron-right" size={30} />}
        />
        <Text style={ComponentStyle.title}>When</Text>
        <Text style={ComponentStyle.description}>
          Is this event all day? If not, select some times
        </Text>
        <Text style={ComponentStyle.label}>All day?</Text>
        <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 15 }}>
          <Switch />
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 50 }}>
          <View style={{ flex: 0.4, height: 80 }}>
            <Text style={ComponentStyle.label}>Start Time</Text>
            <View style={{ flex: 1, alignSelf: "center" }}>
              <TextInput placeholder="text" style={{ height: 50 }} />
              <View
                style={{
                  height: 2.5,
                  backgroundColor: "#606160"
                }}
              />
            </View>
          </View>
          <View style={{ flex: 0.4, height: 80 }}>
            <Text style={ComponentStyle.label}>Optional</Text>
            <View style={{ flex: 1, alignSelf: "center" }}>
              <TextInput placeholder="text" style={{ height: 50 }} />
              <View
                style={{
                  height: 2.5,
                  backgroundColor: "#606160"
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default _When;
