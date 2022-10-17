import styled from "styled-components/macro";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import ReactFullpage from "@fullpage/react-fullpage";
import DownArrowIcon from "assets/DownArrowIcon";

const PageWrap = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Triangles = () => {
  const SlideArray = [
    <Slide1 key={0} />,
    <Slide1 key={1} />,
    <Slide1 key={2} />,
    <Slide2 key={3} />
  ];

  return (
    <ReactFullpage
      //fullpage options
      // licenseKey={"YOUR_KEY_HERE"}
      navigation
      navigationTooltips={["Slide1", "Slide2", "Slide3", "Slide4"]}
      navigationPosition={"left"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <>
            <ReactFullpage.Wrapper>
              {SlideArray.map((itm, idx) => (
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
