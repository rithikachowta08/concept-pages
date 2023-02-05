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

const circle = "assets/length-of-arc-of-a-circle/circle.svg";
const circle_highlighting_arc =
   "assets/length-of-arc-of-a-circle/circle_highlighting_arc.svg";
const circle_highlighting_circumference =
   "assets/length-of-arc-of-a-circle/circle_highlighting_circumference.svg";
const circle_modal = "assets/length-of-arc-of-a-circle/circle_modal.svg";

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
            alt="Diagram of a circle showing radius"
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
         title="Arc of a Circle"
         diagram={
            <TransitionImage
               images={[
                  circle,
                  circle_highlighting_arc,
                  circle_highlighting_circumference,
               ]}
               altTexts={[
                  "Diagram of a circle",
                  "Diagram of a circle highlighting arc",
                  "Diagram of a circle highlighting circumference",
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
         <Paragraph>
            The&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               arc
            </TextSpanBg>
            &nbsp;of a&nbsp;
            <ModalTriggerText onClick={onClick}>circle</ModalTriggerText>&nbsp;
            is a part or a portion of its&nbsp;
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               circumference
            </TextSpanBg>
            .
         </Paragraph>
         <Paragraph>
            The symbol (<MathElement htmlString={"\\overgroup{}"} />) is used to
            represent an arc. The arc AB is represented by{" "}
            <MathElement htmlString={"\\overgroup{AB}"} />.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
