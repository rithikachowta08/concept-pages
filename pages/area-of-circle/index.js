import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";
import React from "react";

import Slide1 from "./slides/Slide1";
import Slide10 from "./slides/Slide10";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";

const AreaOfCircle = () => {
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
   ];
   const navigationSections = [
      { title: "What is the area of a circle?", slides: [1] },
      { title: "General Formula", slides: [2, 3, 4] },
      { title: "Area of a circle using the diameter", slides: [5, 6] },
      {
         title: "Area of a circle using the circumference",
         slides: [7, 8, 9],
      },
   ];

   const darkBgIndices = [0, 2, 5, 7];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

export default AreaOfCircle;
