import React from "react";
import { PropTypes } from "prop-types";

import { SlideWrap } from "components/StyledElements";
import { ContentList, Title } from "components/text";
import TitleSlide from "components/slides/TitleSlide";

const Slide1 = ({ moveToSection }) => {
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
    />
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any,
};

export default Slide1;
