import React from "react";
import styled from "styled-components";
import { fontWeights, fontSizes } from "utils/fontStyles";
import { PropTypes } from "prop-types";
import { colors } from "utils/colors";

const StyledSpan = styled.span`
   color: ${(props) => props.color || colors.DARK_GREY};
   font-weight: ${(props) => props.fontWeight || fontWeights.NORMAL};
   font-size: ${(props) => props.fontSize || fontSizes.MEDIUM};
   text-decoration: ${(props) => props.textDecoration || "none"};
   margin-bottom: ${(props) => props.marginBottom || 0};
   margin-left: ${(props) => props.marginLeft || 0};
   margin: ${(props) => props.margin};
   transform: ${(props) => props.transform};
   cursor: ${(props) => props.cursor || "default"};
   background: ${(props) => props.bgColor || "transparent"};
   text-align: ${(props) => props.textAlign || "left"};
   &:hover {
      color: ${(props) => props.hoverColor};
      background: ${(props) => props.hoverBgColor || "transparent"};
   }
`;

const TextSpan = ({
   children,
   fontSize,
   transform,
   cursor,
   id,
   hoverColor,
   color,
   textDecoration,
   marginBottom,
   marginLeft,
   margin,
   onHover,
   onHoverOut,
   onClick,
   fontWeight,
   bgColor,
   hoverBgColor,
   textAlign,
}) => {
   return (
      <StyledSpan
         fontSize={fontSize}
         textDecoration={textDecoration}
         transform={transform}
         fontWeight={fontWeight}
         marginBottom={marginBottom}
         marginLeft={marginLeft}
         margin={margin}
         cursor={cursor}
         id={id}
         hoverColor={hoverColor}
         color={color}
         onClick={onClick}
         onMouseLeave={onHoverOut}
         onMouseEnter={onHover}
         bgColor={bgColor}
         hoverBgColor={hoverBgColor}
         textAlign={textAlign}
      >
         {children}
      </StyledSpan>
   );
};

TextSpan.propTypes = {
   children: PropTypes.node.isRequired,
   color: PropTypes.string,
   margin: PropTypes.string,
   transform: PropTypes.string,
   id: PropTypes.any,
   hoverColor: PropTypes.string,
   cursor: PropTypes.string,
   fontWeight: PropTypes.number,
   fontSize: PropTypes.string,
   textDecoration: PropTypes.string,
   marginBottom: PropTypes.string,
   marginLeft: PropTypes.string,
   onHover: PropTypes.func,
   onHoverOut: PropTypes.func,
   onClick: PropTypes.func,
   bgColor: PropTypes.string,
   hoverBgColor: PropTypes.string,
   textAlign: PropTypes.string,
};

TextSpan.defaultProps = {
   fontWeight: fontWeights.NORMAL,
   fontSize: fontSizes.LARGE,
   textDecoration: "none",
   cursor: "default",
   onHover: () => {},
   onHoverOut: () => {},
   onClick: () => {},
};

export default TextSpan;
