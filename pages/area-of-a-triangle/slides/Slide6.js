import dynamic from "next/dynamic";

const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"));

// Classification of triangles
const Slide6 = ({ downIcon, currentPageIdx }) => {
   return (
      <VideoSlide2
         downIcon={downIcon}
         videoContent={{
            dash_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-108af859/rnyle5/INTL_Maths/230104/SEO18INTL06MAT10KT005/dash/h264.mpd",
            hls_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-108af859/rnyle5/INTL_Maths/230104/SEO18INTL06MAT10KT005/hls/h264.m3u8",
            thumbnail:
               "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Perimeter+and+Area.png",
            videoId: "389946",
            duration: 104,
            title: "Formula of area of the triangle",
         }}
         downIconId="s6-video-down-icon"
         videoSlideId="s6-video-slide"
         currentPageIdx={currentPageIdx}
         index={4}
      />
   );
};

export default Slide6;
