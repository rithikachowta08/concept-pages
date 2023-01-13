import React from "react";
import styled from "styled-components";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { PropTypes } from "prop-types";
import { colors } from "utils/colors";

const H1 = styled.h1`
   color: ${(props) => props.color || "white"};
   font-size: ${(props) =>
      props.fontSize ? props.fontSize : fontSizes.PAGE_TITLE};
   margin: 0;
   margin-bottom: ${(props) => props.marginBottom || 0};
   text-align: ${(props) => props.textAlign};

   @media (min-width: 200px) and (max-width: 767px) {
      font-size: ${(props) =>
         props.fontSize ? props.fontSize : fontSizes.MOBILE_PAGE_TITLE};
   }
`;

const H2 = styled.h2`
   color: ${(props) => (props.color ? props.color : colors.DARK_GREY)};
   font-weight: ${(props) =>
      props.fontWeight ? props.fontWeight : fontWeights.NORMAL};
   opacity: ${(props) => (props.opacity ? props.opacity : "1")};
   padding: ${(props) => props.padding};
   font-size: ${(props) =>
      props.fontSize ? props.fontSize : fontSizes.MEDIUM};
   margin: 0;
   text-align: ${(props) => props.textAlign};
   margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;
const H3 = styled.h3`
   color: ${(props) => (props.color ? props.color : colors.DARK_GREY)};
   font-weight: ${(props) =>
      props.fontWeight ? props.fontWeight : fontWeights.NORMAL};
   opacity: ${(props) => (props.opacity ? props.opacity : "1")};
   padding: ${(props) => props.padding};
   font-size: ${(props) =>
      props.fontSize ? props.fontSize : fontSizes.MEDIUM};
   margin: 0;
   text-align: ${(props) => props.textAlign};
   margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;

const Title = ({
   children,
   marginBottom,
   padding,
   fontSize,
   fontWeight,
   opacity,
   color,
   level,
   textAlign,
}) => {
   let HeadingElement = H1;
   if (level === 2) {
      HeadingElement = H2;
   }
   if (level === 3) {
      HeadingElement = H3;
   }
   return (
      <HeadingElement
         marginBottom={marginBottom}
         opacity={opacity}
         fontSize={fontSize}
         fontWeight={fontWeight}
         padding={padding}
         textAlign={textAlign}
         color={color}
      >
         {children}
      </HeadingElement>
   );
};

Title.propTypes = {
   children: PropTypes.node.isRequired,
   color: PropTypes.string,
   fontSize: PropTypes.string,
   opacity: PropTypes.number,
   fontWeight: PropTypes.number,
   marginBottom: PropTypes.string,
   padding: PropTypes.string,
   small: PropTypes.bool,
};

Title.defaultProps = {
   small: false,
};

export default Title;
