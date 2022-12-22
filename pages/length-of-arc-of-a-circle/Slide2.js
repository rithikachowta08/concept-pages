import { useState } from "react";
import { colors } from "utils/colors";
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

const MathElement = dynamic(() => 
  import("components/MathElement")
)

const circle = "assets/length-of-arc-of-a-circle/circle.svg";
const circle_highlighting_arc = "assets/length-of-arc-of-a-circle/circle_highlighting_arc.svg";
const circle_highlighting_circumference = "assets/length-of-arc-of-a-circle/circle_highlighting_circumference.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide2 = ({ downIcon, navBar }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      title="Arc of a Circle"
      diagram={
        <TransitionImage
          images={[circle, circle_highlighting_arc, circle_highlighting_circumference]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
      navBar={navBar}
    >
      <Paragraph lineHeight={lineHeightProp}>
      The&nbsp;
        <TextSpanBg
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem"
        >
          arc
        </TextSpanBg>
        &nbsp;of a circle is a part or a portion of its&nbsp;
        <TextSpanBg
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem"
        >
          circumference
        </TextSpanBg>
        .The symbol (<MathElement htmlString={'\\overgroup{}'} />) is used to represent an arc.  The arc AB is represented by <MathElement htmlString={'\\overgroup{AB}'} />.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
