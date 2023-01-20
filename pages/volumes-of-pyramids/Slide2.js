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

const volumeOfPyramid_full = "assets/volumes-of-pyramids/slide2/1.svg";
const volumeOfPyramid_botton = "assets/volumes-of-pyramids/slide2/2.svg";
const volumeOfPyramid_shade = "assets/volumes-of-pyramids/slide2/3.svg";

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
      title="What is a pyramid?"
      diagram={
        <TransitionImage
          images={[
            volumeOfPyramid_full,
            volumeOfPyramid_botton,
            volumeOfPyramid_shade,
          ]}
          altTexts={[
            "Diagram of a cube",
            "Diagram of a cube highlighting the square faces",
            "Diagram of a cube highlighting the vertices",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        A pyramid is a three-dimensional solid with a{" "}
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          polygonal base
        </TextSpanBg>{" "}
        and{" "}
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          triangular faces
        </TextSpanBg>
        .
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
