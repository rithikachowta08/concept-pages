import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Volume and Cubic Units"
         contentListItems={[
            "What is volume?",
            "Volume by counting unit cubes",
            "Volume in cubic units",
            "Limitations of volume measurement using unit cubes",
         ]}
         anchorIdxes={[2, 3, 6, 8]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
