import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Relationship between Diameter and Circumference"
         contentListItems={[
            "Circumference of a circle",
            "Ratio of circumference to diameter",
            "Relation between circumference and diameter",
         ]}
         anchorIdxes={[2, 5, 7]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
