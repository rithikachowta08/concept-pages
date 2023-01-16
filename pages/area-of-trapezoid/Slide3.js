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

const Slide3 = ({ downIcon }) => {
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
         bg="DARK"
         title="General Formula"
         secondaryTitle="Area of a Trapezoid"
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
         <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
            <TextLine>
            The area of a trapezoid is one half of the product of its&nbsp;
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
               >
                  height (h)
               </TextSpanBg>
               , and the sum of its&nbsp;
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
               >
                  parallel bases a and b
               </TextSpanBg>
               .
            </TextLine>
         </Paragraph>
         <Paragraph lineHeight={lineHeightProp}>
            <Pill
               width="fit-content"
               bgColor={colors.OCEAN_GREEN}
               color={colors.BLACK}
            >
               Area of the trapezoid{" "}
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
