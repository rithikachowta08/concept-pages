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
import { lineHeightProp } from "utils/fontStyles";

const Slide2 = ({ downIcon, navBar }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A circle is a path traced by a moving point in a plane which is
            always equidistant from a fixed point. The fixed point is the center
            (O), and the fixed distance is the radius (r).
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
         title="Circumference of a Circle"
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
            title="What is a circle?"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph lineHeight={lineHeightProp}>
            The&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
            >
               circumference
            </TextSpanBg>
            &nbsp;of a&nbsp;
            <ModalTriggerText onClick={onClick}>circle</ModalTriggerText>&nbsp;
            is the measure of the length of its boundary.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
