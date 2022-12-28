import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { addTransitionToKatex } from "utils/domutils";
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
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const rhombus_full = "assets/area-of-rhombus/slide8/1.svg";
const rhombus_bottom = "assets/area-of-rhombus/slide8/2.svg";
const rhombus_height = "assets/area-of-rhombus/slide8/3.svg";
const rhombus_lines = "assets/area-of-rhombus/slide8/4.svg";

const Slide8 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [
          `\\htmlId{3}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Area}}}\\ of\\ the\\ rhombus`,
        ],
        type: "latex",
      },
      rhsLatex: {
        value: ["Base (b) × Height (h)"],
        type: "text",
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
        value: ["5 \\  in \\times 4 \\  in"],
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
        value: ["20 \\  in^2"],
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
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
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
          images={[rhombus_full, rhombus_bottom, rhombus_height, rhombus_lines]}
          altTexts={[
            "Diagram of rhombus with height 4 in  and base 5 in shown",
            "Diagram of rhombus with base 5 in highlighted",
            "Diagram of rhombus with height 4 in highlighted",
            "Diagram of rhombus with bounded region highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        &nbsp;
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          Base (b)
        </TextSpanBg>
        &nbsp;= 5 in&nbsp;
      </Paragraph>
      <Paragraph>
        &nbsp;
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          Height (h)
        </TextSpanBg>
        &nbsp;= 4 in&nbsp;
      </Paragraph>
      <Paragraph>
        <EquationTable
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide8;
