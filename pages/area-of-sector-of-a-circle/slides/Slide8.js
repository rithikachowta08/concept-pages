import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));

const Slide8 = ({ currentPageIdx, downIcon }) => {
   return (
      <VideoSlide
         videoContent={{
            dash_Url: "",
            hls_Url: "",
            thumbnail: "",
         }}
         downIconId="s8-video-down-icon"
         videoSlideId="s8-video-slide"
         index={8}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      />
   );
};

export default Slide8;
