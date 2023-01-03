import { PropTypes } from "prop-types";
import styled from "styled-components";
import { TitleSlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";
import { useEffect, useRef } from "react";

const Flex = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 0 0 10vw;

   @media (orientation: portrait) {
      padding: 0 5vw;
   }
`;

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
         <Flex>
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
