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
const MathElement = dynamic(() =>
   import("components/MathElement/index.js")
);
const Pill = dynamic(() => import("components/Pill"));
import { lineHeightProp, fontWeights } from "utils/fontStyles";
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const tsa_derivation = "assets/surface-area-of-pyramids/tsa_derivation.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide10 = ({ downIcon }) => {
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
  latex.push(`= \\dfrac{1}{2} \\times P \\times l \\thinspace + \\thinspace B \\thinspace square \\thinspace units`);
  let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Derivation"
         secondaryTitle={"Total Surface Area"}
         diagram={
            <TransitionImage
               images={[
                  tsa_derivation,
               ]}
               altTexts={[
               "Please add the multiplication sign in the formula"
               ]}

               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
            The total surface area of a regular pyramid is the sum of its lateral surface area and its base area.
            </TextLine>
        </Paragraph>

         <Paragraph >
         <TextLine color={colors.BLACK}>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Total surface area"],
                           type: "text",
                        },
                        rhsLatex: {
                           value: ["Lateral surface area + Base area"],
                           type: "text",
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
                           value: ["\\dfrac{1}{2} \\times P \\times l + B"],
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

export default Slide10;
