import React from "react";
import styled from "styled-components";
import { fontSizes, fontWeights } from "utils/fontStyles";
import { colors } from "utils/colors";
import { PropTypes } from "prop-types";

const Line = styled.div`
   color: ${(props) => props.color || "inherit"};
   text-align: ${(props) => props.textAlign};
   font-weight: ${fontWeights.NORMAL}
   font-size: ${(props) => props.fontSize || fontSizes.LARGE};
`;

const TextLine = ({ children, fontSize, textAlign, color }) => {
   return (
      <Line textAlign={textAlign} fontSize={fontSize} color={color}>
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
