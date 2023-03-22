import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide16 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            downIcon={downIcon}
            videoContent={{
               videoId: "444528",
               title: "US Customary Units of Mass",
               dash_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-64ed6f4d/rr2zij/Maths_INTL/230306/SEOINTL04MAT16KT004/dash/h264.mpd",
               hls_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-64ed6f4d/rr2zij/Maths_INTL/230306/SEOINTL04MAT16KT004/hls/h264.m3u8",
               thumbnail:
                  "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Understanding+Mass.png",
            }}
            downIconId="s5-video-down-icon"
            videoSlideId="s5-video-slide"
            currentPageIdx={currentPageIdx}
            index={14}
         />
      </div>
   );
};

export default Slide16;
