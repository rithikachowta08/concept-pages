import { useState } from "react";
import { SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import rectangle_plain from "assets/area-of-rectangle/rectangle_plain.svg";
import rectangle_shaded from "assets/area-of-rectangle/rectangle_shaded.svg";
import unit_square from "assets/area-of-rectangle/unit_square.svg";
import Modal from "components/layout/Modal";
import { colors } from "utils/colors";

const Slide3 = () => {
  const modalContent = (
    <Flex direction="column">
      <Paragraph
        color="white"
        fontSize="1.5rem"
        marginBottom="50px">
        A unit square is a square with side length equal to 1 unit.
      </Paragraph>
      <StyledImg src={unit_square} />
    </Flex>
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onDismiss = () => {
    setIsModalOpen(false);
  };
  const onHover = (e) => {
    setActiveIndex(1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <SlideWrap
      bg="LIGHT"
      paddingLeft="200px">
      <Modal
        isOpen={isModalOpen}
        title="Unit Square"
        content={modalContent}
        onDismiss={onDismiss}
      />
      <Flex>
        <LeftWrap>
          {/* <Title
            opacity={0.5}
            marginBottom="16px"
            small>
            Types of triangles
          </Title> */}
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            small>
            What is the area of a Rectangle?
          </Title>
          <Paragraph marginBottom="50px">
            The area of a rectangle is the&nbsp;
            <TextSpanBg
              onHover={onHover}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.PURPLE}
              fontWeight={700}
              fontSize="2.2rem">
              region enclosed
            </TextSpanBg>
            &nbsp;within its four sides.
          </Paragraph>
          <Paragraph>
            It is also the number of&nbsp;
            <b
              style={{ cursor: "pointer" }}
              onClick={onClick}>
              <u>unit squares</u>
            </b>
            &nbsp;that can fit into a rectangle.
          </Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[rectangle_plain, rectangle_shaded]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide3;
