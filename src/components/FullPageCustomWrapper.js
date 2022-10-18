import styled from "styled-components/macro";
import ReactFullpage from "@fullpage/react-fullpage";
import DownArrowIcon from "assets/DownArrowIcon";
import PropTypes from "prop-types";
import "./FullPageCustomWrapperStyles.scss";

const PageWrap = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const FullPageCustomWrapper = ({ slidesComponentList, slidesNamesList }) => {
  return (
    <ReactFullpage
      //fullpage options
      // licenseKey={"YOUR_KEY_HERE"}
      navigation
      navigationTooltips={slidesNamesList}
      navigationPosition={"left"}
      scrollingSpeed={2000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <>
            <ReactFullpage.Wrapper>
              {slidesComponentList.map((itm, idx) => (
                <div
                  className="section"
                  key={idx}>
                  <PageWrap>{itm}</PageWrap>
                  <div
                    onClick={() => fullpageApi.moveSectionDown()}
                    style={{ cursor: "pointer" }}>
                    <DownArrowIcon
                      color={idx ? "#333333" : "#ffffff"}
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
  );
};

FullPageCustomWrapper.propTypes = {
  slidesComponentList: PropTypes.array.isRequired,
  slidesNamesList: PropTypes.array.isRequired
};
