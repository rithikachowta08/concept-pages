import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";
import dynamic from "next/dynamic";
const MathElement = dynamic(() => import("components/MathElement"));
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
const volumeOfPyramid_full = "assets/volume-of-pyramids/slide9/1.svg";
const volumeOfPyramid_slide = "assets/volume-of-pyramids/slide9/2.svg";
const volumeOfPyramid_bottom = "assets/volume-of-pyramids/slide9/3.svg";
const volumeOfPyramid_height = "assets/volume-of-pyramids/slide9/4.svg";
const volumeOfPyramid_modal = "assets/volume-of-pyramids/slide9/5.svg";

const Slide9 = ({ downIcon }) => {
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
          "\\dfrac{1}{3} \\times \\htmlId{2}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Base\\ area\\ (A)}}} \\times \\htmlId{3}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{Height\\ (h)}}}",
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
        value: ["\\dfrac{1}{3} \\times a^2 \\times h"],
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
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  let latex = [];
  latex.push(`\\dfrac{1}{3} \\times a^2 \\times h`);
  let mathjaxCounter = 0;
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );

  const modalContent = (
    <Flex direction="column">
      <Paragraph marginBottom="1vh" fontSize="1.5rem" color={colors.WHITE}>
        A square pyramid has a base in the shape of a square.
      </Paragraph>
      <ModalImg
        src={volumeOfPyramid_modal}
        alignSelf="center"
        width="400px"
        marginBottom="0px"
        alt="Diagram of a square pyramid with highlighted base"
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
      title="Square Pyramid"
      secondaryTitle="Volume Formulas of Different Types of Pyramid"
      diagram={
        <TransitionImage
          images={[
            volumeOfPyramid_full,
            volumeOfPyramid_slide,
            volumeOfPyramid_bottom,
            volumeOfPyramid_height,
          ]}
          altTexts={[
            "Diagram of a square pyramid",
            "Diagram of a square pyramid representing its volume.",
            "Diagram of a square pyramid with highlighted base area",
            "Diagram of a square pyramid with highlighted height",
          ]}
          activeIndex={activeIndex}
        />
      }
    >
      <Modal
        isOpen={isModalOpen}
        title="Square Pyramid"
        content={modalContent}
        onDismiss={onDismiss}
        bg="DARK"
        color={colors.WHITE}
      />
      <Paragraph>
        Given, the side of the square base is “a”, and the height of the pyramid
        is “h”. The volume of the{" "}
        <ModalTriggerText id={1} onClick={onClick} fontWeight={"none"}>
          square pyramid
        </ModalTriggerText>{" "}
        is:
      </Paragraph>
      <Paragraph>
        <EquationTable
          align="middle"
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        ></EquationTable>
      </Paragraph>
      <div>
        <Paragraph>
          <Pill darkbg={false}>
            Volume =
            <MathElement htmlString={latex[mathjaxCounter++]} />
          </Pill>
        </Paragraph>
      </div>
    </TextAndDiagramSlide>
  );
};

export default Slide9;
