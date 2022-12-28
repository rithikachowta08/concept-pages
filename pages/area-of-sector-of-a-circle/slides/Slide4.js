import Modal from "components/layout/Modal";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/ActivitySlide";
import { Flex, ModalImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-sector-of-a-circle/3.svg";
const image_2 = "assets/area-of-sector-of-a-circle/17.svg";
const image_3 = "assets/area-of-sector-of-a-circle/16_pop up.svg";

const Slide4 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            Two points on the circumference of a circle divide the circle into
            arcs.
         </Paragraph>
         <ModalImg src={image_3} />
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"Area of a Sector of a Circle"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
            />
         }
         navBar={navBar}
         downIcon={downIcon}
      >
         <Modal
            bg="LIGHT"
            color={colors.BLACK}
            title={"Circle"}
            content={modalContent}
            isOpen={isModalOpen}
            onDismiss={onModalDismiss}
         />
         <Paragraph color={colors.WHITE}>
            The region enclosed between two radii and an{" "}
            <ModalTriggerText
               color={colors.WHITE}
               onClick={() => setIsModalOpen(true)}
            >
               arc
            </ModalTriggerText>{" "}
            of a circle is known as the{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               area of the sector
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
