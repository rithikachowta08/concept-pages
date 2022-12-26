import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { lineHeightProp } from "utils/fontStyles";
import HyperLink from "components/text/HyperLink";
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

const surfaceCone_full = "assets/surface-area-of-cone/slide3/1.svg";
const surfaceCone_bottom = "assets/surface-area-of-cone/slide3/2.svg";
const surfaceCone_top = "assets/surface-area-of-cone/slide3/3.svg";

const Slide2 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      secondaryTitle="What is a cone?"
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
        A cone is a &nbsp;
        <HyperLink
          href={"https://byjus.com/us/math/area-of-parallelogram/"}
          color={colors.DARK_BLUE}
        >
          three-dimensional
        </HyperLink>{" "}
        &nbsp;shape that narrows smoothly from a &nbsp;
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          circular base
        </TextSpanBg>
        &nbsp;to a point called the&nbsp;
        <TextSpanBg
          id={2}
          onHover={onHover}
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
