import { useState } from "react";
import { SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import bg from "assets/purple_bg.png";
import rectangle_full_diagonal from "assets/area-of-rectangle/s8_rectangle_full_diagonal.svg";
import rectangle_diagonal from "assets/area-of-rectangle/s8_rectangle_diagonal.svg";
import { colors } from "utils/colors";

const Slide10 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Flex>
        <LeftWrap>
          {/* <Title
            opacity={0.5}
            marginBottom="16px"
            color="white"
            small>
            Finding Area
          </Title> */}
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            color="white"
            small>
            Area Using Diagonal
          </Title>
          <Paragraph
            marginBottom="20px"
            color="white">
            The length of a{" "}
            <TextSpanBg
              onHover={onHover}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.AQUA}
              fontWeight={700}
              fontSize="2.2rem">
              diagonal
            </TextSpanBg>{" "}
            can be calculated using the{" "}
            <a
              target="_blank"
              href="https://byjus.com/maths/pythagoras-theorem/#:~:text=Pythagoras%20theorem%20states%20that%20%E2%80%9CIn,named%20Perpendicular%2C%20Base%20and%20Hypotenuse."
              style={{ textDecoration: "none", color: "#FEC429" }}
              rel="noreferrer">
              Pythagorean
            </a>{" "}
            theorem.
          </Paragraph>
          <Paragraph color="white">
            <i>
              {" "}
              d<sup>2</sup> = l<sup>2</sup> + w<sup>2</sup>
            </i>
          </Paragraph>
          <Paragraph color="white">From this,</Paragraph>
          <Paragraph
            color="white"
            marginBottom="20px">
            <i>
              {" "}
              w = √ d<sup>2</sup> - l<sup>2</sup>
            </i>
          </Paragraph>
          <Paragraph
            color="white"
            marginBottom="20px">
            Area ={" "}
            <i>
              l × w = l × √ d<sup>2</sup> - l<sup>2</sup>
            </i>
          </Paragraph>
          <Paragraph color="white">Similarly,</Paragraph>
          <Paragraph
            color="white"
            marginBottom="20px">
            Area ={" "}
            <i>
              w × √ d<sup>2</sup> - l<sup>2</sup>
            </i>
          </Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[rectangle_full_diagonal, rectangle_diagonal]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide10;
