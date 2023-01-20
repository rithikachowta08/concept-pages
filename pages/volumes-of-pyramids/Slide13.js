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
const surfaceCube_line = "assets/surface-area-of-cube/slide8/1.svg";
const surfaceCube_blue = "assets/surface-area-of-cube/slide8/3.svg";
const surfaceCube_modal1 = "assets/surface-area-of-cube/slide8/4.svg";

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
  let latex = [];
  latex.push(`\\sqrt{\\smash[b]{3}}`);
  latex.push(`\\dfrac{\\sqrt{\\smash[b]{3}}}{2} \\times a^2 \\times h`);
  let mathjaxCounter = 0;
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
          images={[surfaceCube_line, surfaceCube_blue, surfaceCube_modal1]}
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
    </TextAndDiagramSlide>
  );
};

export default Slide13;
