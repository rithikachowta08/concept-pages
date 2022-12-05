import { PropTypes } from "prop-types";
import { SlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";
import bg from "assets/purple_bg_triangles.png";

const Slide1 = ({ moveToSection }) => {
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Title marginBottom="50px">Area of a Rectangle</Title>
      <ContentList
        items={[
          "What is area of rectangle?",
          "Area by counting unit squares",
          "General formula",
          "Area using diagonal"
        ]}
        moveTo={moveToSection}
        anchorIdxes={[2, 3, 4, 7]}
      />
    </SlideWrap>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any
};

export default Slide1;
