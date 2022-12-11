import { useState } from "react";
import { Flex, StyledImg } from "components/StyledElements";
import { Title, Paragraph, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
const rectangle_plain = "assets/area-of-rectangle/rectangle_plain.svg";
const rectangle_length = "assets/area-of-rectangle/rectangle_length.svg";
const rectangle_width = "assets/area-of-rectangle/rectangle_width.svg";
const rectangle_square_units =
   "assets/area-of-rectangle/rectangle_square_units.svg";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import Modal from "components/layout/Modal";
import { colors } from "utils/colors";

const Slide8 = ({ downIcon, navBar }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="40px" fontSize="1.22rem">
            The area of a rectangle is measured in square units (square
            centimeters, square inches, square feet, and so on).
         </Paragraph>
         <Title color="white" fontSize="1.22rem">
            Example :
         </Title>
         <StyledImg
            src={rectangle_square_units}
            width="-webkit-fill-available"
         />
         <Paragraph color="white" fontSize="1.22rem">
            <Flex>
               <div>Area&nbsp;</div>
               <div>
                  = 4 cm &times; 3 cm
                  <br />= 12 sq cm
               </div>
            </Flex>
         </Paragraph>
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
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[rectangle_plain, rectangle_length, rectangle_width]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
         bg="DARK"
         secondaryTitle="Area of Rectangle"
         title="General Formula"
      >
         <Modal
            isOpen={isModalOpen}
            title="Square Units"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph marginBottom="50px" color="white">
            Area of a rectangle =
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
            >
               Length
            </TextSpanBg>
            &times;
            {/* ×&nbsp; */}
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
            >
               Width
            </TextSpanBg>
         </Paragraph>
         <Paragraph color="white">
            The area obtained is measured in&nbsp;
            <b style={{ cursor: "pointer" }} onClick={onClick}>
               <u>square units</u>
            </b>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
