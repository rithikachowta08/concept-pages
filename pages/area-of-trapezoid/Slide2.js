import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { Flex, ModalImg } from "components/StyledElements";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const MathElement = dynamic(() => import("components/MathElement"));

const circle = "assets/diameter-and-circumference/circle.svg";
const circle_highlighting_circumference =
   "assets/diameter-and-circumference/circumference.svg";
const circle_modal = "assets/diameter-and-circumference/circle_pop_up.svg";

const Slide2 = ({ downIcon, navBar }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A trapezoid is a quadrilateral with exactly one pair of parallel
            sides.
         </Paragraph>
         <ModalImg
            src={circle_modal}
            alt="Diagram of a circle showing centre (O) and radius (r)"
         />
      </Flex>
   );
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   return (
      <TextAndDiagramSlide
         title="What is the area of a trapezoid?"
         diagram={
            <TransitionImage
               images={[circle, circle_highlighting_circumference]}
               altTexts={[
                  "Diagram of a circle with diameter",
                  "Diagram of a circle with highlighted circumference",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Modal
            isOpen={isModalOpen}
            title="What is a trapezoid?"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            The area of a&nbsp;
            <ModalTriggerText onClick={onClick}>trapezoid</ModalTriggerText>
            &nbsp;is the&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               region enclosed
            </TextSpanBg>
            &nbsp;within its four sides.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
