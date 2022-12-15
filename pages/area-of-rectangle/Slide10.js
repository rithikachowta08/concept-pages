import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
// import { TextLine } from "components/text";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
  import("components/text").then((mod) => mod.TextLine)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const Flex = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Flex)
);
const rectangle_full = "assets/area-of-rectangle/s9_rectangle_full.svg";
const rectangle_cross = "assets/area-of-rectangle/s9_rectangle_cross_line.svg";
const rectangle_bottom = "assets/area-of-rectangle/s9_rectangle_bottom.svg";
import { lineHeightProp, fontWeights } from "utils/fontStyles";

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
          images={[rectangle_full, rectangle_bottom, rectangle_cross]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
      navBar={navBar}
      isLastSlide
    >
      <Paragraph>
        <TextLine fontWeight={fontWeights.BOLD}>
          Find the area of a rectangle whose length and diagonal are 4 m and 5
          m, respectively.
        </TextLine>
      </Paragraph>
      <div>
        <Paragraph lineHeight={lineHeightProp}>
          <TextLine fontWeight={fontWeights.BOLD}>
            Solution:
          </TextLine>
          <TextLine color={colors.BLACK}>
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
          </TextLine>
          <TextLine color={colors.BLACK}>
            <TextSpanBg
              onHover={() => onHover(2)}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem"
            >
              Diagonal
            </TextSpanBg>
            &nbsp;of the rectangle = 5 m
          </TextLine>
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
      </div>
    </TextAndDiagramSlide>
  );
};

export default Slide10;
