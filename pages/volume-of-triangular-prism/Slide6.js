import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide6 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            videoContent={{
               title: "Solved problem on volume of triangular prism",
               duration: 32,
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-9dd66f08/rnylek/INTL_Maths/230104/SEO18INTL07MAT11KT020/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-9dd66f08/rnylek/INTL_Maths/230104/SEO18INTL07MAT11KT020/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803314.jpg?1671775378",
            }}
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={5}
            downIconId="s5-video-down-icon"
            videoSlideId="s5-video-slide"
         />
      </div>
   );
};

export default Slide6;
