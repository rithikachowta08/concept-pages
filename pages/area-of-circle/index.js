import dynamic from "next/dynamic";

import { FullPageCustomWrapper } from "components/full-page-wrapper/FullPageCustomWrapper";
import PageLastSlide from "components/slides/PageLastSlide";

const Slide1 = dynamic(() => import("./slides/Slide1"));
const Slide2 = dynamic(() => import("./slides/Slide2"));
const Slide3 = dynamic(() => import("./slides/Slide3"));
const Slide4 = dynamic(() => import("./slides/Slide4"));
const Slide5 = dynamic(() => import("./slides/Slide5"));
const Slide6 = dynamic(() => import("./slides/Slide6"));
const Slide7 = dynamic(() => import("./slides/Slide7"));
const Slide8 = dynamic(() => import("./slides/Slide8"));
const Slide9 = dynamic(() => import("./slides/Slide9"));
const Slide10 = dynamic(() => import("./slides/Slide10"));

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
      <PageLastSlide
         key={10}
         currentPageTitle={"Area of a Circle"}
         nextPageTitle="Surface area of a Right Triangular Prism"
         nextPageLink="/us/math/study/surface-area-of-right-triangular-prism"
      />,
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

   const darkBgIndices = [0, 2, 5, 7, 9, 10, 11];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

AreaOfCircle.title = "Area of Circle: Definition, Formula, Examples - BYJU'S";
AreaOfCircle.meta =
   "Learn about the area of circle, including its definition, formula, and examples. Master this important concept with BYJU'S interactive activities.";

export default AreaOfCircle;
