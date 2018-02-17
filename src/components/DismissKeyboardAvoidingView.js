import React from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Keyboard
} from "react-native";

const DismissKeyboardAvoidingView = props => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.containerStyle}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerStyle}>{props.children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: "center"
  }
};

export default DismissKeyboardAvoidingView;
