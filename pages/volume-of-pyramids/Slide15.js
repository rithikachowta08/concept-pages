import { useState, useEffect } from "react";
import { addTransitionToKatex } from "utils/domutils";
import dynamic from "next/dynamic";
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const volumeOfPyramid = "assets/volume-of-pyramids/slide15/1.svg";

const Slide15 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Volume of the pyramid`],
        type: "text",
      },
      rhsLatex: {
        value: ["\\dfrac{1}{3} \\times \\text{Volume of the prism}"],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
    {
      lhsLatex: {
        value: ["30"],
        type: "text",
      },
      rhsLatex: {
        value: ["\\dfrac{1}{3} \\times \\text{Volume of the prism}"],
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
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );

  return (
    <TextAndDiagramSlide
      downIcon={downIcon}
      title="Determine the volume of a triangular prism, if the volume of the triangular pyramid is 30 cu ft."
      secondaryTitle="Illustrative Examples"
      diagram={
        <TransitionImage
          images={[volumeOfPyramid]}
          altTexts={["Diagram of a triangular pyramid and prism"]}
          activeIndex={activeIndex}
        />
      }
    >
      <Paragraph>We know,</Paragraph>
      <Paragraph>
        <EquationTable
          align="middle"
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
      <Paragraph>Hence, volume of the prism = 90 cu ft.</Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide15;
