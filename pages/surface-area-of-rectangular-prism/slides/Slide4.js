import Modal from "components/layout/Modal";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { ModalTriggerText, Paragraph } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const Slide4 = ({ downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.BLACK}>
            The area is measured in square units (square centimeters, square
            inches, square feet, and so on).
         </Paragraph>
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"Surface Area of Rectangular Prism"}
         downIcon={downIcon}
      >
         <Modal
            bg="LIGHT"
            color={colors.BLACK}
            title={"Square Units"}
            content={modalContent}
            isOpen={isModalOpen}
            onDismiss={onModalDismiss}
         />
         <Paragraph color={colors.WHITE}>
            The surface area of a rectangular prism can be defined as the total
            area covered by its six faces. It is measured in{" "}
            <ModalTriggerText
               color={colors.WHITE}
               onClick={() => setIsModalOpen(true)}
            >
               square units
            </ModalTriggerText>{" "}
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
