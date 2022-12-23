import VideoSlide from "components/slides/VideoSlide";

const Slide5 = ({ downIcon }) => {
   return (
      <VideoSlide
         title="Video here"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
         downIcon={downIcon}
      ></VideoSlide>
   );
};

export default Slide5;
