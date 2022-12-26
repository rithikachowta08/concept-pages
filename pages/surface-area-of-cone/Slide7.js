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
const ContentList = dynamic(() =>
  import("components/text").then((mod) => mod.ContentList)
);

const surfaceCone_full = "assets/surface-area-of-cone/slide4/1.svg";
const surfaceCone_right = "assets/surface-area-of-cone/slide4/2.svg";
const surfaceCone_height = "assets/surface-area-of-cone/slide4/3.svg";
const surfaceCone_rightslide = "assets/surface-area-of-cone/slide4/4.svg";

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
      title="What is the surface area of a cone?"
      diagram={
        <TransitionImage
          images={[
            surfaceCone_full,
            surfaceCone_right,
            surfaceCone_height,
            surfaceCone_rightslide,
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
        The surface area of a cone is the area covered by its circular base and
        a curved surface.
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        There are two types of surface areas:
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          <ContentList items={["Curved surface area"]} />
        </TextSpanBg>
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          <ContentList items={["Total surface area"]} />
        </TextSpanBg>
        .
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide4;
