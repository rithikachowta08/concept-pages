import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide9 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-a7df91d4/rr2zj9/Maths_INTL/230306/SEOINTL05MAT17KT001/dash/h264.mpd",
               hls_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-a7df91d4/rr2zj9/Maths_INTL/230306/SEOINTL05MAT17KT001/hls/h264.m3u8",
               thumbnail:
                  "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Understanding+area+of+composite+figures.png",
               title: "Area of composite figures by Additive Method",
               duration: 62,
               videoId: "444531",
            }}
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={8}
            downIconId="s9-video-down-icon"
            videoSlideId="s9-video-slide"
         />
      </div>
   );
};

export default Slide9;
