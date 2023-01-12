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

const rhombus_full = "assets/area-of-rhombus/slide9/1.svg";
const rhombus_rightcross = "assets/area-of-rhombus/slide9/2.svg";
const rhombus_leftcross = "assets/area-of-rhombus/slide9/3.svg";

const Slide11 = ({ downIcon }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };

  let latex = [];
  latex.push(`d{\\scriptscriptstyle{1}}`);
  latex.push(`d{\\scriptscriptstyle{2}}`);
  latex.push(
    `= \\dfrac{1}{2} \\times ({d\\scriptscriptstyle 1} \\times {d\\scriptscriptstyle 2})`
  );
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      diagram={
        <TransitionImage
          images={[rhombus_full, rhombus_rightcross, rhombus_leftcross]}
          altTexts={[
            "Diagram of rhombus with diagonals d1 and d2 shown",
            "Diagram of rhombus with diagonal d1 highlighted",
            "Diagram of rhombus with diagonal d2 highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
      bg="DARK"
      secondaryTitle="Area of a Rhombus"
      title="Using Diagonals"
    >
      <Paragraph color={colors.WHITE}>
        The area (A), of a rhombus is equal to half the product of its diagonals{" "}
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          hoverColor={colors.LAVENDER}
          color={colors.RED}
        >
          <span>
            <MathElement htmlString={latex[mathjaxCounter++]} />
          </span>
        </TextSpanBg>
        &nbsp;and&nbsp;
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          hoverColor={colors.LAVENDER}
          color={colors.RED}
        >
          <span>
            <MathElement htmlString={latex[mathjaxCounter++]} />
          </span>
        </TextSpanBg>
        .
      </Paragraph>
      <Pill color={colors.WHITE} bgColor={colors.GREEN}>
        Area of the rhombus <MathElement htmlString={latex[mathjaxCounter++]} />
      </Pill>
    </TextAndDiagramSlide>
  );
};

export default Slide11;
