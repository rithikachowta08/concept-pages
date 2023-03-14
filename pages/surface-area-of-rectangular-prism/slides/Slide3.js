import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));

const Slide3 = ({ downIcon, currentPageIdx }) => {
   return (
      <VideoSlide
         downIcon={downIcon}
         videoContent={{
            dash_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-818d94e0/rnylf5/INTL_Maths/230104/SEOD18INTL07MAT11KT020/dash/h264.mpd",
            hls_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-818d94e0/rnylf5/INTL_Maths/230104/SEOD18INTL07MAT11KT020/hls/h264.m3u8",
            thumbnail:
               "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Surface+Area+of+Prisms_02.png",
            videoId: "389953",
            duration: 68,
            title: "Net of a rectangular prism",
         }}
         currentPageIdx={currentPageIdx}
         index={2}
         downIconId="s3-video-down-icon"
         videoSlideId="s3-video-slide"
      />
   );
};

export default Slide3;
