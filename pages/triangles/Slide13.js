import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const StyledImg = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.StyledImg)
);
const SlideWrap = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.SlideWrap)
);
const Flex = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Flex)
);
const LeftWrap = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.LeftWrap)
);

const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const Pill = dynamic(() => import("components/Pill"));

const bg = "assets/white_bg.png";
const pythogoras_slide = "assets/pythogoras_slide.svg";

const Slide7 = () => {
  return (
    <SlideWrap bg={bg}>
      <Flex justifyContent="space-evenly">
        <LeftWrap width="50%">
          <Title opacity={0.5} marginBottom="16px" small>
            Property of triangles
          </Title>
          <Title fontSize="2.5rem" fontWeight={700} marginBottom="16px" small>
            Pythogoras theorem
          </Title>
          <Paragraph marginBottom="20px">
            In a right angled triangle, the square of the hypotenuse is equal to
            the sum of the squares of the other two sides.
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="2.2rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}
          >
            Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Altitude<sup>2</sup>
          </Pill>
        </LeftWrap>
        <StyledImg src={pythogoras_slide} />
      </Flex>
    </SlideWrap>
  );
};

export default Slide7;
