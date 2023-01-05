import dynamic from "next/dynamic";

const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title={"Area of a Circle"}
         anchorIdxes={[2, 3, 6, 8]}
         contentListItems={[
            "What is the area of a circle?",
            "General formula",
            "Area of a circle using the diameter",
            "Area of a circle using the circumference",
         ]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

export default Slide1;
