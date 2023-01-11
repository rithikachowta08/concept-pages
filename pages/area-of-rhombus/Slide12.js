import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Pill = dynamic(() => import("components/Pill"));
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const MathElement = dynamic(() => import("components/MathElement/index.js"));
const rhombus_full = "assets/area-of-rhombus/slide12/1.svg";
const rhombus_lb = "assets/area-of-rhombus/slide12/2.svg";

const Slide12 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };

  let latex = [];
  latex.push(`= a^2 \\times \\sin \\theta`);
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      diagram={
        <TransitionImage
          images={[rhombus_full, rhombus_lb]}
          altTexts={[
            "Diagram of rhombus with side length ‘a’ and included angle shown",
            "Diagram of rhombus with side length ‘a’ and included angle highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
      bg="DARK"
      secondaryTitle="Area of a Rhombus"
      title="Using Trigonometry"
    >
      <Paragraph color={colors.WHITE}>
        In a rhombus, if the lengths of{" "}
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          hoverColor={colors.LAVENDER}
          color={colors.RED}
        >
          two adjacent sides and the included angle
        </TextSpanBg>{" "}
        between them are given, then the area can be calculated as:
      </Paragraph>
      <Pill color={colors.WHITE} bgColor={colors.GREEN}>
        Area of a rhombus <MathElement htmlString={latex[mathjaxCounter++]} />
      </Pill>
    </TextAndDiagramSlide>
  );
};

export default Slide12;
