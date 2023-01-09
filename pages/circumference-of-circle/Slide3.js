import { useState } from "react";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
import { ModalTriggerText, TextLine } from "components/text";
const plain = "assets/circumference-of-circle/plain.svg";
const diameter_formula = "assets/circumference-of-circle/diameter_formula.svg";
const circumference_dark_bg =
   "assets/circumference-of-circle/circumference_dark_bg.svg";
const pi = "assets/circumference-of-circle/pi.svg";

import { colors } from "utils/colors";

const Slide3 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            For any circle, the ratio of its circumference and diameter is
            always constant. This constant is expressed using a Greek letter
            &pi; (pi).
         </Paragraph>
         <ModalImg
            src={pi}
            alt="Image of a circle with circumference, diameter and value of pi shown"
         />
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
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[plain, diameter_formula, circumference_dark_bg]}
               altTexts={[
                  "Image of a circle",
                  "Image of a circle with diameter highlighted",
                  "Image of a circle with circumference highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
         secondaryTitle="Circumference of a Circle"
         title="Formula"
      >
         <Modal
            isOpen={isModalOpen}
            title="What is &pi; (pi)?"
            content={modalContent}
            onDismiss={onDismiss}
            bg="LIGHT"
            color={colors.BLACK}
         />
         <Paragraph color="white" textAlign="left">
            It is the product of&nbsp;
            <ModalTriggerText onClick={onClick} color={colors.WHITE}>
               &pi; (pi)
            </ModalTriggerText>
            &nbsp;and the{" "}
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
            >
               diameter(d)
            </TextSpanBg>
            &nbsp;of the circle.
         </Paragraph>
         <Paragraph color="white">
            <Flex>
               <div>
                  <TextSpanBg
                     onHover={() => onHover(2)}
                     onHoverOut={onHoverOut}
                     color={colors.RED}
                     hoverColor={colors.AQUA}
                     fontWeight={700}
                  >
                     Circumference
                  </TextSpanBg>
                  &nbsp;
               </div>
               <div>
                  <TextLine>= &pi; &times; d</TextLine>
                  <TextLine>= &pi; &times; 2 &times; radius (r)</TextLine>
                  <TextLine>= 2 &pi; r</TextLine>
               </div>
            </Flex>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
