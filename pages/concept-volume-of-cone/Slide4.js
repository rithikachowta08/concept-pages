import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { lineHeightProp } from "utils/fontStyles";
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

const volumeCone_full = "assets/concept-volume-of-cone/slide4/1.svg";
const volumeCone_right = "assets/concept-volume-of-cone/slide4/2.svg";
const volumeCone_height = "assets/concept-volume-of-cone/slide4/3.svg";
const volumeCone_rightslide = "assets/concept-volume-of-cone/slide4/4.svg";

const Slide4 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      secondaryTitle="Introduction to a Cone"
      title="Elements of a cone"
      diagram={
        <TransitionImage
          images={[
            volumeCone_full,
            volumeCone_right,
            volumeCone_height,
            volumeCone_rightslide,
          ]}
          altTexts={[
            "Diagram of a cone",
            "Diagram of a cone with highlighted radius.",
            "Diagram of a cone with highlighted height.",
            "Diagram of a cone with highlighted slant height.",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        The three elements of a cone are its &nbsp;
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          radius (r)
        </TextSpanBg>
        ,&nbsp;
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          height(h)
        </TextSpanBg>
        , and&nbsp;
        <TextSpanBg
          id={3}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          slant height(l)
        </TextSpanBg>
        .
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide4;
