import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Volume of a Cube"
         contentListItems={[
            "What is the volume of a cube?",
            "General Formula",
            "Volume of a cube using diagonal",
            "Rectangular prism vs cube",
         ]}
         anchorIdxes={[2, 6, 10,16]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
