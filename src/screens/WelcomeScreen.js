import React, { Component } from "react";
import { Text, View, ImageBackground, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const walkingImage = require("../../assets/Images/WelcomePage/StreetWalking2.jpg");
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT
          }}
          blurRadius={20}
          source={walkingImage}
        >
          <View style={{ justifyContent: "space-between", marginTop: 20 }}>
            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
                margin: 50
              }}
            >
              <Text
                style={{
                  fontSize: 76,
                  fontWeight: "800",
                  color: "white",
                  margin: 50
                }}
              >
                yuan
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "white",
                  margin: 50
                }}
              >
                Go out, Meet up
              </Text>
            </View>
            <View style={{ marginTop: 40 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  margin: 10
                }}
              >
                <Button
                  title="Log in"
                  large
                  buttonStyle={{
                    backgroundColor: "#a4a4a4",
                    width: SCREEN_WIDTH * 0.9,
                    height: SCREEN_HEIGHT * 0.08,
                    borderRadius: 5,
                    margin: 5
                  }}
                  color="#4f4f4f"
                  onPress={() => this.props.navigation.navigate("login")}
                />
                <Button
                  title="Register"
                  large
                  buttonStyle={{
                    backgroundColor: "#e8e8e8",
                    width: SCREEN_WIDTH * 0.9,
                    height: SCREEN_HEIGHT * 0.08,
                    borderRadius: 5,
                    margin: 5
                  }}
                  color="#4f4f4f"
                  onPress={() => this.props.navigation.navigate("signUp")}
                />
              </View>
              <View style={{ alignSelf: "center", justifyContent: "center" }}>
                <Text
                  style={{ fontSize: 17, fontWeight: "700", color: "white" }}
                >
                  Contact us
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default WelcomeScreen;
