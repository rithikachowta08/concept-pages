import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Unit Conversion - Area"
         contentListItems={[
            "What is area?",
            "How do we measure area?",
            "Customary measurement system",
            "International system of units",
         ]}
         anchorIdxes={[2, 3, 5, 8]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
