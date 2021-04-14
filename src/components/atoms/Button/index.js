import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
  const className = ["button"];
  if (props.isPrimary) className.push("button-primary");
  if (props.isWideMobile) className.push("button-wide-mobile");
  if (props.isSmall) className.push("button-sm");
  if (props.isBlock) className.push("button-block");

  return <button className={className.join(" ")}>{props.children}</button>;
};

export default Button;

Button.propTypes = {
  isPrimary: propTypes.bool,
  isWideMobile: propTypes.bool,
  isSmall: propTypes.bool,
  isBlock: propTypes.bool,
};
