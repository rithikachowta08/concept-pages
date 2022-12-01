import { SlideWrap, Flex, LeftWrap, StyledImg } from "../../components/StyledElements";
import { Title, Paragraph } from "../../components/text";
const bg = "assets/white_bg.png";
const inequality_slide = "assets/inequality_slide.svg";

const Slide7 = () => {
  return (
    <SlideWrap bg={bg}>
      <Flex justifyContent="space-evenly">
        <LeftWrap width="50%">
          <Title
            opacity={0.5}
            marginBottom="16px"
            small>
            Property of triangles
          </Title>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            small>
            Triangle inequality property
          </Title>
          <Paragraph marginBottom="20px">
            As per the triangle inequality theorem, the sum of the length of the two sides of a
            triangle is greater than the third side.
          </Paragraph>
          <Paragraph marginBottom="10px">In the given figure,</Paragraph>
          <Paragraph>a + b &gt; c</Paragraph>
          <Paragraph>c + a &gt; b</Paragraph>
          <Paragraph>c + b &gt; a</Paragraph>
        </LeftWrap>
        <StyledImg src={inequality_slide} />
      </Flex>
    </SlideWrap>
  );
};

export default Slide7;
