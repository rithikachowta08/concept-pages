import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const surfaceCone_full = "assets/surface-area-of-cone/slide6/1.svg";
const surfaceCone_fill = "assets/surface-area-of-cone/slide6/2.svg";

const Slide6 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      diagram={
        <TransitionImage
          images={[surfaceCone_full, surfaceCone_fill]}
          altTexts={[
            "Diagram of a cone.",
            "Diagram of a cone representing volume.",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
      bg="DARK"
      title="Volume of a Cone"
    >
      <Paragraph color={colors.WHITE}>
        The volume of a cone is the &nbsp;
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          hoverColor={colors.AQUA}
          color={colors.RED}
        >
          space occupied
        </TextSpanBg>{" "}
        &nbsp;within the boundaries of the cone in a three- dimensional space.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide6;
