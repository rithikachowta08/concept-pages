import MathElement from "components/MathElement";
import { MathEquationWrapper } from "components/MathElement/MathEquationWrapper";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_6.svg";
const image_2 = "assets/area-of-circle/slide_6_r.svg";
const image_3 = "assets/area-of-circle/slide_6_d.svg";

const Slide6 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={"Area of a Circle Using the Diameter"}
         navBar={navBar}
         downIcon={downIcon}
         bg="DARK"
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
               Radius (r)
            </TextSpanBg>
            =
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Diameter (d)
            </TextSpanBg>
            <MathElement htmlString={`/ 2`} />
            {/* <MathEquationWrapper>
               {`\\frac{${(
                  <TextSpanBg color={colors.RED}>Diameter (2)</TextSpanBg>
               )}}{2}`}
            </MathEquationWrapper> */}
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <Flex>
               <TextLine>Area of a Circle</TextLine>
               <Flex direction="column">
                  <TextLine>
                     <MathElement htmlString={"\\ = \\pi r^2"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = \\pi ( \\frac{d}{2} )^2"} />
                  </TextLine>
               </Flex>
            </Flex>
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of a Circle ={" "}
               <MathElement htmlString={"\\frac{\\pi d^2}{4}"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
