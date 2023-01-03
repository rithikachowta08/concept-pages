import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";
import React from "react";

import dynamic from "next/dynamic";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";
import Slide13 from "./slides/Slide13";
import Slide14 from "./slides/Slide14";
import Slide15 from "./slides/Slide15";
import Slide16 from "./slides/Slide16";
import Slide17 from "./slides/Slide17";
import Slide18 from "./slides/Slide18";
import Slide19 from "./slides/Slide19";
import Slide20 from "./slides/Slide20";

// const Slide1 = dynamic(() => import("./slides/Slide1"));
// const Slide2 = dynamic(() => import("./slides/Slide2"), { ssr: false });
// const Slide4 = dynamic(() => import("./slides/Slide4"), { ssr: false });
// const Slide5 = dynamic(() => import("./slides/Slide5"), { ssr: false });
// const Slide6 = dynamic(() => import("./slides/Slide6"), { ssr: false });
// const Slide7 = dynamic(() => import("./slides/Slide7"), { ssr: false });
// const Slide8 = dynamic(() => import("./slides/Slide8"), { ssr: false });
// const Slide9 = dynamic(() => import("./slides/Slide9"), { ssr: false });
// const Slide10 = dynamic(() => import("./slides/Slide10"), { ssr: false });
// const Slide11 = dynamic(() => import("./slides/Slide11"), { ssr: false });
// const Slide12 = dynamic(() => import("./slides/Slide12"), { ssr: false });
// const Slide13 = dynamic(() => import("./slides/Slide13"), { ssr: false });
// const Slide14 = dynamic(() => import("./slides/Slide14"), { ssr: false });
// const Slide15 = dynamic(() => import("./slides/Slide15"), { ssr: false });
// const Slide16 = dynamic(() => import("./slides/Slide16"), { ssr: false });
// const Slide17 = dynamic(() => import("./slides/Slide17"), { ssr: false });
// const Slide18 = dynamic(() => import("./slides/Slide18"), { ssr: false });
// const Slide19 = dynamic(() => import("./slides/Slide19"), { ssr: false });
// const Slide20 = dynamic(() => import("./slides/Slide20"), { ssr: false });

const AreaOfATriangle = () => {
   const SlideArray = [
      <Slide1 key={0} />,
      <Slide2 key={1} />,
      <Slide4 key={3} />,
      <Slide5 key={4} />,
      <Slide6 key={5} />,
      <Slide7 key={6} />,
      <Slide8 key={7} />,
      <Slide9 key={8} />,
      <Slide10 key={9} />,
      <Slide11 key={10} />,
      <Slide12 key={11} />,
      <Slide13 key={12} />,
      <Slide14 key={13} />,
      <Slide15 key={14} />,
      <Slide16 key={15} />,
      <Slide17 key={16} />,
      <Slide18 key={17} />,
      <Slide19 key={18} />,
      <Slide20 key={19} />,
   ];

   const navigationSections = [
      { title: "Definition", slides: [1] },
      { title: "General Formula", slides: [2, 3, 4, 5] },
      { title: "Heron's Formula", slides: [7] },
      {
         title: "Area of different types of triangle",
         slides: [8, 9, 10, 11, 12, 13, 14, 15],
      },
      {
         title: "Area of a triangle given two sides and the included angle",
         slides: [17, 18],
      },
   ];

   // const darkBgIndices = [0, 3, 5, 8, 9, 17];
   const darkBgIndices = [0, 2, 4, 7, 8, 17];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

AreaOfATriangle.title =
   "Area of Triangle: Definition, Formula, Examples - BYJU'S";
AreaOfATriangle.meta =
   "Enhance your understanding of the area of triangle with BYJU'S interactive activities. Explore the definition, formula, and examples of this important mathematical concept.";

export default AreaOfATriangle;
