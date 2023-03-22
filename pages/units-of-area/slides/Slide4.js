import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-27ccb11a/rr2ziu/Maths_INTL/230306/SEOINTL04MAT17KT008/dash/h264.mpd",
               hls_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-27ccb11a/rr2ziu/Maths_INTL/230306/SEOINTL04MAT17KT008/hls/h264.m3u8",
               thumbnail: "",
               title: "Area of a shape by counting number of unit squares",
               duration: 175,
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
