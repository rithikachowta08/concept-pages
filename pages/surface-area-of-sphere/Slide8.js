import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            title="Spheres"
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-ccd056dd/robhdk/INTL_Maths/230111/SEO18INTL08MAT11KT017/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-ccd056dd/robhdk/INTL_Maths/230111/SEO18INTL08MAT11KT017/hls/h264.m3u8",
               thumbnail:
                  "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Spheres.png",
            }}
            downIcon={downIcon}
            currentPageIdx={currentPageIdx}
            index={7}
            downIconId="s8-video-down-icon"
            videoSlideId="s8-video-slide"
         />
      </div>
   );
};

export default Slide8;
