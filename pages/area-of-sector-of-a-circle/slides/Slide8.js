import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const Slide8 = () => {
   return (
      <VideoSlide
         title={"General Formula"}
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
   );
};

export default Slide8;
