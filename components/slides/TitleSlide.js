import { PropTypes } from "prop-types";
import { Flex, TitleSlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";

const TitleSlide = ({
   moveToSection,
   title,
   downIcon,
   contentListItems,
   anchorIdxes,
}) => {
   return (
      <TitleSlideWrap bg={"DARK"}>
         <Flex direction="column" padding="0 0 0 10vw">
            <Title marginBottom="5%">{title}</Title>
            <ContentList
               items={contentListItems}
               moveTo={moveToSection}
               anchorIdxes={anchorIdxes}
            />
         </Flex>
         {downIcon}
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
