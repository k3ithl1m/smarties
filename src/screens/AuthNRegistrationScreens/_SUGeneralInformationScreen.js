import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import {
  YTextInput,
  DismissKeyboardAvoidingView,
  YButton,
  YHeader
} from "../../components";
import { ComponentStyle } from "../../styling";
import { NavigationActions } from "react-navigation";
import * as actions from "../../actions";

const backAction = NavigationActions.back();

class SUGeneralInformationScreen extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onNameChanged(name) {
    this.setState({ name });
  }

  onEmailChanged(email) {
    this.setState({ email });
  }

  onPasswordChanged(password) {
    this.setState({ password });
  }

  onSignUpPressed = () => {
    const { email, password, name } = this.state;
    this.props.signUp(name, email, password, () => {
      this.props.navigation.navigate("main");
    });
  };

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
            <YTextInput
              title="Name"
              value={this.state.name}
              onChangeText={this.onNameChanged.bind(this)}
            />
            <YTextInput
              title="Email"
              value={this.state.email}
              onChangeText={this.onEmailChanged.bind(this)}
            />
            <YTextInput
              title="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={this.onPasswordChanged.bind(this)}
            />
            <YButton title="Next" onPress={this.onSignUpPressed} />
          </View>
        </View>
      </DismissKeyboardAvoidingView>
    );
  }
}

export default connect(null, actions)(SUGeneralInformationScreen);
