import { useState } from "react";
import { colors } from "utils/colors";
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
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const rectangle_plain = "assets/area-of-rectangle/rectangle_plain.svg";
const rectangle_shaded = "assets/area-of-rectangle/rectangle_shaded.svg";
const unit_square = "assets/area-of-rectangle/unit_square.svg";

const Slide3 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
            A unit square is a square with side length equal to 1 unit.
         </Paragraph>
         <ModalImg src={unit_square} alt="Diagram of a unit rectangle" />
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
      setActiveIndex(1);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="What is the area of a Rectangle?"
         diagram={
            <TransitionImage
               images={[rectangle_plain, rectangle_shaded]}
               altTexts={[
                  "Diagram of a rectangle",
                  "Diagram of a area of a rectangle.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Unit Square"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            The area of a rectangle is the&nbsp;
            <TextSpanBg
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.PURPLE}
               fontWeight={700}
            >
               region enclosed
            </TextSpanBg>
            &nbsp;within its four sides.
         </Paragraph>
         <Paragraph>
            It is also the number of&nbsp;
            <ModalTriggerText onClick={onClick}>unit squares</ModalTriggerText>
            &nbsp;that can fit into a rectangle.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
