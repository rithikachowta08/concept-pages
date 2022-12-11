import VideoSlide from "components/slides/VideoSlide";

const Slide4 = ({ downIcon, navBar }) => {
   return (
      <VideoSlide
         title="Classification of triangles"
         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
         downIcon={downIcon}
         navBar={navBar}
      ></VideoSlide>
   );
};

export default Slide4;
