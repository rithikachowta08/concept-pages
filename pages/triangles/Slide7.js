import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const SlideWrap = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.SlideWrap)
);
const Flex = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Flex)
);
const LeftWrap = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.LeftWrap)
);

const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpan = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpan)
);

const bg = "assets/white_bg.png";
const right_red = "assets/right_red.svg";
const right_angles_blue = "assets/right_angles_blue.svg";
const hypotenuse = "assets/hypotenuse.svg";

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
    <SlideWrap bg={bg} paddingLeft="200px">
      <Flex>
        <LeftWrap width="50%">
          <Title opacity={0.5} marginBottom="16px" small>
            Types of triangles
          </Title>
          <Title fontSize="2.5rem" fontWeight={700} marginBottom="16px" small>
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
              fontSize="2.2rem"
            >
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
              fontSize="2.2rem"
            >
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
