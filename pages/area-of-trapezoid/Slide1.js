import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Area of Trapezoid"
         contentListItems={[
            "What is the area of a trapezoid?",
            "General formula",
            "Derivation of the formula",
            "Area of a trapezoid with 4 given sides"
         ]}
         anchorIdxes={[2, 3, 4, 7]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
