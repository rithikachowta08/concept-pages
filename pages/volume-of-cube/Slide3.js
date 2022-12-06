import { useState } from "react";
import { Icon, Flex, StyledImg } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import Modal from "components/layout/Modal";
import cube_red from "assets/volume-of-cube/slide2/cube-1.png";
import cube_spaces from "assets/volume-of-cube/slide2/cube-2.png";
import cube_unit from "assets/volume-of-cube/slide2/cube-3.png";
import { colors } from "utils/colors";

const Slide3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
  const modalContent = (
    <Flex direction="column">
      <Paragraph
        color="white"
        marginBottom="1vh"
        fontSize="1.5rem">
        Unit cube is a cube whose sides are 1 unit long
      </Paragraph>
      <StyledImg
        src={cube_unit}
        alignSelf="center"
        marginBottom="50px"
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
      title=" What is the volume of a cube?"
      diagram={
        <TransitionImage
          images={[cube_red, cube_spaces]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      }>
      <Modal
        isOpen={isModalOpen}
        title="Unit Cube"
        content={modalContent}
        onDismiss={onDismiss}
      />
      <Paragraph marginBottom="70px">
        The volume of a cube is the{" "}
        <TextSpan
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem">
          space
        </TextSpan>{" "}
        occupied by it. It is also the total number of{" "}
        <TextSpan
          id={2}
          // onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.BLACK}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          textDecoration="underline"
          cursor="pointer"
          onClick={onClick}
          fontSize="2.2rem">
          unit cubes
        </TextSpan>{" "}
        that the cube can accomodate.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide3;
