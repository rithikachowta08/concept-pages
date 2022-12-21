import TitleSlide from "components/slides/TitleSlide";
import React from "react";

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title={"Area of a Circle"}
         anchorIdxes={[2, 3, 6, 8]}
         contentListItems={[
            "What is the area of a circle?",
            "General Formula",
            "Area of a circle using the diameter",
            "Area of a circle using the circumference",
         ]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

export default Slide1;
