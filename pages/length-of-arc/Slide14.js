import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide14 = ({ downIcon, currentPageIdx }) => {
   // return <div>Video slide</div>;
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            downIcon={downIcon}
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-c8442dfb/rnylev/INTL_Maths/230104/SEO18INTL08MAT11KT005/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-c8442dfb/rnylev/INTL_Maths/230104/SEO18INTL08MAT11KT005/hls/h264.m3u8",
               thumbnail:
                  "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803334.jpg?1671775639",
               title: "Length of an Arc of a Sector",
               videoId: "389951",
            }}
            downIconId="s14-video-down-icon"
            videoSlideId="s14-video-slide"
            currentPageIdx={currentPageIdx}
            index={13}
         />
      </div>
   );
};

export default Slide14;
