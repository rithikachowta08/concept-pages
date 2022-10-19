import React from "react";
import styled from "styled-components/macro";
import { Icon, Flex } from "components/StyledElements";
import { TextSpan } from "components/text";
import { PropTypes } from "prop-types";

const Pill = ({ children, icon, width, position, bottom, alignSelf, color, bgColor }) => {
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
      <Icon
        src={icon}
        marginRight="10px"></Icon>
      <TextSpan
        color={color}
        fontSize="1rem">
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
  width: PropTypes.string,
  color: PropTypes.string
};

export default Pill;
