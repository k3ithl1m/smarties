import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import {
  YTextInput,
  DismissKeyboardAvoidingView,
  YButton,
  YHeader
} from "../../components";
import { ComponentStyle } from "../../styling";
import { NavigationActions } from "react-navigation";

const backAction = NavigationActions.back();

class SUGeneralInformationScreen extends Component {
  render() {
    return (
      <DismissKeyboardAvoidingView>
        <View style={{ flex: 1 }}>
          <YHeader
            leftComponent={
              <Icon
                name="chevron-left"
                size={30}
                onPress={() => this.props.navigation.dispatch(backAction)}
              />
            }
          />
          <Text style={ComponentStyle.title}>Create account</Text>
          <View style={{ height: 350 }}>
            <YTextInput title="First Name" />
            <YTextInput title="Last Name" />
            <YTextInput title="Email" />
            <YTextInput title="Password" />
            <YButton
              title="Next"
              onPress={() => this.props.navigation.navigate("getPhoneNumber")}
            />
          </View>
        </View>
      </DismissKeyboardAvoidingView>
    );
  }
}

export default SUGeneralInformationScreen;
