import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            downIcon={downIcon}
            videoContent={{
               videoId: "397553",
               title: "Derivation of formula of surface area of cylinder",
               duration: 173,
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-8da287af/robhdf/INTL_Maths/230111/SEO18INTL08MAT11KT013/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-8da287af/robhdf/INTL_Maths/230111/SEO18INTL08MAT11KT013/hls/h264.m3u8",
               thumbnail:
                  "https://drive.google.com/file/d/1YGxUujGbow37QroB__cDX0nwPUmgjF0t/view?usp=share_link",
            }}
            downIconId="s5-video-down-icon"
            videoSlideId="s5-video-slide"
            currentPageIdx={currentPageIdx}
            index={7}
         />
      </div>
   );
};

export default Slide8;
