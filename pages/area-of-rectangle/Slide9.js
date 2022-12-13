import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const Link = dynamic(() =>
  import("components/StyledElements").then((mod) => mod.Link)
);
const rectangle_full_diagonal =
  "assets/area-of-rectangle/s8_rectangle_full_diagonal.svg";
const rectangle_diagonal = "assets/area-of-rectangle/s8_rectangle_diagonal.svg";
import HyperLink from "components/text/HyperLink";

const Slide9 = ({ downIcon, navBar }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      diagram={
        <TransitionImage
          images={[rectangle_full_diagonal, rectangle_diagonal]}
          activeIndex={activeIndex}
        />
      }
      bg="DARK"
      title="Area Using Diagonal"
      downIcon={downIcon}
      navBar={navBar}
    >
      <Paragraph marginBottom="20px" color="white">
        The length of a{" "}
        <TextSpanBg
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.AQUA}
          fontWeight={700}
          fontSize="2.2rem"
        >
          diagonal
        </TextSpanBg>{" "}
        can be calculated using the{" "}
        <HyperLink href="https://byjus.com/maths/pythagoras-theorem/#:~:text=Pythagoras%20theorem%20states%20that%20%E2%80%9CIn,named%20Perpendicular%2C%20Base%20and%20Hypotenuse.">
          Pythagorean
        </HyperLink>{" "}
        theorem.
      </Paragraph>
      <Paragraph color="white">
        <i>
          {" "}
          d<sup>2</sup> = l<sup>2</sup> + w<sup>2</sup>
        </i>
      </Paragraph>
      <Paragraph color="white">From this,</Paragraph>
      <Paragraph color="white" marginBottom="20px">
        <i>
          {" "}
          w = √ d<sup>2</sup> - l<sup>2</sup>
        </i>
      </Paragraph>
      <Paragraph color="white" marginBottom="20px">
        Area ={" "}
        <i>
          l × w = l × √ d<sup>2</sup> - l<sup>2</sup>
        </i>
      </Paragraph>
      <Paragraph color="white">Similarly,</Paragraph>
      <Paragraph color="white" marginBottom="20px">
        Area ={" "}
        <i>
          w × √ d<sup>2</sup> - l<sup>2</sup>
        </i>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide9;
