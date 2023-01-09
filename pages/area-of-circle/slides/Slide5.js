import dynamic from "next/dynamic";

const MathElement = dynamic(() => import("components/MathElement"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_5.svg";
const image_2 = "assets/area-of-circle/slide_5_2.svg";

// Find the area of the circle with the given dimension slide
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
               altTexts={[
                  "Diagram of a circle of radius 5 in",
                  "Diagram of a circle of radius 5 in",
               ]}
            />
         }
      >
         <Paragraph>
            <TextLine>In the given figure,</TextLine>
            <TextLine>Radius (r) = 5 in</TextLine>
         </Paragraph>
         <Paragraph>
            <Flex>
               <div>Area of the circle</div>
               <Flex direction="column">
                  <TextLine>
                     <MathElement htmlString={"\\ = \\pi\\ \\times\\ "} />
                     <TextSpanBg
                        color={colors.LAVENDER}
                        onHover={() => setActiveIndex(1)}
                        onHoverOut={() => setActiveIndex(0)}
                     >
                        (radius)
                     </TextSpanBg>
                     <MathElement htmlString={"^2"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = \\pi\\times (5\\ in)^2"} />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\pi\\times 25\\ sq\\ in"}
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = 25 \\pi\\ sq\\ in"} />
                  </TextLine>
               </Flex>
            </Flex>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
