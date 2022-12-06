import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const StyledImg = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.StyledImg)
);
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
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
const TextSpan = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpan)
);

const Modal = dynamic(() => import("components/layout/Modal"));

const triangle_red = "assets/triangle_red.svg";
const triangle_angles = "assets/triangle_angles.svg";
const triangle_sides = "assets/triangle_sides.svg";
const triangle_vertices = "assets/triangle_vertices.svg";
const vertice = "assets/vertice.svg";
const ruler = "assets/ruler.svg";
const three_figure = "assets/three_figure.svg";
const bg = "assets/white_bg.png";

const Slide2 = () => {
  const subtitles = ["Sides", "Angles", "Vertices"];
  const hoverColors = [colors.AQUA, colors.DARK_BLUE, colors.GREEN];
  const modalContent = (
    <Flex direction="column">
      <Paragraph color="white" marginBottom="50px" fontSize="1.5rem">
        Vertices in shapes are the points where two or more line segments or
        edges meet
      </Paragraph>
      <StyledImg src={vertice} alignSelf="center" marginBottom="50px" />
      <Title
        fontSize="1.8rem"
        marginBottom="20px"
        color="white"
        fontWeight={700}
        small
      >
        Example
      </Title>
      <Paragraph color="white" fontSize="1.5rem" marginBottom="50px">
        A ruler has 4 vertices
      </Paragraph>
      <StyledImg src={ruler} transform="translateX(-12px)" />
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
    setActiveIndex(Number(e.target.id) + 1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <SlideWrap bg={bg} paddingLeft="200px">
      <Modal
        isOpen={isModalOpen}
        title="What are vertices"
        content={modalContent}
        onDismiss={onDismiss}
      />
      <Flex alignItems="center">
        <LeftWrap>
          <Title opacity={0.5} marginBottom="16px" small>
            What is a triangle?
          </Title>
          <Paragraph marginBottom="70px">
            A triangle is a two dimentional geometric shape which has
          </Paragraph>
          <Flex alignItems="center">
            <StyledImg marginRight="32px" src={three_figure} />
            <Flex direction="column">
              {subtitles.map((subtitle, index) => (
                <TextSpan
                  key={subtitle}
                  id={index}
                  hoverColor={hoverColors[index]}
                  fontSize="2.5rem"
                  fontWeight={700}
                  textDecoration="underline"
                  marginBottom="16px"
                  cursor={subtitle === "Vertices" ? "pointer" : null}
                  onClick={subtitle === "Vertices" ? onClick : null}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                >
                  {subtitle}
                </TextSpan>
              ))}
            </Flex>
          </Flex>
        </LeftWrap>
        <TransitionImage
          images={[
            triangle_red,
            triangle_sides,
            triangle_angles,
            triangle_vertices,
          ]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide2;
