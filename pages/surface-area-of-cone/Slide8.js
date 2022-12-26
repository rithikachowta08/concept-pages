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
import Pill from "components/Pill";
import MathElement from "components/MathElement";

const surfaceCone_full = "assets/surface-area-of-cone/slide4/1.svg";
const surfaceCone_right = "assets/surface-area-of-cone/slide4/2.svg";
const surfaceCone_height = "assets/surface-area-of-cone/slide4/3.svg";
const surfaceCone_rightslide = "assets/surface-area-of-cone/slide4/4.svg";

const Slide8 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  let latex = [];
  latex.push(`= {\\pi}r\\ell `);
  latex.push(`(\\ell)`);
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      title="Curved Surface Area"
      secondaryTitle="Surface Area of Cone"
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
      bg="DARK"
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        The curved surface area of the right circular cone is given by:
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        <Pill bgColor={colors.GREEN} color={colors.WHITE}>
          Curved surface area{" "}
          <MathElement htmlString={latex[mathjaxCounter++]} /> square units
        </Pill>
      </Paragraph>

      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        Here, (r) is the&nbsp;
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          radius
        </TextSpanBg>
        &nbsp;of the circular base of a cone, and{" "}
        <MathElement htmlString={latex[mathjaxCounter++]} /> is the&nbsp;
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          slant height
        </TextSpanBg>
        &nbsp;of a cone.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide8;
