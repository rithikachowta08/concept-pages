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
import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const pi = "assets/diameter-and-circumference/pi.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide5 = ({ downIcon }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
            A unit square is a square with side length equal to 1 unit.
         </Paragraph>
         {/* <ModalImg
            src={unit_square}
         /> */}
      </Flex>
   );
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
         title="Facts about  π (pi)"
         diagram={
            <TransitionImage
               images={[
                  pi,
               ]}
               altTexts={[
               "Diagram showing the symbol of pi"
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
            <TextLine>
                <MathElement htmlString={latex[mathjaxCounter]} />&nbsp;
                π is irrational (not equal to the ratio of any two whole numbers), and its digits do not repeat.
            </TextLine>
            <TextLine>
                <MathElement htmlString={latex[mathjaxCounter]} />&nbsp;
                An approximation for π, such as 3.14 or         is often used for calculations.
            </TextLine>
            <TextLine>
                <MathElement htmlString={latex[mathjaxCounter]} />&nbsp;
                Pi Day is celebrated every year on 14 March. The date represents the first 3 digits
                 of this unique number. The day was recognised in 1988 by physicist Larry Shaw.
                  This day was also recognised as International Mathematics day by UNESCO in 2019.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
