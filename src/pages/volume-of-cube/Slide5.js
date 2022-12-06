import { useState } from "react";
import { Video, SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import VideoSlide from "components/slides/VideoSlide";
import TransitionImage from "components/media/TransitionImage";
import acute_red from "assets/acute_red.svg";
import acute_angles_blue from "assets/acute_angles_blue.svg";
import { colors } from "utils/colors";

const Slide5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onHover = (e) => {
    setActiveIndex(1);
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  return (
    <VideoSlide
      title="Classification of triangles"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></VideoSlide>
  );
};

export default Slide5;
