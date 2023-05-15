import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const image_1 = "";

const Slide6 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-e99dcb79/rr90ml/Maths_INTL/230309/SEOINTL05MAT20KT001/dash/h264.mpd",
               hls_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-e99dcb79/rr90ml/Maths_INTL/230309/SEOINTL05MAT20KT001/hls/h264.m3u8",
               thumbnail: "",
               title: "Understanding the Coordinate Plane",
               duration: 28,
               videoId: "21528",
            }}
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={6}
            downIconId="s6-video-down-icon"
            videoSlideId="s6-video-slide"
         />
      </div>
   );
};

export default Slide6;
