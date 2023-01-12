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

const Pill = dynamic(() =>
   import("components/Pill")
);

const MathElement = dynamic(() =>
   import("components/MathElement/index.js")
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const IllustrativeExample = "assets/length-of-arc-of-a-circle/IllustrativeExample.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide9 = ({ downIcon }) => {
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
         title="Illustrative Example"
         secondaryTitle="Length of an Arc of a Sector"
         diagram={
            <TransitionImage
               images={[IllustrativeExample]}
               altTexts={[
                "Diagram of a sector of a circle with central angle equal to 60 degrees and radius 4 cm"
                ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
            Find the length (l) of the arc of the given circle.
            </TextLine>
            
        </Paragraph>

        <Paragraph >
            <TextLine color={colors.BLACK}>
            Solution:
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["θ"],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["60°"],
                        type: "text",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: ["r"],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["4 in"],
                        type: "text",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  }
               ]}
            />
            </TextLine>
        </Paragraph>

        <Paragraph >
            <TextLine color={colors.BLACK}>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Length of the arc (l)"],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{θ}{360°} \\times 2 \\times \\pi \\times r"],
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
                        value: ["\\dfrac{60°}{360°} \\times 2 \\times \\pi \\times 4"],
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
                       value: ["\\dfrac{1}{3}\\times \\pi \\times 4"],
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
                       value: ["\\dfrac{4}{3}\\times \\pi \\thinspace in"],
                       type: "latex",
                    },
                    rhsHint: {
                       value: [""],
                       type: "text",
                    },
                 }
               ]}
            />
            </TextLine>
        </Paragraph>
            
         
      </TextAndDiagramSlide>
   );
};

export default Slide9;
