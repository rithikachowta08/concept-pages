import React from "react";
import styled from "styled-components";
import { colors } from "utils/colors";

const StyledAnchor = styled.a`
   color: ${(props) => props.color};
   &:hover {
      text-decoration: underline;
   }
`;

const HyperLink = ({ href, children, color = colors.YELLOW }) => {
   return (
      <StyledAnchor target="_blank" rel="noreferrer" color={color} href={href}>
         {children}
      </StyledAnchor>
   );
};

export default HyperLink;
