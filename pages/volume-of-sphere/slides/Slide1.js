import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Volume of Sphere"
         contentListItems={[
            "What is  a sphere?",
            "What is the volume of a sphere?",
            "General Formula",
         ]}
         anchorIdxes={[2, 3, 5]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

export default Slide1;
