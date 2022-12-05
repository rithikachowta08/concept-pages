import { useState } from "react";
import { Paragraph, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import rectangle_full from "assets/area-of-rectangle/rectangle_full.svg";
import rectangle_angles from "assets/area-of-rectangle/rectangle_angles.svg";
import rectangle_sides from "assets/area-of-rectangle/rectangle_sides.svg";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { colors } from "utils/colors";

const Slide2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(e);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <TextAndDiagramSlide
      title="What is a Rectangle?"
      diagram={
        <TransitionImage
          images={[rectangle_full, rectangle_sides, rectangle_angles]}
          activeIndex={activeIndex}
        />
      }>
      <Paragraph>
        A rectangle is a four-sided polygon with&nbsp;
        <TextSpanBg
          onHover={() => onHover(1)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem">
          opposite sides equal
        </TextSpanBg>
        &nbsp;in length and all the&nbsp;
        <TextSpanBg
          onHover={() => onHover(2)}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem">
          internal angles
        </TextSpanBg>
        &nbsp;equal to 90 degrees.
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide2;
