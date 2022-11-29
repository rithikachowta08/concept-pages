import { useState } from "react";
import { SlideWrap, Flex, Video } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import { colors } from "utils/colors";
import bg from "assets/purple_bg.png";
import triangle_acute from "assets/triangle_acute.svg";
import triangle_acute_yellow from "assets/triangle_acute_yellow.svg";
import triangle_obtuse from "assets/triangle_obtuse.svg";
import triangle_obtuse_yellow from "assets/triangle_obtuse_yellow.svg";
import triangle_right from "assets/triangle_right.svg";
import triangle_right_yellow from "assets/triangle_right_yellow.svg";

const Slide4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    //appplet
    <SlideWrap>
      <TextSpan margin="0 0 0 200px">APPLET HEERE</TextSpan>
    </SlideWrap>
  );
};

export default Slide4;
