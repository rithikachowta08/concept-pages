import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

// Classification of triangles
const Slide6 = ({ downIcon }) => {
   return (
      <VideoSlide
         downIcon={downIcon}
         title="Triangles: Perimeter and Area"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
   );
};

export default Slide6;
