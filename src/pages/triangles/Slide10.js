import { SlideWrap, Flex, StyledImg } from "components/StyledElements";
import { Title, TextSpan } from "components/text";
import bg from "assets/purple_bg.webp";
import angle_sum from "assets/triangles/angle_sum.svg";
import triangle_inequality from "assets/triangles/triangle_inequality.svg";
import pythogoras from "assets/triangles/pythogoras.svg";

const Slide4 = () => {
  return (
    <SlideWrap
      bg={bg}
      alignItems="center">
      <Title
        marginBottom="50px"
        fontWeight={700}
        fontSize="2.5rem"
        color="white"
        small>
        Properties of triangles
      </Title>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="70%">
        <Flex direction="column">
          <StyledImg
            src={angle_sum}
            marginBottom="30px"></StyledImg>
          <TextSpan
            color="white"
            fontWeight={400}>
            Angle sum property
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <StyledImg
            src={triangle_inequality}
            transform="translateY(-8px)"
            marginBottom="10px"></StyledImg>
          <TextSpan
            color="white"
            fontWeight={400}>
            Triangle inequality property
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <StyledImg
            src={pythogoras}
            transform="translateY(-50px)"></StyledImg>
          <TextSpan
            color="white"
            transform="translateY(-20px)"
            fontWeight={400}>
            Pythogoras theorem
          </TextSpan>
        </Flex>
      </Flex>
    </SlideWrap>
  );
};

export default Slide4;
