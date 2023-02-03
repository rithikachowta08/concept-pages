import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide5 = ({ downIcon, currentPageIdx }) => {
   // return <div>Video slide</div>;
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2
            downIcon={downIcon}
            videoContent={{
               dash_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-1c5a2a9e/rom3q5/INTL_Maths/230116/SEO18INTL07MAT11KT019_1/dash/h264.mpd",
               hls_Url:
                  "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-1c5a2a9e/rom3q5/INTL_Maths/230116/SEO18INTL07MAT11KT019_1/hls/h264.m3u8",
               thumbnail: "",
               videoId: "402835",
               duration: 239,
               title: "Pyramid and its formation",
            }}
            downIconId="s14-video-down-icon"
            videoSlideId="s14-video-slide"
            currentPageIdx={currentPageIdx}
            index={4}
         />
      </div>
   );
};

export default Slide5;
