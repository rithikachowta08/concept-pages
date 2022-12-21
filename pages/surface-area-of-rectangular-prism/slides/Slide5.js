import Pill from "components/Pill";
import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { Paragraph } from "components/text";
import React from "react";
import { colors } from "utils/colors";

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         bg="DARK"
         title={"Total Surface Area"}
         secondaryTitle={"Surface Area"}
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The total surface area of a rectangular prism is the area occupied
            by its six faces.
         </Paragraph>
         <Paragraph>
            <Pill>Total surface area = 2(lw + wh + lh)</Pill>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide5;
