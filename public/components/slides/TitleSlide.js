import { PropTypes } from "prop-types";
import { SlideWrap } from "components/StyledElements";
import styled from "styled-components/macro";
import { Title, ContentList } from "components/text";

const StyledDiv = styled.div`
  padding: 10%;
`;

const TitleSlide = ({ moveToSection, title, contentListItems, anchorIdxes }) => {
  return (
    <SlideWrap bg={"DARK_PATTERNED"}>
      <StyledDiv>
        <Title marginBottom="50px">{title}</Title>
        <ContentList
          items={contentListItems}
          moveTo={moveToSection}
          anchorIdxes={anchorIdxes}
        />
      </StyledDiv>
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
