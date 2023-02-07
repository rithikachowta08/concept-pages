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
const volumeOfPyramid_full = "assets/volume-of-pyramids/slide11/1.svg";
const volumeOfPyramid_right = "assets/volume-of-pyramids/slide11/2.svg";
const volumeOfPyramid_left = "assets/volume-of-pyramids/slide11/3.svg";
const volumeOfPyramid_height = "assets/volume-of-pyramids/slide11/4.svg";

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
            volumeOfPyramid_full,
            volumeOfPyramid_right,
            volumeOfPyramid_left,
            volumeOfPyramid_height,
          ]}
          altTexts={[
            "Diagram of a rectangular pyramid with height 8 ft, length 4 ft and width 3 ft.",
            "Diagram of a rectangular pyramid with highlighted length 4 ft.",
            "Diagram of a rectangular pyramid with highlighted width 3 ft",
            "Diagram of a rectangular pyramid with highlighted height 8 ft",
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
