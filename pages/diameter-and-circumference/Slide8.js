import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide8 = ({ downIcon, currentPageIdx }) => {
   // return <div>Video slide</div>;
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            downIcon={downIcon}
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-a1777c53/rom3pu/INTL_Maths/230116/SEO18INTL07MAT11KT011/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-a1777c53/rom3pu/INTL_Maths/230116/SEO18INTL07MAT11KT011/hls/h264.m3u8",
               thumbnail:
                  "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Circle+and+its+Definitions.png",
               title: "Relationship between Diameter and Circumference",
               duration: 224,
               videoId: "402833",
            }}
            downIconId="s14-video-down-icon"
            videoSlideId="s14-video-slide"
            currentPageIdx={currentPageIdx}
            index={7}
         />
      </div>
   );
};

export default Slide8;
