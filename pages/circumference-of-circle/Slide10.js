import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide10 = ({ downIcon, curIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            title="Circle and its Definitions"
            videoContent={{
               dash_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-fdf8b61f/r47ghf/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT011/dash/h264.mpd",
               hls_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-fdf8b61f/r47ghf/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT011/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803302.jpg?1671775176",
               // video_title: "Circle and its Definitions",
            }}
            downIconId="s10-video-down-icon"
            videoSlideId="s10-video-slide"
            downIcon={downIcon}
            currentPageIdx={curIdx}
            index={8}
         />
      </div>
   );
};

export default Slide10;
