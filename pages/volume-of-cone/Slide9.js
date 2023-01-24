import { useState, useEffect } from "react";
import { colors } from "utils/colors";
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

const volumeCone_full = "assets/concept-volume-of-cone/slide9/1.svg";
const volumeCone_right = "assets/concept-volume-of-cone/slide9/2.svg";
const volumeCone_height = "assets/concept-volume-of-cone/slide9/3.svg";

const Slide9 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`V`],
        type: "text",
      },
      rhsLatex: {
        value: [
          "\\dfrac{1}{3} \\times \\dfrac{22}{7} \\times 9 \\times 9 \\times 14\\ cu\\ in",
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
        value: ["22 \\times 3 \\times 9 \\times 2\\ cu\\ in"],
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
        value: ["1188\\ cu\\ in"],
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
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  let latex = [];
  latex.push(
    `= \\dfrac{1}{3}\\ \\times\\ {\\pi}\\ \\times\\ r^2\\ \\times\\ h`
  );
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      secondaryTitle="Illustrative Example"
      title="Find the volume of a cone whose dimensions are given."
      diagram={
        <TransitionImage
          images={[volumeCone_full, volumeCone_right, volumeCone_height]}
          altTexts={[
            "Diagram of a cone",
            "Diagram of a cone with radius 9 cm",
            "Diagram of a cone with height 14 cm",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph>
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          Radius (r)
        </TextSpanBg>
        &nbsp;= 9 in&nbsp;
      </Paragraph>
      <Paragraph>
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          Height (h)
        </TextSpanBg>
        &nbsp;= 14 in&nbsp;
      </Paragraph>
      <Paragraph>
        Volume of the cone &nbsp;
        <MathElement htmlString={latex[mathjaxCounter++]} />
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

export default Slide9;
