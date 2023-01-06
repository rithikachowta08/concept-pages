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

const surfaceCone_full = "assets/surface-area-of-cone/slide4/1.svg";
const surfaceCone_top = "assets/surface-area-of-cone/slide4/2.svg";
const surfaceCone_right = "assets/surface-area-of-cone/slide4/3.svg";
const surfaceCone_rightlslide = "assets/surface-area-of-cone/slide4/4.svg";
const surfaceCone_height = "assets/surface-area-of-cone/slide4/5.svg";

const Slide4 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      title="Parts of a Cone"
      diagram={
        <TransitionImage
          images={[
            surfaceCone_full,
            surfaceCone_top,
            surfaceCone_right,
            surfaceCone_rightlslide,
            surfaceCone_height,
          ]}
          altTexts={[
            "Diagram of a cone",
            "Diagram of a cone with highlighted apex or vertex",
            "Diagram of a cone with highlighted slant height",
            "Diagram of a cone with highlighted height",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        The pointed end of a cone is called the&nbsp;
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          vertex or apex
        </TextSpanBg>
        .
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        The radius of circular base is the&nbsp;
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          radius of the cone
        </TextSpanBg>
        .
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        The length of the cone from the vertex to any point on the circumference
        of the base is the&nbsp;
        <TextSpanBg
          id={3}
          onHover={() => onHover(3)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          slant height
        </TextSpanBg>
        .
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        The distance from the vertex of the cone to the base is the&nbsp;
        <TextSpanBg
          id={4}
          onHover={() => onHover(4)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          height of the cone
        </TextSpanBg>
        .
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide4;
