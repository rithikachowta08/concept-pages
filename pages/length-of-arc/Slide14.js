import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide14 = ({ downIcon, curIdx }) => {
   // return <div>Video slide</div>;
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            title="Video here"
            downIcon={downIcon}
            videoContent={{
               dash_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-03324007/r47glk/Maths_INTL/211215/B2/18INTL08MAT11/18INTL08MAT11KT005/dash/h264.mpd",
               hls_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-03324007/r47glk/Maths_INTL/211215/B2/18INTL08MAT11/18INTL08MAT11KT005/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803334.jpg?1671775639",
            }}
            downIconId="s14-video-down-icon"
            videoSlideId="s14-video-slide"
            currentPageIdx={curIdx}
            index={13}
         />
      </div>
   );
};

export default Slide14;
