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

const surfaceCube_full = "assets/surface-area-of-cube/slide3/1.svg";
const surfaceCube_slides = "assets/surface-area-of-cube/slide3/2.svg";

const Slide3 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      title="What is the Surface Area of a Cube?"
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
      bg="DARK"
      downIcon={downIcon}
    >
      <Paragraph color={colors.WHITE}>
        The surface area of a cube is defined as the total area covered by the{" "}
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.LAVENDER}
        >
          six square faces
        </TextSpanBg>{" "}
        of the cube. It is measured in square units.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide3;
