import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide16 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url: "",
               hls_Url: "",
               thumbnail: "",
               title: "Understanding Length",
               duration: 28,
               videoId: "21528",
            }}
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={15}
            downIconId="s6-video-down-icon"
            videoSlideId="s6-video-slide"
         />
      </div>
   );
};

export default Slide16;
