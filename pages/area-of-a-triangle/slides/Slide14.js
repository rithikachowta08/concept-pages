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

const area_triangle_snt = "assets/area-of-triangle/area_triangle_s&t.svg";
const area_triangle_snt_2 = "assets/area-of-triangle/area_triangle_sna_2.svg";
import TransitionImage from "components/media/TransitionImage";

// Two sides and included angle
const Slide14 = () => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <SlideWrap paddingLeft={"160px"} bg={"DARK"}>
         <Flex alignItems="center">
            <LeftWrap>
               <Title
                  opacity={0.5}
                  marginBottom="16px"
                  color={colors.WHITE}
                  small
               >
                  Area of a triangle
               </Title>
               <Title
                  marginBottom="70px"
                  color={colors.WHITE}
                  fontWeight={400}
                  fontSize="2.5rem"
               >
                  Two sides and the included angle
               </Title>
               <Paragraph
                  color={colors.WHITE}
                  marginBottom="50px"
                  fontSize={"2rem"}
               >
                  Given any{" "}
                  <TextSpan
                     color={colors.WHITE}
                     bgColor={colors.RED}
                     hoverBgColor={colors.DARK_BLUE}
                     fontSize={"2rem"}
                     onHover={() => setActiveIndex(1)}
                     onHoverOut={() => setActiveIndex(0)}
                  >
                     {" "}
                     two sides of the triangle and the included angle between
                     them,
                  </TextSpan>{" "}
                  its area can be calculated as:
               </Paragraph>
               <Pill
                  width="fit-content"
                  fontSize="1.8rem"
                  bgColor={colors.GREEN}
                  color={colors.WHITE}
               >
                  Area = 1/2 bc Sin A = 1/2 ca Sin B = 1/2 ab Sinc C
               </Pill>
            </LeftWrap>
            <LeftWrap>
               <TransitionImage
                  images={[area_triangle_snt, area_triangle_snt_2]}
                  activeIndex={activeIndex}
                  bottomOffset="65px"
               />
            </LeftWrap>
         </Flex>
      </SlideWrap>
   );
};

export default Slide14;
