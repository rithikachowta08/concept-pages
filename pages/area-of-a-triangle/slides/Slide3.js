import Button from "components/Button";
import QuestionAnswerImage from "components/media/QuestionAnswerImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph } from "components/text";
import React from "react";
import { colors } from "utils/colors";

// Definition applet
const Slide3 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide downIcon={downIcon} bg={"LIGHT"}>
         <Paragraph textAlign={"center"}>
            The sandwich kept on the wooden platter is in __________ shape.
         </Paragraph>
         <Flex justifyContent={"space-evenly"} marginTop="20px" width="100%">
            <Button bgColor={colors.AQUA} color={colors.BLACK}>
               triangular
            </Button>
            <Button bgColor={colors.AQUA} color={colors.BLACK}>
               square
            </Button>
         </Flex>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
