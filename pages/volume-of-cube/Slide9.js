import {
   SlideWrap,
   Flex,
   LeftWrap,
   StyledImg,
   Icon,
} from "components/StyledElements";
import { TextSpanBg, Title, Paragraph } from "components/text";
// import inequality_slide from "assets/inequality_slide.svg";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import TransitionImage from "components/media/TransitionImage";
// const  cube_red = "assets/volume-of-cube/slide9/cube_1.svg";
const cube_diagonal = "assets/volume-of-cube/slide9/cube_2.svg";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";
import { fetchData } from "utils/networking";
import Modal from "components/layout/Modal";
const info = "assets/info.svg";
import ImageWithYesNo, { ANSWER_TYPES } from "components/media/ImageWithYesNo";
import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
const boat_correct_answer = "assets/boat_correct_answer.svg";
const boat_wrong_answer = "assets/boat_wrong_answer.svg";
const boat = "assets/boat.svg";

const Slide9 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   //   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
            The dimensions of the given Rubik&apos;scube
         </Paragraph>
         <StyledImg
            src={cube_diagonal}
            alignSelf="center"
            marginBottom="50px"
         />
      </Flex>
   );

   return (
      <TextAndAppletSlide
         title="Area using Unit Squares"
         appletSrc="./applets/triangle.html"
         downIcon={downIcon}
      >
         <Paragraph>
            Move the sliders to create a rectangle occupying an area of 54 unit
            squares.
         </Paragraph>
      </TextAndAppletSlide>
   );
};
export default Slide9;
