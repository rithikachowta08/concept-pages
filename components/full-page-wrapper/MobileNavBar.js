import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Icon } from "components/StyledElements";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";
const down_caret_light = "assets/down_caret.svg";
const up_caret_light = "assets/up_caret_light.svg";
const down_caret_dark = "assets/down_caret_dark.svg";
const up_caret_dark = "assets/up_caret.svg";

const MobileNavWrap = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   justify-content: center;
   border-radius: ${(props) =>
      props.isExpanded ? "0px 0px 15px 15px" : "0px"};
`;

const SectionBar = styled.div`
   height: 0px;
   flex: ${(props) => props.flex};
   border: 2px solid
      ${(props) =>
         props.darkTheme
            ? `rgba(255, 255, 255, 0.2)`
            : `rgba(74, 51, 245, 0.2)`};
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

const BarFill = styled.div`
   height: 0px;
   width: ${(props) => props.percentage}%;
   border: ${(props) =>
      props.percentage
         ? `2px solid ${props.darkTheme ? colors.WHITE : colors.PURPLE}`
         : "none"};
   transform: translate(-2px, -2px);
   transition: all 0.3s;
`;

const MobileNavBar = ({
   toggleNav,
   currentPageIdx,
   onSectionClick,
   darkTheme,
   sections,
   isExpanded,
}) => {
   const currentSection =
      sections.find((section) => section.slides.includes(currentPageIdx)) ||
      sections[0];
   let icon = darkTheme ? down_caret_light : down_caret_dark;
   if (isExpanded) {
      icon = darkTheme ? up_caret_light : up_caret_dark;
   }
   return (
      <MobileNavWrap isExpanded={isExpanded} darkTheme={darkTheme}>
         <Flex
            padding={isExpanded ? "20px" : "10px 20px 0px 20px"}
            color={darkTheme ? colors.WHITE : colors.BLACK}
            justifyContent="space-between"
         >
            {isExpanded ? (
               <Flex gap="10px" direction="column">
                  {sections.map((section, idx) => (
                     <Flex
                        // moveTo expects slide indices to start from 1
                        data-section-idx={section.slides[0] + 1}
                        onClick={onSectionClick}
                        cursor="pointer"
                        gap="10px"
                        alignItems="center"
                        key={idx}
                     >
                        <SectionIndicator
                           isMobile
                           darkTheme={darkTheme}
                           isComplete={currentPageIdx >= section.slides[0]}
                        />
                        <TextSpan
                           color={darkTheme ? colors.WHITE : colors.BLACK}
                        >
                           {section.title}
                        </TextSpan>
                     </Flex>
                  ))}
               </Flex>
            ) : (
               <TextSpan color={darkTheme ? colors.WHITE : colors.BLACK}>
                  {currentSection.title}
               </TextSpan>
            )}
            <Icon
               alignSelf={isExpanded ? "flex-start" : "center"}
               src={icon}
               onClick={toggleNav}
            />
         </Flex>
         <Flex justifyContent="space-between">
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
                  <SectionBar
                     darkTheme={darkTheme}
                     flex={95 / sections.length / 100}
                     key={idx}
                  >
                     <BarFill darkTheme={darkTheme} percentage={percentage} />
                  </SectionBar>
               );
            })}
         </Flex>
      </MobileNavWrap>
   );
};

MobileNavBar.propTypes = {
   sections: PropTypes.array.isRequired,
   onSectionClick: PropTypes.func.isRequired,
   toggleNav: PropTypes.func.isRequired,
   currentPageIdx: PropTypes.number,
   isExpanded: PropTypes.bool,
   darkTheme: PropTypes.bool,
};

export default MobileNavBar;
