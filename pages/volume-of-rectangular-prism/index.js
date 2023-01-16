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
const Slide11 = dynamic(() => import("./slides/Slide11"));

const VolumeOfRectangularPrism = () => {
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
      <PageLastSlide
         key={10}
         currentPageTitle={"Volume of a Rectangular Prism"}
         nextPageTitle="Relationship between Diameter and Circumference"
         nextPageLink="/us/math/study/relationship-between-diameter-and-circumference"
      />,
   ];
   const navigationSections = [
      { title: "What is a rectangular prism?", slides: [1] },
      { title: "Volume by counting the unit cubes", slides: [2, 3, 4] },
      { title: "General Formula", slides: [5, 6] },
      {
         title: "Types of rectangular prisms",
         slides: [7, 8, 9, 10],
      },
   ];

   const darkBgIndices = [0, 2];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

VolumeOfRectangularPrism.title =
   "Area of Circle: Definition, Formula, Examples - BYJU'S";
VolumeOfRectangularPrism.meta =
   "Learn about the area of circle, including its definition, formula, and examples. Master this important concept with BYJU'S interactive activities.";

export default VolumeOfRectangularPrism;
