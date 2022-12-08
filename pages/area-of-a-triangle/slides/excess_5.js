import React, { useState } from "react";
import {
   Flex,
   LeftWrap,
   SlideWrap,
   StyledImg,
} from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
const area_triangle_ex1_1 = "assets/area-of-triangle/slide_8_normal.svg";
const area_triangle_ex1_2 = "assets/area-of-triangle/slide_8_1.svg";
const area_triangle_ex1_3 = "assets/area-of-triangle/slide_8_2.svg";
const area_triangle_ex1_4 = "assets/area-of-triangle/slide_8_3.svg";
import TransitionImage from "components/media/TransitionImage";

const Slide8 = () => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <SlideWrap paddingLeft="160px" bg={"LIGHT"}>
         <Flex alignItems="center">
            <LeftWrap>
               <Title
                  opacity={0.5}
                  marginBottom="16px"
                  color={colors.BLACK}
                  small
               >
                  Illustrative Example
               </Title>
               <Title
                  opacity={1}
                  marginBottom="16px"
                  fontSize={"2.2rem"}
                  fontWeight="600"
                  color={colors.BLACK}
               >
                  Find the area of a triangle with the given dimensions.
               </Title>
               <Paragraph
                  color={colors.BLACK}
                  fontSize="1.4rem"
                  marginBottom={"20px"}
               >
                  <TextSpan
                     fontSize={"1.4rem"}
                     color={colors.WHITE}
                     hoverColor={colors.WHITE}
                     bgColor={colors.RED}
                     hoverBgColor={colors.DARK_BLUE}
                     onHover={() => setActiveIndex(1)}
                     onHoverOut={() => setActiveIndex(0)}
                  >
                     a
                  </TextSpan>{" "}
                  = 8 cm <br />
                  <TextSpan
                     fontSize={"1.4rem"}
                     color={colors.WHITE}
                     hoverColor={colors.WHITE}
                     bgColor={colors.RED}
                     hoverBgColor={colors.DARK_BLUE}
                     onHover={() => setActiveIndex(2)}
                     onHoverOut={() => setActiveIndex(0)}
                  >
                     b
                  </TextSpan>{" "}
                  = 5 cm <br />
                  <TextSpan
                     fontSize={"1.4rem"}
                     color={colors.WHITE}
                     hoverColor={colors.WHITE}
                     bgColor={colors.RED}
                     hoverBgColor={colors.DARK_BLUE}
                     onHover={() => setActiveIndex(3)}
                     onHoverOut={() => setActiveIndex(0)}
                  >
                     c
                  </TextSpan>{" "}
                  = 5 cm
               </Paragraph>
               <Paragraph
                  color={colors.BLACK}
                  fontSize="1.4rem"
                  marginBottom={"20px"}
               >
                  Area of the triangle = √ s (s - a)(s - b)(s - c)
               </Paragraph>
               <Paragraph
                  color={colors.BLACK}
                  fontSize="1.4rem"
                  marginBottom={"20px"}
               >
                  s = a + b + c / 2 = 8cm + 5cm + 5cm / 2 = 9cm
               </Paragraph>
               <Flex>
                  <Paragraph fontSize="1.4rem">Area of triangle </Paragraph>
                  <div>
                     <Paragraph
                        color={colors.BLACK}
                        fontSize="1.4rem"
                        marginBottom={"20px"}
                     >
                        = √ 9 (9 - 8)(9 - 5)(9 - 5) cm2
                     </Paragraph>
                     <Paragraph
                        color={colors.BLACK}
                        fontSize="1.4rem"
                        marginBottom={"20px"}
                     >
                        = √9 (1)(4)(4) cm2
                     </Paragraph>
                     <Paragraph
                        color={colors.BLACK}
                        fontSize="1.4rem"
                        marginBottom={"20px"}
                     >
                        = √144 cm2
                     </Paragraph>
                     <Paragraph
                        color={colors.BLACK}
                        fontSize="1.4rem"
                        marginBottom={"20px"}
                     >
                        = 12 cm2
                     </Paragraph>
                  </div>
               </Flex>
            </LeftWrap>
            <LeftWrap>
               <TransitionImage
                  images={[
                     area_triangle_ex1_1,
                     area_triangle_ex1_2,
                     area_triangle_ex1_3,
                     area_triangle_ex1_4,
                  ]}
                  activeIndex={activeIndex}
                  bottomOffset="65px"
               />
            </LeftWrap>
         </Flex>
      </SlideWrap>
   );
};

export default Slide8;
