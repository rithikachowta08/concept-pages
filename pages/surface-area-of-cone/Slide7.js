import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { lineHeightProp } from "utils/fontStyles";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const MathElement = dynamic(() => import("components/MathElement"));
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);

const surfaceCone_full = "assets/surface-area-of-cone/slide7/1.svg";
const surfaceCone_top = "assets/surface-area-of-cone/slide7/2.svg";
const surfaceCone_bottom = "assets/surface-area-of-cone/slide7/3.svg";

const Slide7 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  let latex = [];
  latex.push(`\\large•`);
  latex.push(`\\large•`);
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      title="What is the surface area of a cone?"
      diagram={
        <TransitionImage
          images={[surfaceCone_full, surfaceCone_top, surfaceCone_bottom]}
          altTexts={[
            "Diagram of a cone",
            "Diagram of a cone with highlighted curved surface area",
            "Diagram of a cone with highlighted total surface area",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph>
        The surface area of a cone is the area covered by its circular base and
        a curved surface.
      </Paragraph>
      <Paragraph>There are two types of surface areas:</Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          <MathElement htmlString={latex[mathjaxCounter++]} /> Curved surface
          area
        </TextSpanBg>
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          <MathElement htmlString={latex[mathjaxCounter++]} /> Total surface
          area
        </TextSpanBg>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide7;
