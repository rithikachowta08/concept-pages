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

const rhombus_full = "assets/area-of-rhombus/slide5/1.svg";
const rhombus_lined = "assets/area-of-rhombus/slide5/2.svg";

const Slide5 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      secondaryTitle="Area of a Rhombus"
      title="What is the Area of a Rhombus?"
      diagram={
        <TransitionImage
          images={[rhombus_full, rhombus_lined]}
          altTexts={[
            "Diagram of rhombus",
            "Diagram of rhombus with bounded region highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        The area of a rhombus is the &nbsp;
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          region bounded
        </TextSpanBg>
        &nbsp;by its four sides in a two-dimensional space.&nbsp;
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide5;
