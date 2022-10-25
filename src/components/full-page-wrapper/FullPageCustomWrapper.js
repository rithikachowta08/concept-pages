import React from "react";
import styled from "styled-components/macro";
import ReactFullpage, { fullpage_api, state } from "@fullpage/react-fullpage";
import DownArrowIcon from "components/DownArrowIcon.js";
import PropTypes from "prop-types";
import { colors } from "utils/colors";
import "./FullPageCustomWrapperStyles.scss";

const PageWrap = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const FullPageCustomWrapper = ({ slidesComponentList, slidesNamesList }) => {
  function onSlideChange(section, origin, destination, direction, trigger) {
    console.log(section, origin, destination, direction, trigger);
  }

  const darkBg = [0, 3, 8];

  return (
    <>
      <ReactFullpage
        //fullpage options
        // licenseKey={"YOUR_KEY_HERE"}
        navigation
        navigationTooltips={slidesNamesList}
        navigationPosition={"left"}
        slidesNavigation={true}
        // onSlideLeave={onSlideChange}
        scrollingSpeed={900} /* Options here */
        fitToSectionDelay={900}
        render={({ state, fullpageApi }) => {
          const moveToSection = fullpageApi?.moveTo;
          return (
            <>
              <ReactFullpage.Wrapper>
                {slidesComponentList.map((itm, idx) => (
                  <div
                    className="section"
                    key={idx}>
                    <PageWrap>{React.cloneElement(itm, { moveToSection })}</PageWrap>
                    <div
                      onClick={() => fullpageApi.moveSectionDown()}
                      style={{ cursor: "pointer" }}>
                      <DownArrowIcon
                        color={darkBg.includes(idx) ? colors.WHITE : colors.DARK_GREY}
                        className="down-arrow-icon"
                      />
                    </div>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
      {/* <div
        onClick={() => window.fullpage_api.moveSectionDown()}
        style={{ cursor: "pointer" }}>
        <DownArrowIcon
          // color={
          //   window?.fullpage_api?.getActiveSection().anchor == slidesNamesList[0]
          //     ? "#ffffff"
          //     : "#333333"
          // }
          color={"grey"}
          className="down-arrow-icon"
        />
      </div> */}
    </>
  );
};

FullPageCustomWrapper.propTypes = {
  slidesComponentList: PropTypes.array.isRequired,
  slidesNamesList: PropTypes.array.isRequired
};
