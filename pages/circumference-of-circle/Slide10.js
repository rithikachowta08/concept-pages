import dynamic from "next/dynamic";
const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const Slide10 = ({ downIcon }) => {
   return (
      <VideoSlide
         downIcon={downIcon}
         title="Circle and its Definitions"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
   );
};

export default Slide10;
