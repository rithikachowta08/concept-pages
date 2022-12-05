import { useState } from "react";
import { SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import rectangle_full from "assets/area-of-rectangle/s7_rectangle_full.svg";
import rectangle_cross from "assets/area-of-rectangle/s7_rectangle_right.svg";
import rectangle_bottom from "assets/area-of-rectangle/s7_rectangle_bottom.svg";
import { colors } from "utils/colors";

const Slide8 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <SlideWrap
      bg="LIGHT"
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
            Find the area of a rectangle whose length and width are 3 m and 2 m, respectively.
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
            &nbsp;of the rectangle = 3 m
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
            &nbsp;of the rectangle = 2 m
          </Paragraph>
          <Paragraph>
            <Flex>
              <div>Area of the rectangle</div>
              <div>
                &nbsp;=&nbsp;Length&nbsp;x&nbsp;Width
                <br />
                &nbsp;= 3 m x 2 m = 6 sq m
              </div>
            </Flex>
          </Paragraph>
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

export default Slide8;
