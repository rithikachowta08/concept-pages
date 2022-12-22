import dynamic from "next/dynamic";

const VideoSlide = dynamic(() => import("components/slides/VideoSlide"));

const Slide3 = ({ downIcon }) => {
   return <VideoSlide downIcon={downIcon} />;
};

export default Slide3;
