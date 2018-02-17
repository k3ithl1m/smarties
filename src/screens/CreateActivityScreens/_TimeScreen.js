import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { Icon, Header } from "react-native-elements";
import { YHeader } from "../../components";

const Screen_Height = Dimensions.get("window").height;

class _TimeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                centerComponent={{ text: "Time"}}
                backgroundColor="#FFF"
            />
            <Text>Is this event all day? If not, select sometimes.</Text>
            </View>
        );
    }
}

export default _TimeScreen;