import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
  ssr: false,
});

const Slide9 = ({ downIcon, currentPageIdx }) => {
  return (
    <div style={{ height: "100%" }}>
      <VideoSlide2
        videoContent={{
          dash_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-6025e0e0/robhcu/INTL_Maths/230111/SEO18INTL06MAT10KT010/dash/h264.mpd",
          hls_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-6025e0e0/robhcu/INTL_Maths/230111/SEO18INTL06MAT10KT010/hls/h264.m3u8",
          thumbnail:
            "https://drive.google.com/file/d/1GUZLdLWsgyi7Y7iJw_UaBNfEOON7NeEY/view?usp=share_link",
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
