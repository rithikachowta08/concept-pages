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
const Pill = dynamic(() => import("components/Pill"));
const surfaceCube_line = "assets/surface-area-of-cube/slide8/1.svg";
const surfaceCube_modal = "assets/surface-area-of-cube/slide8/2.svg";
const surfaceCube_blue = "assets/surface-area-of-cube/slide8/3.svg";
const surfaceCube_modal1 = "assets/surface-area-of-cube/slide8/4.svg";

const Slide7 = ({ downIcon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  let latex = [];
  latex.push(`s^2`);
  latex.push(`\\ \\times\\ s^2`);
  let mathjaxCounter = 0;

  const modalContent = (
    <Flex direction="column">
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        The lateral faces of a three-dimensional object are all the side faces
        excluding the base and the top.
      </Paragraph>
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        Example:
      </Paragraph>
      <ModalImg
        src={surfaceCube_modal}
        alignSelf="center"
        width="400px"
        marginBottom="0px"
        alt="Diagram of a cube representing lateral faces."
      />
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        The faces numbered 1, 2, 3, and 4 are the lateral faces of the cube.
      </Paragraph>
    </Flex>
  );
  const modalContent1 = (
    <Flex direction="column">
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        Let s be the edge of the cube.
      </Paragraph>
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        Area of one face = Area of a square =
        <MathElement htmlString={latex[mathjaxCounter++]} />
      </Paragraph>
      <ModalImg
        src={surfaceCube_modal1}
        alignSelf="center"
        width="400px"
        marginBottom="0px"
        alt="Diagram of a cube representing the surface area of one face."
      />
    </Flex>
  );
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onDismiss = () => {
    setIsModalOpen(false);
  };
  const onClick1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };
  const onDismiss1 = () => {
    setIsModalOpen1(false);
  };
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      downIcon={downIcon}
      title="Lateral Surface Area"
      secondaryTitle="Surface Area"
      bg="DARK"
      diagram={
        <TransitionImage
          images={[surfaceCube_line, surfaceCube_blue]}
          altTexts={[
            "Diagram of a net of a cube",
            "Diagram of a net of a cube representing the lateral surface area",
          ]}
          activeIndex={activeIndex}
        />
      }
    >
      <Modal
        isOpen={isModalOpen}
        title="Lateral Faces"
        content={modalContent}
        onDismiss={onDismiss}
        bg="LIGHT"
        color={colors.DARK_GREY}
      />
      <Modal
        isOpen={isModalOpen1}
        title="Surface Area of One Face"
        content={modalContent1}
        onDismiss={onDismiss1}
        bg="LIGHT"
        color={colors.DARK_GREY}
      />
      <Paragraph color={colors.WHITE}>
        The lateral surface area of a cube is the area covered by the four{" "}
        <ModalTriggerText
          id={2}
          onClick={onClick}
          color={colors.WHITE}
          fontWeight={"none"}
        >
          lateral faces
        </ModalTriggerText>
        , excluding the base and top faces.
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        <Flex direction="row">
          <Paragraph color={colors.WHITE}>
            <TextSpanBg
              id={1}
              onHover={() => onHover(1)}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.LAVENDER}
            >
              Lateral surface area
            </TextSpanBg>
          </Paragraph>
          <Paragraph color={colors.WHITE}>=</Paragraph>
          <Paragraph color={colors.WHITE}>
            4 ×{" "}
            <ModalTriggerText
              id={3}
              onClick={onClick1}
              color={colors.WHITE}
              fontWeight={"none"}
            >
              Surface area of one face
            </ModalTriggerText>
          </Paragraph>
        </Flex>
      </Paragraph>
      <div>
        <Paragraph color={colors.WHITE}>
          <Pill bgColor={colors.GREEN} color={colors.WHITE}>
            Lateral surface area=4
            <MathElement htmlString={latex[mathjaxCounter++]} />
          </Pill>
        </Paragraph>
      </div>
      <Paragraph color={colors.WHITE}>
        Here, (s) is the length of the side of the cube
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide7;
