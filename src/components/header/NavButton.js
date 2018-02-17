import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-elements";
import BackButton from "./BackButton";

const NavButton = props => {
  const { back, icon, ...attributes } = props;

  return back === true ? (
    <Icon {...attributes} name="chevron-left" />
  ) : (
    <Icon {...attributes} name={icon} />
  );
};

NavButton.propTypes = {
  icon: PropTypes.string,
  back: PropTypes.bool
};

export default NavButton;
