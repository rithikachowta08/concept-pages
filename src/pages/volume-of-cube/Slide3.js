import { useState } from "react";
import { Icon, Flex, SlideWrap, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import TransitionImage from "components/media/TransitionImage";

import ImageWithYesNo, { ANSWER_TYPES } from "components/media/ImageWithYesNo";
import Modal from "components/layout/Modal";
import bg from "assets/white_bg.png";
import info from "assets/info.svg";
import boat from "assets/boat.svg";
import tent_with_triangle from "assets/tent_with_triangle.svg";
import boat_correct_answer from "assets/boat_correct_answer.svg";
import boat_wrong_answer from "assets/boat_wrong_answer.svg";
import cube_red from "assets/volume-of-cube/slide2/cube-1.png";
import cube_spaces from "assets/volume-of-cube/slide2/cube-2.png";
import cube_unit from "assets/volume-of-cube/slide2/cube-3.png";
import { colors } from "utils/colors";

const Slide3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContent = (
    <Flex direction="column">
      <Paragraph
        color="white"
        marginBottom="50px"
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
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Modal
        isOpen={isModalOpen}
        title="Unit Cube"
        content={modalContent}
        onDismiss={onDismiss}
      />
      <Flex alignItems="center">
        <LeftWrap>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            small>
            What is the volume of a cube?
          </Title>
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
        </LeftWrap>
        <TransitionImage
          images={[cube_red, cube_spaces]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide3;
