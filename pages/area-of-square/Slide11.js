import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
  ssr: false,
});

const Slide11 = ({ downIcon, currentPageIdx }) => {
  return (
    <div style={{ height: "100%" }}>
      <VideoSlide2
        downIcon={downIcon}
        videoContent={{
          videoId: "397548",
          title: "Derivation of formula of area of square",
          duration: 52,
          dash_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-dc6d051e/robhcp/INTL_Maths/230111/SEO18INTL06MAT10KT003/dash/h264.mpd",
          hls_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-dc6d051e/robhcp/INTL_Maths/230111/SEO18INTL06MAT10KT003/hls/h264.m3u8",
          thumbnail:
            "https://search-mathstatic.byjusweb.com/assets/video-thumbnails/Rectangle+and+Square+Perimeter+and+Area_03.png",
        }}
        downIconId="s5-video-down-icon"
        videoSlideId="s5-video-slide"
        currentPageIdx={currentPageIdx}
        index={9}
      />
    </div>
  );
};

export default Slide11;
