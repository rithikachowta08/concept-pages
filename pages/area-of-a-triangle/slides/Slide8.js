import MathElement from "components/MathElement";
import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { Paragraph, Title } from "components/text";
import React from "react";
import { colors } from "utils/colors";

const applet = "applets/triangle.html";

const Slide8 = ({ downIcon, navBar }) => {
   return (
      <TextAndAppletSlide
         bg={"LIGHT"}
         appletSrc={applet}
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            Move the slider to create a triangle of area 15 unit<sup>2</sup>.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide8;
