import { useState } from "react";
import VideoSlide from "components/slides/VideoSlide";

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
