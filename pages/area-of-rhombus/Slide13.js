import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";
import { lineHeightProp } from "utils/fontStyles";
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
const MathElement = dynamic(() => import("components/MathElement"));
const Pill = dynamic(() => import("components/Pill"));
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);

const rhombus_full = "assets/area-of-rhombus/slide13/1.svg";
const rhombus_left = "assets/area-of-rhombus/slide13/2.svg";
const rhombus_botton = "assets/area-of-rhombus/slide13/3.svg";
const rhombus_height = "assets/area-of-rhombus/slide13/4.svg";

const Slide13 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Area of a rhombus`],
        type: "text",
      },
      rhsLatex: {
        value: [
          "\\htmlId{2}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Base}}}\\  \\times\\ \\htmlId{3}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Height}}}",
        ],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
    {
      lhsLatex: {
        value: [""],
        type: "text",
      },
      rhsLatex: {
        value: ["a \\times h"],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
    {
      lhsLatex: {
        value: [""],
        type: "text",
      },
      rhsLatex: {
        value: ["a \\times h \\times \\sin \\theta "],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
  ];
  let latexEquationContainer = [];
  latexEquationContainer.push(EquationLatex0);
  let latexEquationCounter = 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const onHoverKatex = (e) => {
    setActiveIndex(Number(e.currentTarget.parentNode.id));
  };
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  let latex = [];
  latex.push(`\\sin \\theta = \\dfrac{h}{a}`);
  latex.push(`h = a \\times \\sin \\theta`);
  latex.push(`= a^2 \\sin \\theta`);
  let mathjaxCounter = 0;
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );
  return (
    <TextAndDiagramSlide
      secondaryTitle="Area of a Rhombus"
      title="Derivation"
      diagram={
        <TransitionImage
          images={[rhombus_full, rhombus_left, rhombus_botton, rhombus_height]}
          altTexts={[
            "Diagram of rhombus with triangle formed by its height.",
            "Diagram of rhombus with triangle formed by its height highlighted",
            "Diagram of rhombus with side length ‘a’ highlighted",
            "Diagram of rhombus with side height ‘h’ highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        Apply the ‘sine’ formula in the{" "}
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          triangle
        </TextSpanBg>
        .
      </Paragraph>
      <Paragraph margin="0px 0px 0px 14%">
        <MathElement htmlString={latex[mathjaxCounter++]} />
      </Paragraph>
      <Paragraph margin="0px 0px 0px 14%">
        <MathElement htmlString={latex[mathjaxCounter++]} />
      </Paragraph>
      <Paragraph>
        <EquationTable
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        />
      </Paragraph>
      <Paragraph>
        <Pill color={colors.WHITE} bgColor={colors.GREEN}>
          Area of a rhombus <MathElement htmlString={latex[mathjaxCounter++]} />
        </Pill>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide13;
