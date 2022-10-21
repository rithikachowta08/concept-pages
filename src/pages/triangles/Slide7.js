import { useState } from "react";
import { SlideWrap, Flex, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import bg from "assets/white_bg.png";
import right_red from "assets/right_red.svg";
import right_angles_blue from "assets/right_angles_blue.svg";
import hypotenuse from "assets/hypotenuse.svg";
import { colors } from "utils/colors";

const Slide7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  const onHoverHypotenuse = (e) => {
    setActiveIndex(2);
  };
  const onHoverOutHypotenuse = (e) => {
    setActiveIndex(0);
  };
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Flex>
        <LeftWrap width="50%">
          <Title
            opacity={0.5}
            marginBottom="16px"
            small>
            Types of triangles
          </Title>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            small>
            Right angled triangle
          </Title>
          <Paragraph marginBottom="20px">
            A triangle in which one of the angles is{" "}
            <TextSpan
              onHover={onHover}
              onHoverOut={onHoverOut}
              textDecoration="underline"
              hoverColor={colors.DARK_BLUE}
              fontWeight={700}
              fontSize="2.2rem">
              90 degrees
            </TextSpan>
            .
          </Paragraph>
          <Paragraph marginBottom="70px">
            <TextSpan
              onHover={onHoverHypotenuse}
              onHoverOut={onHoverOutHypotenuse}
              textDecoration="underline"
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem">
              Hypotenuse
            </TextSpan>{" "}
            is the side opposite to the right angle and is the longest side.
          </Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[right_red, right_angles_blue, hypotenuse]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide7;
