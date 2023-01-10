import dynamic from "next/dynamic";
import { Flex, ModalImg } from "components/StyledElements";
import { useState } from "react";

const Modal = dynamic(() => import("components/layout/Modal"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { colors } from "utils/colors";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";

const area_triangle_modal = "assets/area-of-triangle/slide_2_modal.svg";
const area_triangle = "assets/area-of-triangle/slide_2_normal.svg";
const area_triangle_shaded = "assets/area-of-triangle/slide_2_shaded.svg";

// Definition
const Slide2 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A triangle is a closed shape that has three sides, three angles, and
            three vertices.
         </Paragraph>
         <ModalImg src={area_triangle_modal} alt="Diagram of a triangle" />
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

   return (
      <TextAndDiagramSlide
         title="Definition"
         secondaryTitle={"Area of a Triangle"}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[area_triangle, area_triangle_shaded]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a triangle",
                  "Diagram of area of a triangle",
                  "Diagram of a triangle",
               ]}
            />
         }
      >
         <Modal
            isOpen={isModalOpen}
            title="What is a triangle?"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph marginBottom="70px">
            The area of a{" "}
            <ModalTriggerText onClick={onClick}>triangle</ModalTriggerText> is
            the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               region enclosed
            </TextSpanBg>{" "}
            within its three sides.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
