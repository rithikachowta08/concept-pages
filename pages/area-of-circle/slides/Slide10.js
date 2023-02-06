const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));
import dynamic from "next/dynamic";

// video slide
const Slide10 = ({ downIcon, currentPageIdx }) => {
   return (
      <VideoSlide
         videoContent={{
            dash_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-896b0152/rnyleh/INTL_Maths/230104/SEO18INTL07MAT11KT014/dash/h264.mpd",
            hls_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-896b0152/rnyleh/INTL_Maths/230104/SEO18INTL07MAT11KT014/hls/h264.m3u8",
            thumbnail:
               "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Area+of+a+Circle.png",
            videoId: "389948",
            duration: 331,
            title: "Derivation of formula of area of the circle",
         }}
         downIconId="s10-video-down-icon"
         videoSlideId="s10-video-slide"
         index={9}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      />
   );
};

export default Slide10;
