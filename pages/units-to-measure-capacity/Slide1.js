import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Units of Capacity"
         contentListItems={[
            "What is capacity measurement?",
            "Explore capacity using non-standard units",
            "Standard units",
            "Customary measurement system",
            "International system of units",
            "Imperial system of units",
         ]}
         anchorIdxes={[2, 4, 6, 8, 11, 15]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
