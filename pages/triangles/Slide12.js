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
const inequality_slide = "assets/inequality_slide.svg";

const Slide7 = () => {
  return (
    <SlideWrap bg={bg}>
      <Flex justifyContent="space-evenly">
        <LeftWrap width="50%">
          <Title opacity={0.5} marginBottom="16px" small>
            Property of triangles
          </Title>
          <Title fontSize="2.5rem" fontWeight={700} marginBottom="16px" small>
            Triangle inequality property
          </Title>
          <Paragraph marginBottom="20px">
            As per the triangle inequality theorem, the sum of the length of the
            two sides of a triangle is greater than the third side.
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
