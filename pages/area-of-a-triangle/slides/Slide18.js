import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/equi_ex_1.svg";
const image_2 = "assets/area-of-triangle/equi_ex_2.svg";

// Example of equilateral triangle
const Slide18 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={"Find the area of a triangle with the given dimensions."}
         secondaryTitle={"Illustrative Example"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => {
                  setActiveIndex(1);
               }}
               onHoverOut={() => {
                  setActiveIndex(0);
               }}
            >
               a
            </TextSpanBg>{" "}
            = 4 in
         </Paragraph>
         <Paragraph>
            <Flex>
               <TextLine>Area of the triangle </TextLine>
               <div>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\frac{\\sqrt{3}}{4} \\times a^2"}
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\frac{\\sqrt{3}}{4} \\times 4^2"}
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\frac{16 \\ \\sqrt{3}}{4}"}
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = 4 \\sqrt{3}\\ in^2"} />
                  </TextLine>
               </div>
            </Flex>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide18;
