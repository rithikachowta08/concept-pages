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

const Slide11 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Surface area of a cone`],
        type: "text",
      },
      rhsLatex: {
        value: ["{\\pi}r(r+\\ell)"],
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
        value: ["{\\pi} \\times 3\\:(3+10)\\ cm^2"],
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
        value: ["{\\pi} \\times 3\\times 13\\ cm^2"],
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
        value: ["39{\\pi}\\ cm^2"],
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
  let latex = [];
  latex.push(`(\\ell)`);
  let mathjaxCounter = 0;
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );
  return (
    <TextAndDiagramSlide
      secondaryTitle="Total Surface Area"
      title="Illustrative Example"
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
    >
      <Paragraph>
        Determine the surface area of the cone if the radius is 3 cm and the
        slant height is 10 cm.
      </Paragraph>
      <Paragraph>Solution:</Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          Slant height <MathElement htmlString={latex[mathjaxCounter++]} />
        </TextSpanBg>
        &nbsp;= 10 cm&nbsp;
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          Radius (r)
        </TextSpanBg>
        &nbsp;= 3 cm &nbsp;
      </Paragraph>
      <Paragraph>
        <EquationTable
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide11;
