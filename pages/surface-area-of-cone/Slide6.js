import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide6 = ({ downIcon, curIdx }) => {
   // return <div>Video slide</div>;
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            downIcon={downIcon}
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-2b31591c/rnylf0/INTL_Maths/230104/SEO18INTL08MAT11KT015/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-2b31591c/rnylf0/INTL_Maths/230104/SEO18INTL08MAT11KT015/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/817802.jpg?1672652390",
            }}
            downIconId="s6-video-down-icon"
            videoSlideId="s6-video-slide"
            currentPageIndex={curIdx}
            index={4}
         />
      </div>
   );
};

export default Slide6;
