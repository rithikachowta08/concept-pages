import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
  ssr: false,
});

const Slide15 = ({ downIcon, currentPageIdx }) => {
  return (
    <div style={{ height: "100%" }}>
      <VideoSlide2
        downIcon={downIcon}
        videoContent={{
          videoId: "389947",
          title: "Understanding Mass",
          dash_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-97357d8b/rnyleb/INTL_Maths/230104/SEO18INTL06MAT10KT012/dash/h264.mpd",
          hls_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-97357d8b/rnyleb/INTL_Maths/230104/SEO18INTL06MAT10KT012/hls/h264.m3u8",
          thumbnail:
            "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Rectangular+Prism+and+Cube+Surface+Area.png",
        }}
        downIconId="s5-video-down-icon"
        videoSlideId="s5-video-slide"
        currentPageIdx={currentPageIdx}
        index={14}
      />
    </div>
  );
};

export default Slide15;
