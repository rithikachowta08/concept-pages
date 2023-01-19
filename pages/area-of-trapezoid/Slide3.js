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
const slide3_a = "assets/area-of-trapezoid/slide3_a.svg";
const slide3_b = "assets/area-of-trapezoid/slide3_b.svg";
const slide3_c = "assets/area-of-trapezoid/slide3_c.svg";
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
                  slide3_a,
                  slide3_b,
                  slide3_c,
               ]}
               altTexts={[
                  "Diagram of a trapezoid with given parallel bases and height h",
                  "Diagram of a trapezoid with highlighted height",
                  "Diagram of a trapezoid with two parallel bases highlighted",
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
                  onHover={() => onHover(2)}
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
