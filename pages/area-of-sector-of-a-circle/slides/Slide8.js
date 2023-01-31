import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));

const Slide8 = ({ currentPageIdx, downIcon }) => {
   return (
      <VideoSlide
         videoContent={{
            dash_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-9593746c/robhd9/INTL_Maths/230111/SEO18INTL08MAT11KT010/dash/h264.mpd",
            hls_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-9593746c/robhd9/INTL_Maths/230111/SEO18INTL08MAT11KT010/hls/h264.m3u8",
            thumbnail:
               "https://drive.google.com/file/d/1mkgMPfEDihGt9fUUEd5QNILAUCKyTyik/view?usp=share_link",
            videoId: "397552",
            title: "",
         }}
         downIconId="s8-video-down-icon"
         videoSlideId="s8-video-slide"
         index={8}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      />
   );
};

export default Slide8;
