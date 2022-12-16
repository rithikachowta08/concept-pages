import { Flex, LeftWrap, ModalImg, StyledImg } from "components/StyledElements";
import React, { useEffect, useState } from "react";

import Modal from "components/layout/Modal";
import { colors } from "utils/colors";
import {
   ModalTriggerText,
   Paragraph,
   TextSpan,
   TextSpanBg,
} from "components/text";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes } from "utils/fontStyles";

const area_triangle_modal = "assets/area-of-triangle/slide_2_modal.svg";
const area_triangle = "assets/area-of-triangle/slide_2_normal.svg";
const area_triangle_shaded = "assets/area-of-triangle/slide_2_shaded.svg";

// Definition
const Slide2 = ({ downIcon, navBar }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A triangle is a closed shape that has three sides, three angles, and
            three vertices.
         </Paragraph>
         <ModalImg src={area_triangle_modal} />
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
         secondaryTitle={"Area of a triangle"}
         downIcon={downIcon}
         navBar={navBar}
         diagram={
            <TransitionImage
               images={[area_triangle, area_triangle_shaded]}
               activeIndex={activeIndex}
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
               color={colors.RED}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
               hoverColor={colors.DARK_BLUE}
            >
               region enclosed
            </TextSpanBg>{" "}
            within its three sides.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
