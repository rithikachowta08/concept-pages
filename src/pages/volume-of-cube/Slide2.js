import { useState } from "react";
import { SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import Modal from "components/layout/Modal";
import TransitionImage from "components/media/TransitionImage";
import triangle_red from "assets/triangle_red.svg";
import triangle_angles from "assets/triangle_angles.svg";
import triangle_sides from "assets/triangle_sides.svg";
import triangle_vertices from "assets/triangle_vertices.svg";
import cube_red from "assets/volume-of-cube/slide1/cube-1.png";
import cube_faces from "assets/volume-of-cube/slide1/cube-2.png";
import cube_vertices from "assets/volume-of-cube/slide1/cube-3.png";
import cube_edges from "assets/volume-of-cube/slide1/cube-4.png";
import vertice from "assets/vertice.svg";
import ruler from "assets/ruler.svg";
import three_figure from "assets/three_figure.svg";
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
    <SlideWrap
      bg="LIGHT"
      paddingLeft="200px">
      <Flex alignItems="center">
        <LeftWrap>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            small>
            What is a cube?
          </Title>
          <Paragraph marginBottom="70px">
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
        </LeftWrap>
        <TransitionImage
          images={[cube_red, cube_faces, cube_vertices, cube_edges]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide2;
