import { useState } from "react";
import { SlideWrap, Flex, Video } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import AppletSlide from "components/slides/AppletSlide";

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
    <AppletSlide title="Applet title here"></AppletSlide>
  );
};

export default Slide4;
