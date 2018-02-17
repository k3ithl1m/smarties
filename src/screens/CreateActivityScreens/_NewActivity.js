import React, { Component } from "react";
import { View, Text, Switch } from "react-native";
import { Icon } from "react-native-elements";
import { ComponentStyle } from "../../styling";
import { NavigationActions } from "react-navigation";
import { YHeader, YSwitch, YTextInput } from "../../components";

const backAction = NavigationActions.back();

class _NewActivity extends Component {
  state = { switchValue: false };

  toggleSwitch = () => {
    this.setState(state => ({ switchvalue: !state.switchValue }));
  };

  render() {
    return (
      <View>
        <YHeader
          leftComponent={
            <Icon
              name="chevron-left"
              size={30}
              onPress={() => this.props.navigation.dispatch()}
            />
          }
          rightComponent={<Icon name="chevron-right" size={30} />}
        />
        <Text style={ComponentStyle.title}>New Activity </Text>
        <Text style={ComponentStyle.description}>
          So you'd like to plan something, let's get some general info first!
        </Text>
        <Text style={ComponentStyle.label}>Event Name</Text>
        <View style={{ height: 80 }}>
          <YTextInput title="Eg. Game night, Concert" />
        </View>
        <Text style={ComponentStyle.label}>Description</Text>
        <View style={{ height: 80 }}>
          <YTextInput title="250 characters" />
        </View>
        <Text style={ComponentStyle.label}>Private?</Text>
        <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 15 }}>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
      </View>
    );
  }
}

export default _NewActivity;
