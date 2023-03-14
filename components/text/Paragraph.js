import React from "react";
import styled from "styled-components";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";
import { PropTypes } from "prop-types";

const Para = styled.p`
   color: ${(props) => props.color || colors.DARK_GREY};
   text-align: ${(props) => props.textAlign};
   max-width: ${(props) => props.maxWidth};
   font-size: ${(props) => props.fontSize || fontSizes.MEDIUM};
   font-family: ${(props) =>
      props.fontWeight === fontWeights.BOLD ? "Nunito-Bold" : "Nunito-Medium"};
   font-weight: ${(props) => props.fontWeight || fontWeights.NORMAL};
   margin: ${(props) => props.margin};
   line-height: ${(props) => props.lineHeight || "150%"};
   margin-bottom: ${(props) => props.marginBottom || 0};
   margin-right: ${(props) => props.marginRight || 0};
   margin-block-start: ${(props) => props.marginTop || "2rem"};
   padding: ${(props) => props.padding || 0};

   @media (min-width: 200px) and (max-width: 820px) {
      margin-block-start: 0.5rem;
   }
`;

const Paragraph = ({
   children,
   fontSize,
   fontWeight,
   marginBottom,
   marginTop,
   maxWidth,
   textAlign,
   marginRight,
   margin,
   padding,
   color,
   lineHeight,
}) => {
   return (
      <Para
         marginBottom={marginBottom}
         marginTop={marginTop}
         marginRight={marginRight}
         maxWidth={maxWidth}
         textAlign={textAlign}
         fontSize={fontSize}
         fontWeight={fontWeight}
         padding={padding}
         color={color}
         margin={margin}
         lineHeight={lineHeight}
      >
         {children}
      </Para>
   );
};

Paragraph.propTypes = {
   children: PropTypes.node.isRequired,
   color: PropTypes.string,
   fontSize: PropTypes.string,
   fontWeight: PropTypes.number,
   marginBottom: PropTypes.string,
   maxWidth: PropTypes.string,
   marginRight: PropTypes.string,
   textAlign: PropTypes.string,
   padding: PropTypes.string,
   margin: PropTypes.string,
};

export default Paragraph;
