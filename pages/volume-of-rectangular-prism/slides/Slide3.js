import dynamic from "next/dynamic";
import { ModalTriggerText, Paragraph } from "components/text";
import { colors } from "utils/colors";
import { useState } from "react";
import { Flex, ModalImg } from "components/StyledElements";
const Modal = dynamic(() => import("components/layout/Modal"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

const image_popup = "assets/volume-of-rectangular-prism/slide_3_popup.svg";

const Slide3 = ({ downIcon, currentPageIdx }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            A unit cube is a cube whose each side is 1 unit long.
         </Paragraph>
         <ModalImg src={image_popup} alt="Diagram of a unit cube" />
      </Flex>
   );

   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };

   return (
      <TextAndAppletSlide
         title={"Volume by Counting the Unit Cubes"}
         secondaryTitle={"Rectangular Prism"}
         bg={"DARK"}
         appletSrc={""}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      >
         <Modal
            bg="LIGHT"
            color={colors.BLACK}
            isOpen={isModalOpen}
            title="Unit Cube"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph color={colors.WHITE}>
            The volume of a rectangular prism is the total number of{" "}
            <ModalTriggerText color={colors.WHITE} onClick={onClick}>
               unit cubes
            </ModalTriggerText>{" "}
            that can fit inside it.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide3;
