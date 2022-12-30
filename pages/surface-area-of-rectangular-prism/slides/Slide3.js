import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const Slide3 = ({ downIcon }) => {
   return (
      <VideoSlide
         downIcon={downIcon}
         title="What is the surface area of a rectangular prism?"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
   );
};

export default Slide3;
