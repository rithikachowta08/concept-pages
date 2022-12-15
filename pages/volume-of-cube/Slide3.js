import { useState } from "react";
import { Flex, StyledImg } from "components/StyledElements";
import { Paragraph, TextSpanBg, ModalTriggerText } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import Modal from "components/layout/Modal";
const cube_red = "assets/volume-of-cube/slide2/cube-1.png";
const cube_spaces = "assets/volume-of-cube/slide2/cube-2.png";
const cube_unit = "assets/volume-of-cube/slide2/cube-3.png";
import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";

const Slide3 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh" fontSize="1.5rem">
            Unit cube is a cube whose sides are 1 unit long
         </Paragraph>
         <StyledImg
            src={cube_unit}
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
         navBar={navBar}
         title="What is the volume of a cube?"
         diagram={
            <TransitionImage
               images={[cube_red, cube_spaces]}
               activeIndex={activeIndex}
            />
         }
      >
         <Modal
            isOpen={isModalOpen}
            title="Unit Cube"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph lineHeight={lineHeightProp}>
            The volume of a cube is the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               space
            </TextSpanBg>{" "}
            occupied by it. It is also the total number of{" "}
            <ModalTriggerText id={2} onClick={onClick}>
               unit cubes
            </ModalTriggerText>{" "}
            that the cube can accomodate.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
