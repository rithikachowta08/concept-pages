import { PropTypes } from "prop-types";
import TitleSlide from "components/slides/TitleSlide";

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Area of Square"
         contentListItems={[
            "What is the surface area of a cylinder?",
            "Curved surface area",
            "Total surface area",
         ]}
         anchorIdxes={[2, 4, 6]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
