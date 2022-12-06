import {
   Flex,
   LeftWrap,
   SlideWrap,
   StyledImg,
} from "components/StyledElements";
import React, { useEffect, useState } from "react";

import Modal from "components/layout/Modal";
import { colors } from "utils/colors";
import { Paragraph, TextSpan, Title } from "components/text";

const area_triangle_modal = "assets/area-of-triangle/slide_2_modal.svg";
const area_triangle = "assets/area-of-triangle/slide_2_normal.svg";
const area_triangle_shaded = "assets/area-of-triangle/slide_2_shaded.svg";
import TransitionImage from "components/media/TransitionImage";

const Slide2 = () => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="50px" fontSize="1.5rem">
            A triangle is a closed shape that has three sides, three angles, and
            three vertices.
         </Paragraph>
         <StyledImg src={area_triangle_modal} alignSelf="center" />
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

   useEffect(() => {
      console.log(activeIndex);
   }, [activeIndex]);

   return (
      <SlideWrap bg={"LIGHT"} paddingLeft="200px">
         <Modal
            isOpen={isModalOpen}
            title="What is a triangle?"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Flex alignItems="center">
            <LeftWrap>
               <Title opacity={0.5} marginBottom="16px" small>
                  Area of a triangle
               </Title>
               <Paragraph marginBottom="70px">Definition</Paragraph>
               <Paragraph marginBottom="70px">
                  The area of a{" "}
                  <TextSpan
                     color={colors.BLACK}
                     textDecoration={"underline"}
                     fontSize="2.5rem"
                     cursor={"pointer"}
                     fontWeight={700}
                     marginBottom="16px"
                     onClick={onClick}
                  >
                     triangle
                  </TextSpan>{" "}
                  is the{" "}
                  <TextSpan
                     color={colors.WHITE}
                     fontSize="2.5rem"
                     fontWeight={400}
                     marginBottom="16px"
                     onHover={() => setActiveIndex(1)}
                     onHoverOut={() => setActiveIndex(0)}
                     bgColor={colors.RED}
                     hoverBgColor={colors.DARK_BLUE}
                  >
                     region enclosed
                  </TextSpan>{" "}
                  within its three sides.
               </Paragraph>
            </LeftWrap>
            <LeftWrap>
               <TransitionImage
                  images={[area_triangle, area_triangle_shaded]}
                  activeIndex={activeIndex}
                  bottomOffset="65px"
               />
            </LeftWrap>
         </Flex>
      </SlideWrap>
   );
};

export default Slide2;
