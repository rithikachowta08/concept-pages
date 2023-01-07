import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            title="Area of Rectangle"
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-94b2bffe/rnyle0/INTL_Maths/230104/SEO18INTL06MAT10KT003/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-94b2bffe/rnyle0/INTL_Maths/230104/SEO18INTL06MAT10KT003/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/792472.jpg?1671000740",
               // video_title: "Area of Rectangle",
            }}
            downIcon={downIcon}
            downIconId="s4-video-down-icon"
            videoSlideId="s4-video-slide"
            currentPageIdx={currentPageIdx}
            index={3}
         />
      </div>
   );
};

export default Slide4;
