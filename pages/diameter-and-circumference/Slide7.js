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
const MathElement = dynamic(() => import("components/MathElement/index.js"));
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const circleExample = "assets/diameter-and-circumference/circleExample.svg";
const diameterExample = "assets/diameter-and-circumference/diameterExample.svg";
const circumferenceExample =
   "assets/diameter-and-circumference/circumferenceExample.svg";
// const unit_square = "assets/area-of-rectangle/unit_square.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide7 = ({ downIcon }) => {
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
   latex.push(`\\large•`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         diagram={
            <TransitionImage
               images={[circleExample, diameterExample, circumferenceExample]}
               altTexts={[
                  "Diagram of a circle showing diameter (D)",
                  "Diagram of a circle with highlighted diameter (D)",
                  "Diagram of a circle with highlighted circumference",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         {/* <Modal
            isOpen={isModalOpen}
            title="Unit Square"
            content={modalContent}
            onDismiss={onDismiss}
         /> */}
         <Paragraph lineHeight={lineHeightProp}>
            The diameter of a circle is 6 in. Find the ratio of the
            circumference to diameter of the circle.
         </Paragraph>

         <Paragraph>Solution:</Paragraph>

         <Paragraph>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Diameter (D)
               </TextSpanBg>
               &nbsp; = 6 in
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Circumference
               </TextSpanBg>
               &nbsp; = 18.8 in
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Ratio"],
                           type: "text",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{Circumference}{Diameter} "],
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
                           value: ["\\dfrac{18.8}{6} "],
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
                           value: ["3.14159… ≃ π"],
                           type: "latex",
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

export default Slide7;
