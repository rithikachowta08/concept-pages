import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { StyledImg } from "components/StyledElements";
import React from "react";

const image_1 = "assets/area-of-triangle/ex_1.svg";

// Area of triangle exercise
const Slide12 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         secondaryTitle={
            "Find the area of a triangle with the given dimensions."
         }
         bg={"LIGHT"}
         downIcon={downIcon}
      >
         <StyledImg src={image_1} />
      </TextAndAppletSlide>
   );
};

export default Slide12;
