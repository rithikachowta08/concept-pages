import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Surface Area of a Right Triangular Prism"
         contentListItems={[
            "What is the surface area of a right triangular prism?",
            "Lateral surface area",
            "Total surface area",
         ]}
         anchorIdxes={[2, 5, 8]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
