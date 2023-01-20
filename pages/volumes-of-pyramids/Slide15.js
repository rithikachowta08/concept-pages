import { useState, useEffect } from "react";
import { colors } from "utils/colors";
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
const volumeOfPyramid_line = "assets/volumes-of-pyramids/slide8/1.svg";
const volumeOfPyramid_blue = "assets/volumes-of-pyramids/slide8/3.svg";
const volumeOfPyramid_modal1 = "assets/volumes-of-pyramids/slide8/4.svg";

const Slide10 = ({ downIcon }) => {
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
  let latex = [];
  latex.push(`\\dfrac{\\sqrt{\\smash[b]{3}}}{2} \\times a^2 \\times h`);
  let mathjaxCounter = 0;
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
          images={[
            volumeOfPyramid_line,
            volumeOfPyramid_blue,
            volumeOfPyramid_modal1,
          ]}
          altTexts={[
            "Diagram of a net of a cube",
            "Diagram of a net of a cube representing the lateral surface area",
            "Diagram of a net of a cube representing the lateral surface area",
          ]}
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

export default Slide10;
