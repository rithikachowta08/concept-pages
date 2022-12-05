import React, { useState } from "react";
import styled from "styled-components/macro";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import ReactFullpage, { fullpage_api, state } from "@fullpage/react-fullpage";
import DownArrowIcon from "components/DownArrowIcon.js";
import NavigationBar from "./NavigationBar";
import PropTypes from "prop-types";
import { colors } from "utils/colors";
import "./FullPageCustomWrapperStyles.scss";

const PageWrap = styled.div`
  height: 100%;
  width: 100%;
`;

let fullPage;

export const FullPageCustomWrapper = ({
  slidesComponentList,
  darkBgIndices,
  navigationSections
}) => {
  const deviceType = useDeviceType();
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  return (
    <>
      <ReactFullpage
        //fullpage options
        // licenseKey={"YOUR_KEY_HERE"}
        navigationTooltips={[]}
        scrollBar={false}
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
                    {idx ? (
                      <NavigationBar
                        deviceType={deviceType}
                        sections={navigationSections}
                        darkTheme={darkBgIndices.includes(idx)}
                        moveTo={moveToSection}
                        currentPageIdx={currentPageIdx}
                      />
                    ) : null}
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
