import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const bullet = "assets/bullet.svg";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);

const Pill = dynamic(() => import("components/Pill"));

const MathElement = dynamic(() => import("components/MathElement/index.js"));
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const formula_degree_circle =
   "assets/length-of-arc-of-a-circle/formula_degree_circle.svg";
const formula_degree_arc =
   "assets/length-of-arc-of-a-circle/formula_degree_arc.svg";
const formula_degree_angle =
   "assets/length-of-arc-of-a-circle/formula_degree_angle.svg";
const formula_degree_radius =
   "assets/length-of-arc-of-a-circle/formula_degree_radius.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide11 = ({ downIcon }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(` = 3 \\times h`);
   latex.push(` = \\dfrac{5 + 5 + 6}{2}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Find the area of the trapezoid with the given dimensions."
         secondaryTitle="Illustrative Example"
         diagram={
            <TransitionImage
               images={[
                  formula_degree_circle,
                  formula_degree_arc,
                  formula_degree_angle,
                  formula_degree_radius,
               ]}
               altTexts={[
                  "Diagram of a circle showing the sector",
                  "Diagram of a circle highlighting the length of the sector",
                  "Diagram of a circle highlighting the measure of the angle of the sector",
                  "Diagram of a circle highlighting the radius",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp} >
            <TextLine>
            Step 3: Equate <MathElement htmlString={`A\\scriptscriptstyle 1`}></MathElement>{" "}
             and <MathElement htmlString={`A\\scriptscriptstyle 2`}></MathElement> to find the height of the trapezoid.
            </TextLine>
            <TextLine>
            <MathElement htmlString={`A\\scriptscriptstyle 1`}></MathElement>{" "}={" "}<MathElement htmlString={`A\\scriptscriptstyle 2`}></MathElement>
            </TextLine>
            <TextLine>
            12{" "}<MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            </TextLine>
            <TextLine>
            h{" "}={" "}4{" "}in
            </TextLine>
        </Paragraph>
        
        <Paragraph >
            <TextLine>
            Step 4: Apply the trapezoid area formula.
            </TextLine>
            <TextLine >
            <TextLine >
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area of the trapezoid "],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{1}{2} \\times (a+b) \\times h"],
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
                       value: ["\\dfrac{1}{2} \\times (14+8) \\times 4"],
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
                       type: "text",
                    },
                    rhsLatex: {
                       value: ["\\dfrac{1}{2} \\times 22 \\times 4"],
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
                       type: "text",
                    },
                    rhsLatex: {
                       value: ["44 sq in"],
                       type: "text",
                    },
                    rhsHint: {
                       value: [""],
                       type: "text",
                    },
                 },
               ]}
            />
            </TextLine>
            </TextLine>
        </Paragraph>


         
      </TextAndDiagramSlide>
   );
};

export default Slide11;
