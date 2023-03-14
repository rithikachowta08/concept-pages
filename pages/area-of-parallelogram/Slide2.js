import { useState } from "react";

import { colors } from "utils/colors";
import dynamic from "next/dynamic";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Modal = dynamic(() => import("components/layout/Modal"));

const image_1 = "assets/area-of-pgm/slide2_a.svg";
const image_2 = "assets/area-of-pgm/slide2_b.svg";
const image_3 = "assets/area-of-pgm/slide2_c.svg";
const Slide2 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
            A parallelogram is a quadrilateral whose opposite sides are equal in
            length and parallel to each other.
         </Paragraph>
         <ModalImg
            src={image_3}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
            alt="Diagram of a parallelogram"
         />
      </Flex>
   );
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   return (
      <TextAndDiagramSlide
         title="What is the area of a parallelogram?"
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Diagram of a parallelogram",
                  "Diagram of a parallelogram highlighting its area",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Parallelogram"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            The area of a parallelogram is the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               region bounded
            </TextSpanBg>
            by the{" "}
            <ModalTriggerText id={2} onClick={onClick}>
               parallelogram
            </ModalTriggerText>{" "}
            in a given two-dimensional space.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
