import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url: "",
               hls_Url: "",
               thumbnail: "",
               title: "Understanding Area",
               duration: 28,
               videoId: "21556",
            }}
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={3}
            downIconId="s4-video-down-icon"
            videoSlideId="s4-video-slide"
         />
      </div>
   );
};

export default Slide4;
