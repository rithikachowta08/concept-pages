import { PropTypes } from "prop-types";
import TitleSlide from "components/slides/TitleSlide";

const Slide1 = ({ moveToSection }) => {
  return (
    <TitleSlide
      moveToSection={moveToSection}
      title="Triangles"
      anchorIdxes={[2, 4, 10]}
      contentListItems={["What is a triangle?", "Types of triangles", "Properties of triangles"]}
    />
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any
};

export default Slide1;
