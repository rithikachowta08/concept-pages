import { PropTypes } from "prop-types";
import TitleSlide from "components/slides/TitleSlide";

const Slide1 = ({ moveToSection }) => {
  return (
    <TitleSlide
      title="Volume of a cube"
      contentListItems={[
        "What is the volume of a cube",
        "Formula",
        "Volume of a cube using diagnoal",
        "Rectangular prism vs cube"
      ]}
      anchorIdxes={[2, 4, 10]}
      moveToSection={moveToSection}></TitleSlide>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any
};

export default Slide1;
