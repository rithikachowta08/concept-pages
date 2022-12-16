import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import React from "react";

const applet = "applets/triangle.html";

// Applet slide
const Slide4 = ({ navBar, downIcon }) => {
   return (
      <TextAndAppletSlide
         bg="LIGHT"
         title={"Derivation"}
         secondaryTitle={"Area of a Circle"}
         navBar={navBar}
         downIcon={downIcon}
         appletSrc={applet}
      ></TextAndAppletSlide>
   );
};

export default Slide4;
