import React from "react";
import styled from "styled-components";

const Div = styled.div`
   display: none;

   @media (min-width: 200px) and (max-width: 810px) and (min-height: 600px) {
      display: block;
   }

   @media (min-height: 300px) and (max-height: 400px) and (max-width: 500px) {
      display: block;
   }
`;

const MobileComponent = ({ children }) => {
   return <Div>{children}</Div>;
};

export default MobileComponent;
