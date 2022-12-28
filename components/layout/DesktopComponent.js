import React from "react";
import styled from "styled-components";

const Div = styled.div`
   display: block;
   height: 100%;
   width: 100%;

   @media (min-width: 200px) and (max-width: 820px) and (min-height: 500px) {
      display: none;
   }
`;

const DesktopComponent = ({ children }) => {
   return <Div>{children}</Div>;
};

export default DesktopComponent;
