const VideoSlide = dynamic(() => import("components/slides/VideoSlide2"));
import dynamic from "next/dynamic";

// video slide
const Slide10 = ({ navBar }) => {
   return (
      <VideoSlide
         navBar={navBar}
         videoContent={{
            dash_Url:
               "https://byjus-in.akamaized.net/production/mpkgr-production-746d6072/r47ghj/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT014/dash/h264.mpd",
            duration: "0:05:45",
            grade: "Grade 08",
            hls_Url:
               "https://byjus-in.akamaized.net/production/mpkgr-production-746d6072/r47ghj/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT014/hls/h264.m3u8",
            rating: 0,
            thumbnail:
               "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803282.jpg?1671774814",
            total_video_view_count: 65,
            video_packager_id: "66869",
            video_title: "Area of a Circle",
            video_type: "Landscape",
            videos_viewed_by_user: [],
            id: 803282,
         }}
         isLastSlide={true}
      />
   );
};

export default Slide10;
