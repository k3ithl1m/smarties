import React, { Component } from "react";
import { View, Text, Dimensions, Switch, TextInput } from "react-native";
import { Icon, Header } from "react-native-elements";
import { YHeader, DismissKeyboardAvoidingView } from "../../components";
import { ComponentStyle } from "../../styling";
import { NavigationActions } from "react-navigation";

const Screen_Height = Dimensions.get("window").height;
const backAction = NavigationActions.back();


class _TimeScreen extends Component {
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
                rightComponent={
                    <Icon name="chevron-right"
                    size={30}
                    onPress={() => this.props.navigation()}
                    />
                }
                />
                <Text style={ComponentStyle.title}>Time</Text>
                <Text style={ComponentStyle.heading}>Is this
                     event all day? If not, select some times.
                </Text>
                <Text style={[ComponentStyle.heading, {color: "#000"}]}>All day?
                </Text>
                <View style={{ flex: 0.2 }}>   
                     <Switch style={{position: "absolute", left: 15}}>
                     </Switch>
                </View>
                {/* <View>
                     <Text style={[ComponentStyle.heading, {color: "#000"}]}>
                     </Text>
                </View> */}
                <View style={{ flex: 1 }}>
                     <Text style={[ComponentStyle.heading, {color: "#000"}]}>Start Time
                     </Text>
                     <TextInput style={[ComponentStyle.heading, {color: "#000", width: 150}]}
                     placeholder="Start Time"
                     placeholderTextColor="gray">
                     </TextInput>
                        <View style={{ flex: 1, flexDirection: "row"}}>
                        <Text style={[ComponentStyle.heading, {color: "#000"}]}>End Time
                        </Text>
                        </View>
                </View>
               {/* </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                     <Text style={[ComponentStyle.heading, {color: "#000"}]}>End Time
                     </Text>
                </View>  */}
            </View>
            </DismissKeyboardAvoidingView>
        );
    }
}

export default _TimeScreen;