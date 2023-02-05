import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
  ssr: false,
});

const Slide9 = ({ downIcon, currentPageIdx }) => {
  return (
    <div style={{ height: "100%" }}>
      <VideoSlide2
        videoContent={{
          videoId: "397549",
          title: "Derivation of formula of surface area of cube",
          dash_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-6025e0e0/robhcu/INTL_Maths/230111/SEO18INTL06MAT10KT010/dash/h264.mpd",
          hls_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-6025e0e0/robhcu/INTL_Maths/230111/SEO18INTL06MAT10KT010/hls/h264.m3u8",
          thumbnail:
            "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Rectangular+Prism+and+Cube+Surface+Area.png",
        }}
        videoSlideId="s9-video-slide"
        downIconId="s9-down-arrow-icon"
        downIcon={downIcon}
        currentPageIdx={currentPageIdx}
        index={8}
      />
    </div>
  );
};

export default Slide9;
