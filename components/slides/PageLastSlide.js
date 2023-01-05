import { PropTypes } from "prop-types";
import { SlideWrap } from "components/StyledElements";
import { FillerNavBar, SlideSecondaryTitle, SlideTitle } from "./common";
import styled from "styled-components";
import { Paragraph } from "components/text";
import { colors } from "utils/colors";

const shareIcon = "assets/share-icon.svg";

const UpperDiv = styled.div`
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: center;
   items-align: center;
   height: 60%;
   width: 100%;
`;

const LowerDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   items-align: center;
   background-color: #00000040;
   height: 40%;
   width: 100%;
`;

const ShareIconWrapper = styled.div`
   position: absolute;
   width: 100%;
   bottom: 50px;
   display: flex;
   justify-content: center;
`;

const ShareIcon = styled.img`
   aspect-ratio: 1/1;
   width: 50px;
   cursor: pointer;
`;

const PageLastSlide = ({ currentPageTitle, bg = "DARK", nextPage }) => {
   return (
      <SlideWrap bg={bg} isLastSlide={true}>
         <FillerNavBar />
         <UpperDiv>
            <SlideTitle centerAlign={true}>Congratulations!</SlideTitle>
            <SlideSecondaryTitle
               centerAlign={true}
               secondaryTitle={`You have mastered the topic`}
            />
            <SlideSecondaryTitle
               secondaryTitle={currentPageTitle}
               centerAlign={true}
            />
            <ShareIconWrapper>
               <ShareIcon src={shareIcon} alt="share" />
            </ShareIconWrapper>
         </UpperDiv>
         <LowerDiv>
            <Paragraph textAlign={"center"} color={colors.WHITE}>
               See Next Topic
            </Paragraph>
            <SlideTitle centerAlign={true}>{nextPage}</SlideTitle>
         </LowerDiv>
      </SlideWrap>
   );
};

PageLastSlide.propTypes = {
   currentPageTitle: PropTypes.string.isRequired,
   bg: PropTypes.string,
   nextPage: PropTypes.string.isRequired,
};

export default PageLastSlide;
