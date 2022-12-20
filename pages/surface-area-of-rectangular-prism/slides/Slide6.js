import Modal from "components/layout/Modal";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { ModalTriggerText, Paragraph } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const Slide6 = ({ downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.BLACK}>
            The lateral faces of a three-dimensional object are all the side
            faces excluding the base and the top.
         </Paragraph>
         <Paragraph color={colors.BLACK}>
            The faces numbered 1, 2, 3, and 4 are the lateral faces of the
            rectangular prism.
         </Paragraph>
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"Lateral Surface Area"}
         secondaryTitle={"Surface Area"}
         downIcon={downIcon}
      >
         <Modal
            bg="LIGHT"
            color={colors.BLACK}
            title={"Lateral Faces"}
            content={modalContent}
            isOpen={isModalOpen}
            onDismiss={onModalDismiss}
         />
         <Paragraph color={colors.WHITE}>
            The lateral surface area of a rectangular prism is the sum of the
            areas of the four{" "}
            <ModalTriggerText
               color={colors.WHITE}
               onClick={() => setIsModalOpen(true)}
            >
               lateral faces
            </ModalTriggerText>{" "}
            excluding the two bases.
         </Paragraph>
         <Paragraph>
            <Pill>Total surface area = 2(lw + wh + lh)</Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
