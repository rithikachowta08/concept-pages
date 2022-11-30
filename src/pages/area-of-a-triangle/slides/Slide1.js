import React from "react";
import { PropTypes } from "prop-types";

import { SlideWrap } from "components/StyledElements";
import { ContentList, Title } from "components/text";
import bg from "assets/purple_bg.png";

const Slide1 = ({ moveToSection }) => {
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Title marginBottom="50px">Area of a Triangle</Title>
      <ContentList
        items={[
          "Definition",
          "Basic Formula",
          "Heron's Formulas",
          "Area of different types of triangle",
          "Area of a triangle given two sides and the included angle"
        ]}
        moveTo={moveToSection}
        anchorIdxes={[2, 3, 7, 9, 14]}
      />
    </SlideWrap>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any
};

export default Slide1;
