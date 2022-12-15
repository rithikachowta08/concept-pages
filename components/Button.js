import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledButton = styled.button`
   border-radius: 8px;
   height: 50px;
   border: 1px solid
      ${(props) => props.borderColor || props.bgColor || props.color || "white"};
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

const Button = ({
   children,
   onClick,
   width,
   position,
   bottom,
   alignSelf,
   color,
   borderColor,
   bgColor,
   margin,
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
         color={color}
         margin={margin}
      >
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
   borderColor: PropTypes.string,
   margin: PropTypes.string,
};

export default Button;
