import dynamic from "next/dynamic";
const StyledImg = dynamic(() =>
  import("../../components/StyledElements").then((mod) => mod.StyledImg)
);
const SlideWrap = dynamic(() =>
  import("../../components/StyledElements").then((mod) => mod.SlideWrap)
);
const Flex = dynamic(() =>
  import("../../components/StyledElements").then((mod) => mod.Flex)
);
const LeftWrap = dynamic(() =>
  import("../../components/StyledElements").then((mod) => mod.LeftWrap)
);

const Title = dynamic(() =>
  import("../../components/text").then((mod) => mod.Title)
);
const Paragraph = dynamic(() =>
  import("../../components/text").then((mod) => mod.Paragraph)
);
const bg = "assets/white_bg.png";
const angle_sum_slide = "assets/angle_sum_slide.svg";

const Slide7 = () => {
  return (
    <SlideWrap bg={bg}>
      <Flex justifyContent="space-evenly">
        <LeftWrap width="50%">
          <Title opacity={0.5} marginBottom="16px" small>
            Property of triangles
          </Title>
          <Title fontSize="2.5rem" fontWeight={700} marginBottom="16px" small>
            Angle sum property
          </Title>
          <Paragraph marginBottom="20px">
            As per the angle sum property, the sum of the three interior angles
            of a triangle is always 180°.
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
