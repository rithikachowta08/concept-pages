import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide5 = ({ downIcon }) => {
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2 title="Video here" downIcon={downIcon}
         videoContent={{
            dash_Url:
              "https://byjus-in.akamaized.net/production/mpkgr-production-f0130697/r3wasn/Maths_INTL/211208/18INTL06MAT10/18INTL06MAT10KT012_perfect/dash/h264.mpd",
            duration: "0:05:45",
            grade: "Grade 08",
            hls_Url:
              "https://byjus-in.akamaized.net/production/mpkgr-production-f0130697/r3wasn/Maths_INTL/211208/18INTL06MAT10/18INTL06MAT10KT012_perfect/hls/h264.m3u8",
            rating: 0,
            thumbnail:
              "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/792471.jpg?1671000412",
            total_video_view_count: 65,
            video_packager_id: "66869",
            video_title: "NCERT - Grade 08 - Physics - Force And Pressure - Q4",
            video_type: "Landscape",
            videos_viewed_by_user: [],
            id: 66869,
          }}
         />
      </div>
   );
};

export default Slide5;
