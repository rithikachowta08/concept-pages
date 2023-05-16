import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Coordinate Plane and Coordinates"
         contentListItems={[
            "What is a coordinate plane?",
            "What are coordinates?",
            "How to locate points on a coordinate plane?",
            "How to plot a point on a coordinate plane?",
         ]}
         anchorIdxes={[2, 7, 9, 11]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
