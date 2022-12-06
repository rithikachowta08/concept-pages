import { useState } from "react";
import { Paragraph, TextSpan } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import TransitionImage from "components/media/TransitionImage";
import cube_red from "assets/volume-of-cube/slide1/cube-1.png";
import cube_faces from "assets/volume-of-cube/slide1/cube-2.png";
import cube_vertices from "assets/volume-of-cube/slide1/cube-3.png";
import cube_edges from "assets/volume-of-cube/slide1/cube-4.png";
import { colors } from "utils/colors";

const Slide2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onDismiss = () => {
    setIsModalOpen(false);
  };
  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHover2 = (e) => {
    setActiveIndex(2);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      title="What is a cube?"
      diagram={
        <TransitionImage
          images={[cube_red, cube_faces, cube_vertices, cube_edges]}
          activeIndex={activeIndex}
        />
      }>
      <Paragraph>
        A cube is a three-dimensional shape that has 6{" "}
        <TextSpan
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem">
          square faces
        </TextSpan>
        , 8{" "}
        <TextSpan
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem">
          vertices
        </TextSpan>{" "}
        and 12{" "}
        <TextSpan
          id={3}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem">
          edges
        </TextSpan>{" "}
        of equal length
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
