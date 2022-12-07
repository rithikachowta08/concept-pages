import { LeftWrap, SlideWrap, StyledImg } from "components/StyledElements";
import { Paragraph, Title } from "components/text";
import React from "react";

const image_1 = "assets/area-of-triangle/ex_1.svg";
import { colors } from "utils/colors";

const Slide9_3 = () => {
  return (
    <SlideWrap bg={"LIGHT"}>
      <LeftWrap>
        <Paragraph color={colors.BLACK} fontSize="2rem" fontWeight={"400"}>
          Find the area of a triangle with the given dimensions.
        </Paragraph>
        <StyledImg src={image_1} bottomOffset="65px" />
      </LeftWrap>
    </SlideWrap>
  );
};

export default Slide9_3;
