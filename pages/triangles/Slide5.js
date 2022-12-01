import { useState } from "react";
import { SlideWrap, Flex, StyledImg, LeftWrap } from "../../components/StyledElements";
import { Title, Paragraph, TextSpan } from "../../components/text";
import TransitionImage from "../../components/media/TransitionImage";
import { colors } from "../../utils/colors";
const bg = "assets/white_bg.png";
const acute_red = "assets/acute_red.svg";
const acute_angles_blue = "assets/acute_angles_blue.svg";

const Slide5 = () => {
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
          <Title
            opacity={0.5}
            marginBottom="16px"
            small>
            Types of triangles
          </Title>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            small>
            Acute angled triangle
          </Title>
          <Paragraph marginBottom="70px">
            A triangle in which all the angles are{" "}
            <TextSpan
              onHover={onHover}
              onHoverOut={onHoverOut}
              color={colors.RED}
              hoverColor={colors.DARK_BLUE}
              fontWeight={700}
              fontSize="2.2rem">
              acute
            </TextSpan>{" "}
            i.e. less than 90°
          </Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[acute_red, acute_angles_blue]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide5;
