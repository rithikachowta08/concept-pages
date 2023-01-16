import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Volume of a Cylinder"
         contentListItems={[
            "What is the volume of a cylinder?",
            "General Formula",
            "Volume of different types of cylinders",
         ]}
         anchorIdxes={[2, 4, 7]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
