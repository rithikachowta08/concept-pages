import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
  ssr: false,
});

const Slide13 = ({ downIcon }) => {
  // return <div>Video slide</div>;
  return (
    <div style={{ height: "100%" }}>
      <VideoSlide2
        videoContent={{
          dash_Url:
            "https://byjus-in.akamaized.net/production/mpkgr-production-54f9577e/r47glm/Maths_INTL/211215/B2/18INTL08MAT11/18INTL08MAT11KT015/dash/h264.mpd",
          hls_Url:
            "https://byjus-in.akamaized.net/production/mpkgr-production-54f9577e/r47glm/Maths_INTL/211215/B2/18INTL08MAT11/18INTL08MAT11KT015/hls/h264.m3u8",
          thumbnail:
            "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803338.jpg?1671775717",
        }}
      />
    </div>
  );
};

export default Slide13;
