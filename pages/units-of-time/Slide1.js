import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Units of Time"
         contentListItems={[
            "What is time?",
            "How do we measure time?",
            "Units of time",
            "Relationship between units of time",
         ]}
         anchorIdxes={[2, 3, 5, 10]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
