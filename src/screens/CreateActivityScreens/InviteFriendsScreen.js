import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import {
  DismissKeyboardAvoidingView,
  YHeader,
  SearchBlock
} from "../../components";

class InviteFriendsScreen extends Component {
  render() {
    return (
      <DismissKeyboardAvoidingView>
        <View style={{ flex: 1 }}>
          <YHeader leftComponent={<Icon name="chevron-left" size={30} />} />
          <SearchBlock />
        </View>
      </DismissKeyboardAvoidingView>
    );
  }
}

export default InviteFriendsScreen;
