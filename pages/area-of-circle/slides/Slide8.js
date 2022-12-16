import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_8.svg";
const image_2 = "assets/area-of-circle/slide_8_2.svg";
const image_3 = "assets/area-of-circle/slide_6_r.svg";

const Slide8 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         navBar={navBar}
         downIcon={downIcon}
         bg="DARK"
         title={"Area of a Circle Using the Circumference"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Circumference (C)
            </TextSpanBg>{" "}
            = <MathElement htmlString={"2\\pi\\ \\times\\ "} />
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
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
