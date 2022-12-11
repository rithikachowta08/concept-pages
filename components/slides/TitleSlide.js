import { PropTypes } from "prop-types";
import { TitleSlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";

const TitleSlide = ({
   moveToSection,
   title,
   contentListItems,
   anchorIdxes,
}) => {
   return (
      <TitleSlideWrap bg={"DARK"}>
         <Title marginBottom="5%">{title}</Title>
         <ContentList
            items={contentListItems}
            moveTo={moveToSection}
            anchorIdxes={anchorIdxes}
         />
      </TitleSlideWrap>
   );
};

TitleSlide.propTypes = {
   moveToSection: PropTypes.any,
   title: PropTypes.string,
   contentListItems: PropTypes.array,
   anchorIdxes: PropTypes.array,
};

export default TitleSlide;
