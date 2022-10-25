import { PropTypes } from "prop-types";
import { SlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";
import bg from "assets/purple_bg_triangles.png";

const Slide1 = ({ moveToSection }) => {
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Title marginBottom="50px">Triangles</Title>
      <ContentList
        items={["What is a triangle?", "Types of triangles"]}
        moveTo={moveToSection}
        anchorIdxes={[2, 4]}
      />
    </SlideWrap>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any
};

export default Slide1;
