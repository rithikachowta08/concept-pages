import React from "react";
import styled from "styled-components/macro";
import { PropTypes } from "prop-types";

const StyledButton = styled.button`
  border-radius: 8px;
  height: 50px;
  border: 1px solid ${(props) => props.borderColor || props.bgColor || props.color || "white"};
  color: ${(props) => props.color || "white"};
  min-width: 100px;
  width: ${(props) => props.width};
  cursor: pointer;
  position: ${(props) => props.position || "static"};
  bottom: ${(props) => props.bottom || "0"};
  align-self: ${(props) => props.alignSelf || "center"};
  background-color: ${(props) => props.bgColor || "transparent"};
`;

const Button = ({
  children,
  onClick,
  width,
  position,
  bottom,
  alignSelf,
  color,
  borderColor,
  bgColor
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      borderColor={borderColor}
      bottom={bottom}
      alignSelf={alignSelf}
      position={position}
      width={width}
      onClick={onClick}
      color={color}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  position: PropTypes.string,
  bottom: PropTypes.string,
  alignSelf: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string
};

export default Button;
