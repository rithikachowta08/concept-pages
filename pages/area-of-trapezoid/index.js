import dynamic from "next/dynamic";
import React, { useState } from "react";
import Script from "next/script";
import { SLIDE_TYPES } from "utils/constants";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));
const Slide1 = dynamic(() => import("./Slide1"));
const Slide2 = dynamic(() => import("./Slide2"));
const Slide3 = dynamic(() => import("./Slide3"));
const Slide4 = dynamic(() => import("./Slide4"));
const Slide5 = dynamic(() => import("./Slide5"));
const Slide6 = dynamic(() => import("./Slide6"));
const Slide7 = dynamic(() => import("./Slide7"));
const Slide8 = dynamic(() => import("./Slide8"));
const Slide9 = dynamic(() => import("./Slide9"));
const Slide10 = dynamic(() => import("./Slide10"));
const Slide11 = dynamic(() => import("./Slide11"));
// const Slide12 = dynamic(() => import("./Slide12"));

const AreaOfTrapezoid = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_APPLET} />,
      <Slide5 key={4} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={9} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      // <Slide12 key={11} />,
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={11}
         currentPageTitle={"Area of Trapezoid"}
         nextPageTitle="Volume of a Triangular prism"
         nextPageLink="/us/math/study/concept/volume-of-triangular-prism"
      />,
   ];

   const navigationSections = [
      { title: "What is the area of a trapezoid?", slides: [1] },
      { title: "General formula", slides: [2] },
      { title: "Derivation of the formula", slides: [3, 4, 5] },
      { title: "Area of a trapezoid with 4 given sides", slides: [6] },
   ];

   const darkBgIndices = [0, 2, 3, 4, 6, 11];
   return (
      <>
         <Script
            src="https://geogebra.org/apps/deployggb.js"
            strategy="beforeInteractive"
         ></Script>
         <FullPageCustomWrapper
            slidesComponentList={SlideArray}
            navigationSections={navigationSections}
            darkBgIndices={darkBgIndices}
         />
      </>
   );
};

AreaOfTrapezoid.title =
   "Area of Trapezoid: Definition, Formula, Examples - BYJU'S";
AreaOfTrapezoid.meta =
   "Gain a thorough understanding of the area of trapezoid with BYJU'S, including its definition, formula, and examples. Enhance your skills with interactive activities.";

export default AreaOfTrapezoid;
