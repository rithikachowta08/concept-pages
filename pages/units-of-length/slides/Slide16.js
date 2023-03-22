import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide16 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-4ac1cc8b/rr2zi4/Maths_INTL/230306/SEOINTL04MAT16KT001/dash/h264.mpd",
               hls_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-4ac1cc8b/rr2zi4/Maths_INTL/230306/SEOINTL04MAT16KT001/hls/h264.m3u8",
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
