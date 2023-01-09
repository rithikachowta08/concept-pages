import dynamic from "next/dynamic";

const Modal = dynamic(() => import("components/layout/Modal"));
const Pill = dynamic(() => import("components/Pill"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Flex, ModalImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_modal =
   "assets/surface-area-of-rectangular-prism/slide_6_modal.svg";

const Slide7 = ({ currentPageIdx, downIcon }) => {
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
         <Paragraph>Example:</Paragraph>
         <ModalImg
            src={image_modal}
            alt="Diagram of a rectangular prism representing the lateral faces."
         />
         <Paragraph color={colors.BLACK}>
            The faces numbered 1, 2, 3, and 4 are the lateral faces of the
            rectangular prism.
         </Paragraph>
      </Flex>
   );

   return (
      <TextAndAppletSlide
         bg="DARK"
         title={"Lateral Surface Area"}
         secondaryTitle={"Surface Area"}
         currentPageIdx={currentPageIdx}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Lateral-surface-area_v4/index.html"
         }
         isLastSlide={true}
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
            <Pill>Lateral surface area = 2 x (l + w) x h</Pill>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide7;
