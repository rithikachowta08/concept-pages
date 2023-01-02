import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import DownArrowIcon from "components/DownArrowIcon.js";
import NavigationBar from "./NavigationBar";
import PropTypes from "prop-types";
import { colors } from "utils/colors";

let fullPage;

export const FullPageCustomWrapper = ({
   slidesComponentList,
   darkBgIndices,
   navigationSections,
}) => {
   const [currentPageIdx, setCurrentPageIdx] = useState(0);
   return (
      <>
         <NavigationBar
            opacity={currentPageIdx === 0 ? 0 : 1}
            sections={navigationSections}
            darkTheme={darkBgIndices.includes(currentPageIdx)}
            moveTo={fullPage?.moveTo}
            currentPageIdx={currentPageIdx}
         />
         <ReactFullpage
            //fullpage options
            // licenseKey={"YOUR_KEY_HERE"}
            navigationTooltips={[]}
            css3={false}
            scrollBar={false}
            scrollingSpeed={600}
            fitToSectionDelay={900}
            onLeave={function (origin, destination) {
               setCurrentPageIdx(destination.index);
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
                              <div className="section" key={idx}>
                                 {/* No navigation bar on title page */}
                                 {React.cloneElement(itm, {
                                    downIcon,
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
