import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";
import dynamic from "next/dynamic";
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
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

const Slide11 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Volume of the rectangular pyramid`],
        type: "text",
      },
      rhsLatex: {
        value: ["\\dfrac{1}{3} \\times l \\times w \\times h"],
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
        value: ["\\dfrac{1}{3} \\times 4\\ ft\\times 3\\ ft \\times 8\\ ft"],
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
        value: ["\\dfrac{1}{3} \\times 96\\ cu\\ ft"],
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
        value: ["32 cu ft"],
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
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  let latex = [];
  latex.push(`\\dfrac{1}{3} \\times l \\times w \\times h`);
  let mathjaxCounter = 0;
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );
  return (
    <TextAndDiagramSlide
      downIcon={downIcon}
      title="Determine the volume of the given rectangular pyramid."
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
      <Paragraph>
        The{" "}
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          length
        </TextSpanBg>{" "}
        (l) and{" "}
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          width
        </TextSpanBg>{" "}
        (w) of the base of the pyramid is 4 ft and 3 ft, respectively, and the{" "}
        <TextSpanBg
          id={3}
          onHover={() => onHover(3)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_LAVENDER}
        >
          height
        </TextSpanBg>{" "}
        (h) of the pyramid is 8 ft.
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

export default Slide11;
