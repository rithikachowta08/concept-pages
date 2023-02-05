import styled from "styled-components";
import PropTypes from "prop-types";
import MobileNavBar from "./MobileNavBar";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";
import { useState } from "react";
import DefaultNavBar from "./DefaultNavBar";

const Wrapper = styled.div`
   width: fit-content;
   z-index: 6;
   position: fixed;
   opacity: ${(props) => props.opacity};
   pointer-events: ${(props) => (props.opacity === 0 ? "none" : "unset")};
   top: 50vh;
   left: 30px;
   transform: translateY(-50%);
   transition: opacity 0.3s;
   display: grid;
   grid-template-columns: 1fr;

   // Mobile
   @media (orientation: portrait) {
      height: 45px;
      width: 100%;
      top: 0;
      left: 0;
      transform: none;
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
      moveTo(
         Number(e.currentTarget.getAttribute("data-leaflet-idx")),
         Number(e.currentTarget.getAttribute("data-section-idx"))
      );
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
