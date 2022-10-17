import React from "react";
import styled from "styled-components/macro";
import { PropTypes } from "prop-types";

const Heading = styled.h1`
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 100px;
  margin: 0;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;

const Title = ({ text, marginBottom, color }) => {
  return (
    <Heading
      marginBottom={marginBottom}
      color={color}>
      {text}
    </Heading>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  marginBottom: PropTypes.string
};

export default Title;
