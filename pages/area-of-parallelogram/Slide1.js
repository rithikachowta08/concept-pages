import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Area of a Parallelogram"
         contentListItems={[
            "What is the area of a parallelogram?",
            "General formula",
            "Area of parallelogram without using height",
            "Area of a parallelogram using diagonals",
            "Area of a parallelogram in vector form",
         ]}
         anchorIdxes={[2,3,7,9,12]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
