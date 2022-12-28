import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { TextSpan } from "components/text";
import { Flex, Icon } from "components/StyledElements";
import { fontSizes } from "utils/fontStyles";
import { colors } from "utils/colors";
const left_caret_dark = "assets/left_caret.svg";
const left_caret_light = "assets/left_caret_light.svg";

const NavWrap = styled.div`
   background: rgba(231, 228, 248, 0.4);
   backdrop-filter: ${(props) =>
      props.isExpanded ? "blur(15px)" : "blur(38px)"};
   padding: 70px 30px;
   border: ${(props) =>
      props.darkTheme ? "none" : `1px solid ${colors.PURPLE}`};
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   cursor: pointer;
   grid-row-start: 1;
   grid-column-start: 1;
   max-width: 500px;

   // Low res desktop and tablet landscape
   @media (min-width: 821px) and (max-width: 1224px) {
      padding: 30px 20px;
      border-radius: 15px;
      max-width: 400px;
   }

   // Small height desktop
   @media (min-height: 500px) and (max-height: 800px) and (min-width: 768px) {
      padding: 30px 20px;
      border-radius: 15px;
      max-width: 400px;
   }

   // Mobile landscape
   @media (min-height: 300px) and (max-height: 500px) and (max-width: 950px) {
      padding: 30px 20px;
      border-radius: 15px;
      max-width: 400px;
   }
`;

const SectionIndicator = styled.div`
   border-radius: 50%;
   position: relative;
   cursor: pointer;
   min-width: 14px;
   min-height: 14px;
   border: 4px solid
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
            ? `0px 0px 0px 6px rgba(255, 255, 255, 0.3)`
            : `0px 0px 0px 6px rgba(74, 51, 245, 0.3)`
         : `none`};
   transition: all 0.3s;

   // Low res desktop and tablet landscape
   @media (min-width: 821px) and (max-width: 1224px) {
      min-width: 10px;
      min-height: 10px;
      border: 3px solid
         ${(props) => (props.darkTheme ? colors.WHITE : colors.PURPLE)};
   }

   // Small height desktop
   @media (min-height: 500px) and (max-height: 800px) and (min-width: 768px) {
      min-width: 10px;
      min-height: 10px;
      border: 3px solid
         ${(props) => (props.darkTheme ? colors.WHITE : colors.PURPLE)};
   }

   // Mobile landscape
   @media (min-height: 300px) and (max-height: 500px) and (max-width: 950px) {
      min-width: 10px;
      min-height: 10px;
      border: 3px solid
         ${(props) => (props.darkTheme ? colors.WHITE : colors.PURPLE)};
   }
`;

const Connector = styled.div`
   width: 4px;
   height: 70px;
   background: ${(props) =>
      props.darkTheme
         ? `rgba(255, 255, 255, ${props.isComplete ? 1 : 0.3})`
         : `rgba(74, 51, 245, ${props.isComplete ? 1 : 0.3})`};
   transition: all 0.3s;
   transform: translateX(5px);

   // Low res desktop and tablet landscape
   @media (min-width: 821px) and (max-width: 1224px) {
      height: 50px;
      transform: translateX(3px);
   }

   // Small height desktop
   @media (min-height: 500px) and (max-height: 800px) and (min-width: 768px) {
      height: 50px;
      transform: translateX(3px);
   }

   // Mobile landscape
   @media (min-height: 300px) and (max-height: 500px) and (max-width: 950px) {
      height: 30px;
      transform: translateX(3px);
   }
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
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current) {
         global.desktopNavBarWidth = ref.current.getBoundingClientRect().width;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ref.current, currentPageIdx]);
   return (
      <NavWrap
         isExpanded={isExpanded}
         onMouseEnter={showNav}
         onMouseLeave={hideNav}
         darkTheme={darkTheme}
         ref={ref}
      >
         {isExpanded ? (
            <Flex
               cursor="pointer"
               onClick={hideNav}
               alignItems="center"
               marginBottom="2rem"
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
                     height="14px"
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
                           fontSize={fontSizes.MEDIUM}
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
