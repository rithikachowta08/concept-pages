import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide10 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-5890c9ab/rnylkh/INTL_Maths/230104/SEO18INTL07MAT11KT011/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-5890c9ab/rnylkh/INTL_Maths/230104/SEO18INTL07MAT11KT011/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803302.jpg?1671775176",
               title: "Circle and its Definitions",
               videoId: "389954",
            }}
            downIconId="s10-video-down-icon"
            videoSlideId="s10-video-slide"
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={8}
         />
      </div>
   );
};

export default Slide10;
