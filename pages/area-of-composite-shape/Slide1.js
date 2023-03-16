import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Area of a Composite Shape"
         contentListItems={[
            "What is a composite shape?",
            "Area of a composite shape",
            "Calculating area by counting unit squares",
            "Calculating area by additive method",
            "Calculating area by subtractive method",
         ]}
         anchorIdxes={[2, 4, 5, 7, 11]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
