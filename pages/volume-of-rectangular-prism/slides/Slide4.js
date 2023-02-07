import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));

const Slide4 = ({ currentPageIdx, downIcon }) => {
   return (
      <VideoSlide
         videoContent={{
            dash_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-2e460441/rom3pf/INTL_Maths/230116/SEO18INTL06MAT10KT012/dash/h264.mpd",
            hls_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-2e460441/rom3pf/INTL_Maths/230116/SEO18INTL06MAT10KT012/hls/h264.m3u8",
            thumbnail:
               "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Volume+of+Rectangular+Prism+and+Cube.png",
            videoId: "402831",
            duration: 82,
            title: "Volume of rectangular prism by counting unit cubes",
         }}
         downIconId="s3-video-down-icon"
         videoSlideId="s3-video-slide"
         index={3}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      />
   );
};

export default Slide4;
