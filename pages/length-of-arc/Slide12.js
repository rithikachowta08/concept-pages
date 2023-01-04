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
const proof = "assets/length-of-arc-of-a-circle/proof.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide12 = ({ downIcon }) => {
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
   latex.push(` = 2\\pi r`);
   latex.push(` = \\dfrac{2\\pi r}{360°}`);
   latex.push(` = \\dfrac{θ}{360} \\times 2\\pi r`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Proof"
         secondaryTitle="Length of an Arc of a Sector"
         diagram={
            <TransitionImage
               images={[proof]}
               altTexts={["Diagram of a circle showing sector"]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
               The length of an arc where the central angle is mentioned in
               degrees is given by the following formula:
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Length of an arc"],
                           type: "text",
                        },
                        rhsLatex: {
                           value: [
                              "\\dfrac{θ}{360°} \\times 2\\pi r \\thinspace units",
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
            </TextLine>
         </Paragraph>

         <Paragraph lineHeight={lineHeightProp}>
            <TextLine color={colors.BLACK}>
               If the central angle is given in radian,
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Length of the arc"],
                           type: "text",
                        },
                        rhsLatex: {
                           value: [
                              "\\dfrac{θ}{2\\pi} \\times 2\\pi r \\thinspace units",
                           ],
                           type: "latex",
                        },
                        rhsHint: {
                           value: ["∵ 2𝝅 radians = 360°"],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: [""],
                           type: "text",
                        },
                        rhsLatex: {
                           value: ["θ \\times r \\thinspace units"],
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

export default Slide12;
