import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
  ssr: false,
});

const Slide5 = ({ downIcon, currentPageIdx }) => {
  return (
    <div style={{ height: "100%" }}>
      <VideoSlide2
        downIcon={downIcon}
        videoContent={{
          videoId: "397550",
          title: "Derivation of formula of area of parallelogram",
          dash_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-f2e63abd/robhcz/INTL_Maths/230111/SEO18INTL07MAT11KT007/dash/h264.mpd",
          hls_Url:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-f2e63abd/robhcz/INTL_Maths/230111/SEO18INTL07MAT11KT007/hls/h264.m3u8",
          thumbnail:
            "https://drive.google.com/file/d/1SO-s6Afki_GTs4JxpGi0VxYIE-CFm5As/view?usp=share_link",
        }}
        downIconId="s5-video-down-icon"
        videoSlideId="s5-video-slide"
        currentPageIdx={currentPageIdx}
        index={4}
      />
    </div>
  );
};

export default Slide5;
