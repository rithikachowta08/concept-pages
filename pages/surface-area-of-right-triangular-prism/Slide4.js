import dynamic from "next/dynamic";
const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const Slide4 = ({ downIcon }) => {
   return (
      <VideoSlide
         downIcon={downIcon}
         title="Classification of triangles"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
   );
};

export default Slide4;
