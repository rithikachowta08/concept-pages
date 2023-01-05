import dynamic from "next/dynamic";

const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title={"Area of a Sector of a Circle"}
         anchorIdxes={[2, 3, 6, 8]}
         contentListItems={[
            "What is a sector of a circle?",
            "Area of a sector of a circle",
            "General formula",
            "Area of a sector using the length of an arc",
         ]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

export default Slide1;
