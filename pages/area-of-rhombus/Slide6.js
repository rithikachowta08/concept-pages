import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const Pill = dynamic(() => import("components/Pill"));
const MathElement = dynamic(() => import("components/MathElement/index.js"));
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
const rhombus_fill = "assets/area-of-rhombus/slide6/1.svg";
const rhombus_bottom = "assets/area-of-rhombus/slide6/2.svg";
const rhombus_height = "assets/area-of-rhombus/slide6/3.svg";

const Slide6 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };

  let latex = [];
  latex.push(`\\times`);
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      diagram={
        <TransitionImage
          images={[rhombus_fill, rhombus_bottom, rhombus_height]}
          altTexts={[
            "Diagram of rhombus with height and base shown",
            "Diagram of rhombus with base highlighted",
            "Diagram of rhombus with height highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
      bg="DARK"
      secondaryTitle="Area of a Rhombus"
      title="Using Base and Height"
    >
      <Paragraph color={colors.WHITE}>
        The area (A), of a rhombus is the product of its{" "}
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          hoverColor={colors.LAVENDER}
          color={colors.RED}
        >
          base (b)
        </TextSpanBg>{" "}
        and{" "}
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          hoverColor={colors.LAVENDER}
          color={colors.RED}
        >
          height (h)
        </TextSpanBg>{" "}
        .
      </Paragraph>
      <Pill color={colors.WHITE} bgColor={colors.GREEN}>
        Area of the rhombus = Base{" "}
        <MathElement htmlString={latex[mathjaxCounter++]} /> Perpendicular
        height
      </Pill>
    </TextAndDiagramSlide>
  );
};

export default Slide6;
