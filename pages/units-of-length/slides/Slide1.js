import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Units of Length"
         contentListItems={[
            "What is length measurement?",
            "Explore length using non-standard units",
            "Standard units",
            "Customary measurement system",
            "International system of units",
            "Imperial system of units",
         ]}
         anchorIdxes={[2, 3, 5, 8, 10, 14]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
