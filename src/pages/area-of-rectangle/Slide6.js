import { useState } from "react";
import { SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import bg from "assets/purple_bg.png";
import rectangle_plain from "assets/rectangle_plain.png";
import rectangle_length from "assets/rectangle_length.png";
import rectangle_width from "assets/rectangle_width.png";
import rectangle_square_units from "assets/rectangle_square_units.png";
import Modal from "components/layout/Modal";
import { colors } from "utils/colors";

const Slide4 = () => {
  const modalContent = (
    <Flex direction="column">
      <Paragraph
        color="white"
        marginBottom="40px"
        fontSize="1.22rem">
        The area of a rectangle is measured in square units (square centimeters, square inches,
        square feet, and so on).
      </Paragraph>
      <Title
        color="white"
        fontSize="1.22rem">
        Example :
      </Title>
      <StyledImg
        src={rectangle_square_units}
        width="-webkit-fill-available"
        // transform="scale(0.5)"
      />
      <Paragraph
        color="white"
        fontSize="1.22rem">
        Area =
        <div>
          4 cm &times; 3 cm
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 12 sq cm
        </div>
      </Paragraph>
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
    setActiveIndex(e);
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
        title="Square Units"
        content={modalContent}
        onDismiss={onDismiss}
      />
      <Flex>
        <LeftWrap>
          <Title
            opacity={0.5}
            marginBottom="16px"
            color="white"
            small>
            Area of Rectangle
          </Title>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            color="white"
            small>
            Formula
          </Title>
          <Paragraph
            marginBottom="50px"
            color="white">
            Area of a rectangle =
            <TextSpanBg
              onHover={() => onHover(1)}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem">
              Length
            </TextSpanBg>
            &times;
            {/* ×&nbsp; */}
            <TextSpanBg
              onHover={() => onHover(2)}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem">
              Width
            </TextSpanBg>
          </Paragraph>
          <Paragraph color="white">
            The area obtained is measured in&nbsp;
            <b
              style={{ cursor: "pointer" }}
              onClick={onClick}>
              <u>square units</u>
            </b>
            .
          </Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[rectangle_plain, rectangle_length, rectangle_width]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide4;
