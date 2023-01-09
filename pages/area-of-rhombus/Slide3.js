import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide3 = ({ downIcon, currentPageIdx }) => {
   // return <div>Video slide</div>;
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            downIcon={downIcon}
            videoContent={{
               dash_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-eefdfe57/r47gk7/Maths_INTL/211215/B2/18INTL08MAT08/18INTL08MAT08KT006/dash/h264.mpd",
               hls_Url:
                  "https://byjus-in.akamaized.net/production/mpkgr-production-eefdfe57/r47gk7/Maths_INTL/211215/B2/18INTL08MAT08/18INTL08MAT08KT006/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803324.jpg?1671775460",
            }}
            downIconId="s3-video-down-icon"
            videoSlideId="s3-video-slide"
            currentPageIdx={currentPageIdx}
            index={2}
         />
      </div>
   );
};

export default Slide3;
