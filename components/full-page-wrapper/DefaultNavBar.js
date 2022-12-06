import PropTypes from "prop-types";
import styled from "styled-components";
import { TextSpan } from "components/text";
import { Flex, Icon } from "components/StyledElements";
import { fontSizes } from "utils/fontStyles";
import { colors } from "utils/colors";
const left_caret_dark = "assets/left_caret.svg";
const left_caret_light = "assets/left_caret_light.svg";

const NavWrap = styled.div`
   padding: 70px 30px;
   border: ${(props) =>
      props.darkTheme ? "none" : `1px solid ${colors.PURPLE}`};
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   cursor: pointer;
`;

const SectionIndicator = styled.div`
   border-radius: 50%;
   position: relative;
   cursor: pointer;
   width: ${(props) => (props.isMobile ? "6px" : "14px")};
   height: ${(props) => (props.isMobile ? "6px" : "14px")};
   border: ${(props) => (props.isMobile ? "2px" : "4px")} solid
      ${(props) => (props.darkTheme ? colors.WHITE : colors.PURPLE)};
   background: ${(props) =>
      props.isComplete
         ? props.darkTheme
            ? `${colors.WHITE}`
            : `${colors.PURPLE}`
         : `none`};
   box-shadow: ${(props) =>
      props.isComplete
         ? props.darkTheme
            ? `0px 0px 0px ${
                 props.isMobile ? "4" : "6"
              }px rgba(255, 255, 255, 0.3)`
            : `0px 0px 0px ${
                 props.isMobile ? "4" : "6"
              }px rgba(74, 51, 245, 0.3)`
         : `none`};
   transition: all 0.3s;
`;

const Connector = styled.div`
   width: 4px;
   height: 50px;
   background: ${(props) =>
      props.darkTheme
         ? `rgba(255, 255, 255, ${props.isComplete ? 1 : 0.3})`
         : `rgba(74, 51, 245, ${props.isComplete ? 1 : 0.3})`};
   transition: all 0.3s;
   transform: translateX(9px);
`;

const Fill = styled.div`
   width: 4px;
   height: ${(props) => props.percentage}%;
   background: ${(props) =>
      props.darkTheme ? `${colors.WHITE}` : `${colors.PURPLE}`};
   transition: all 0.3s;
`;

const DefaultNavBar = ({
   isExpanded,
   sections,
   currentPageIdx,
   onSectionClick,
   darkTheme,
   showNav,
   hideNav,
}) => {
   return (
      <NavWrap
         isExpanded={isExpanded}
         onMouseEnter={showNav}
         onMouseLeave={hideNav}
         darkTheme={darkTheme}
      >
         {isExpanded ? (
            <Flex
               cursor="pointer"
               onClick={hideNav}
               alignItems="center"
               marginBottom="40px"
            >
               <Icon
                  src={darkTheme ? left_caret_light : left_caret_dark}
               ></Icon>
               <TextSpan
                  cursor="pointer"
                  marginLeft="20px"
                  color={darkTheme ? colors.WHITE : colors.PURPLE}
                  fontSize={fontSizes.SMALL}
               >
                  Back to concepts
               </TextSpan>
            </Flex>
         ) : null}
         {sections.map((section, idx) => {
            let percentage = 0;
            const slides = section.slides;
            if (currentPageIdx >= slides[slides.length - 1]) {
               percentage = 100;
            } else if (slides.includes(currentPageIdx)) {
               const slideIdx = slides.indexOf(currentPageIdx);
               percentage = ((slideIdx + 1) / slides.length) * 100;
            }
            return (
               <div key={idx}>
                  <Flex
                     key={section.title}
                     alignItems="center"
                     cursor="pointer"
                     // moveTo expects slide indices to start from 1
                     data-section-idx={section.slides[0] + 1}
                     onClick={onSectionClick}
                  >
                     <SectionIndicator
                        darkTheme={darkTheme}
                        isComplete={currentPageIdx >= section.slides[0]}
                     ></SectionIndicator>
                     {isExpanded ? (
                        <TextSpan
                           cursor="pointer"
                           color={darkTheme ? colors.WHITE : colors.BLACK}
                           marginLeft="20px"
                        >
                           {section.title}
                        </TextSpan>
                     ) : null}
                  </Flex>
                  {idx !== sections.length - 1 ? (
                     <Connector darkTheme={darkTheme}>
                        <Fill darkTheme={darkTheme} percentage={percentage} />
                     </Connector>
                  ) : null}
               </div>
            );
         })}
      </NavWrap>
   );
};

DefaultNavBar.propTypes = {
   sections: PropTypes.array.isRequired,
   onSectionClick: PropTypes.func.isRequired,
   showNav: PropTypes.func.isRequired,
   hideNav: PropTypes.func.isRequired,
   currentPageIdx: PropTypes.number,
   isExpanded: PropTypes.bool,
   darkTheme: PropTypes.bool,
};

export default DefaultNavBar;
