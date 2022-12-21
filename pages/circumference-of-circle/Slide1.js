import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Circumference of a Circle"
         contentListItems={[
            "What is the circumference of a circle?",
            "Formula",
            "Derivation of the formula",
            "How many revolutions?",
         ]}
         anchorIdxes={[2, 3, 5, 8]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
