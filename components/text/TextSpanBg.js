import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const StyledSpan = styled.span`
   color: white;
   background-color: ${(props) => props.color || colors.DARK_GREY};
   font-weight: ${(props) => props.fontWeight || "500"};
   font-size: ${(props) => props.fontSize || "1.5rem"};
   text-decoration: ${(props) => props.textDecoration || "none"};
   margin-bottom: ${(props) => props.marginBottom || 0};
   margin-left: ${(props) => props.marginLeft || 0};
   margin: ${(props) => props.margin || "3px 0"};
   padding: ${(props) => props.padding || "0 10px"};
   transform: ${(props) => props.transform};
   cursor: ${(props) => props.cursor || "default"};
   border-radius: ${(props) => props.borderRadius || "9999px"};
   -webkit-box-decoration-break: clone;
   -o-box-decoration-break: clone;
   box-decoration-break: clone;
   &:hover {
      background-color: ${(props) => props.hoverColor};
   }
`;

const TextSpanBg = ({
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
   borderRadius,
   padding,
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
         borderRadius={borderRadius}
         padding={padding}
      >
         {children}
      </StyledSpan>
   );
};

TextSpanBg.propTypes = {
   children: PropTypes.node.isRequired,
   color: PropTypes.string,
   margin: PropTypes.string,
   padding: PropTypes.string,
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
};

TextSpanBg.defaultProps = {
   fontWeight: 500,
   fontSize: fontSizes.LARGE,
   textDecoration: "none",
   cursor: "default",
   onHover: () => {},
   onHoverOut: () => {},
   onClick: () => {},
};

export default TextSpanBg;
