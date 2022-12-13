import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const Flex = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Flex)
);
const rectangle_full = "assets/area-of-rectangle/s7_rectangle_full.svg";
const rectangle_cross = "assets/area-of-rectangle/s7_rectangle_right.svg";
const rectangle_bottom = "assets/area-of-rectangle/s7_rectangle_bottom.svg";

const Slide8 = ({ downIcon, navBar }) => {
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
    >
      <Title fontSize="2.2rem" fontWeight={700} marginBottom="16px" small>
        Find the area of a rectangle whose length and width are 3 m and 2 m,
        respectively.
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
        &nbsp;of the rectangle = 3 m
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
    </TextAndDiagramSlide>
  );
};

export default Slide8;
