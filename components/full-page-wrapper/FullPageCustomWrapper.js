import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import DownArrowIcon from "components/DownArrowIcon.js";
import NavigationBar from "./NavigationBar";
import PropTypes from "prop-types";
import { colors } from "utils/colors";
import useAnalytics, {
   onScrollToLeaflet,
   onNavbarSectionClick,
} from "utils/analytics";

let fullPage;

export const FullPageCustomWrapper = ({
   slidesComponentList,
   darkBgIndices,
   navigationSections,
}) => {
   useAnalytics({
      leafletCount: slidesComponentList.length,
      sectionCount: navigationSections.length,
   });
   const [currentPageIdx, setCurrentPageIdx] = useState(0);
   const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
   const onNavSectionClick = (destinationLeafletIdx, destinationSectionIdx) => {
      onNavbarSectionClick({
         sourceSectionNumber: currentSectionIdx + 1,
         sourceLeafletNumber: currentPageIdx + 1,
         destinationLeafletNumber: destinationLeafletIdx,
         destinationSectionNumber: destinationSectionIdx + 1,
      });
      fullPage?.moveTo(destinationLeafletIdx);
   };
   return (
      <>
         <NavigationBar
            opacity={currentPageIdx === 0 ? 0 : 1}
            sections={navigationSections}
            darkTheme={darkBgIndices.includes(currentPageIdx)}
            moveTo={onNavSectionClick}
            currentPageIdx={currentPageIdx}
         />
         <ReactFullpage
            //fullpage options
            // licenseKey={"YOUR_KEY_HERE"}
            navigationTooltips={[]}
            css3={true}
            scrollBar={false}
            scrollingSpeed={600}
            fitToSectionDelay={900}
            onLeave={function (origin, destination) {
               setCurrentPageIdx(destination.index);
               const sectionNumber =
                  navigationSections.findIndex((section) =>
                     section.slides.includes(destination.index)
                  ) || 0;
               setCurrentSectionIdx(sectionNumber);
               onScrollToLeaflet({
                  leafletType:
                     slidesComponentList[destination.index].props.type,
                  leafletNumber: destination.index,
                  sectionNumber,
               });
            }}
            render={({ state, fullpageApi }) => {
               const moveToSection = fullpageApi?.moveTo;
               fullPage = fullpageApi;
               return (
                  <>
                     <ReactFullpage.Wrapper>
                        {slidesComponentList.map((itm, idx) => {
                           const downIcon = (
                              <DownArrowIcon
                                 visibility={
                                    idx === slidesComponentList.length - 1
                                       ? "hidden"
                                       : "visible"
                                 }
                                 onClick={fullpageApi?.moveSectionDown}
                                 color={
                                    darkBgIndices.includes(idx)
                                       ? colors.WHITE
                                       : colors.DARK_GREY
                                 }
                              />
                           );
                           return (
                              <div className="section" key={idx} id="full-page-wrapper">
                                 {/* No navigation bar on title page */}
                                 {React.cloneElement(itm, {
                                    downIcon,
                                    currentPageIdx,
                                    moveToSection,
                                 })}
                              </div>
                           );
                        })}
                     </ReactFullpage.Wrapper>
                  </>
               );
            }}
         />
      </>
   );
};

FullPageCustomWrapper.propTypes = {
   slidesComponentList: PropTypes.array.isRequired,
   darkBgIndices: PropTypes.array.isRequired,
   navigationSections: PropTypes.array.isRequired,
};
