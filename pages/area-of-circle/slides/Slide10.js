const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));
import dynamic from "next/dynamic";

// video slide
const Slide10 = ({ navBar }) => {
   return (
      <VideoSlide
         navBar={navBar}
         title="Area of a Circle"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
         isLastSlide={true}
      />
   );
};

export default Slide10;
