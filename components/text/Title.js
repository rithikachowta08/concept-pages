import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { colors } from "../../utils/colors";

const H1 = styled.h1`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "6rem")};
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

const H2 = styled.h2`
  color: ${(props) => (props.color ? props.color : colors.DARK_GREY)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  opacity: ${(props) => (props.opacity ? props.opacity : "1")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5rem")};
  margin: 0;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;

const Title = ({ children, marginBottom, fontSize, fontWeight, opacity, color, small }) => {
  const HeadingElement = small ? H2 : H1;
  return (
    <HeadingElement
      marginBottom={marginBottom}
      opacity={opacity}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}>
      {children}
    </HeadingElement>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  opacity: PropTypes.number,
  fontWeight: PropTypes.number,
  marginBottom: PropTypes.string,
  small: PropTypes.bool
};

Title.defaultProps = {
  small: false
};

export default Title;
