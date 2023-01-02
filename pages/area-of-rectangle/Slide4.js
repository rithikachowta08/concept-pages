import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide4 = ({ downIcon }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            title="Area of Rectangle"
            videoContent={{
               dash_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-66e41a47/r3warz/Maths_INTL/211208/18INTL06MAT10/18INTL06MAT10KT003_perfect/dash/h264.mpd",
               hls_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-66e41a47/r3warz/Maths_INTL/211208/18INTL06MAT10/18INTL06MAT10KT003_perfect/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/792472.jpg?1671000740",
               // video_title: "Area of Rectangle",
            }}
            downIcon={downIcon}
         />
      </div>
   );
};

export default Slide4;
