import { useState } from "react";
import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);

const rhombus_full = "assets/area-of-rhombus/slide2/1.svg";
const rhombus_arrow = "assets/area-of-rhombus/slide2/2.svg";
const rhombus_line = "assets/area-of-rhombus/slide2/3.svg";

const Slide2 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      title="What is a Rhombus?"
      diagram={
        <TransitionImage
          images={[rhombus_full, rhombus_arrow, rhombus_line]}
          altTexts={[
            "Diagram of rhombus",
            "Diagram of rhombus with parallel sides highlighted",
            "Diagram of rhombus with equal sides highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        A rhombus is a quadrilateral whose both pairs of opposite sides are
        &nbsp;
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          parallel
        </TextSpanBg>
        &nbsp;and all sides are&nbsp;
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          equal
        </TextSpanBg>
        .
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
