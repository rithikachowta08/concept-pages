import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Volume of Composite Solids"
         contentListItems={[
            "What are composite solids?",
            "Volume of composite solids using unit cubes",
            "Volume of composite solids using formula",
         ]}
         anchorIdxes={[2, 4, 6, 8]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
