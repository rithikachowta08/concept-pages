import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
  return (
    <TitleSlide
      title="Area of a Rhombus"
      contentListItems={[
        "What is the area of a rhombus?",
        "Area of rhombus using base and height",
        "Area of rhombus using diagonals",
        "Area of rhombus using trigonometry",
      ]}
      anchorIdxes={[2, 5, 8, 11]}
      moveToSection={moveToSection}
      downIcon={downIcon}
    ></TitleSlide>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any,
};

export default Slide1;
