import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide9 = ({ downIcon, curIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            title="Surface Area of a Right Triangular Prism"
            videoContent={{
               dash_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-f5cb9040/r47ghp/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT020/dash/h264.mpd",
               hls_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-f5cb9040/r47ghp/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT020/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803314.jpg?1671775378",
               // video_title: "Surface Area of a Right Triangular Prism",
            }}
            downIcon={downIcon}
            currentPageIndex={curIdx}
            index={8}
            downIconId="s9-video-down-icon"
            videoSlideId="s9-video-slide"
         />
      </div>
   );
};

export default Slide9;
