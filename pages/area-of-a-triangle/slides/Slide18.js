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

import { Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/equi_ex_1.svg";
const image_2 = "assets/area-of-triangle/equi_ex_2.svg";

// Example of equilateral triangle
const Slide18 = ({ downIcon }) => {
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
               altTexts={[
                  "Diagram of an equilateral triangle of side length 4in",
                  "Diagram of an equilateral triangle highlighting side length of 4 in",
               ]}
            />
         }
         downIcon={downIcon}
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
            <EquationTable
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area\\ of\\ triangle"],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{\\sqrt{3}}{4} \\times a^2"],
                        type: "latex",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{\\sqrt{3}}{4} \\times 4^2"],
                        type: "latex",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{16 \\ \\sqrt{3}}{4}"],
                        type: "latex",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["4 \\sqrt{3}\\ in^2"],
                        type: "latex",
                     },
                  },
               ]}
            />
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide18;
