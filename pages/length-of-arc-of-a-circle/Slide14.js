import dynamic from "next/dynamic";
const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
   ssr: false,
});

const Slide14 = ({ downIcon }) => {
   // return <div>Video slide</div>;
   return (
      <div style={{ height: "100%" }}>
         <VideoSlide2 title="Video here" downIcon={downIcon}
         videoContent={{
            dash_Url:
              "https://byjus-in.akamaized.net/production/mpkgr-production-03324007/r47glk/Maths_INTL/211215/B2/18INTL08MAT11/18INTL08MAT11KT005/dash/h264.mpd",
            duration: "0:05:45",
            grade: "Grade 08",
            hls_Url:
              "https://byjus-in.akamaized.net/production/mpkgr-production-03324007/r47glk/Maths_INTL/211215/B2/18INTL08MAT11/18INTL08MAT11KT005/hls/h264.m3u8",
            rating: 0,
            thumbnail:
              "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803334.jpg?1671775639",
            total_video_view_count: 65,
            video_packager_id: "66869",
            video_title: "Length of an arc of a sector",
            video_type: "Landscape",
            videos_viewed_by_user: [],
            id: 803334,
          }}
         />
      </div>
   );
};

export default Slide14;
