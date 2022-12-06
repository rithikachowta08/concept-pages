import React, { useState } from "react";
import { Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title } from "components/text";

const image_1 = "assets/area-of-triangle/slide_10_e.svg";
const image_2 = "assets/area-of-triangle/slide_10_i.svg";
const image_3 = "assets/area-of-triangle/slide_10_s.svg";

const Slide10 = () => {
   return (
      <SlideWrap bg={"DARK"} alignItems="center">
         <Title
            marginBottom="20px"
            fontWeight={500}
            fontSize="1.8rem"
            opacity={0.5}
            color="white"
            small
         >
            Area of Different Types of Triangles
         </Title>
         <Title
            marginBottom="50px"
            fontWeight={700}
            fontSize="2.5rem"
            color="white"
         >
            Classified based on sides
         </Title>
         <Flex justifyContent="space-between" alignItems="center" width="70%">
            <Flex direction="column">
               <StyledImg src={image_1} />
               <TextSpan color="white" fontWeight={400}>
                  Equilateral Triangle
               </TextSpan>
            </Flex>
            <Flex direction="column">
               <StyledImg src={image_2} />
               <TextSpan color="white" fontWeight={400}>
                  Isosceles Triangle
               </TextSpan>
            </Flex>
            <Flex direction="column">
               <StyledImg src={image_3} />
               <TextSpan color="white" fontWeight={400}>
                  Scalene Triangle
               </TextSpan>
            </Flex>
         </Flex>
      </SlideWrap>
   );
};

export default Slide10;
