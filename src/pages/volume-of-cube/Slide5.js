import { useState } from "react";
import { Video, SlideWrap, Flex, StyledImg, LeftWrap } from "components/StyledElements";
import { Title, Paragraph, TextSpan } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import bg from "assets/white_bg.png";
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
    <SlideWrap bgColor={colors.BLACK}>
      <Flex direction="column">
        <Video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
          muted
          autoPlay
        />
        <TextSpan
          margin="4vh 0 0 2vw"
          color="white">
          Classification of triangles
        </TextSpan>
      </Flex>
    </SlideWrap>
  );
};

export default Slide5;
