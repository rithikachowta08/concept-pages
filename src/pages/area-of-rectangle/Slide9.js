import { useState } from "react";
import { SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import bg from "assets/white_bg.png";
import rectangle_full from "assets/area-of-rectangle/s9_rectangle_full.png";
import rectangle_cross from "assets/area-of-rectangle/s9_rectangle_cross_line.png";
import rectangle_bottom from "assets/area-of-rectangle/s9_rectangle_bottom.png";
import { colors } from "utils/colors";

const Slide2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  const lsOfTxt = ["= 4 × √ 52 - 42 sq m", "= 4 × 3 sq m", "= 12 sq m"];
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Flex>
        <LeftWrap>
          <Title
            marginBottom="16px"
            fontSize="2.5rem"
            fontWeight={700}
            small>
            Illustrative Example
          </Title>
          <Title
            fontSize="2.2rem"
            fontWeight={700}
            marginBottom="16px"
            small>
            Find the area of a rectangle whose length and diagonal are 4 m and 5 m, respectively.
          </Title>
          <Title
            fontSize="2.2rem"
            fontWeight={700}
            marginBottom="20px"
            small>
            Solution:
          </Title>
          <Paragraph marginBottom="16px">
            <TextSpanBg
              onHover={() => onHover(1)}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem">
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
              fontSize="2.2rem">
              Width
            </TextSpanBg>
            &nbsp;of the rectangle = 5 m
          </Paragraph>
          <Paragraph>Area = l × √ d2 - l2</Paragraph>
          {lsOfTxt.map((itm, indx) => (
            <Paragraph
              padding="0px 0px 0px 7px"
              key={"rectangle" + indx}>
              &emsp;&emsp; {itm}
            </Paragraph>
          ))}
        </LeftWrap>
        <TransitionImage
          images={[rectangle_full, rectangle_cross, rectangle_bottom]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide2;
