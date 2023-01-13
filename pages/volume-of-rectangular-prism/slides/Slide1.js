import dynamic from "next/dynamic";

const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title={"Volume of a Rectangular Prism"}
         anchorIdxes={[2, 3, 6, 8]}
         contentListItems={[
            "What is a rectangular prism?",
            "Volume by counting the unit cubes",
            "General Formula",
            "Types of rectangular prisms",
         ]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

export default Slide1;
