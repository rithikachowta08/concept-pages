import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));

const Slide3 = ({ downIcon }) => {
   return (
      <VideoSlide
         downIcon={downIcon}
         videoContent={{
            dash_Url:
               "https://byjus-in.akamaized.net/production/mpkgr-production-f5cb9040/r47ghp/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT020/dash/h264.mpd",
            duration: "0:05:45",
            grade: "Grade 08",
            hls_Url:
               "https://byjus-in.akamaized.net/production/mpkgr-production-f5cb9040/r47ghp/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT020/hls/h264.m3u8",
            rating: 0,
            thumbnail:
               "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803308.jpg?1671775283",
            total_video_view_count: 65,
            video_packager_id: "66869",
            video_title: "Surface Area of Prisms",
            video_type: "Landscape",
            videos_viewed_by_user: [],
            id: 803308,
         }}
      />
   );
};

export default Slide3;
