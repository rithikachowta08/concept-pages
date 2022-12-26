import React from "react";
import { TextSpan } from "components/text";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";

const Sample = () => {
   return (
      <>
         <DesktopComponent>
            <TextSpan color="white">Desktop layout</TextSpan>
         </DesktopComponent>
         <MobileComponent>
            <TextSpan color="white">Mobile layout</TextSpan>
         </MobileComponent>
      </>
   );
};

export default Sample;
