import MathElement from "components/MathElement";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import React from "react";
import { colors } from "utils/colors";

const Slide8 = ({ navBar, downIcon }) => {
   return (
      <TextAndDiagramSlide
         navBar={navBar}
         downIcon={downIcon}
         bg="DARK"
         title={"Area of a Circle Using the Circumference"}
      >
         <Paragraph color={colors.WHITE}>
            <TextSpanBg color={colors.RED} hoverColor={colors.AQUA}>
               Circumference (C)
            </TextSpanBg>{" "}
            = <MathElement htmlString={"2\\pi\\ \\times\\ "} />
            <TextSpanBg color={colors.RED} hoverColor={colors.AQUA}>
               Radius (r)
            </TextSpanBg>
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            Radius (r) = <MathElement htmlString={"\\frac{C}{2\\pi}"} />
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <Flex>
               <TextLine>Area of a circle </TextLine>
               <Flex direction="column">
                  <MathElement htmlString={"\\ =\\ \\pi r^2"} />
                  <MathElement
                     htmlString={"\\ =\\ \\pi (\\frac{C}{2\\pi})^2"}
                  />
               </Flex>
            </Flex>
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of a circle
               <MathElement htmlString={"\\ =\\ \\frac{C^2}{4\\pi }"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
