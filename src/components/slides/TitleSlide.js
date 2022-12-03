import { PropTypes } from "prop-types";
import { SlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";

const TitleSlide = ({ moveToSection, title, contentListItems, anchorIdxes }) => {
  return (
    <SlideWrap
      bg={"DARK_PATTERNED"}
      paddingLeft="200px">
      <Title marginBottom="50px">{title}</Title>
      <ContentList
        items={contentListItems}
        moveTo={moveToSection}
        anchorIdxes={anchorIdxes}
      />
    </SlideWrap>
  );
};

TitleSlide.propTypes = {
  moveToSection: PropTypes.any,
  title: PropTypes.string,
  contentListItems: PropTypes.array,
  anchorIdxes: PropTypes.array
};

export default TitleSlide;
