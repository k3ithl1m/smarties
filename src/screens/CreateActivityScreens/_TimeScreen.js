import React, { Component } from "react";
import { View, Text, Dimensions, TextInput, Picker } from "react-native";
import { Icon, Header } from "react-native-elements";
import { YHeader, DismissKeyboardAvoidingView } from "../../components";
import { ComponentStyle } from "../../styling";
import { NavigationActions } from "react-navigation";
import { Switch } from 'react-native-switch';
import DatePicker from 'react-native-datepicker';

const Screen_Height = Dimensions.get("window").height;
const backAction = NavigationActions.back();


class _TimeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickerSelection: 'Start Time',
             date: "2018-02-17",
             showCancel: true
        }
        // this.toggleDiv = this.toggleDiv.bind(this)
    }

      toggleCancel = () => {
        this.setState({
            showCancel: !this.state.showCancel
        });
      }

    renderDate() {
        if (this.state.showCancel) {
            return (
                <View>
                </View>
            );
        } else {
            return (

                <View style={{ flex: 1, flexDirection: "row" }}>
                <View>
                 <Text style={[ComponentStyle.heading, {color: "#000"}]}>Start Time
                 </Text>

                 <DatePicker
                    style={{width: 125, left: 15}}
                    date={this.state.time}
                    mode="time"
                    format="HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    minuteInterval={10}
                    onDateChange={(time) => {this.setState({time: time});}}
                />
                 </View>
                    <View style={{ flex: 1, flexDirection: "column", left: 45}}>
                    <Text style={[ComponentStyle.heading, {color: "#000"}]}>End Time
                    </Text>
                    <DatePicker
                        style={{width: 125, left: 15}}
                        date={this.state.time1}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={10}
                        onDateChange={(time1) => {this.setState({time1: time1});}}
                    />

                </View>
            </View>
            );
        }
    }

    // toggleDiv = () => {
    //     const { show } = this.state;
    //     this.setState({ show: !show })
    // }

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
                <Text style={ComponentStyle.title}>When</Text>
                <Text style={ComponentStyle.heading}>Is this
                     event all day? If not, select some times.
                </Text>
                <Text style={[ComponentStyle.heading, {color: "#000"}]}>All day?
                </Text>
                <View style={{ flex: 0.2, left: 15 }}>   
                    {/* <br /> */}
                     <Switch onPress={this.toggleCancel}> 
                     </Switch>

                     {/* <br /><br /> */}
                </View>
                {this.state.showCancel && ( (

                <View style={{ flex: 1, flexDirection: "row" }}>
                <View>
                 <Text style={[ComponentStyle.heading, {color: "#000"}]}>Start Time
                 </Text>

                 <DatePicker
                    style={{width: 125, left: 15}}
                    date={this.state.time}
                    mode="time"
                    format="HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    minuteInterval={10}
                    onDateChange={(time) => {this.setState({time: time});}}
                />
                 </View>
                    <View style={{ flex: 1, flexDirection: "column", left: 45}}>
                    <Text style={[ComponentStyle.heading, {color: "#000"}]}>End Time
                    </Text>
                    <DatePicker
                        style={{width: 125, left: 15}}
                        date={this.state.time1}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={10}
                        onDateChange={(time1) => {this.setState({time1: time1});}}
                    />

                </View>
            </View>
            ))}
                    <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "center"}}>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2018-02-17"
                        maxDate="2020-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                        },
                        dateInput: {
                        marginLeft: 36
                        }
                         // ... You can check the source to find the other keys.
                         }}
                         onDateChange={(date) => {this.setState({date: date})}}
                     />

                     {/* <DatePicker
          style={{width: 200}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({time: time});}}
/> */}

                    </View>
            </View>
            </DismissKeyboardAvoidingView>
        );
    }
}

// class Disappear extends Component{
//     render(){
//         return(
//             <Text>HELLO</Text>
//         );
//     }
// }


export default _TimeScreen;