import dynamic from "next/dynamic";
// const VideoSlide2 = dynamic(() => import("components/slides/VideoSlide2"), {
//    ssr: false,
// });

const Slide5 = ({ downIcon }) => {
   return <div>Video slide</div>;
   // return (
   //    <div style={{ height: "100%" }}>
   //       <VideoSlide2 title="Video here" downIcon={downIcon} />
   //    </div>
   // );
};

export default Slide5;
