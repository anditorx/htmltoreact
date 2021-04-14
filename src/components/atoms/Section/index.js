import React from "react";
import propTypes from "prop-types";

const Section = (props) => {
  const className = ["section"];
  className.push(props.className);

  if (props.isCenteredContent) className.push("center-content");

  return <section className={className.join(" ")}>{props.children}</section>;
};

export default Section;

Section.propTyoes = {
  isCenteredContent: propTypes.bool,
  className: propTypes.string,
};
