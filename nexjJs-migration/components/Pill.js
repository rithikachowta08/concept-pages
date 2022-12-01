import React from "react";
import { Icon, Flex } from "./StyledElements";
import { TextSpan } from "./text";
import { PropTypes } from "prop-types";

const Pill = ({
  children,
  icon,
  width,
  position,
  bottom,
  alignSelf,
  color,
  bgColor,
  fontSize = "1rem"
}) => {
  return (
    <Flex
      bgColor={bgColor}
      bottom={bottom}
      padding="12px"
      alignItems="center"
      alignSelf={alignSelf}
      borderRadius="8px"
      position={position}
      color={color}
      width={width}>
      {icon ? (
        <Icon
          src={icon}
          marginRight="6px"></Icon>
      ) : null}
      <TextSpan
        color={color}
        fontSize={fontSize}>
        {children}
      </TextSpan>
    </Flex>
  );
};

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  position: PropTypes.string,
  bottom: PropTypes.string,
  alignSelf: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string
};

export default Pill;
