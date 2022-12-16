import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_5.svg";
const image_2 = "assets/area-of-circle/slide_5_2.svg";

const Slide5 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         title={"Find the area of the circle with the given dimension."}
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
            <TextLine>In the given figure,</TextLine>
            <TextLine>Radius (r) = 5 in</TextLine>
         </Paragraph>
         <Paragraph>
            <Flex>
               <div>Area of a circle</div>
               <Flex direction="column">
                  <TextLine>
                     <MathElement htmlString={"\\ = \\pi\\ "} />
                     <TextSpanBg
                        color={colors.RED}
                        hoverColor={colors.DARK_BLUE}
                        onHover={() => setActiveIndex(1)}
                        onHoverOut={() => setActiveIndex(0)}
                     >
                        (radius)
                     </TextSpanBg>
                     <MathElement htmlString={"^2"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = \\pi\\ (5)^2"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = \\pi\\ 25"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = 25 \\pi\\ in^2"} />
                  </TextLine>
               </Flex>
            </Flex>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
