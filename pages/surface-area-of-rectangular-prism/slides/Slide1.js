import dynamic from "next/dynamic";

const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title={"Surface Area of Rectangular Prism"}
         anchorIdxes={[4, 5, 6]}
         contentListItems={[
            "What is the surface area of a rectangular prism",
            "Total surface area",
            "Lateral surface area",
         ]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

export default Slide1;
