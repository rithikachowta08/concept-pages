import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
  return (
    <TitleSlide
      title="Area of a Rectangle"
      contentListItems={[
        "What is area of rectangle?",
        "Area by counting unit squares",
        "General formula",
        "Area using diagonal",
      ]}
      anchorIdxes={[2, 4, 7, 9]}
      moveToSection={moveToSection}
      downIcon={downIcon}
    ></TitleSlide>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any,
};

export default Slide1;
