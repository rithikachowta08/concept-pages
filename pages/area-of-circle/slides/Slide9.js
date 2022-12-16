import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_8.svg";
const image_2 = "assets/area-of-circle/slide_9_2.svg";

const Slide9 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"Find the area of the circle whose circumference is 10 m."}
         secondaryTitle={"Illustrative Examples"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph>
            <TextLine>In the given figure, </TextLine>
            <TextLine>
               <TextSpanBg
                  color={colors.RED}
                  hoverColor={colors.DARK_BLUE}
                  onHover={() => setActiveIndex(1)}
                  onHoverOut={() => setActiveIndex(0)}
               >
                  Circumference (C)
               </TextSpanBg>{" "}
               = 10 m
            </TextLine>
         </Paragraph>
         <Paragraph>
            <Flex>
               <TextLine>Area of the circle</TextLine>
               <Flex direction="column">
                  <TextLine>
                     <MathElement htmlString={"\\ =\\ \\frac{C^2}{4\\pi}"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ =\\ \\frac{(10)^2}{4\\pi}"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ =\\ \\frac{100}{4\\pi}"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ =\\ \\frac{25}{\\pi} m^2"} />
                  </TextLine>
               </Flex>
            </Flex>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
