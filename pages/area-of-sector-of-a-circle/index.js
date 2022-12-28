import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";

import Slide1 from "./slides/Slide1";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";

// const Slide2 = dynamic(() => import("./slides/Slide2"), { ssr: false });
// const Slide3 = dynamic(() => import("./slides/Slide3"), { ssr: false });
// const Slide4 = dynamic(() => import("./slides/Slide4"), { ssr: false });

const AreaOfSectorOfCircle = () => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      <Slide6 key={5} />,
      <Slide7 key={6} />,
      <Slide8 key={7} />,
      <Slide9 key={8} />,
      <Slide10 key={9} />,
      <Slide11 key={10} />,
      <Slide12 key={11} />,
   ];
   const navigationSections = [
      { title: "What is a sector of a circle?", slides: [] },
      { title: "Area of a sector of a circle", slides: [] },
      { title: "General formula", slides: [] },
      {
         title: "Area of a sector using the length of an arc",
         slides: [],
      },
   ];

   const darkBgIndices = [0, 3, 4];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

AreaOfSectorOfCircle.title =
   "Area of Sector of a Circle: Definition, Formula, Examples - BYJU'S";
AreaOfSectorOfCircle.meta =
   "Gain a deep understanding of area of sector of a circle with BYJU'S. Explore the definition, formula, and examples of this concept and use our interactive activities to master it.";

export default AreaOfSectorOfCircle;
