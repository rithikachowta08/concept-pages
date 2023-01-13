import { useState } from "react";
import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";
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

const volumeCone_full = "assets/concept-volume-of-cone/slide8/1.svg";
const volumeCone_fill = "assets/concept-volume-of-cone/slide8/2.svg";
const volumeCone_pi = "assets/concept-volume-of-cone/slide8/3.svg";
const volumeCone_height = "assets/concept-volume-of-cone/slide8/4.svg";
const volumeCone_height_right = "assets/concept-volume-of-cone/slide8/5.svg";

const Slide8 = ({ downIcon }) => {
  let EquationLatex0 = [
    {
      lhsLatex: {
        value: [`Volume`],
        type: "text",
      },
      rhsLatex: {
        value: ["\\dfrac{1}{3}{\\pi}r^2h"],
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
        value: ["\\dfrac{1}{3}{\\pi} \\times 1cm \\times 1cm \\times 3cm"],
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
        value: ["{\\pi}cm^3"],
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
  let latex = [];
  latex.push(`(cm^3)`);
  latex.push(`(m^3)`);
  latex.push(`({\\pi}r^2)`);
  latex.push(`= \\dfrac{1}{3}`);
  latex.push(`V = \\dfrac{1}{3}{\\pi}r^2h`);

  let mathjaxCounter = 0;

  const modalContent = (
    <Flex direction="column">
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        The volume of a cone is measured in cubic units such as cubic
        centimeters &nbsp;
        <MathElement htmlString={latex[mathjaxCounter++]} />, cubic meters
        &nbsp; <MathElement htmlString={latex[mathjaxCounter++]} />, cubic feet,
        and so on.
      </Paragraph>
      <Paragraph
        marginBottom="1vh"
        fontSize="1.5rem"
        marginBottom="0px"
        marginTop="10px"
        padding="0px 15px"
      >
        Example:
      </Paragraph>
      <ModalImg
        src={volumeCone_height_right}
        alignSelf="center"
        width="400px"
        marginBottom="0px"
        alt="Diagram of a cone with radius 1 cm and height 3 cm."
      />
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        <EquationTable
          equationLatex={latexEquationContainer[latexEquationCounter++]}
        />
      </Paragraph>
    </Flex>
  );
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onDismiss = () => {
    setIsModalOpen(false);
  };
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      downIcon={downIcon}
      title="General Formula"
      secondaryTitle="Volume of a Cone"
      bg="DARK"
      diagram={
        <TransitionImage
          images={[
            volumeCone_full,
            volumeCone_fill,
            volumeCone_pi,
            volumeCone_height,
          ]}
          altTexts={[
            "Diagram of a cone",
            "Diagram of a cone representing its volume",
            "Diagram of a cone with highlighted circular base.",
            "Diagram of a cone with highlighted height",
          ]}
          activeIndex={activeIndex}
        />
      }
    >
      <Modal
        isOpen={isModalOpen}
        title="Cubic Units"
        content={modalContent}
        onDismiss={onDismiss}
        bg="LIGHT"
        color={colors.DARK_GREY}
      />
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        The volume, ‘V’, of a cone is one-third of the product of the area of
        the base &nbsp;
        <MathElement htmlString={latex[mathjaxCounter++]} />
        &nbsp;and height (h).
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        &nbsp;
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.LAVENDER}
        >
          Volume
        </TextSpanBg>
        &nbsp; <MathElement htmlString={latex[mathjaxCounter++]} /> × &nbsp;
        <TextSpanBg
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.LAVENDER}
        >
          Base area
        </TextSpanBg>
        &nbsp; × &nbsp;
        <TextSpanBg
          id={3}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.LAVENDER}
        >
          Perpendicular height
        </TextSpanBg>
        &nbsp;
      </Paragraph>
      <Paragraph color={colors.WHITE}>
        <MathElement htmlString={latex[mathjaxCounter++]} />
      </Paragraph>
      <Paragraph color={colors.WHITE}>
        The area obtained is measured in &nbsp;
        <ModalTriggerText id={2} onClick={onClick} color={colors.WHITE}>
          cubic units
        </ModalTriggerText>
        .
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide8;
