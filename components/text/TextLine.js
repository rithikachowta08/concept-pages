import React from "react";
import styled from "styled-components";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";
import { PropTypes } from "prop-types";

const Line = styled.div`
   color: ${(props) => props.color || "inherit"};
   text-align: ${(props) => props.textAlign};
   font-weight: ${(props) => props.fontWeight || fontWeights.NORMAL};
   font-family: ${(props) =>
      props.fontWeight === fontWeights.BOLD
         ? '"Nunito-Bold", sans-serif'
         : '"Nunito-Medium", sans-serif'};
   font-size: ${(props) => props.fontSize || fontSizes.MEDIUM};
`;

const TextLine = ({ children, fontSize, textAlign, fontWeight, color }) => {
   return (
      <Line
         textAlign={textAlign}
         fontSize={fontSize}
         fontWeight={fontWeight}
         color={color}
      >
         {children}
      </Line>
   );
};

TextLine.propTypes = {
   children: PropTypes.node.isRequired,
   color: PropTypes.string,
   fontSize: PropTypes.string,
   textAlign: PropTypes.string,
};

export default TextLine;
