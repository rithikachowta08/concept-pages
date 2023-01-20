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
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);

const volumeOfPyramid_full = "assets/volumes-of-pyramids/slide6/1.svg";
const volumeOfPyramid_slide = "assets/volumes-of-pyramids/slide6/2.svg";
const volumeOfPyramid_botton = "assets/volumes-of-pyramids/slide6/3.svg";
const volumeOfPyramid_height = "assets/volumes-of-pyramids/slide6/4.svg";

const Slide6 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [
          `\\htmlId{1}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Volume}}}`,
        ],
        type: "latex",
      },
      rhsLatex: {
        value: [
          "\\dfrac{1}{3} \\times \\htmlId{2}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Area\\ of\\ the\\ base}}} \\times \\htmlId{3}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Height}}}",
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
        value: ["\\dfrac{1}{3} \\times 10\\ sq\\ in \\times 9\\ in"],
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
        value: ["30\\ cu\\ in"],
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
      secondaryTitle="Illustrative Examples"
      title="Determine the volume of the pyramid, whose base area is 10 sq in and height is 9 in."
      diagram={
        <TransitionImage
          images={[
            volumeOfPyramid_full,
            volumeOfPyramid_slide,
            volumeOfPyramid_botton,
            volumeOfPyramid_height,
          ]}
          altTexts={[
            "Diagram of volumeOfPyramid with side length 4 in and included angle 30 degree shown",
            "Diagram of volumeOfPyramid with side length 4 in highlighted",
            "Diagram of volumeOfPyramid with included angle 30 degree highlighted",
            "Diagram of volumeOfPyramid with bounded region highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp}>
        The area of the base is 10 sq in, and the height of the pyramid is 9 in.
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

export default Slide6;
