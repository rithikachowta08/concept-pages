import { useState } from "react";
import { SlideWrap, Flex } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import { colors } from "utils/colors";
import bg from "assets/purple_bg.png";
import triangle_acute from "assets/triangle_acute.svg";
import triangle_acute_yellow from "assets/triangle_acute_yellow.svg";
import triangle_obtuse from "assets/triangle_obtuse.svg";
import triangle_obtuse_yellow from "assets/triangle_obtuse_yellow.svg";
import triangle_right from "assets/triangle_right.svg";
import triangle_right_yellow from "assets/triangle_right_yellow.svg";

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
      alignItems="center">
      <Title
        marginBottom="20px"
        opacity={0.5}
        color="white"
        small>
        Types of triangles
      </Title>
      <Paragraph
        textAlign="center"
        maxWidth="60%"
        color="white"
        marginBottom="40px">
        Triangles can be classified into three types with respect to their{" "}
        <TextSpan
          color="white"
          hoverColor={colors.YELLOW}
          onHover={onHover}
          onHoverOut={onHoverOut}
          textDecoration="underline"
          fontSize="2.2rem"
          fontWeight={700}>
          interior angles
        </TextSpan>{" "}
        which are
      </Paragraph>
      <Flex>
        <TransitionImage
          marginRight="50px"
          images={[triangle_acute, triangle_acute_yellow]}
          activeIndex={activeIndex}
        />
        <TransitionImage
          marginRight="120px"
          images={[triangle_obtuse, triangle_obtuse_yellow]}
          activeIndex={activeIndex}
        />
        <TransitionImage
          images={[triangle_right, triangle_right_yellow]}
          activeIndex={activeIndex}
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide4;
