import Modal from "components/layout/Modal";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, StyledImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_2.svg";
const image_2 = "assets/area-of-circle/slide_2_shaded.svg";
const image_modal = "assets/area-of-circle/slide_2_modal.svg";

// What is the area of a circle slide
const Slide2 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A circle is a path traced by a moving point, which is always
            equidistant from a fixed point. The fixed point is the center "O"
            and the fixed distance is the radius "r".
         </Paragraph>
         <StyledImg src={image_modal} width="400px" />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"What is the area of a circle?"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
            />
         }
      >
         <Modal
            title={"What is a circle?"}
            content={modalContent}
            isOpen={isModalOpen}
            onDismiss={onModalDismiss}
         />
         <Paragraph>
            The area of a circle is the{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               region occupied
            </TextSpanBg>{" "}
            by the{" "}
            <ModalTriggerText onClick={() => setIsModalOpen(true)}>
               circle
            </ModalTriggerText>{" "}
            in a plane.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
