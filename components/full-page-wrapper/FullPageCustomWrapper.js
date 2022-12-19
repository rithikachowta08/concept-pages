import React, { useState } from "react";
import { useDeviceType } from "hooks/useDeviceType";
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
   const deviceType = useDeviceType();
   const [currentPageIdx, setCurrentPageIdx] = useState(0);
   const navBar =
      currentPageIdx === 0 ? null : (
         <NavigationBar
            deviceType={deviceType}
            sections={navigationSections}
            darkTheme={darkBgIndices.includes(currentPageIdx)}
            moveTo={fullPage?.moveTo}
            currentPageIdx={currentPageIdx}
         />
      );
   return (
      <div id="custom-wrap">
         {navBar}
         <ReactFullpage
            //fullpage options
            // licenseKey={"YOUR_KEY_HERE"}
            navigationTooltips={[]}
            scrollBar={false}
            scrollingSpeed={900}
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
                                    navBar,
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
      </div>
   );
};

FullPageCustomWrapper.propTypes = {
   slidesComponentList: PropTypes.array.isRequired,
   darkBgIndices: PropTypes.array.isRequired,
   navigationSections: PropTypes.array.isRequired,
};
