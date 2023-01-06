import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { lineHeightProp } from "utils/fontStyles";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const HyperLink = dynamic(() => import("components/text/HyperLink"));
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);

const surfaceCone_full = "assets/surface-area-of-cone/slide2/1.svg";
const surfaceCone_bottom = "assets/surface-area-of-cone/slide2/2.svg";
const surfaceCone_top = "assets/surface-area-of-cone/slide2/3.svg";

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
      title="What is a Cone?"
      diagram={
        <TransitionImage
          images={[surfaceCone_full, surfaceCone_bottom, surfaceCone_top]}
          altTexts={[
            "Diagram of a cone",
            "Diagram of a cone with highlighted circular base",
            "Diagram of a cone with highlighted apex or vertex",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        A cone is a&nbsp;
        <HyperLink
          href={"https://byjus.com/us/math/concept-three-dimensional-shapes/"}
          color={colors.DARK_BLUE}
        >
          three-dimensional
        </HyperLink>
        &nbsp;shape that narrows smoothly from a&nbsp;
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          circular base
        </TextSpanBg>
        &nbsp;to a point called the&nbsp;
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          apex
        </TextSpanBg>
        &nbsp;or vertex.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
