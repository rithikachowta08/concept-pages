import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper.js";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide9 from "./Slide9";
// import Slide10 from "./Slide10";
// import Slide11 from "./Slide11";
// import Slide12 from "./Slide12";
// import Slide13 from "./Slide13";

export const AreaOfRectangle = () => {
  const SlideArray = [
    <Slide1 key={0} />,
    <Slide2 key={1} />,
    <Slide3 key={2} />,
    <Slide4 key={3} />,
    <Slide5 key={4} />,
    <Slide6 key={5} />,
    <Slide7 key={6} />,
    <Slide8 key={7} />,
    <Slide9 key={8} />
    // <Slide10 key={9} />,
    // <Slide11 key={10} />,
    // <Slide12 key={11} />,
    // <Slide13 key={12} />
  ];

  const navigationSections = [
    { title: "What is area of rectangle?", slides: [1] },
    { title: "Area by counting unit squares", slides: [2] },
    { title: "Formula", slides: [3, 4, 5] },
    { title: "Area using diagonal", slides: [6, 7, 8, 9] }
  ];

  const darkBgIndices = [0, 3, 5];
  return (
    <FullPageCustomWrapper
      slidesComponentList={SlideArray}
      navigationSections={navigationSections}
      darkBgIndices={darkBgIndices}
    />
  );
};
