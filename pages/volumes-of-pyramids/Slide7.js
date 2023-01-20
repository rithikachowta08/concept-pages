import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";
import dynamic from "next/dynamic";
const MathElement = dynamic(() => import("components/MathElement"));
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const ModalTriggerText = dynamic(() =>
  import("components/text").then((mod) => mod.ModalTriggerText)
);
const Flex = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Pill = dynamic(() => import("components/Pill"));
const volumeOfPyramid_full = "assets/volumes-of-pyramids/slide7/1.svg";
const volumeOfPyramid_slide = "assets/volumes-of-pyramids/slide7/2.svg";
const volumeOfPyramid_botton = "assets/volumes-of-pyramids/slide7/3.svg";
const volumeOfPyramid_height = "assets/volumes-of-pyramids/slide7/4.svg";
const volumeOfPyramid_modal = "assets/volumes-of-pyramids/slide7/5.svg";

const Slide7 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [
          `\\htmlId{1}{\\htmlClass{textSpanBg slide-14 darkBg}{\\text{Volume}}}`,
        ],
        type: "latex",
      },
      rhsLatex: {
        value: [
          "\\dfrac{1}{3} \\times \\htmlId{2}{\\htmlClass{textSpanBg slide-14 darkBg}{\\text{Base\\ area\\ (A)}}} \\times \\htmlId{3}{\\htmlClass{textSpanBg slide-14 darkBg}{\\text{ Height\\ (h)}}}",
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
        value: [
          "\\dfrac{1}{3} \\times \\dfrac{1}{2} \\times b \\times H \\times h",
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
  let latexEquationCounter = 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  latex.push(`\\dfrac{1}{6} \\times b \\times H \\times h`);
  let mathjaxCounter = 0;
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );

  const modalContent = (
    <Flex direction="column">
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        A triangular pyramid has a base in the shape of a triangle.
      </Paragraph>
      <ModalImg
        src={volumeOfPyramid_modal}
        alignSelf="center"
        width="400px"
        marginBottom="0px"
        alt="Diagram of a cube representing lateral faces."
      />
    </Flex>
  );
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onDismiss = () => {
    setIsModalOpen(false);
  };
  return (
    <TextAndDiagramSlide
      downIcon={downIcon}
      title={
        <ModalTriggerText
          id={1}
          onClick={onClick}
          color={colors.WHITE}
          fontWeight={"4em"}
          fontSize={"700"}
        >
          Triangular Pyramid
        </ModalTriggerText>
      }
      secondaryTitle="Volume Formulas of Different Types of Pyramid"
      bg="DARK"
      diagram={
        <TransitionImage
          images={[
            volumeOfPyramid_full,
            volumeOfPyramid_slide,
            volumeOfPyramid_botton,
            volumeOfPyramid_height,
          ]}
          altTexts={[
            "Diagram of a net of a cube",
            "Diagram of a net of a cube representing the lateral surface area",
            "Diagram of a net of a cube representing the lateral surface area",
            "Diagram of a net of a cube representing the lateral surface area",
          ]}
          activeIndex={activeIndex}
        />
      }
    >
      <Modal
        isOpen={isModalOpen}
        title="Triangular Pyramid"
        content={modalContent}
        onDismiss={onDismiss}
        bg="LIGHT"
        color={colors.DARK_GREY}
      />
      <Paragraph color={colors.WHITE}>
        Given, the base (b) and height (H) of the triangular base, and the
        height(h) of the pyramid, the volume of the triangular pyramid is:
      </Paragraph>
      <Paragraph color={colors.WHITE}>
        <EquationTable
          align="middle"
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
      <div>
        <Paragraph color={colors.WHITE}>
          <Pill>
            Volume =
            <MathElement htmlString={latex[mathjaxCounter++]} />
          </Pill>
        </Paragraph>
      </div>
    </TextAndDiagramSlide>
  );
};

export default Slide7;
