import { useState, useEffect } from "react";
import { lineHeightProp } from "utils/fontStyles";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { addTransitionToKatex } from "utils/domutils";
import { coco_applet_uri } from "utils/constants";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const MathElement = dynamic(() => import("components/MathElement"));
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const Flex = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Flex)
);
const Pill = dynamic(() => import("components/Pill"));

const Slide14 = ({ downIcon, currentPageIdx }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Volume of a prism`],
        type: "text",
      },
      rhsLatex: {
        value: ["\\text{Base area (A)} \\times \\times{Height (h)}"],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
  ];
  let EquationLatex1 = [
    {
      lhsLatex: {
        value: [`Volume of a pyramid`],
        type: "text",
      },
      rhsLatex: {
        value: [
          "\\dfrac{1}{3} \\times \\text{Base area (A)} \\times \\times{Height (h)}",
        ],
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
  latexEquationContainer.push(EquationLatex1);
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
  let latex = [];
  latex.push(`\\dfrac{1}{3}`);
  latex.push(`\\dfrac{1}{3}`);
  let mathjaxCounter = 0;
  return (
    <TextAndAppletSlide
      downIcon={downIcon}
      title="Relationship between volume of a pyramid and prism"
      bg="DARK"
      appletSrc={`${coco_applet_uri}volume-of-pyramids-formation-v3/index.html`}
      currentPageIdx={currentPageIdx}
    >
      <Paragraph color={colors.WHITE}>
        If the base area and height of a prism and pyramid are the same, we
        know:
      </Paragraph>
      <Paragraph color={colors.WHITE}>
        <EquationTable
          align="middle"
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
      <Paragraph color={colors.WHITE}>
        <EquationTable
          align="middle"
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
      <Paragraph color={colors.WHITE}>Hence;</Paragraph>
      <div>
        <Paragraph>
          <Pill>
            Volume of a pyramid =
            <MathElement htmlString={latex[mathjaxCounter++]} /> × Volume of a
            prism
          </Pill>
        </Paragraph>
      </div>
    </TextAndAppletSlide>
  );
};

export default Slide14;
