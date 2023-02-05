import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
  return (
    <TitleSlide
      title="Volume of a Cone"
      contentListItems={[
        "Introduction to a cone",
        "Volume of a cone",
        "General formula",
        "Relation between volume of cone and cylinder",
      ]}
      anchorIdxes={[2, 6, 7, 9]}
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
