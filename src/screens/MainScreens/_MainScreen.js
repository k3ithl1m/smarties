import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Icon, Header } from "react-native-elements";
import { YHeader } from "../../components";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class _MainScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          //leftComponent={<Icon name="menu" size={30} onPress = () => {this.props.navigation.} />}
          centerComponent={{ text: "My Events" }}
          backgroundColor="#FFF"
        />
        <Text>Hey</Text>
        <TouchableOpacity
          style={{
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              backgroundColor: "#a2a2a2",
              opacity: 0.5,
              height: 60,
              width: 60,
              borderRadius: 60,
              alignSelf: "center",
              position: "absolute",
              top: SCREEN_HEIGHT * 0.7231
            }}
          />
          <View
            style={{
              backgroundColor: "#dddddd",
              opacity: 0.5,
              borderRadius: 50,
              height: 50,
              width: 50,
              position: "absolute",
              top: SCREEN_HEIGHT * 0.73,
              alignSelf: "center"
            }}
          >
            <Icon name="add" size={50} color="#FFF" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default _MainScreen;
