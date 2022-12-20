import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";
import React from "react";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";

const AreaOfCircle = () => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide3 key={2} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      <Slide6 key={5} />,
      <Slide7 key={6} />,
   ];
   const navigationSections = [
      {
         title: "What is the surface area of a rectangular prism?",
         slides: [3],
      },
      { title: "Total surface area", slides: [4] },
      { title: "Lateral surface area", slides: [5] },
   ];

   const darkBgIndices = [0, 2, 3, 4, 5];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

export default AreaOfCircle;
