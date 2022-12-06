import { useState } from "react";
import { SlideWrap, Flex, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import obtuse_red from "assets/obtuse_red.svg";
import obtuse_angles_blue from "assets/obtuse_angles_blue.svg";
import { colors } from "utils/colors";

const Slide6 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <SlideWrap
      bg="LIGHT"
      paddingLeft="200px">
      <Flex>
        <LeftWrap width="60%">
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
            Obtuse angled triangle
          </Title>
          <Paragraph marginBottom="70px">
            One of the angles of the triangle is{" "}
            <TextSpan
              onHover={onHover}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.DARK_BLUE}
              fontWeight={700}
              fontSize="2.2rem">
              greater than 90°
            </TextSpan>
          </Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[obtuse_red, obtuse_angles_blue]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide6;
