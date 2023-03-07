import dynamic from "next/dynamic";
import React, { useState } from "react";
import { SLIDE_TYPES } from "utils/constants";
const FullPageCustomWrapper = dynamic(() =>
   import("components/full-page-wrapper/FullPageCustomWrapper").then(
      (mod) => mod.FullPageCustomWrapper
   )
);
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
const PageLastSlide = dynamic(() => import("components/slides/PageLastSlide"));

const RelationshipBetweenDiameterAndCircumference = () => {
   const SlideArray = [
      <Slide1 key={0} type={SLIDE_TYPES.TITLE_SLIDE} />,
      <Slide2 key={1} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide3 key={2} type={SLIDE_TYPES.MULTIPLE_DIAGRAM} />,
      <Slide4 key={3} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide5 key={4} type={SLIDE_TYPES.VIDEO_ONLY} />,
      <Slide6 key={5} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide7 key={6} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide8 key={7} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide9 key={8} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      <Slide10 key={9} type={SLIDE_TYPES.APPLET_ONLY} />,
      <Slide11 key={10} type={SLIDE_TYPES.TEXT_AND_DIAGRAM} />,
      // <Slide12 key={11} />,
      <PageLastSlide
         type={SLIDE_TYPES.CONCLUSION}
         key={11}
         currentPageTitle={"Surface Area of Pyramids"}
         nextPageTitle="Volume of Pyramids"
         nextPageLink="/us/math/study/concept/volume-of-pyramids"
      />,
   ];

   const navigationSections = [
      { title: "What is the surface area of a pyramid?", slides: [1, 2, 3, 4] },
      { title: "Lateral surface area", slides: [6, 7] },
      { title: "Total surface area", slides: [8] },
   ];

   const darkBgIndices = [0, 4, 6, 8, 11];
   return (
      <FullPageCustomWrapper
         slidesComponentList={SlideArray}
         navigationSections={navigationSections}
         darkBgIndices={darkBgIndices}
      />
   );
};

RelationshipBetweenDiameterAndCircumference.title =
   "Surface Area of Pyramids: Definition, Formula, Examples - BYJU'S";
RelationshipBetweenDiameterAndCircumference.meta =
   "Learn about the surface area of pyramids, including its definition, formula, and examples. Master this important concept with BYJU'S interactive activities.";

export default RelationshipBetweenDiameterAndCircumference;
