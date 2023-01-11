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
import Pill from "components/Pill";
const surfaceCube_line = "assets/surface-area-of-cube/slide6/1.svg";
const surfaceCube_blue = "assets/surface-area-of-cube/slide6/2.svg";
const surfaceCube_modal = "assets/surface-area-of-cube/slide6/3.svg";

const Slide5 = ({ downIcon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  let latex = [];
  latex.push(`s^2`);
  latex.push(`s^2`);
  let mathjaxCounter = 0;

  const modalContent = (
    <Flex direction="column">
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        Let s be the edge of the cube.
      </Paragraph>
      <Paragraph marginBottom="1vh" fontSize="1.5rem">
        Area of one face = Area of a square =
        <MathElement htmlString={latex[mathjaxCounter++]} />
      </Paragraph>
      <ModalImg
        src={surfaceCube_modal}
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
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      downIcon={downIcon}
      title="Total Surface Area"
      secondaryTitle="Surface Area"
      bg="DARK"
      diagram={
        <TransitionImage
          images={[surfaceCube_line, surfaceCube_blue]}
          altTexts={[
            "Diagram of a net of a cube",
            "Diagram of a net of a cube highlighting area of each face.",
          ]}
          activeIndex={activeIndex}
        />
      }
    >
      <Modal
        isOpen={isModalOpen}
        title="Surface Area of One Face"
        content={modalContent}
        onDismiss={onDismiss}
        bg="LIGHT"
        color={colors.DARK_GREY}
      />
      <Paragraph color={colors.WHITE}>
        The total surface area of a cube is the area covered by all its six
        faces.
      </Paragraph>
      <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.LAVENDER}
        >
          Total surface area
        </TextSpanBg>{" "}
        = 6 ×{" "}
        <ModalTriggerText id={2} onClick={onClick} color={colors.WHITE}>
          Surface area of one face
        </ModalTriggerText>
      </Paragraph>
      <div>
        <Paragraph color={colors.WHITE}>
          <Pill bgColor={colors.GREEN} color={colors.WHITE}>
            Total surface area = 6
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

export default Slide5;
