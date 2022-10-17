import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import ReactFullpage from "@fullpage/react-fullpage";

export const Triangles = () => {
  return (
    // <div>
    //   Triangles concept page
    //   <Slide1 />
    //   <Slide2 />
    // </div>
    <ReactFullpage
      //fullpage options
      // licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Slide1 />
              <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
            </div>
            <div className="section">
              <Slide2 />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
