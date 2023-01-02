import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"));

// Classification of triangles
const Slide6 = ({ downIcon }) => {
   return (
      <VideoSlide2
         downIcon={downIcon}
         title="Triangles: Perimeter and Area"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
   );
};

export default Slide6;
