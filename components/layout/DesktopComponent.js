import { useOrientation, ORIENTATION_TYPES } from "hooks/useDeviceType";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
   display: block;
   height: 100%;
   width: 100%;

   @media (orientation: portrait) {
      display: none;
   }
`;

const DesktopComponent = ({ children }) => {
   const orientation = useOrientation();
   return orientation && orientation === ORIENTATION_TYPES.PORTRAIT ? null : (
      <Div>{children}</Div>
   );
};

export default DesktopComponent;
