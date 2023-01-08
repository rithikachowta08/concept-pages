import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide13 = ({ downIcon, currentPageIdx }) => {
   // return <div>Video slide</div>;
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-188632ba/ro0jfw/20230105_124345_SEOD18INTL08MAT11KT015/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-188632ba/ro0jfw/20230105_124345_SEOD18INTL08MAT11KT015/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803338.jpg?1671775717",
            }}
            videoSlideId="s13-video-slide"
            downIconId="s13-down-arrow-icon"
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={11}
         />
      </div>
   );
};

export default Slide13;
