import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide5 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-aec8fba7/robhd4/INTL_Maths/230111/SEO18INTL07MAT11KT008/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-aec8fba7/robhd4/INTL_Maths/230111/SEO18INTL07MAT11KT008/hls/h264.m3u8",
               thumbnail:
                  "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Trapezium.png",
               title: "Derivation of formula of area of trapezoid",
               duration: 134,
               videoId: "397551",
               // video_title: "Area of Trapezoid",
            }}
            downIcon={downIcon}
            downIconId="aot-s4-video-down-icon"
            videoSlideId="aot-s4-video-slide"
            currentPageIdx={currentPageIdx}
            index={4}
         />
      </div>
   );
};

export default Slide5;
