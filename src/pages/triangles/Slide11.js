import { SlideWrap, Flex, LeftWrap, StyledImg } from "components/StyledElements";
import { Title, Paragraph } from "components/text";
import angle_sum_slide from "assets/triangles/angle_sum_slide.svg";

const Slide7 = () => {
  return (
    <SlideWrap bg="LIGHT">
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
            Angle sum property
          </Title>
          <Paragraph marginBottom="20px">
            As perss the angle sum property, the sum of the three interior angles of a triangle is
            always 180°.
          </Paragraph>
          <Paragraph marginBottom="10px">In the given figure,</Paragraph>
          <Paragraph>∠P + ∠Q + ∠R = 180°</Paragraph>
        </LeftWrap>
        <StyledImg src={angle_sum_slide} />
      </Flex>
    </SlideWrap>
  );
};

export default Slide7;
