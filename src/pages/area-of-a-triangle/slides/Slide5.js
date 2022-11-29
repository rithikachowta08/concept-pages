import React from "react";
import { SlideWrap, Video } from "components/StyledElements";
import { colors } from "utils/colors";

const Slide5 = () => {
  return (
    <SlideWrap bgColor={colors.BLACK}>
      <Video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        controls
        muted
        autoPlay
      />
    </SlideWrap>
  );
};

export default Slide5;
