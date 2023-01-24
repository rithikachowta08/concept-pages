import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Area of a Rectangle"
         contentListItems={[
            "What is the area of a rectangle?",
            "Area by counting unit squares",
            "General formula",
            "Area using diagonal",
         ]}
         anchorIdxes={[2, 5, 6, 8]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
