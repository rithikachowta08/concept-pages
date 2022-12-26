import dynamic from "next/dynamic";
const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const Slide13 = ({ downIcon }) => {
  return (
    <VideoSlide
      downIcon={downIcon}
      title="Special Quadrilaterals"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    />
  );
};

export default Slide13;
