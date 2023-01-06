import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"));

// Classification of triangles
const Slide6 = ({ downIcon }) => {
   return (
      <VideoSlide2
         downIcon={downIcon}
         videoContent={{
            dash_Url:
               "https://byjus-in.akamaized.net/production/mpkgr-production-9a2efe48/r3was4/Maths_INTL/211208/18INTL06MAT10/18INTL06MAT10KT005_perfect/dash/h264.mpd",
            duration: "0:05:45",
            grade: "Grade 08",
            hls_Url:
               "https://byjus-in.akamaized.net/production/mpkgr-production-9a2efe48/r3was4/Maths_INTL/211208/18INTL06MAT10/18INTL06MAT10KT005_perfect/hls/h264.m3u8",
            rating: 0,
            thumbnail:
               "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/792473.jpg?1671000874",
            total_video_view_count: 65,
            video_packager_id: "66869",
            video_title: "Area of Triangle",
            video_type: "Landscape",
            videos_viewed_by_user: [],
            id: 803282,
         }}
      />
   );
};

export default Slide6;
