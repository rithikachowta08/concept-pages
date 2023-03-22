import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide12 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-23dc5087/rr2zj3/Maths_INTL/230306/SEOINTL05MAT12KT010/dash/h264.mpd",
               hls_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-23dc5087/rr2zj3/Maths_INTL/230306/SEOINTL05MAT12KT010/hls/h264.m3u8",
               thumbnail:
                  "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/onversion+of+units+of+time_01.png",
               duration: 129,
               videoId: "444530",
               title: "Relationship between Units of Time",
            }}
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={11}
            downIconId="s12-video-down-icon"
            videoSlideId="s12-video-slide"
         />
      </div>
   );
};

export default Slide12;
