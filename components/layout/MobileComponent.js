import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
   display: none;

   // Mobile
   @media (min-width: 200px) and (max-width: 820px) and (min-height: 500px) {
      display: block;
      height: 100%;
      width: 100%;
   }
`;

const MobileComponent = ({ children }) => {
   const deviceType = useDeviceType();
   return deviceType && deviceType !== DEVICE_TYPES.MOBILE ? null : (
      <Div>{children}</Div>
   );
};

export default MobileComponent;
