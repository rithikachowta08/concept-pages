import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Icon } from "./StyledElements";
import { fontSizes } from "utils/fontStyles";

const BUTTON_TYPES = {
   SOLID: "SOLID",
   OUTLINE: "OUTLINE",
};

const Flex = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 2px 6px;
   border-radius: ${(props) =>
      props.type === BUTTON_TYPES.OUTLINE ? "8px" : "27px"};
   height: ${(props) => props.height || "50px"};
   border: ${(props) =>
      props.type === BUTTON_TYPES.OUTLINE
         ? `1px solid
      ${props.borderColor || props.bgColor || props.color || "white"}`
         : "none"};
   color: ${(props) => props.color || "white"};
   min-width: 100px;
   width: ${(props) => props.width};
   cursor: pointer;
   position: ${(props) => props.position || "static"};
   bottom: ${(props) => props.bottom || "0"};
   align-self: ${(props) => props.alignSelf || "center"};
   background-color: ${(props) => props.bgColor || "transparent"};
   margin: ${(props) => props.margin || "0"};
   @media (max-height: 900px) {
      min-width: 70px;
   }
`;

const StyledButton = styled.button`
   background: none;
   border: none;
   padding: none;
   font-size: 1.5rem;
   cursor: pointer;
`;

const Button = ({
   children,
   onClick,
   icon,
   width,
   type = BUTTON_TYPES.OUTLINE,
   position,
   bottom,
   alignSelf,
   color,
   borderColor,
   bgColor,
   margin,
   height,
}) => {
   return (
      <Flex
         gap="5px"
         type={type}
         bgColor={bgColor}
         borderColor={borderColor}
         bottom={bottom}
         alignSelf={alignSelf}
         position={position}
         width={width}
         height={height}
         color={color}
         margin={margin}
      >
         <StyledButton onClick={onClick}>{children}</StyledButton>
         {icon ? <Icon src={icon} width="2rem"></Icon> : null}
      </Flex>
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
   borderColor: PropTypes.string,
   margin: PropTypes.string,
};

export default Button;
