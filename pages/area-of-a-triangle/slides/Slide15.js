import dynamic from "next/dynamic";

const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/isos_ex_1.svg";
const image_2 = "assets/area-of-triangle/isos_ex_2.svg";
const image_3 = "assets/area-of-triangle/isos_ex_3.svg";

// Example of isosceles triangle
const Slide15 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         bg={"LIGHT"}
         title={"Find the area of a triangle with the given dimensions."}
         secondaryTitle={"Illustrative Example"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of an isosceles triangle with equal sides of 5cm",
                  "Diagram of an isosceles triangle highlighting two equal sides of 5cm length",
                  "Diagram of an isosceles triangle highlighting base length as 8cm",
               ]}
            />
         }
         downIcon={downIcon}
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
            <Paragraph>
               <EquationTable
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: [`Area\\ of\\ triangle`],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{1}{4}b \\sqrt{4a^2 - b^2}"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: [""],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: [
                              "\\dfrac{1}{4}\\times 8 \\sqrt{4(5)^2 - (8)^2}",
                           ],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: [""],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{1}{4}\\times 8 \\sqrt{100 - 64}"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: [""],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{1}{4}\\times 8 \\sqrt{36}"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: [""],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{8\\ \\times\\ 6}{4}"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: [""],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["12 \\ cm^2"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                  ]}
               />
            </Paragraph>
         </span>
      </TextAndDiagramSlide>
   );
};

export default Slide15;
