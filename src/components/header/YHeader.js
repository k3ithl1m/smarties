import React from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";
import DummyNavButton from "./DummyNavButton";
import NavButton from "./NavButton";
import BackButton from "./BackButton";
import Title from "./Title";
import { View, StatusBar, Text, StyleSheet } from "react-native";

function generateChild(value, type) {
  if (React.isValidElement(value)) {
    return <View key={type}>{value}</View>;
  } else if (typeof value === "object" && !isEmpty(value)) {
    console.log("this is the back " + back);
    console.log(value);
    return type === "center" ? (
      <Title {...value} key={type} />
    ) : (
      <NavButton {...value} key={type} />
    );
  }
  return type === "center" ? null : <DummyNavButton key={type} />;
}

function populateChildren(propChildren) {
  const childrenArray = [];

  const leftComponent = generateChild(propChildren.leftComponent, "left");
  const centerComponent = generateChild(propChildren.centerComponent, "center");
  const rightComponent = generateChild(propChildren.rightComponent, "right");

  childrenArray.push(leftComponent, centerComponent, rightComponent);

  return childrenArray;
}

const Header = props => {
  const {
    statusBarProps,
    leftComponent,
    centerComponent,
    rightComponent,
    back,
    children,
    fadedBlack,
    ...attributes
  } = props;

  let propChildren = [];

  if (leftComponent || centerComponent || rightComponent) {
    propChildren = populateChildren({
      leftComponent,
      centerComponent,
      rightComponent
    });
  }

  return (
    <View style={[styles.outerContainer, fadedBlack && styles.fadedBlack]}>
      <StatusBar {...statusBarProps} />
      <View style={styles.innerContainer}>
        {propChildren.length > 0 ? propChildren : children}
      </View>
    </View>
  );
};

Header.propTypes = {
  leftComponent: PropTypes.object,
  centerComponent: PropTypes.object,
  rightComponent: PropTypes.object,
  statusBarProps: PropTypes.object,
  back: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  fadedBlack: PropTypes.bool
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  outerContainer: {
    height: 70,
    paddingLeft: 15
  },
  fadedBlack: {
    backgroundColor: "#000",
    opacity: 0.5
  }
});

export default Header;
