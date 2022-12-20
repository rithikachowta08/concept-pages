import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Paragraph, TextSpanBg } from "components/text";
import React from "react";
import { colors } from "utils/colors";

const Slide2 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"What is rectangular prism?"}
         bg={"LIGHT"}
         diagram={<></>}
         downIcon={downIcon}
      >
         <Paragraph>
            A rectangular prism is a three-dimensional solid shape that has 6{" "}
            <TextSpanBg color={colors.RED} hoverColor={colors.DARK_BLUE}>
               faces
            </TextSpanBg>{" "}
            , 8{" "}
            <TextSpanBg color={colors.RED} hoverColor={colors.DARK_BLUE}>
               vertices
            </TextSpanBg>
            , and 12{" "}
            <TextSpanBg color={colors.RED} hoverColor={colors.DARK_BLUE}>
               edges
            </TextSpanBg>
            ?
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
