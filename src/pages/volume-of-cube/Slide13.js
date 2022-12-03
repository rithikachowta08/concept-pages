import { useState } from "react";

import { SlideWrap, Flex, LeftWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title, Paragraph } from "components/text";
import Pill from "components/Pill";
import cube_red from "assets/volume-of-cube/slide13/cube-1.png";
import cube_lwh from "assets/volume-of-cube/slide13/cube-2.png";
import cube_s from "assets/volume-of-cube/slide13/cube-3.png";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";

import pythogoras_slide from "assets/pythogoras_slide.svg";

const Slide13 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };

  return (
    <SlideWrap
      bg="DARK"
      paddingLeft="200px">
      <Flex>
        <LeftWrap width="50%">
          <Title
            opacity={0.5}
            marginBottom="16px"
            color={colors.WHITE}
            small>
            Volume of a cube
          </Title>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            color={colors.WHITE}
            small>
            Rectangular Prism vs. Cube
          </Title>
          <Paragraph
            marginBottom="20px"
            color={colors.WHITE}>
            If the length, width, and height of a rectangular prism are equal, it forms a cube
          </Paragraph>
          <Paragraph
            marginBottom="70px"
            color={colors.WHITE}>
            Volume of a rectangular prism ={" "}
            <TextSpan
              id={1}
              onHover={onHover}
              onHoverOut={onHoverOut}
              textDecoration="underline"
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem"
              color={colors.RED}>
              l x w x h
            </TextSpan>{" "}
            cubic units
          </Paragraph>
          <Paragraph color={colors.WHITE}>For l = w = h = s,</Paragraph>
          <Paragraph color={colors.WHITE}>
            Volume of a cube ={" "}
            <TextSpan
              id={2}
              onHover={onHover}
              onHoverOut={onHoverOut}
              textDecoration="underline"
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem"
              color={colors.RED}>
              s<sup>3</sup>
            </TextSpan>{" "}
            cubic units
          </Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[cube_red, cube_lwh, cube_s]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide13;
