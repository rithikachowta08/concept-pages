import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide3 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               videoId: "447078",
               duration: 82,
               title: "Volume of Rectangular Prism and Cube",
               dash_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-bed7ad4b/rr90ns/Maths_INTL/230309/SEO18INTL06MAT10KT012/dash/h264.mpd",
               hls_Url:
                  "https://k10-streaming.tllms.com/mpkgr-production-bed7ad4b/rr90ns/Maths_INTL/230309/SEO18INTL06MAT10KT012/hls/h264.m3u8",
               thumbnail:
                  "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Volume+of+a+Rectangular+Prism+and+Cube.png",
            }}
            videoSlideId="s4-video-slide"
            downIconId="s4-down-arrow-icon"
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={3}
         />
      </div>
   );
};

export default Slide3;
