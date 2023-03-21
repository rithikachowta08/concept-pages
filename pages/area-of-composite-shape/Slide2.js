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
const slide_2_a = "assets/area-of-composite-shape/3.svg";
const slide_2_b = "assets/area-of-composite-shape/5.svg";
const slide_2_c = "assets/area-of-composite-shape/6.svg";
const slide_2_d = "assets/area-of-composite-shape/7.svg";
const slide_2_pop_up = "assets/area-of-composite-shape/4_pop up.svg";

const Slide2 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            The 2-dimensional shapes or objects in geometry are flat plane
            figures that have two dimensions such as length (l) and width (b).
         </Paragraph>
         <ModalImg
            src={slide_2_pop_up}
            alt="Diagram of a 2-dimensional figure"
         />
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
         title="What is a Composite Shape?"
         diagram={
            <TransitionImage
               images={[slide_2_a, slide_2_b, slide_2_c, slide_2_d]}
               altTexts={[
                  "Diagram of a composite shape consisting of rectangle, triangle and square.",
                  "Diagram of a composite shape consisting of rectangle, triangle and square highlighting rectangle.",
                  "Diagram of a composite shape consisting of rectangle, triangle and square highlighting square.",
                  "Diagram of a composite shape consisting of rectangle, triangle and square highlighting triangle.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="2-Dimensional"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            A composite shape is a combination of{" "}
            <ModalTriggerText onClick={onClick}>2-dimensional</ModalTriggerText>{" "}
            geometrical figures.
         </Paragraph>
         <Paragraph>
            For example, the given composite figure consists of{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               one rectangle
            </TextSpanBg>
            ,{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               one square
            </TextSpanBg>
            , and{" "}
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               one triangle
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
