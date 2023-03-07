import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Volume of Triangular Prism"
         contentListItems={[
            "What is the volume of a triangular prism?",
            "General formula",
            "Volume of different types of triangular prisms",
         ]}
         anchorIdxes={[2, 4, 7]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
