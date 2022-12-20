import TitleSlide from "components/slides/TitleSlide";
import { TitleSlideWrap } from "components/StyledElements";
import React from "react";

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title={"Surface area of rectangular prism"}
         anchorIdxes={[4, 5, 6]}
         contentListItems={[
            "What is the surface area of a rectangular prism?",
            "Total surface area",
            "Lateral surface area",
         ]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

export default Slide1;
