import { SlideWrap } from "components/StyledElements";
import { Paragraph } from "components/text";
import React from "react";

const Slide3 = () => {
  return (
    <SlideWrap bg={"LIGHT"}>
      <Paragraph
        marginBottom="70px"
        textAlign={"center"}
        fontSize="1.6rem">
        Select the color that covers the entire area of the triangular park.
      </Paragraph>
    </SlideWrap>
  );
};

export default Slide3;
