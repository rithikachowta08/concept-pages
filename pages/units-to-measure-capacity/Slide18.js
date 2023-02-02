import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <VideoSlide2
         videoContent={{
            dash_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-7587de9a/rom3r9/INTL_Maths/230116/SEOINTL04MAT16KT007/dash/h264.mpd",
            hls_Url:
               "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-7587de9a/rom3r9/INTL_Maths/230116/SEOINTL04MAT16KT007/hls/h264.m3u8",
            thumbnail:
               "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803314.jpg?1671775378",
            duration: 152,
            title: "Customary and metric units of capacity",
         }}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         index={17}
         downIconId="s17-video-down-icon"
         videoSlideId="s17-video-slide"
      />
   );
};

export default Slide4;
