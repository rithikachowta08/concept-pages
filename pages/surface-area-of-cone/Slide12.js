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

const surfaceCone_full = "assets/surface-area-of-cone/slide12/1.svg";
const surfaceCone_rightslide = "assets/surface-area-of-cone/slide12/2.svg";
const surfaceCone_right = "assets/surface-area-of-cone/slide12/3.svg";

const Slide12 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Surface area of a cone`],
        type: "text",
      },
      rhsLatex: {
        value: ["{\\pi} \\times r \\times (r + l)"],
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
        value: ["{\\pi} \\times 3 \\times (3 + 10)"],
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
        value: ["{\\pi} \\times 3\\times 13\\ sq \\ in"],
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
        value: ["39{\\pi}\\ sq\\ in"],
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
          images={[surfaceCone_full, surfaceCone_rightslide, surfaceCone_right]}
          altTexts={[
            "Diagram of a cone with radius 3 cm and height 10 cm.",
            "Diagram of a cone with slant height 10 cm highlighted",
            "Diagram of a cone with radius 3 cm highlighted",
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
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          Slant height (l)
        </TextSpanBg>
        &nbsp;= 10 in&nbsp;
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp}>
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
        >
          Radius (r)
        </TextSpanBg>
        &nbsp;= 3 in&nbsp;
      </Paragraph>
      <Paragraph>
        <EquationTable
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide12;
