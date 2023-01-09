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

const rectangle_full = "assets/area-of-rhombus/slide11/1.svg";
const rectangle_right = "assets/area-of-rhombus/slide11/2.svg";
const rectangle_left = "assets/area-of-rhombus/slide11/3.svg";
const rectangle_line = "assets/area-of-rhombus/slide11/4.svg";

const Slide11 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [
          `\\htmlId{3}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Area}}}\\ of\\ the\\ rhombus`,
        ],
        type: "latex",
      },
      rhsLatex: {
        value: [
          "\\dfrac{1}{2} \\times {d\\scriptscriptstyle 1} \\times {d\\scriptscriptstyle 2} ",
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
        value: ["\\dfrac{1}{2} \\times 6 \\times 4 "],
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
        value: ["12 \\space ft^2 "],
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
  latex.push(`d\\scriptscriptstyle 1`);
  latex.push(`d\\scriptscriptstyle 2`);
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      secondaryTitle="Illustrative Example"
      title="Find the area of the rhombus whose dimensions are given below."
      diagram={
        <TransitionImage
          images={[
            rectangle_full,
            rectangle_right,
            rectangle_left,
            rectangle_line,
          ]}
          altTexts={[
            "Diagram of rhombus with diagonals of length 6 ft and 4 ft shown",
            "Diagram of rhombus with diagonal of length 6 ft highlighted",
            "Diagram of rhombus with diagonal of length 4 ft highlighted",
            "Diagram of rhombus with bounded region highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          Diagonal (<MathElement htmlString={latex[mathjaxCounter++]} />)
        </TextSpanBg>
        &nbsp;= 6 ft&nbsp;
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          Diagonal (<MathElement htmlString={latex[mathjaxCounter++]} />)
        </TextSpanBg>
        &nbsp;= 4 ft&nbsp;
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

export default Slide11;
