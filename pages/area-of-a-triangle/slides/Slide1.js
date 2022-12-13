import React from "react";
import { PropTypes } from "prop-types";

import TitleSlide from "components/slides/TitleSlide";

// Title Slide
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title={"Area of a Triangle"}
         anchorIdxes={[2, 4, 9, 10]}
         contentListItems={[
            "Definition",
            "General Formula",
            "Heron's Formula",
            "Area of different types of triangle",
         ]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
