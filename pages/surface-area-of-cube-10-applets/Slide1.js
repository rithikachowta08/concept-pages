import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
  return (
    <TitleSlide
      title="Surface Area of Cube 10 applets"
      contentListItems={[
        "What is a cube?",
        "What is the surface area of a cube?",
        "Total surface area",
        "Lateral surface area",
      ]}
      anchorIdxes={[2, 3, 5, 7]}
      moveToSection={moveToSection}
      downIcon={downIcon}
    ></TitleSlide>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any,
  downIcon: PropTypes.node,
};

export default Slide1;
