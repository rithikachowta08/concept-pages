import React from "react";
import styled from "styled-components/macro";
import { colors } from "utils/colors";
import { PropTypes } from "prop-types";

const Para = styled.p`
  color: ${(props) => props.color || colors.DARK_GREY};
  text-align: ${(props) => props.textAlign};
  max-width: ${(props) => props.maxWidth};
  font-size: ${(props) => props.fontSize || "2.2rem"};
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-right: ${(props) => props.marginRight || 0};
  padding: ${(props) => props.padding || 0};
`;

const Paragraph = ({
  children,
  fontSize,
  marginBottom,
  maxWidth,
  textAlign,
  marginRight,
  padding,
  color
}) => {
  return (
    <Para
      marginBottom={marginBottom}
      marginRight={marginRight}
      maxWidth={maxWidth}
      textAlign={textAlign}
      fontSize={fontSize}
      padding={padding}
      color={color}>
      {children}
    </Para>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  marginBottom: PropTypes.string,
  maxWidth: PropTypes.string,
  marginRight: PropTypes.string,
  textAlign: PropTypes.string,
  padding: PropTypes.string
};

export default Paragraph;
