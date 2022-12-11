import { useState } from "react";
import { SlideWrap, Flex, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
const rectangle_full = "assets/area-of-rectangle/s9_rectangle_full.svg";
const rectangle_cross = "assets/area-of-rectangle/s9_rectangle_cross_line.svg";
const rectangle_bottom = "assets/area-of-rectangle/s9_rectangle_bottom.svg";
import { colors } from "utils/colors";

const Slide10 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         diagram={
            <TransitionImage
               images={[rectangle_full, rectangle_cross, rectangle_bottom]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
         isLastSlide
      >
         <Title fontSize="2.2rem" fontWeight={700} marginBottom="16px" small>
            Find the area of a rectangle whose length and diagonal are 4 m and 5
            m, respectively.
         </Title>
         <Title fontSize="2.2rem" fontWeight={700} marginBottom="20px" small>
            Solution:
         </Title>
         <Paragraph marginBottom="16px">
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
            &nbsp;of the rectangle = 4 m
         </Paragraph>
         <Paragraph marginBottom="20px">
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
            &nbsp;of the rectangle = 5 m
         </Paragraph>
         <Paragraph>
            <Flex>
               <div>Area&nbsp;</div>
               <div>
                  = l × √ d<sup>2</sup> - l<sup>2</sup>
                  <br />= 4 × √ 5<sup>2</sup> - 4<sup>2</sup> sq m
                  <br />= 4 × 3 sq m
                  <br />= 12 sq m
               </div>
            </Flex>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide10;
