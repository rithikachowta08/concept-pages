import MathElement from "components/MathElement";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/isos_ex_1.svg";
const image_2 = "assets/area-of-triangle/isos_ex_2.svg";
const image_3 = "assets/area-of-triangle/isos_ex_3.svg";

// Example of isosceles triangle
const Slide15 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   return (
      <TextAndDiagramSlide
         bg={"LIGHT"}
         title={"Find the area of a triangle with the given dimensions."}
         secondaryTitle={"Illustrative Example"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            <TextLine>
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
               = 5 cm
            </TextLine>
            <TextLine>
               <TextSpanBg
                  color={colors.RED}
                  hoverColor={colors.DARK_BLUE}
                  onHover={() => {
                     setActiveIndex(2);
                  }}
                  onHoverOut={() => {
                     setActiveIndex(0);
                  }}
               >
                  b
               </TextSpanBg>{" "}
               = 8 cm
            </TextLine>
         </Paragraph>
         <span>
            {/* <Flex>
               <Paragraph>
                  <TextLine>Area of triangle</TextLine>
               </Paragraph>
               <Paragraph>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\frac{1}{4}b \\sqrt{4a^2 - b^2}"}
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={
                           "\\ = \\frac{1}{4}\\times 8 \\sqrt{4(5)^2 - (8)^2}"
                        }
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={
                           "\\ = \\frac{1}{4}\\times 8 \\sqrt{100 - 64}"
                        }
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\frac{1}{4}\\times 8 \\sqrt{36}"}
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\frac{8\\ \\times\\ 6}{4}"}
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = 12 \\ cm^2"} />
                  </TextLine>
               </Paragraph>
            </Flex> */}
            <Paragraph>
               <MultiLhsEquationContainer
                  equationLatex={{
                     lhsLatex: [`Area\\ of\\ triangle`],
                     rhsLatex: [
                        {
                           eqLatex: "\\dfrac{1}{4}b \\sqrt{4a^2 - b^2}",
                           hint: "",
                        },
                        {
                           eqLatex:
                              "\\dfrac{1}{4}\\times 8 \\sqrt{4(5)^2 - (8)^2}",
                           hint: "",
                        },
                        {
                           eqLatex: "\\dfrac{1}{4}\\times 8 \\sqrt{100 - 64}",
                           hint: "",
                        },
                        {
                           eqLatex: "\\dfrac{1}{4}\\times 8 \\sqrt{36}",
                           hint: "",
                        },
                        {
                           eqLatex: "\\dfrac{8\\ \\times\\ 6}{4}",
                           hint: "",
                        },
                        {
                           eqLatex: "12 \\ cm^2",
                           hint: "",
                        },
                     ],
                  }}
               />
            </Paragraph>
         </span>
      </TextAndDiagramSlide>
   );
};

export default Slide15;
