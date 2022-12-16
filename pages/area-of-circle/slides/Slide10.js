import VideoSlide from "components/slides/VideoSlide";
import React from "react";

const Slide10 = ({ navBar, downIcon }) => {
   return (
      <VideoSlide
         downIcon={downIcon}
         navBar={navBar}
         title="Area of a circle"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
   );
};

export default Slide10;
