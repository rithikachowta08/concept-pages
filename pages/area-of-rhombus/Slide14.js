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
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);

const rhombus_full = "assets/area-of-rhombus/slide14/1.svg";
const rhombus_angles = "assets/area-of-rhombus/slide14/2.svg";
const rhombus_degree = "assets/area-of-rhombus/slide14/3.svg";
const rhombus_lines = "assets/area-of-rhombus/slide14/4.svg";

const Slide14 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [
          `\\htmlId{3}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Area\\ of\\ the\\ rhombus}}}`,
        ],
        type: "latex",
      },
      rhsLatex: {
        value: ["a^2 \\times \\sin \\theta "],
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
        value: ["4^2 \\times \\sin 30\\degree"],
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
        value: ["16 \\times \\dfrac{1}{2}"],
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
        value: ["8 \\ sq\\ in"],
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
  latex.push(`\\theta`);
  latex.push(`= 30\\degree`);
  let mathjaxCounter = 0;
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );
  return (
    <TextAndDiagramSlide
      secondaryTitle="Illustrative Example"
      title="Find the area of the rhombus whose dimensions are given below."
      diagram={
        <TransitionImage
          images={[rhombus_full, rhombus_angles, rhombus_degree, rhombus_lines]}
          altTexts={[
            "Diagram of rhombus with side length 4 in and included angle 30 degree shown",
            "Diagram of rhombus with side length 4 in highlighted",
            "Diagram of rhombus with included angle 30 degree highlighted",
            "Diagram of rhombus with bounded region highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
      isLastSlide
    >
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          Side (a)
        </TextSpanBg>
        &nbsp;= 4 in&nbsp;
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          Angle (<MathElement htmlString={latex[mathjaxCounter++]} />)
        </TextSpanBg>
        &nbsp;
        <MathElement htmlString={latex[mathjaxCounter++]} />
        &nbsp;
      </Paragraph>
      <Paragraph>
        <EquationTable
          align="middle"
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide14;
