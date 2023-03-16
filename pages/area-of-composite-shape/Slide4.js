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
import useModal from "hooks/useModal";
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const slide_4_a = "assets/area-of-composite-shape/3 copy.svg";
const slide_4_b = "assets/area-of-composite-shape/9.svg";
const slide_4_c = "assets/area-of-composite-shape/8.svg";
const slide_4_pop_up = "assets/area-of-composite-shape/9_pop up.svg";

const Slide3 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            Square units are units of measurement for area. For example, square
            inches, square feet, square meters, etc.
         </Paragraph>
         <Paragraph>
            One square unit is equal to the area of square that has a side
            length equal to 1 unit.
         </Paragraph>
         <ModalImg src={slide_4_pop_up} alt="Diagram of a unit cube." />
      </Flex>
   );
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   const { isModalOpen, onClick, onDismiss } = useModal();
   return (
      <TextAndDiagramSlide
         title="Area of a Composite Shape"
         diagram={
            <TransitionImage
               images={[slide_4_a, slide_4_b, slide_4_c]}
               altTexts={[
                  "Diagram of a composite shape consisting of rectangle, triangle and square.",
                  "Diagram of a composite shape consisting of rectangle, triangle and square highlighting its area.",
                  "Diagram of a composite shape consisting of rectangle, triangle and square highlighting  its perimeter.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Modal
            isOpen={isModalOpen}
            title="Square units"
            content={modalContent}
            onDismiss={onDismiss}
            bg="LIGHT"
            color={colors.BLACK}
         />
         <Paragraph color="white">
            The{" "}
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               total space
            </TextSpanBg>{" "}
            enclosed within the{" "}
            <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
               perimeter
            </TextSpanBg>{" "}
            of a combined shape is called the area of a composite shape, and it
            is measured in{" "}
            <ModalTriggerText color="white" onClick={onClick}>
               square units
            </ModalTriggerText>{" "}
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
