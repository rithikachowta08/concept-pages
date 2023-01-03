import { ORIENTATION_TYPES, useOrientation } from "hooks/useDeviceType";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
   display: none;

   // Mobile
   @media (orientation: portrait) {
      display: block;
      height: 100%;
      width: 100%;
   }
`;

const MobileComponent = ({ children }) => {
   const orientation = useOrientation();
   return orientation && orientation === ORIENTATION_TYPES.LANDSCAPE ? null : (
      <Div>{children}</Div>
   );
};

export default MobileComponent;
