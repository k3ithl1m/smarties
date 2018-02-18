import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { login } from "../../actions";
import { Button, Header, Icon } from "react-native-elements";
import { ComponentStyle } from "../../styling";
import { NavigationActions } from "react-navigation";
import {
  YTextInput,
  TextField,
  DismissKeyboardAvoidingView,
  YButton,
  TopBar,
  YHeader
} from "../../components";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const backAction = NavigationActions.back();

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  onLoginPressed = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  onEmailChanged(email) {
    console.log(email);
    this.setState({ email });
  }

  onPasswordChanged(password) {
    console.log(password);
    this.setState({ password });
  }

  render() {
    return (
      <DismissKeyboardAvoidingView>
        <View style={{ flex: 1 }}>
          <YHeader
            leftComponent={
              <TouchableOpacity
                style={{ flexDirection: "row", alignSelf: "center" }}
                onPress={() => this.props.navigation.dispatch(backAction)}
              >
                <Icon name="chevron-left" size={30} />
                <Text>Back</Text>
              </TouchableOpacity>
            }
          />
          <Text style={ComponentStyle.title}>Log in</Text>
          <View style={{ height: 200 }}>
            <YTextInput
              title="Email"
              value={this.state.email}
              onChangeText={this.onEmailChanged.bind(this)}
            />
            <YTextInput
              title="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={this.onPasswordChanged.bind(this)}
            />

            <YButton title="Log in" onPress={this.onLoginPressed} />
          </View>
          <View style={{ margin: 20 }}>
            <Text style={ComponentStyle.textStyle}>Forgot your password?</Text>
            <Text style={ComponentStyle.textStyle}>
              No stress,
              <Text
                onPress={() => {
                  this.props.navigation.navigate("resetP");
                }}
              >
                {" "}
                reset it here
              </Text>
            </Text>
          </View>
        </View>
      </DismissKeyboardAvoidingView>
    );
  }
}

export default connect(null, {
  login
})(LoginScreen);
