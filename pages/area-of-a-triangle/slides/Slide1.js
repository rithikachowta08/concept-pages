import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";

const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

// Title Slide
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title={"Area of a Triangle"}
         anchorIdxes={[2, 3, 8, 9, 18]}
         contentListItems={[
            "Definition",
            "General formula",
            "Heron's formula",
            "Area of different types of triangles",
            "Area of a triangle given two sides and the included angle",
         ]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      />
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
