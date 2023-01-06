import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { lineHeightProp } from "utils/fontStyles";
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
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const Pill = dynamic(() => import("components/Pill"));
const MathElement = dynamic(() => import("components/MathElement"));

const surfaceCone_full = "assets/surface-area-of-cone/slide10/1.svg";
const surfaceCone_top = "assets/surface-area-of-cone/slide10/2.svg";
const surfaceCone_bottom = "assets/surface-area-of-cone/slide10/3.svg";
const surfaceCone_right = "assets/surface-area-of-cone/slide10/4.svg";
const surfaceCone_rightslide = "assets/surface-area-of-cone/slide10/5.svg";

const Slide10 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Total surface area`],
        type: "text",
      },
      rhsLatex: {
        value: ["{\\pi}rl + {\\pi}r^2"],
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
        value: ["{\\pi}r(l+r)"],
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
  latex.push(`= {\\pi}r(l+r)`);
  latex.push(`(\\ell)`);
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      title="Total Surface Area"
      secondaryTitle="Surface Area of Cone"
      diagram={
        <TransitionImage
          images={[
            surfaceCone_full,
            surfaceCone_top,
            surfaceCone_bottom,
            surfaceCone_right,
            surfaceCone_rightslide,
          ]}
          altTexts={[
            "Diagram of a cone with radius and slant height labelled",
            "Diagram of a cone with highlighted area of curved surface",
            "Diagram of a cone with highlighted area of circular base",
            "Diagram of a cone with radius highlighted",
            "Diagram of a cone with slant height highlighted",
          ]}
          activeIndex={activeIndex}
        />
      }
      bg="DARK"
      downIcon={downIcon}
    >
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        The total surface area of a cone is the sum of its&nbsp;
        <TextSpanBg
          id={1}
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.AQUA}
        >
          curved surface area
        </TextSpanBg>
        &nbsp;and its{" "}
        <TextSpanBg
          id={2}
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.AQUA}
        >
          base area
        </TextSpanBg>
        .
      </Paragraph>

      <Paragraph color={colors.WHITE}>
        <EquationTable
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>

      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        <Pill bgColor={colors.GREEN} color={colors.WHITE}>
          Total surface area{" "}
          <MathElement htmlString={latex[mathjaxCounter++]} /> square units
        </Pill>
      </Paragraph>

      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        Here, (r) is the&nbsp;
        <TextSpanBg
          id={3}
          onHover={() => onHover(3)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.AQUA}
        >
          radius
        </TextSpanBg>
        &nbsp;of the circular base of a cone, and{" "}
        <MathElement htmlString={latex[mathjaxCounter++]} /> is the&nbsp;
        <TextSpanBg
          id={4}
          onHover={() => onHover(4)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.AQUA}
        >
          slant height
        </TextSpanBg>
        &nbsp;of a cone.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide10;
