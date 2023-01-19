import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide6 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            title="Surface Area of a Right Triangular Prism"
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-27366947/rom3qx/INTL_Maths/230116/SEO18INTL08MAT11KT013/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-27366947/rom3qx/INTL_Maths/230116/SEO18INTL08MAT11KT013/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803314.jpg?1671775378",
               // video_title: "Surface Area of a Right Triangular Prism",
            }}
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={5}
            downIconId="s6-video-down-icon"
            videoSlideId="s6-video-slide"
         />
      </div>
   );
};

export default Slide6;
