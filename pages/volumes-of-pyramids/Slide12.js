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
const surfaceCube_line = "assets/surface-area-of-cube/slide8/1.svg";
const surfaceCube_modal = "assets/surface-area-of-cube/slide8/2.svg";
const surfaceCube_blue = "assets/surface-area-of-cube/slide8/3.svg";
const surfaceCube_modal1 = "assets/surface-area-of-cube/slide8/4.svg";

const Slide12 = ({ downIcon }) => {
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
        value: [
          "\\dfrac{1}{3} \\times \\dfrac{3\\sqrt{\\smash[b]{3}}}{2} \\times a^2 \\times h",
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
  latex.push(`\\dfrac{\\sqrt{\\smash[b]{3}}}{2} \\times a^2 \\times h`);
  let mathjaxCounter = 0;
  useEffect(
    addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
    []
  );

  const modalContent = (
    <Flex direction="column">
      <Paragraph marginBottom="1vh" fontSize="1.5rem" color={colors.WHITE}>
        A hexagonal pyramid has a base in the shape of a hexagon.
      </Paragraph>
      <ModalImg
        src={surfaceCube_modal}
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
      title="Hexagonal Pyramid"
      secondaryTitle="Volume Formulas of Different Types of Pyramid"
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
      <Modal
        isOpen={isModalOpen}
        title="Hexagonal Pyramid"
        content={modalContent}
        onDismiss={onDismiss}
        bg="DARK"
        color={colors.WHITE}
      />
      <Paragraph>
        Given, the side of the hexagonal base is “a”, and the height of the{" "}
        <ModalTriggerText id={1} onClick={onClick} fontWeight={"none"}>
          hexagonal pyramid
        </ModalTriggerText>{" "}
        is “h”. The formula for the volume is:
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

export default Slide12;
