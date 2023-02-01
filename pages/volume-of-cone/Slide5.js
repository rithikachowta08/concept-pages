import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
  ssr: false,
});

const Slide5 = ({ downIcon, currentPageIdx }) => {
  return (
    <div style={{ height: "100%" }}>
      <VideoSlide2
        videoContent={{
          videoId: "402840",
          title: "Video here",
          dash_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-15f96cac/rom3r3/INTL_Maths/230116/SEO18INTL08MAT11KT015/dash/h264.mpd",
          hls_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-15f96cac/rom3r3/INTL_Maths/230116/SEO18INTL08MAT11KT015/hls/h264.m3u8",
          thumbnail:
            "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803338.jpg?1671775717",
        }}
        videoSlideId="s5-video-slide"
        downIconId="s5-down-arrow-icon"
        downIcon={downIcon}
        currentPageIdx={currentPageIdx}
        index={4}
      />
    </div>
  );
};

export default Slide5;
