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
const circleRatio = "assets/diameter-and-circumference/circleRatio.svg";
const circumferenceRatio =
   "assets/diameter-and-circumference/circumferenceRatio.svg";
const diameterRatio = "assets/diameter-and-circumference/diameterRatio.svg";
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
   latex.push(` \\dfrac{Circumference}{Diameter} = `);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Ratio of Circumference to Diameter "
         diagram={
            <TransitionImage
               images={[circleRatio, circumferenceRatio, diameterRatio]}
               altTexts={[
                  "Diagram of a circle showing diameter (D)",
                  "Diagram of a circle with highlighted circumference",
                  "Diagram of a circle showing diameter (D)",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
               The ratio of the &nbsp;
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  color={colors.RED}
                  hoverColor={colors.PURPLE}
                  fontWeight={700}
               >
                  circumference
               </TextSpanBg>
               &nbsp; to &nbsp;
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  color={colors.RED}
                  hoverColor={colors.PURPLE}
                  fontWeight={700}
               >
                  diameter
               </TextSpanBg>
               &nbsp; for any circle is always a constant.
            </TextLine>
         </Paragraph>
         <Paragraph lineHeight={lineHeightProp}>
            <Pill
               width="fit-content"
               bgColor={colors.OCEAN_GREEN}
               color={colors.BLACK}
            >
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
               3.14159…{" "}
               {/* <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "} */}
            </Pill>
         </Paragraph>
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
               The decimal expansion of the ratio shown above is non-terminating
               and non-repeating in nature, and this constant value is
               represented by the greek letter π (pi).
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
