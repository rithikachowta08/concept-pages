import React from "react";
import styled from "styled-components";

const Div = styled.div`
   display: block;

   @media (min-width: 200px) and (max-width: 810px) {
      display: none;
   }
`;

const DesktopComponent = ({ children }) => {
   return <Div>{children}</Div>;
};

export default DesktopComponent;
