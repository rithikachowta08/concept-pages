import dynamic from "next/dynamic";

const MathElement = dynamic(() => import("components/MathElement"));
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Pill = dynamic(() => import("components/Pill"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const HyperLink = dynamic(() => import("components/text/HyperLink"));

import { Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/isos_deri_1.svg";
const image_2 = "assets/area-of-triangle/isos_deri_2.svg";

// Derivation of isosceles triangle
const Slide14 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={"Derivation"}
         secondaryTitle={"Area of an Isosceles triangle"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of an isosceles triangle showing equal sides, base and height",
                  "Diagram of an isosceles triangle highlighting height, half base, half triangle and equal sides",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Apply the{" "}
            <HyperLink
               href={"https://byjus.com/us/math/pythagorean-theorem-formulas/"}
               color={colors.DARK_BLUE}
            >
               Pythagoras Theorem
            </HyperLink>{" "}
            in the{" "}
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
               triangle
            </TextSpanBg>
            .
         </Paragraph>
         <Paragraph>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["a^2"],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["h^2 + \\Big( \\dfrac{b}{2}\\Big)^2"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: ["h^2"],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["a^2 - \\dfrac{b^2}{4}"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: ["h"],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\sqrt{a^2 - \\Big(\\dfrac{b}{2}\\Big)^2}"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
               ]}
            />
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: [`Area\\ of\\ triangle`],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{1}{2} \\times Base \\times Height"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: ["A"],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: [
                           "\\dfrac{1}{2} \\times b \\times \\sqrt{a^2 - \\Big(\\dfrac{b^2}{4}\\Big)}",
                        ],
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
         <Paragraph>
            <Pill>
               Area of an isosceles triangle =
               <MathElement htmlString={"\\dfrac{1}{4}b \\sqrt{4a^2 - b^2}"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide14;
