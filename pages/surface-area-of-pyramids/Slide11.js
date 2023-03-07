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
const Pill = dynamic(() => import("components/Pill"));
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const example_pyramid = "assets/surface-area-of-pyramids/example_pyramid.svg";
const example_sh = "assets/surface-area-of-pyramids/example_sh.svg";
const example_sl = "assets/surface-area-of-pyramids/example_sl.svg";
const example_perimeter =
   "assets/surface-area-of-pyramids/example_perimeter.svg";
const example_base_area =
   "assets/surface-area-of-pyramids/example_base_area.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide11 = ({ downIcon }) => {
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
   latex.push(`= 4 \\times 4`);
   latex.push(`= 4^2`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         secondaryTitle={"Total Surface Area"}
         diagram={
            <TransitionImage
               images={[
                  example_pyramid,
                  example_sh,
                  example_sl,
                  example_perimeter,
                  example_base_area,
               ]}
               altTexts={[
                  "Diagram of a pyramid with slant height 8 cm and side length 4 cm",
                  "Diagram of a pyramid with highlighted slant height 8 cm",
                  "Diagram of a pyramid with highlighted side length 4 cm",
                  "Diagram of a pyramid with highlighted base perimeter",
                  "Diagram of a pyramid with highlighted base area",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               Determine the surface area of a square pyramid whose each side
               has a length of 4 in and whose slant height is 8 in.
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>Solution:</TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Slant height (l)
               </TextSpanBg>
               = 8 in
            </TextLine>
            <TextLine color={colors.BLACK}>
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Side length
               </TextSpanBg>
               = 4 in
            </TextLine>
            <TextLine color={colors.BLACK}>
               <TextSpanBg
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Perimeter (P)
               </TextSpanBg>
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
               = 16 in
            </TextLine>
            <TextLine color={colors.BLACK}>
               <TextSpanBg
                  onHover={() => onHover(4)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Base area (B)
               </TextSpanBg>
               <MathElement htmlString={latex[mathjaxCounter]}></MathElement> =
               16 sq in
            </TextLine>
            <TextLine color={colors.BLACK}>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Surface area of a square pyramid"],
                           type: "text",
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
                     {
                        lhsLatex: {
                           value: [""],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: [
                              "\\dfrac{1}{2} \\times 16 \\:in \\times 8 \\:in + 16 \\:sq \\:in",
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
                           value: ["64 sq in + 16 sq in = 80 sq in"],
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

export default Slide11;
