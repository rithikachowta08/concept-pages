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

// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const slide6_a = "assets/area-of-trapezoid/slide6_a.svg";
const slide6_b = "assets/area-of-trapezoid/slide6_b.svg";
const slide6_c = "assets/area-of-trapezoid/slide6_c.svg";
const slide6_d = "assets/area-of-trapezoid/slide6_d.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide6 = ({ downIcon }) => {
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
   latex.push(` = \\dfrac{1}{2} \\times h \\times (a+b)`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Find the area of the trapezoid with the given dimensions."
         secondaryTitle="Illustrative Example"
         diagram={
            <TransitionImage
               images={[slide6_a, slide6_b, slide6_c, slide6_d]}
               altTexts={[
                  "Diagram of a trapezoid of height 5 in",
                  "Diagram of a trapezoid with one of the base length 10 in",
                  "Diagram of a trapezoid with one of the base length 6 in",
                  "Diagram of a trapezoid with height 5 in",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Base (a)
               </TextSpanBg>{" "}
               = 10 in
            </TextLine>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Base (b)
               </TextSpanBg>{" "}
               = 6 in
            </TextLine>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Height (h)
               </TextSpanBg>{" "}
               = 5 in
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Area of the trapezoid "],
                           type: "text",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{1}{2} \\times h \\times (a+b)"],
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
                           value: ["\\dfrac{1}{2} \\times 5 \\times (10+6)\\ in"],
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
                           value: ["\\dfrac{1}{2} \\times 5 \\times 16\\ in"],
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
                           value: ["40 sq in"],
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
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
