import React, { useState } from "react";
import styled from "styled-components";
import ReactFullpage, { fullpage_api, state } from "@fullpage/react-fullpage";
import DownArrowIcon from "../DownArrowIcon.js";
import NavigationBar from "./NavigationBar";
import PropTypes from "prop-types";
import { colors } from "../../utils/colors";
import "./FullPageCustomWrapperStyles.module.scss";

const PageWrap = styled.div`
  height: 100vh;
  width: 100vw;
`;

let fullPage;

export const FullPageCustomWrapper = ({
  slidesComponentList,
  darkBgIndices,
  navigationSections
}) => {
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  return (
    <>
      <ReactFullpage
        //fullpage options
        // licenseKey={"YOUR_KEY_HERE"}
        navigationTooltips={[]}
        scrollingSpeed={900}
        fitToSectionDelay={900}
        afterLoad={() => {
          setCurrentPageIdx(fullPage?.getActiveSection().index() || 0);
        }}
        render={({ state, fullpageApi }) => {
          const moveToSection = fullpageApi?.moveTo;
          fullPage = fullpageApi;
          return (
            <>
              <ReactFullpage.Wrapper>
                {slidesComponentList.map((itm, idx) => (
                  <div
                    className="section"
                    key={idx}>
                    {/* No navigation bar on title page */}
                    {idx === 0 ? null : (
                      <NavigationBar
                        sections={navigationSections}
                        darkTheme={darkBgIndices.includes(idx)}
                        moveTo={moveToSection}
                        currentPageIdx={currentPageIdx}
                      />
                    )}
                    <PageWrap>{React.cloneElement(itm, { moveToSection })}</PageWrap>
                    {idx === slidesComponentList.length - 1 ? null : (
                      <div
                        onClick={fullpageApi?.moveSectionDown}
                        style={{ cursor: "pointer" }}>
                        <DownArrowIcon
                          color={darkBgIndices.includes(idx) ? colors.WHITE : colors.DARK_GREY}
                          className="down-arrow-icon"
                        />
                      </div>
                    )}
                  </div>
                ))}
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
  navigationSections: PropTypes.array.isRequired
};
