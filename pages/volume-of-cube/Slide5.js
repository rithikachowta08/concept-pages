import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide5 = ({ downIcon }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            title="Video here"
            downIcon={downIcon}
            videoContent={{
               dash_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-f0130697/r3wasn/Maths_INTL/211208/18INTL06MAT10/18INTL06MAT10KT012_perfect/dash/h264.mpd",
               hls_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-f0130697/r3wasn/Maths_INTL/211208/18INTL06MAT10/18INTL06MAT10KT012_perfect/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/792471.jpg?1671000412",
            }}
            downIconId="s5-video-down-icon"
            videoSlideId="s5-video-slide"
         />
      </div>
   );
};

export default Slide5;
