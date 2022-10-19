import React from "react";
import styled from "styled-components/macro";
import { PropTypes } from "prop-types";

const Para = styled.p`
  color: ${(props) => props.color || "#333333"};
  font-size: ${(props) => props.fontSize || "2.2rem"};
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-right: ${(props) => props.marginRight || 0};
`;

const Paragraph = ({ children, fontSize, marginBottom, marginRight, color }) => {
  return (
    <Para
      marginBottom={marginBottom}
      marginRight={marginRight}
      fontSize={fontSize}
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
  marginRight: PropTypes.string
};

export default Paragraph;
