import { PropTypes } from "prop-types";
import TitleSlide from "components/slides/TitleSlide";

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Area of Square"
         contentListItems={[
            "What is the area of a square?",
            "Area by counting unit squares",
            "General Formula",
            "Area using diagonal",
         ]}
         anchorIdxes={[2, 4,8]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
