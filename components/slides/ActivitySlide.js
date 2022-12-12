import { useState } from "react";
import { Icon, Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { Title, Paragraph } from "components/text";
import QuestionAnswerImage from "components/media/QuestionAnswerImage";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
const info = "assets/info.svg";
const tent_with_triangle = "assets/tent_with_triangle.svg";

const ActivitySlide = ({
   activity,
   content,
   title,
   downIcon,
   children,
   navBar,
}) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   return (
      <SlideWrap bg="LIGHT" alignItems="center">
         <Flex>
            {children}
            <Flex>
               {navBar}
               <Title opacity={0.5} small>
                  {title}
               </Title>
               <Flex direction={isMobile ? "column-reverse" : "column"}>
                  <Flex marginBottom="40px" alignItems="center">
                     {content}
                  </Flex>
                  {activity}
               </Flex>
            </Flex>
         </Flex>
         {downIcon}
      </SlideWrap>
   );
};

export default ActivitySlide;
