import React from "react";
import styled from "styled-components";

const Div = styled.div`
   display: none;

   @media (min-width: 200px) and (max-width: 810px) {
      display: block;
   }
`;

const MobileComponent = ({ children }) => {
   return <Div>{children}</Div>;
};

export default MobileComponent;
