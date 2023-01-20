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
      title="What is the volume of a pyramid?"
      diagram={
        <TransitionImage
          images={[surfaceCube_full, surfaceCube_slides]}
          altTexts={[
            "Diagram of a cube",
            "Diagram of a cube highlighting the square faces",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        The volume of a pyramid is the{" "}
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          space occupied
        </TextSpanBg>{" "}
        within the boundaries of the pyramid in a three-dimensional space.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide4;
