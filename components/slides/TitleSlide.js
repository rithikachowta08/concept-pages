import { PropTypes } from "prop-types";
import { Flex, TitleSlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";
import { useEffect, useRef } from "react";

const TitleSlide = ({
   moveToSection,
   title,
   downIcon,
   contentListItems,
   anchorIdxes,
}) => {
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current) {
         ref.current.parentNode.classList.add("dark");
      }
   }, []);
   return (
      <TitleSlideWrap ref={ref} bg={"DARK"}>
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
