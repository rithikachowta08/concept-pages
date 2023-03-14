import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
  ssr: false,
});

const Slide3 = ({ downIcon, currentPageIdx }) => {
  return (
    <div style={{ height: "100%" }}>
      <VideoSlide2
        videoContent={{
          videoId: "402834",
          duration: 112,
          title: "Pyramid and its formation",
          dash_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-be950eb9/rom3q0/INTL_Maths/230116/SEO18INTL07MAT11KT019/dash/h264.mpd",
          hls_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-be950eb9/rom3q0/INTL_Maths/230116/SEO18INTL07MAT11KT019/hls/h264.m3u8",
          thumbnail:
            "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Prisms+and+Pyramids_02.png",
        }}
        videoSlideId="s3-video-slide"
        downIconId="s3-down-arrow-icon"
        downIcon={downIcon}
        currentPageIdx={currentPageIdx}
        index={2}
      />
    </div>
  );
};

export default Slide3;
