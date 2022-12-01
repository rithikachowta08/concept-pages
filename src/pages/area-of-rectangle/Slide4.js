import { useState } from "react";
import { SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import bg from "assets/purple_bg.png";
import rectangle_unit_squared from "assets/area-of-rectangle/rectangle_unit_squared.svg";
import rectangle_unit_squared_numbered from "assets/area-of-rectangle/rectangle_unit_squared_numbered.svg";
import { colors } from "utils/colors";

const Slide4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Flex>
        <LeftWrap>
          <Title
            opacity={0.5}
            marginBottom="16px"
            color="white"
            small>
            Finding Area
          </Title>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            color="white"
            small>
            Counting Unit Squares
          </Title>
          <Paragraph
            marginBottom="50px"
            color="white">
            One of the ways to find area is by&nbsp;
            <TextSpanBg
              onHover={onHover}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem">
              counting the unit squares
            </TextSpanBg>
            &nbsp;that fit in the rectangle..
          </Paragraph>
          <Paragraph color="white">Area of the given rectangle = 20 unit squares</Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[rectangle_unit_squared, rectangle_unit_squared_numbered]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide4;
