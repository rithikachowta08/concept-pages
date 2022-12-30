import dynamic from "next/dynamic";
const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const Slide14 = ({ downIcon }) => {
   return (
      <VideoSlide
         title="Video here"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
         downIcon={downIcon}
      ></VideoSlide>
   );
};

export default Slide14;