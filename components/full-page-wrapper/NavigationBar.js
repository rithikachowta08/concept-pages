import styled from "styled-components";
import PropTypes from "prop-types";
import MobileNavBar from "./MobileNavBar";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";
import { useState } from "react";
import DefaultNavBar from "./DefaultNavBar";

const Wrapper = styled.div`
   width: 80px;
   z-index: 6;
   position: fixed;
   opacity: ${(props) => props.opacity};
   top: 50vh;
   left: 30px;
   transform: translateY(-50%);
   transition: opacity 0.3s;
   display: grid;
   grid-template-columns: 1fr;

   @media (min-width: 200px) and (max-width: 810px) and (min-height: 600px) {
      height: 45px;
      width: 100%;
      top: 0;
      left: 0;
      transform: none;
   }

   @media (min-width: 811px) and (max-width: 992px) {
      scale: 0.8;
      transform: translateY(-70%);
   }

   @media (min-height: 500px) and (max-height: 800px) and (min-width: 768px) {
      scale: 0.8;
      transform: translateY(-70%);
   }

   @media (min-height: 300px) and (max-height: 500px) and (max-width: 950px) {
      scale: 0.5;
      transform: translateY(-100%);
   }
`;

const NavigationBar = ({
   darkTheme,
   moveTo,
   sections,
   opacity,
   currentPageIdx,
}) => {
   const [isExpanded, setIsExpanded] = useState(false);
   const showNav = () => {
      setIsExpanded(true);
   };
   const toggleNav = () => {
      setIsExpanded(!isExpanded);
   };
   const hideNav = () => {
      setIsExpanded(false);
   };
   const onSectionClick = (e) => {
      e.stopPropagation();
      setIsExpanded(false);
      moveTo(e.currentTarget.getAttribute("data-section-idx"));
   };
   return (
      <Wrapper isExpanded={isExpanded} opacity={opacity}>
         <MobileComponent>
            <MobileNavBar
               toggleNav={toggleNav}
               sections={sections}
               isExpanded={isExpanded}
               darkTheme={darkTheme}
               onSectionClick={onSectionClick}
               currentPageIdx={currentPageIdx}
            />
         </MobileComponent>
         <DesktopComponent>
            <DefaultNavBar
               showNav={showNav}
               hideNav={hideNav}
               sections={sections}
               isExpanded={isExpanded}
               darkTheme={darkTheme}
               onSectionClick={onSectionClick}
               currentPageIdx={currentPageIdx}
            />
         </DesktopComponent>
      </Wrapper>
   );
};

NavigationBar.propTypes = {
   darkTheme: PropTypes.bool,
   sections: PropTypes.array.isRequired,
   moveTo: PropTypes.func,
   currentPageIdx: PropTypes.number,
   deviceType: PropTypes.string,
};

export default NavigationBar;
