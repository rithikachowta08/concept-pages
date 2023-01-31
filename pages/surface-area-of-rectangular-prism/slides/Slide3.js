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
               "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803308.jpg?1671775283",
            videoId: "389953",
            title: "",
         }}
         currentPageIdx={currentPageIdx}
         index={2}
         downIconId="s3-video-down-icon"
         videoSlideId="s3-video-slide"
      />
   );
};

export default Slide3;
