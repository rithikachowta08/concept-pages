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
const volumeOfPyramid_line = "assets/volume-of-pyramids/slide13/1.svg";

const Slide13 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Volume of the hexagonal pyramid`],
        type: "text",
      },
      rhsLatex: {
        value: ["\\dfrac{\\sqrt{\\smash[b]{3}}}{2} \\times a^2 \\times h"],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
    {
      lhsLatex: {
        value: ["50\\sqrt{\\smash[b]{3}}"],
        type: "latex",
      },
      rhsLatex: {
        value: ["\\dfrac{\\sqrt{\\smash[b]{3}}}{2} \\times 5^2 \\times h"],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
    {
      lhsLatex: {
        value: ["50\\sqrt{\\smash[b]{3}}"],
        type: "latex",
      },
      rhsLatex: {
        value: ["\\dfrac{25\\sqrt{\\smash[b]{3}}}{2} \\times h"],
        type: "latex",
      },
      rhsHint: {
        value: [""],
        type: "text",
      },
    },
    ,
    {
      lhsLatex: {
        value: [`h`],
        type: "text",
      },
      rhsLatex: {
        value: ["4 ft"],
        type: "text",
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
  // let latex = [];
  // latex.push(`\\sqrt{\\smash[b]{3}}`);
  // latex.push(`\\dfrac{\\sqrt{\\smash[b]{3}}}{2} \\times a^2 \\times h`);
  // let mathjaxCounter = 0;
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );

  return (
    <TextAndDiagramSlide
      downIcon={downIcon}
      title="Determine the height of the hexagonal pyramid, whose volume is 50√3 cu ft and the length of the base is 5 ft."
      // title={
      //   <>
      //     Determine the height of the hexagonal pyramid, whose volume is 50
      //     <MathElement htmlString={latex[mathjaxCounter++]} /> cu ft and the
      //     length of the base is 5 ft.
      //   </>
      // }
      secondaryTitle="Illustrative Examples"
      diagram={
        <TransitionImage
          images={[volumeOfPyramid_line]}
          altTexts={["Diagram of a hexagonal pyramid with side length 5 ft"]}
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
    </TextAndDiagramSlide>
  );
};

export default Slide13;
