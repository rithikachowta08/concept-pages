import { useState } from "react";
import { Flex, StyledImg } from "components/StyledElements";
import { Paragraph, TextSpanBg, ModalTriggerText } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import Modal from "components/layout/Modal";
const square_1 = "assets/area-of-square/slide3_1.svg";
const square_2 = "assets/area-of-square/slide3_2.svg";
const square_3 = "assets/area-of-square/slide3_3.svg";
import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";

const Slide3 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh" fontSize="1.5rem">
         A unit square is a square that has a side length equal to 1 unit.

         </Paragraph>
         <StyledImg
            src={square_3}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
         />
      </Flex>
   );
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };

   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         title="What is the area of a square?"
         diagram={
            <TransitionImage
               images={[square_1,square_2]}
               activeIndex={activeIndex}
            />
         }
      >
         <Modal
            isOpen={isModalOpen}
            title="Unit Square"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph lineHeight={lineHeightProp}>
         The area of a square is the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               region enclosed
            </TextSpanBg>{" "}
            within its four sides. 
            </Paragraph>
            <Paragraph>
            It is also the number of{" "}

            <ModalTriggerText id={2} onClick={onClick}>
            unit squares
            </ModalTriggerText>{" "}
            that can fit inside a square.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
