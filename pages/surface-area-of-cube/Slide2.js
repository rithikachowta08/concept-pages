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

const surfaceCube_full = "assets/surface-area-of-cube/slide2/1.svg";
const surfaceCube_slides = "assets/surface-area-of-cube/slide2/2.svg";
const surfaceCube_dots = "assets/surface-area-of-cube/slide2/3.svg";
const surfaceCube_full_line = "assets/surface-area-of-cube/slide2/4.svg";

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
      title="What Is a Cube?"
      diagram={
        <TransitionImage
          images={[
            surfaceCube_full,
            surfaceCube_slides,
            surfaceCube_dots,
            surfaceCube_full_line,
          ]}
          altTexts={[
            "Diagram of a cube",
            "Diagram of a cube highlighting the square faces",
            "Diagram of a cube highlighting the vertices",
            "Diagram of a cube highlighting the edges",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        A cube is a three-dimensional shape that has{" "}
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          6 square faces
        </TextSpanBg>
        ,{" "}
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          8 vertices
        </TextSpanBg>
        , and{" "}
        <TextSpanBg
          id={3}
          onHover={() => onHover(3)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          12 edges
        </TextSpanBg>{" "}
        of equal length.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
